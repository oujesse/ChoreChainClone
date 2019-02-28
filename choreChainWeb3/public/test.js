var Web3 = require('web3');

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // Set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
}

var pubad = '0x41a53F0b95F623Bd051c2c3BD22195288D026DA8';
var privkey = '0xb7c116156ebd67a0a1fc9febe9342e11a16670b7fd269de166fc7411c033db64';

web3.eth.defaultAccount = pubad;

var housemateAddresses = ['0x41a53F0b95F623Bd051c2c3BD22195288D026DA8', '0xb47f051717703ef8fad135b3f2b1aa6e0ef71055', '0x4b2e3e37e37edc61ac51c8f6fdf8b5033d3816d0']
var privKeys = ['0xb7c116156ebd67a0a1fc9febe9342e11a16670b7fd269de166fc7411c033db64', '0xb7c126156ebd67a0a1fc9febe9342e11a16670b7fd269de166fc7411c033db64', '0xb7d126156ebd67a0a1fc9febe9342e11a16670b7fd269de166fc7411c033db64']
var choreChain = new web3.eth.Contract([
    {
        "constant": false,
        "inputs": [
            {
                "name": "hmList",
                "type": "address[]"
            },
            {
                "name": "houseID",
                "type": "uint256"
            }
        ],
        "name": "addHouse",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "houseID",
                "type": "uint256"
            }
        ],
        "name": "agreeToHouse",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "houseID",
                "type": "uint256"
            },
            {
                "name": "c",
                "type": "address"
            }
        ],
        "name": "judgeChore",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalRatings",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "houseID",
                "type": "uint256"
            }
        ],
        "name": "removeAgreeToHouse",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "addUser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "hmList",
                "type": "address[]"
            },
            {
                "name": "houseID",
                "type": "uint256"
            }
        ],
        "name": "addHousePart1",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "users",
        "outputs": [
            {
                "name": "doesExist",
                "type": "bool"
            },
            {
                "name": "summedRating",
                "type": "uint256"
            },
            {
                "name": "currentHouseID",
                "type": "uint256"
            },
            {
                "name": "firstRating",
                "type": "bool"
            },
            {
                "name": "timeSpentInHouses",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "houseID",
                "type": "uint256"
            }
        ],
        "name": "getHouseInfo",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "houses",
        "outputs": [
            {
                "name": "doesExist",
                "type": "bool"
            },
            {
                "name": "isVerified",
                "type": "bool"
            },
            {
                "name": "isActive",
                "type": "bool"
            },
            {
                "name": "startTime",
                "type": "uint256"
            },
            {
                "name": "agreedCount",
                "type": "uint256"
            },
            {
                "name": "terminateVoteCount",
                "type": "uint256"
            },
            {
                "name": "endTime",
                "type": "uint256"
            },
            {
                "name": "totalPoints",
                "type": "uint256"
            },
            {
                "name": "schedule",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalUsers",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "houseList",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "houseID",
                "type": "uint256"
            }
        ],
        "name": "assessHouse",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "houseID",
                "type": "uint256"
            }
        ],
        "name": "addHousePart2",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "houseID",
                "type": "uint256"
            }
        ],
        "name": "terminateHouse",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
]);
var chore = new web3.eth.Contract([
    {
        "constant": true,
        "inputs": [],
        "name": "reward",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "assignedPerson",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getReward",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "against",
                "type": "bool"
            }
        ],
        "name": "vote",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getDesc",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getAgainstVote",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getAssignedPerson",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "numberOfCancelers",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "numberOfAgreed",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "againstVoteCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getForVote",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "addressList",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "cancelChoreCreation",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "signers",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "choreDescription",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "forVoteCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "agreeToCreateChore",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "s",
                "type": "address[]"
            },
            {
                "name": "description",
                "type": "string"
            },
            {
                "name": "r",
                "type": "uint256"
            },
            {
                "name": "a",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
]);
var scheduler = new web3.eth.Contract([
    {
        "constant": true,
        "inputs": [
            {
                "name": "c",
                "type": "uint256"
            }
        ],
        "name": "getChore",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "hm",
                "type": "address"
            },
            {
                "name": "i",
                "type": "uint256"
            }
        ],
        "name": "getChoreFromHM",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "shuffle",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "housemates",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "chores",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "hm",
                "type": "address"
            }
        ],
        "name": "getHousemateChoreList",
        "outputs": [
            {
                "name": "",
                "type": "uint256[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "c",
                "type": "uint256"
            }
        ],
        "name": "identifyChore",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "h",
                "type": "address"
            }
        ],
        "name": "identifyHouseMate",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "hm",
                "type": "address"
            }
        ],
        "name": "getHousemateChoreListLength",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "majority",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "c",
                "type": "address[]"
            },
            {
                "name": "h",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
]);

function choreChainConstruct(msgSender) { //constructs ChoreChain contract and returns the instance's address
    return choreChain.deploy({
        data: "608060405234801561001057600080fd5b5060006003819055506000600481905550612259806100306000396000f3fe6080604052600436106100d5576000357c010000000000000000000000000000000000000000000000000000000090048063011b8d5d146100da5780631dbf1a4b146101a957806323f99022146101e45780632826f6a51461023f578063431c78fd1461026a578063455c928c146102a557806377597026146102bc578063a87430ba1461038b578063ad50f56d14610414578063aeda852f146104b0578063bff1f9e11461056f578063c376d0e01461059a578063de3f6aa6146105e9578063f925e13814610624578063fef7fb3c1461065f575b600080fd5b3480156100e657600080fd5b506101a7600480360360408110156100fd57600080fd5b810190808035906020019064010000000081111561011a57600080fd5b82018360208201111561012c57600080fd5b8035906020019184602083028401116401000000008311171561014e57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919050505061069a565b005b3480156101b557600080fd5b506101e2600480360360208110156101cc57600080fd5b81019080803590602001909291905050506106b1565b005b3480156101f057600080fd5b5061023d6004803603604081101561020757600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061098a565b005b34801561024b57600080fd5b50610254610e08565b6040518082815260200191505060405180910390f35b34801561027657600080fd5b506102a36004803603602081101561028d57600080fd5b8101908080359060200190929190505050610e0e565b005b3480156102b157600080fd5b506102ba611078565b005b3480156102c857600080fd5b50610389600480360360408110156102df57600080fd5b81019080803590602001906401000000008111156102fc57600080fd5b82018360208201111561030e57600080fd5b8035906020019184602083028401116401000000008311171561033057600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506111db565b005b34801561039757600080fd5b506103da600480360360208110156103ae57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061138d565b6040518086151515158152602001858152602001848152602001831515151581526020018281526020019550505050505060405180910390f35b34801561042057600080fd5b5061044d6004803603602081101561043757600080fd5b81019080803590602001909291905050506113dd565b604051808515151515815260200184151515158152602001831515151581526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200194505050505060405180910390f35b3480156104bc57600080fd5b506104e9600480360360208110156104d357600080fd5b81019080803590602001909291905050506115bd565b604051808a15151515815260200189151515158152602001881515151581526020018781526020018681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001995050505050505050505060405180910390f35b34801561057b57600080fd5b50610584611652565b6040518082815260200191505060405180910390f35b3480156105a657600080fd5b506105d3600480360360208110156105bd57600080fd5b8101908080359060200190929190505050611658565b6040518082815260200191505060405180910390f35b3480156105f557600080fd5b506106226004803603602081101561060c57600080fd5b810190808035906020019092919050505061167b565b005b34801561063057600080fd5b5061065d6004803603602081101561064757600080fd5b8101908080359060200190929190505050611d0c565b005b34801561066b57600080fd5b506106986004803603602081101561068257600080fd5b8101908080359060200190929190505050611e28565b005b6106a482826111db565b6106ad81611d0c565b5050565b6000151560008083815260200190815260200160002060030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514151561072357600080fd5b60008082815260200190815260200160002060000160009054906101000a900460ff16151561075157600080fd5b60008082815260200190815260200160002060040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615156107bc57600080fd5b60001515600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154815260200190815260200160002060000160009054906101000a900460ff16151514151561083357600080fd5b600160008083815260200190815260200160002060030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060016000808381526020019081526020016000206005016000828254019250508190555080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055506000808281526020019081526020016000206002018054905060008083815260200190815260200160002060050154141561098757600160008083815260200190815260200160002060000160016101000a81548160ff02191690831515021790555042600080838152602001908152602001600020600101819055505b50565b8073ffffffffffffffffffffffffffffffffffffffff166365ae4da36040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040160206040518083038186803b1580156109ec57600080fd5b505afa158015610a00573d6000803e3d6000fd5b505050506040513d6020811015610a1657600080fd5b81019080805190602001909291905050508173ffffffffffffffffffffffffffffffffffffffff16638a1e082a6040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040160206040518083038186803b158015610a8957600080fd5b505afa158015610a9d573d6000803e3d6000fd5b505050506040513d6020811015610ab357600080fd5b8101908080519060200190929190505050111515610ad057600080fd5b60001515600080848152602001908152602001600020600d0160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515141515610b4257600080fd5b6001600080848152602001908152602001600020600d0160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff16633d18b9126040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040160206040518083038186803b158015610c0f57600080fd5b505afa158015610c23573d6000803e3d6000fd5b505050506040513d6020811015610c3957600080fd5b8101908080519060200190929190505050600080848152602001908152602001600020600a01600082825401925050819055508073ffffffffffffffffffffffffffffffffffffffff16633d18b9126040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040160206040518083038186803b158015610cce57600080fd5b505afa158015610ce2573d6000803e3d6000fd5b505050506040513d6020811015610cf857600080fd5b8101908080519060200190929190505050600080848152602001908152602001600020600b0160008373ffffffffffffffffffffffffffffffffffffffff16636af950826040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040160206040518083038186803b158015610d8257600080fd5b505afa158015610d96573d6000803e3d6000fd5b505050506040513d6020811015610dac57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505050565b60035481565b6001151560008083815260200190815260200160002060030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515141515610e8057600080fd5b60008082815260200190815260200160002060000160009054906101000a900460ff161515610eae57600080fd5b6000151560008083815260200190815260200160002060000160019054906101000a900460ff161515141515610ee357600080fd5b60008082815260200190815260200160002060040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515610f4e57600080fd5b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154141515610f9e57600080fd5b600080600083815260200190815260200160002060030160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600080838152602001908152602001600020600501600082825403925050819055506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555050565b60001515600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1615151415156110da57600080fd5b6110e2612043565b6001816000019015159081151581525050600081602001818152505060008160a0018181525050600181608001901515908115158152505080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff021916908315150217905550602082015181600101556040820151816002015560608201518160030190805190602001906111aa92919061207e565b5060808201518160040160006101000a81548160ff02191690831515021790555060a0820151816005015590505050565b6000151560008083815260200190815260200160002060000160009054906101000a900460ff16151514151561121057600080fd5b6000811415151561122057600080fd5b6112286120cb565b600081602001901515908115158152505060018160000190151590811515815250506001816040019015159081151581525050600081606001818152505082816080018190525060008160a00181815250508060008084815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff02191690831515021790555060408201518160000160026101000a81548160ff02191690831515021790555060608201518160010155608082015181600201908051906020019061131392919061213b565b5060a0820151816005015560c0820151816006015560e0820151816007015561010082015181600a015561012082015181600c0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050505050565b60026020528060005260406000206000915090508060000160009054906101000a900460ff16908060010154908060020154908060040160009054906101000a900460ff16908060050154905085565b60008060008060008086815260200190815260200160002060000160009054906101000a900460ff166000808781526020019081526020016000206003016000806000898152602001908152602001600020600201600181548110151561144057fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1660008088815260200190815260200160002060040160008060008a815260200190815260200160002060020160018154811015156114ed57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16600080898152602001908152602001600020600201600181548110151561158357fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1693509350935093509193509193565b60006020528060005260406000206000915090508060000160009054906101000a900460ff16908060000160019054906101000a900460ff16908060000160029054906101000a900460ff169080600101549080600501549080600601549080600701549080600a01549080600c0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905089565b60045481565b60018181548110151561166757fe5b906000526020600020016000915090505481565b6000151560008083815260200190815260200160002060000160029054906101000a900460ff1615151415156116b057600080fd5b60008082815260200190815260200160002060000160019054906101000a900460ff1615156116de57600080fd5b6000151560008083815260200190815260200160002060090160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514151561175057600080fd5b6000806000838152602001908152602001600020600a015411151561177457600080fd5b600160008083815260200190815260200160002060090160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020181905550600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050154141561187c576000905061190f565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050154600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015481151561190b57fe5b0490505b600080838152602001908152602001600020600101546000808481526020019081526020016000206007015403600080848152602001908152602001600020600a015460008085815260200190815260200160002060020180549050600080868152602001908152602001600020600b0160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054028115156119c857fe5b0402600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008282540192505081905550600080838152602001908152602001600020600101546000808481526020019081526020016000206007015403600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050160008282540192505081905550600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900460ff1615611bfa576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160006101000a81548160ff0219169083151502179055506001600460008282540192505081905550600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050154600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154811515611be557fe5b04600360008282540192505081905550611c9c565b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060050154600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154811515611c8a57fe5b04036003600082825401925050819055505b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003018290806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b60008082815260200190815260200160002060000160009054906101000a900460ff161515611d3a57600080fd5b60008090505b60008083815260200190815260200160002060020180549050811015611e24576001600080848152602001908152602001600020600401600080600086815260200190815260200160002060020184815481101515611d9b57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508080600101915050611d40565b5050565b60008082815260200190815260200160002060000160019054906101000a900460ff161515611e5657600080fd5b60008082815260200190815260200160002060040160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515611ec157600080fd5b6000151560008083815260200190815260200160002060080160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515141515611f3357600080fd5b600160008083815260200190815260200160002060080160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060016000808381526020019081526020016000206006016000828254019250508190555060008082815260200190815260200160002060020180549050600080838152602001908152602001600020600601541415612040574260008083815260200190815260200160002060070181905550600080600083815260200190815260200160002060000160026101000a81548160ff0219169083151502179055505b50565b60c060405190810160405280600015158152602001600081526020016000815260200160608152602001600015158152602001600081525090565b8280548282559060005260206000209081019282156120ba579160200282015b828111156120b957825182559160200191906001019061209e565b5b5090506120c791906121c5565b5090565b61014060405190810160405280600015158152602001600015158152602001600015158152602001600081526020016060815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b8280548282559060005260206000209081019282156121b4579160200282015b828111156121b35782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019061215b565b5b5090506121c191906121ea565b5090565b6121e791905b808211156121e35760008160009055506001016121cb565b5090565b90565b61222a91905b8082111561222657600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055506001016121f0565b5090565b9056fea165627a7a72305820a9b5a86ef0d814f0f969c63bb082e0af046bf9ea95f9837b042f2575af9044980029"
    }).send({
        from: msgSender,
        gas: 5999999
    }).then(function (newContractInstance) {
        return newContractInstance;
    });
}

function choreConstruct(msgSender, housematesList, description, reward, assignedPerson) {
    return chore.deploy({
        data: "60806040523480156200001157600080fd5b506040516200155438038062001554833981018060405260808110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b828101905060208101848111156200006757600080fd5b81518560208202830111640100000000821117156200008557600080fd5b50509291906020018051640100000000811115620000a257600080fd5b82810190506020810184811115620000b957600080fd5b8151856001820283011164010000000082111715620000d757600080fd5b5050929190602001805190602001909291908051906020019092919050505083600190805190602001906200010e92919062000256565b5060008090505b8451811015620001ca5760806040519081016040528060001515151581526020016000151515158152602001600015151515815260200160001515151581525060008087848151811015156200016757fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020906004620001bb929190620002e5565b50808060010191505062000115565b50816003819055508260029080519060200190620001ea92919062000392565b50600060048190555060006005819055506000600681905550600060078190555080600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050620004ba565b828054828255906000526020600020908101928215620002d2579160200282015b82811115620002d15782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019062000277565b5b509050620002e1919062000419565b5090565b82805482825590600052602060002090601f016020900481019282156200037f5791602002820160005b838211156200034e57835183826101000a81548160ff02191690831515021790555092602001926001016020816000010492830192600103026200030f565b80156200037d5782816101000a81549060ff02191690556001016020816000010492830192600103026200034e565b505b5090506200038e91906200045f565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620003d557805160ff191683800117855562000406565b8280016001018555821562000406579182015b8281111562000405578251825591602001919060010190620003e8565b5b50905062000415919062000492565b5090565b6200045c91905b808211156200045857600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555060010162000420565b5090565b90565b6200048f91905b808211156200048b57600081816101000a81549060ff02191690555060010162000466565b5090565b90565b620004b791905b80821115620004b357600081600090555060010162000499565b5090565b90565b61108a80620004ca6000396000f3fe6080604052600436106100eb576000357c010000000000000000000000000000000000000000000000000000000090048063228cb733146100f05780633bc160a01461011b5780633d18b912146101725780634b9f5c981461019d578063644d8164146101da57806365ae4da31461026a5780636af9508214610295578063734b38df146102ec5780637dccfef914610317578063807d316b146103425780638a1e082a1461036d578063b810fb4314610398578063d3df493514610413578063e1326b341461042a578063ecdf57171461049d578063eebe21091461052d578063fcfc531014610558575b600080fd5b3480156100fc57600080fd5b5061010561056f565b6040518082815260200191505060405180910390f35b34801561012757600080fd5b50610130610575565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561017e57600080fd5b5061018761059b565b6040518082815260200191505060405180910390f35b3480156101a957600080fd5b506101d8600480360360208110156101c057600080fd5b810190808035151590602001909291905050506105a5565b005b3480156101e657600080fd5b506101ef6108e7565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561022f578082015181840152602081019050610214565b50505050905090810190601f16801561025c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561027657600080fd5b5061027f610989565b6040518082815260200191505060405180910390f35b3480156102a157600080fd5b506102aa6109b4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102f857600080fd5b506103016109de565b6040518082815260200191505060405180910390f35b34801561032357600080fd5b5061032c6109e4565b6040518082815260200191505060405180910390f35b34801561034e57600080fd5b506103576109ea565b6040518082815260200191505060405180910390f35b34801561037957600080fd5b506103826109f0565b6040518082815260200191505060405180910390f35b3480156103a457600080fd5b506103d1600480360360208110156103bb57600080fd5b8101908080359060200190929190505050610a1b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561041f57600080fd5b50610428610a59565b005b34801561043657600080fd5b506104836004803603604081101561044d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610d9a565b604051808215151515815260200191505060405180910390f35b3480156104a957600080fd5b506104b2610ddc565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104f25780820151818401526020810190506104d7565b50505050905090810190601f16801561051f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561053957600080fd5b50610542610e7a565b6040518082815260200191505060405180910390f35b34801561056457600080fd5b5061056d610e80565b005b60035481565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600354905090565b60026001805490508115156105b657fe5b046004541115156105c657600080fd5b801561075a57600115156000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600281548110151561061c57fe5b90600052602060002090602091828204019190069054906101000a900460ff16151514156106cd5760008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600281548110151561069257fe5b90600052602060002090602091828204019190066101000a81548160ff02191690831515021790555060016006600082825403925050819055505b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600381548110151561071b57fe5b90600052602060002090602091828204019190066101000a81548160ff02191690831515021790555060016007600082825401925050819055506108e4565b600115156000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060038154811015156107aa57fe5b90600052602060002090602091828204019190069054906101000a900460ff161515141561085b5760008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600381548110151561082057fe5b90600052602060002090602091828204019190066101000a81548160ff02191690831515021790555060016007600082825403925050819055505b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060028154811015156108a957fe5b90600052602060002090602091828204019190066101000a81548160ff02191690831515021790555060016006600082825401925050819055505b50565b606060028054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561097f5780601f106109545761010080835404028352916020019161097f565b820191906000526020600020905b81548152906001019060200180831161096257829003601f168201915b5050505050905090565b6000600260018054905081151561099c57fe5b046004541115156109ac57600080fd5b600754905090565b6000600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60055481565b60045481565b60075481565b60006002600180549050811515610a0357fe5b04600454111515610a1357600080fd5b600654905090565b600181815481101515610a2a57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600115156000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815481101515610aa957fe5b90600052602060002090602091828204019190069054906101000a900460ff161515141515610ad757600080fd5b600015156000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001815481101515610b2757fe5b90600052602060002090602091828204019190069054906101000a900460ff161515141515610b5557600080fd5b6002600180549050811515610b6657fe5b046004541115610d035760016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001815481101515610bbe57fe5b90600052602060002090602091828204019190066101000a81548160ff02191690831515021790555060016005600082825401925050819055506002600454811515610c0657fe5b046005541115610cfe576000600481905550600060058190555060008090505b600180549050811015610cfc57608060405190810160405280600015151515815260200160001515151581526020016000151515158152602001600015151515815250600080600184815481101515610c7b57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020906004610cee929190610f88565b508080600101915050610c26565b505b610d98565b6080604051908101604052806000151515158152602001600015151515815260200160001515151581526020016000151515158152506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020906004610d85929190610f88565b5060016004600082825403925050819055505b565b600060205281600052604060002081815481101515610db557fe5b9060005260206000209060209182820401919006915091509054906101000a900460ff1681565b60028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e725780601f10610e4757610100808354040283529160200191610e72565b820191906000526020600020905b815481529060010190602001808311610e5557829003601f168201915b505050505081565b60065481565b600015156000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815481101515610ed057fe5b90600052602060002090602091828204019190069054906101000a900460ff161515141515610efe57600080fd5b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815481101515610f4c57fe5b90600052602060002090602091828204019190066101000a81548160ff0219169083151502179055506001600460008282540192505081905550565b82805482825590600052602060002090601f0160209004810192821561101d5791602002820160005b83821115610fee57835183826101000a81548160ff0219169083151502179055509260200192600101602081600001049283019260010302610fb1565b801561101b5782816101000a81549060ff0219169055600101602081600001049283019260010302610fee565b505b50905061102a919061102e565b5090565b61105b91905b8082111561105757600081816101000a81549060ff021916905550600101611034565b5090565b9056fea165627a7a7230582096cc3237d8ca9c936bbde7c75382b0fcd17ddcf80c244e7ef1a2b01de6b6b4920029",
        arguments: [housematesList, description, reward, assignedPerson]
    }).send({
        from: msgSender,
        gas: 5999999
    }).then(function (newContractInstance) {
        return newContractInstance;
    });
}

function schedulerConstruct(msgSender, choreList, housematesList) {
    return scheduler.deploy({
        arguments: [choreList, housematesList],
        data: "60806040523480156200001157600080fd5b50604051620011dc380380620011dc833981018060405260408110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b828101905060208101848111156200006757600080fd5b81518560208202830111640100000000821117156200008557600080fd5b50509291906020018051640100000000811115620000a257600080fd5b82810190506020810184811115620000b957600080fd5b8151856020820283011164010000000082111715620000d757600080fd5b505092919050505060008090505b82518110156200018657806004828154811015156200010057fe5b906000526020600020018190555082818151811015156200011d57fe5b906020019060200201516001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508080600101915050620000e5565b5080600390805190602001906200019f92919062000377565b506002600380549050811515620001b257fe5b046006819055506200022560048054806020026020016040519081016040528092919081815260200182805480156200020b57602002820191906000526020600020905b815481526020019060010190808311620001f6575b50505050506200022d640100000000026401000000009004565b5050620004c6565b600060038054905082518115156200024157fe5b04905060008090505b6003805490508110156200037257606060008383029050600084820190506001600380549050038414156200027e57855190505b60008290505b81811015620002d15786818151811015156200029c57fe5b906020019060200201518482815181101515620002b557fe5b9060200190602002018181525050808060010191505062000284565b5082600080600387815481101515620002e657fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090805190602001906200036092919062000406565b5050505080806001019150506200024a565b505050565b828054828255906000526020600020908101928215620003f3579160200282015b82811115620003f25782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019062000398565b5b50905062000402919062000458565b5090565b82805482825590600052602060002090810192821562000445579160200282015b828111156200044457825182559160200191906001019062000427565b5b5090506200045491906200049e565b5090565b6200049b91905b808211156200049757600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055506001016200045f565b5090565b90565b620004c391905b80821115620004bf576000816000905550600101620004a5565b5090565b90565b610d0680620004d66000396000f3fe60806040526004361061009e576000357c0100000000000000000000000000000000000000000000000000000000900480630210c9fa146100a3578063187fd7551461011e5780632520bf04146101b95780632e74bf50146101d05780634b7ceaa81461024b57806364f8afba1461029a5780636d3831ab146103405780639508c4a4146103f4578063a1ba4695146104be578063b6e54bdf14610523575b600080fd5b3480156100af57600080fd5b506100dc600480360360208110156100c657600080fd5b810190808035906020019092919050505061054e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561012a57600080fd5b506101776004803603604081101561014157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061058b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101c557600080fd5b506101ce61061e565b005b3480156101dc57600080fd5b50610209600480360360208110156101f357600080fd5b81019080803590602001909291905050506107ce565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561025757600080fd5b506102846004803603602081101561026e57600080fd5b810190808035906020019092919050505061080c565b6040518082815260200191505060405180910390f35b3480156102a657600080fd5b506102e9600480360360208110156102bd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061082f565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561032c578082015181840152602081019050610311565b505050509050019250505060405180910390f35b34801561034c57600080fd5b506103796004803603602081101561036357600080fd5b81019080803590602001909291905050506108c5565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103b957808201518184015260208101905061039e565b50505050905090810190601f1680156103e65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561040057600080fd5b506104436004803603602081101561041757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109f4565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610483578082015181840152602081019050610468565b50505050905090810190601f1680156104b05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156104ca57600080fd5b5061050d600480360360208110156104e157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ad8565b6040518082815260200191505060405180910390f35b34801561052f57600080fd5b50610538610b23565b6040518082815260200191505060405180910390f35b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600160008060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020848154811015156105dc57fe5b9060005260206000200154815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905092915050565b60006003600081548110151561063057fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600190505b60038054905081101561071857600060038281548110151561068257fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050826003838154811015156106bf57fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550809250508080600101915050610664565b50806003600081548110151561072a57fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506107cb60048054806020026020016040519081016040528092919081815260200182805480156107c157602002820191906000526020600020905b8154815260200190600101908083116107ad575b5050505050610b29565b50565b6003818154811015156107dd57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60048181548110151561081b57fe5b906000526020600020016000915090505481565b60606000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806020026020016040519081016040528092919081815260200182805480156108b957602002820191906000526020600020905b8154815260200190600101908083116108a5575b50505050509050919050565b60606001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663644d81646040518163ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040160006040518083038186803b15801561095c57600080fd5b505afa158015610970573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101561099a57600080fd5b8101908080516401000000008111156109b257600080fd5b828101905060208101848111156109c857600080fd5b81518560018202830111640100000000821117156109e557600080fd5b50509291905050509050919050565b6060600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610acc5780601f10610aa157610100808354040283529160200191610acc565b820191906000526020600020905b815481529060010190602001808311610aaf57829003601f168201915b50505050509050919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050919050565b60065481565b60006003805490508251811515610b3c57fe5b04905060008090505b600380549050811015610c635760606000838302905060008482019050600160038054905003841415610b7757855190505b60008290505b81811015610bc6578681815181101515610b9357fe5b906020019060200201518482815181101515610bab57fe5b90602001906020020181815250508080600101915050610b7d565b5082600080600387815481101515610bda57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209080519060200190610c52929190610c68565b505050508080600101915050610b45565b505050565b828054828255906000526020600020908101928215610ca4579160200282015b82811115610ca3578251825591602001919060010190610c88565b5b509050610cb19190610cb5565b5090565b610cd791905b80821115610cd3576000816000905550600101610cbb565b5090565b9056fea165627a7a72305820440f31575aea3966ca1ef19d68216d7a3fd8a0034df422a85b670da20335fe810029"
    }).send({
        from: msgSender,
        gas: 5999999
    }).then(function (newContractInstance) {
        return newContractInstance;
    });
}

function addHouse(msgSender, instance, housemateList, houseID) {
    instance.methods.addHouse(housemateList, houseID).send({
        from: msgSender,
        gas: 6699999
    });
}

function addUser(msgSender, instance) {
    instance.methods.addUser().send({from: msgSender});
}

function printHouseInfo(msgSender, instance, houseID) {
    instance.methods.getHouseInfo(houseID).call({from: msgSender}, function(error, result) {
        console.log("Results: ");
        console.log(result);
    });
}

function agreeToHouse(msgSender, instance, houseID) {
    instance.methods.agreeToHouse(houseID).send({
        from: msgSender,
        gas: 6699999
    }).on('error', console.error);
}

function agreeToCreateChore(msgSender, instance) {
    instance.methods.agreeToCreateChore().send({
        from: msgSender,
        gas: 6699999
    });
}

function addSchedule(msgSender, instance, houseID, choreList) {
    instance.methods.addSchedule(houseID, choreList).send({
        from: msgSender,
        gas: 6699999
    });
}

function judgeChore(msgSender, instance, houseID, c) {
    instance.methods.judgeChore(houseID, c).send({
        from: msgSender,
        gas: 6699999
    });
}

function vote(msgSender, instance, against) {
    instance.methods.vote(against).send({
        from: msgSender,
        gas: 6699999
    });
}

function terminateHouse(msgSender, instance, houseID) {
    instance.methods.terminateHouse(houseID).send({
        from: msgSender,
        gas: 6699999
    });
}

function assessHouse(msgSender, instance, houseID) {
    instance.methods.assessHouse(houseID).send({
        from: msgSender,
        gas: 6699999
    });
}

var chores = [];

new Promise((resolve) => {
    resolve('Success!');
}).then(() => { //constructs ChoreChain outer contract
    return choreChainConstruct(web3.eth.defaultAccount);
}).then((inst) => { //adds a house to the ChoreChain contract
    console.log("Contract address: " + inst.options.address);
    exports.instance = inst;
}).then(() => {
    return choreConstruct(web3.eth.defaultAccount, housemateAddresses, "Do the dishes", 100, housemateAddresses[0]);
}).then((cInst) => {
    chores.push(cInst);
}).then(() => {
    return choreConstruct(web3.eth.defaultAccount, housemateAddresses, "Do the laundry", 50, housemateAddresses[1]);
}).then((cInst) => {
    chores.push(cInst);
}).then(() => {
    return choreConstruct(web3.eth.defaultAccount, housemateAddresses, "Vacuum the floor", 60, housemateAddresses[2]);
}).then((cInst) => {
    chores.push(cInst);
}).then(() => {
    exports.chores = chores;
});
/*
for(var i = 0; i < cc.housemateAddresses.length; i++) {
    cc.addUser(cc.housemateAddresses[i], cc.instance);
}
cc.addHouse(cc.defaultAccount, cc.instance, cc.housemateAddresses, 30);
for(var i = 0; i < cc.housemateAddresses.length; i++) {
    cc.agreeToHouse(cc.housemateAddresses[i], cc.instance, 30);
}
for(var j = 0; j < cc.chores.length; j++){
    for(var i = 0; i < cc.housemateAddresses.length; i++) {
        cc.agreeToCreateChore(cc.housemateAddresses[i], cc.chores[j]);
    }
}
for(var j = 0; j < cc.chores.length - 1; j++){
    for(var i = 0; i < cc.housemateAddresses.length; i++) {
        cc.vote(cc.housemateAddresses[i], cc.chores[j], false);
    }
}
for(var i = 0; i < cc.chores.length - 1; i++) {
    cc.judgeChore(cc.defaultAccount, cc.instance, 30, cc.chores[i].options.address);
}
for(var i = 0; i < cc.housemateAddresses.length; i++) {
    cc.terminateHouse(cc.housemateAddresses[i], cc.instance, 30);
}
for(var i = 0; i < cc.housemateAddresses.length; i++) {
    cc.assessHouse(cc.housemateAddresses[i], cc.instance, 30);
}
*/

exports.choreChain = choreChain;
exports.chore = chore;
exports.defaultAccount = web3.eth.defaultAccount;
exports.housemateAddresses = housemateAddresses;
exports.addHouse = addHouse;
exports.addUser = addUser;
exports.agreeToHouse = agreeToHouse;
exports.agreeToCreateChore = agreeToCreateChore;
exports.vote = vote;
exports.judgeChore = judgeChore;
exports.terminateHouse = terminateHouse;
exports.assessHouse = assessHouse;


