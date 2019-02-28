pragma solidity ^0.5.0;

contract ChoreChain {
    mapping(uint => House) public houses; //maps house ID to a house contract
    uint[] public houseList; //list of house IDs
    mapping(address => User) public users; //maps user ID to the user
    uint public totalRatings;
    uint public totalUsers;

    constructor() public{
        totalRatings = 0;
        totalUsers = 0;
    }

    struct HouseUserPairing {
        address userID;
        uint houseID;
    }

    struct User {
        bool doesExist;
        uint summedRating; //sum of all ratings and each rating is (pointsEarned * peopleInHouse / house'sTotalPoints) * (timeSpentInThisHouse)
        //actual rating is summedRating / timeSpentInHouses
        uint currentHouseID;
        uint[] houseHistory;
        bool firstRating;
        uint timeSpentInHouses;
    }

    struct House {
        bool doesExist;
        bool isVerified;
        bool isActive;
        uint startTime;
        address[] housematesList; //list of housemate IDs
        mapping(address => bool) housematesAgreed; //maps housemate to whether they agreed to join the house
        mapping(address => bool) housematesExists;
        uint agreedCount; //number of people who agreed to this house
        uint terminateVoteCount;
        uint endTime;
        mapping(address => bool) housematesTerminate; //maps housemate to their vote on whether they should terminate the house
        mapping(address => bool) housemateHasAssessed; //determines whether or not the house has affected the housemate's rating
        uint totalPoints;
        mapping(address => uint) housematesPoints; //maps user's ID to the number of points they own
        Scheduler schedule;
        mapping(uint => bool) choreVotedOn;
    }

    function addUser() public{
        require(users[msg.sender].doesExist == false);

        User memory temp;
        temp.doesExist = true;
        temp.summedRating = 0;
        temp.timeSpentInHouses = 0;
        temp.firstRating = true;
        users[msg.sender] = temp;
    }

    function addHousePart1(address[] memory hmList, uint houseID) public{
        require(houses[houseID].doesExist == false);
        require(houseID != 0);

        House memory temp;
        temp.isVerified = false;
        temp.doesExist = true;
        temp.isActive = true;
        temp.startTime = 0;
        temp.housematesList = hmList;
        temp.agreedCount = 0;
        houses[houseID] = temp;
    }

    function addHousePart2(uint houseID) public {
        require(houses[houseID].doesExist);

        for(uint i = 0; i < houses[houseID].housematesList.length; i++) {
            houses[houseID].housematesExists[houses[houseID].housematesList[i]] = true;
        }
    }

    function addHouse(address[] memory hmList, uint houseID) public {
        addHousePart1(hmList, houseID);
        addHousePart2(houseID);
    }

    function getHouseInfo(uint houseID) public view returns(bool, bool, bool, address) {
        return(houses[houseID].doesExist, houses[houseID].housematesAgreed[houses[houseID].housematesList[1]], houses[houseID].housematesExists[houses[houseID].housematesList[1]], houses[houseID].housematesList[1]);
    }

    function agreeToHouse(uint houseID) public{ //verifies that the housemate consents to being in that house
        require(houses[houseID].housematesAgreed[msg.sender] == false);
        require(houses[houseID].doesExist);
        require(houses[houseID].housematesExists[msg.sender]);
        require(houses[users[msg.sender].currentHouseID].doesExist == false);

        houses[houseID].housematesAgreed[msg.sender] = true;
        houses[houseID].agreedCount += 1;
        users[msg.sender].currentHouseID = houseID;
        if (houses[houseID].agreedCount == houses[houseID].housematesList.length) {
            houses[houseID].isVerified = true;
            houses[houseID].startTime = now;
        }
    }

    function removeAgreeToHouse(uint houseID) public{
        require(houses[houseID].housematesAgreed[msg.sender] == true);
        require(houses[houseID].doesExist);
        require(houses[houseID].isVerified == false);
        require(houses[houseID].housematesExists[msg.sender]);
        require(users[msg.sender].currentHouseID == houseID);

        houses[houseID].housematesAgreed[msg.sender] = false;
        houses[houseID].agreedCount -= 1;
        users[msg.sender].currentHouseID = 0;
    }

    function terminateHouse(uint houseID) public{ //called when roommates no longer live in the house
        require(houses[houseID].isActive == false);
        require(houses[houseID].isVerified);
        require(houses[houseID].housematesExists[msg.sender]);
        require(houses[houseID].housematesTerminate[msg.sender] == false);

        houses[houseID].housematesTerminate[msg.sender] = true;
        houses[houseID].terminateVoteCount += 1;
        if(houses[houseID].terminateVoteCount == houses[houseID].housematesList.length) {
            houses[houseID].endTime = now;
            houses[houseID].isActive = false;
        }
    }

    function assessHouse(uint houseID) public{ //causes the house to affect the user's rating
        require(houses[houseID].isActive == false); //ensures the house has terminated
        require(houses[houseID].isVerified); //ensures the house was valid
        require(houses[houseID].housemateHasAssessed[msg.sender] == false); //ensures function only called once
        require(houses[houseID].totalPoints > 0); //avoids divide by 0 error

        houses[houseID].housemateHasAssessed[msg.sender] = true; //ensures function only called once
        users[msg.sender].currentHouseID = 0; //user no longer lives there
        uint usersOldRating = users[msg.sender].summedRating / users[msg.sender].timeSpentInHouses;
        users[msg.sender].summedRating += (houses[houseID].housematesPoints[msg.sender] * houses[houseID].housematesList.length
            / houses[houseID].totalPoints) * (houses[houseID].endTime - houses[houseID].startTime);
        users[msg.sender].timeSpentInHouses += (houses[houseID].endTime - houses[houseID].startTime);
        if (users[msg.sender].firstRating) {
            users[msg.sender].firstRating = false;
            totalUsers += 1;
            totalRatings += users[msg.sender].summedRating / users[msg.sender].timeSpentInHouses; //adds user's actual rating to the totalRatings
        }
        else { //replaces user's old rating with new rating
            totalRatings += users[msg.sender].summedRating / users[msg.sender].timeSpentInHouses - usersOldRating;
        }
        users[msg.sender].houseHistory.push(houseID);
    }

    function addSchedule(uint houseID, uint[] memory chores) public{
        require(houses[houseID].housematesExists[msg.sender]);

        houses[houseID].schedule = new Scheduler(chores, houses[houseID].housematesList);
    }

    function judgeChore(uint houseID, address housemate) public{
        for(uint i = 0; i < houses[houseID].schedule.getHousemateChoreList(housemate).length; i++) {
            if(houses[houseID].schedule.getChoreFromHM(housemate, i).getExpiration() <= now && houses[houseID].choreVotedOn[houses[houseID].schedule.getHousemateChoreList(housemate)[i]] == false) {
                if(houses[houseID].schedule.getChoreFromHM(housemate, i).getForVote() > houses[houseID].schedule.getChoreFromHM(housemate, i).getAgainstVote()) {
                    houses[houseID].choreVotedOn[houses[houseID].schedule.getHousemateChoreList(housemate)[i]] = true;
                    houses[houseID].totalPoints += houses[houseID].schedule.getChoreFromHM(housemate, i).getReward();
                    houses[houseID].housematesPoints[housemate] += houses[houseID].schedule.getChoreFromHM(housemate, i).getReward();
                }
            }
        }
    }
}

contract Scheduler{

    mapping(address => uint[]) weeklyassignments; //housemates to chores
    mapping(uint => Chore) choreLookup; //identify chore from number id
    mapping(address => HouseMate) housemateLookup; //identify housemate from string id

    address[] housemates;

    uint[] chores;

    Chore currentEvent;

    uint majority;

    struct HouseMate{

        string id;

        string pub_name;

        uint points;

    }

    constructor(uint[] memory c, address[] memory h) public {

        chores = c;

        housemates = h;

        majority = housemates.length / 2;

        assignChores(chores);
    }

    function assignChores(uint[] memory c) private {

        uint choresPerPerson = c.length / housemates.length;

        for(uint hM = 0; hM < housemates.length; hM++){

            uint[] memory choreList;

            uint start = hM * choresPerPerson;

            uint end = start + choresPerPerson;

            //case of number of chores and number of housemates not in perfect alignment

            if(hM == housemates.length -1){

                end = c.length;

            }

            for(uint i = start; i < end; i++){

                choreList[i] = c[i];

            }

            weeklyassignments[housemates[hM]] = choreList;

        }

    }

    function identifyHouseMate(address h) public view returns(string memory){

        return housemateLookup[h].pub_name;

    }

    function identifyChore(uint c) public view returns(string memory){

        return choreLookup[c].getDesc();

    }

    function getChore(uint c) public view returns (Chore) {
        return choreLookup[c];
    }

    function getChoreFromHM(address hm, uint i) public view returns (Chore) {
        return choreLookup[weeklyassignments[hm][i]];
    }

    function shuffle() public{

        address prev = housemates[0];

        for(uint i = 1; i < housemates.length; i++){

            address temp = housemates[i];

            housemates[i] = prev;

            prev = temp;

        }

        housemates[0] = prev;

        assignChores(chores);

    }

    function getHousemateChoreList(address hm) public view returns(uint[] memory){
        return weeklyassignments[hm];
    }

    function getHousemateChoreListLength(address hm) public view returns(uint) {
        return weeklyassignments[hm].length;
    }


}

contract Chore {
    mapping(address => bool[]) public signers; //maps housemate addresses to an array of 4 boolean values
    address[] public addressList; //array of all housemate addresses
    string public choreDescription;
    uint public reward; //points rewarded to assignedPerson for completing this chore
    uint public numberOfAgreed; //counts number of people agreeing that this chore is valid
    uint public numberOfCancelers; //counts number of people wishing to cancel the chore after the chore was deemed valid
    uint public forVoteCount;
    uint public againstVoteCount;
    uint public expiration;

    constructor(address[] memory s, string memory description, uint r, uint timelimit) public {
        addressList = s;
        for(uint i = 0; i < s.length; i++) {
            signers[s[i]] = [false, false, false, false]; //[hasAgreed, wantsToCancel, hasVotedFor, hasVotedAgainst]
        }
        reward = r;
        choreDescription = description;
        numberOfAgreed = 0;
        numberOfCancelers = 0;
        forVoteCount = 0;
        againstVoteCount = 0;
        expiration = now + timelimit;
    }

    function getDesc() public view returns(string memory) {
        return choreDescription;
    }

    //function lets the msg.sender agree the chore is valid and then counts their vote
    function agreeToCreateChore() public {
        require(signers[msg.sender][0] == false);

        signers[msg.sender][0] = true;
        numberOfAgreed += 1;
    }


    //If enoughAgreed is false, this function takes back the user's chore validity vote
    //Otherwise, this function lets the user vote to cancel the chore's validity
    function cancelChoreCreation() public {
        require(signers[msg.sender][0] == true);
        require(signers[msg.sender][1] == false);

        if (numberOfAgreed > addressList.length / 2) {
            signers[msg.sender][1] = true;
            numberOfCancelers += 1;
            //rechecks the numberOfCancelers in order to avoid race condition
            if (numberOfCancelers > numberOfAgreed / 2) {
                numberOfAgreed = 0;
                numberOfCancelers = 0;
                for(uint j = 0; j < addressList.length; j++) {
                    signers[addressList[j]] = [false, false, false, false];
                }
            }
        }
        else {
            signers[msg.sender] = [false, false, false, false];
            numberOfAgreed -= 1;
            //doesn't decrement numberOfAgreed in order to prevent users from decrementing it too many times
        }
    }

    //allows the user to vote if the assignedPerson has completed the chore or has not completed the chore
    function vote(bool against) public {
        require(numberOfAgreed > addressList.length / 2);

        if(against) {
            if (signers[msg.sender][2] == true) {
                signers[msg.sender][2] = false;
                forVoteCount -= 1;
            }
            signers[msg.sender][3] = true;
            againstVoteCount += 1;
        }
        else {
            if (signers[msg.sender][3] == true) {
                signers[msg.sender][3] = false;
                againstVoteCount -= 1;
            }
            signers[msg.sender][2] = true;
            forVoteCount += 1;
        }
    }

    //counts the number of people who voted the chore was completed and the number of people who voted it was not
    function getForVote() public view returns(uint){
        require(numberOfAgreed > addressList.length / 2);

        return forVoteCount;
    }

    function getAgainstVote() public view returns(uint){
        require(numberOfAgreed > addressList.length / 2);

        return againstVoteCount;
    }

    function getExpiration() public view returns(uint) {
        return expiration;
    }

    function getReward() public view returns(uint) {
        return reward;
    }
}
