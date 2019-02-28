Our project is aiming to incentivize housemates to complete their designated chores by providing a 
housemate rating system that is as objective as possible. 

We have three smart contracts in the chorechore.sol file which are the ChoreChain smart contract, the 
Scheduler smart contract, and the Chore smart contract. The ChoreChain smart contract is used to 
represent the overarching rating system, and it additionally manages the houses and users. The 
Scheduler smart contract is used to automatically assign chores to each housemate in a household. The 
Chore smart contract represents a chore, and it carries information about whether the chore was 
completed, and who was the person assigned to the chore.

In the repo, we also have a folder containing the test net along with the web3 interface that allows us to 
interact with the smart contracts using javascript code. To run the test net, go to the main folder and 
copy the text written in acc.txt. Then run ganache-cli theCopiedTextHere and that will setup the test net. 
To actually use the web3 javascript interface, in the public folder, you can edit the choreChain.js file and 
run that, or you can use the terminal and run node’s interactive javascript terminal and in the terminal, 
import test.js using var cc = require(‘./test.js’); Afterward, you will have access to all the exported 
functions and variables in the test.js file.
