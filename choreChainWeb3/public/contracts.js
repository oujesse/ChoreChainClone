var Web3 = require('web3');

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // Set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
}

var pubad = '';
var privkey = '';

web3.eth.defaultAccount = pubad;

var simpleContract = new web3.eth.Contract([
    {
        "constant": false,
        "inputs": [],
        "name": "cancel",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "changer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "claimTimeout",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "choice",
                "type": "bool"
            }
        ],
        "name": "reveal",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "choice",
                "type": "bool"
            }
        ],
        "name": "takeBet",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "inputs": [
            {
                "name": "commitment",
                "type": "bool"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "betAmount",
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
        "name": "expiration",
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
        "name": "getInfo",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
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
        "inputs": [],
        "name": "player1",
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
        "name": "player1Commitment",
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
        "name": "player2",
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
        "name": "player2Choice",
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
        "name": "tester",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]);

//simpleContract.options.address = "0x6ee9957aef5f4073c6af71441ec7962527c37671";

web3.eth.getBalance(web3.eth.defaultAccount, (error, wei) => {
    console.log(web3.utils.fromWei(wei, 'ether'));
});

var simpleContractInstance;

simpleContract.deploy({
    data: "60806040527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6004556040516020806108e683398101806040528101908080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600060146101000a81548160ff02191690831515021790555034600281905550602060018190555050610823806100c36000396000f3006080604052600436106100c5576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630ce6e680146100c75780630e1da6c3146100f657806311b0ea161461010d57806338a3fde7146101245780634665096d1461014657806359a5f12d146101715780635a9b0b89146101c85780638308abd414610238578063940cd05b14610263578063d24257c014610292578063d30895e4146102bd578063ea8a1af014610314578063eb13175d1461032b575b005b3480156100d357600080fd5b506100dc61035a565b604051808215151515815260200191505060405180910390f35b34801561010257600080fd5b5061010b61036d565b005b34801561011957600080fd5b50610122610400565b005b61014460048036038101908080351515906020019092919050505061040a565b005b34801561015257600080fd5b5061015b6104cb565b6040518082815260200191505060405180910390f35b34801561017d57600080fd5b506101866104d1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101d457600080fd5b506101dd6104f7565b60405180858152602001848152602001831515151581526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200194505050505060405180910390f35b34801561024457600080fd5b5061024d610543565b6040518082815260200191505060405180910390f35b34801561026f57600080fd5b50610290600480360381019080803515159060200190929190505050610549565b005b34801561029e57600080fd5b506102a76106c4565b6040518082815260200191505060405180910390f35b3480156102c957600080fd5b506102d26106ca565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561032057600080fd5b506103296106ef565b005b34801561033757600080fd5b506103406107e4565b604051808215151515815260200191505060405180910390f35b600360149054906101000a900460ff1681565b600454421015151561037e57600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f193505050501580156103fd573d6000803e3d6000fd5b50565b6032600181905550565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561045157600080fd5b6002543414151561046157600080fd5b33600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360146101000a81548160ff02191690831515021790555062015180420160048190555050565b60045481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600080600154600254600060149054906101000a900460ff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16935093509350935090919293565b60015481565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415151561059157600080fd5b600454421015156105a157600080fd5b801515600360149054906101000a900460ff161515141561064157600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f1935050505015801561063b573d6000803e3d6000fd5b506106c1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f193505050501580156106bf573d6000803e3d6000fd5b505b50565b60025481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561074a57600080fd5b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561079157600080fd5b60006002819055503373ffffffffffffffffffffffffffffffffffffffff166108fc6002549081150290604051600060405180830381858888f193505050501580156107e1573d6000803e3d6000fd5b50565b600060149054906101000a900460ff16815600a165627a7a723058203c76754328c31cbe32140642b72c684ffa2b0c49ce4f76962b10d2ddad525d980029",
    arguments: [3]
}).send({
    from: web3.eth.defaultAccount,
    value: '0xcff',//'0x17fffffffffffffff',
    gas: 1000000
}).then(function (newContractInstance) {
    console.log("newContractInstance.options.address: " + newContractInstance.options.address);
    simpleContractInstance = newContractInstance;
    web3.eth.getBalance(web3.eth.defaultAccount, (error, wei) => {
        console.log(web3.utils.fromWei(wei, 'ether'));
    });
})/*.then(() => {
    simpleContractInstance.methods.changer().send({from: web3.eth.defaultAccount, gas: 299999})
})*/.then(() => {
    simpleContractInstance.methods.getInfo().call({from: web3.eth.defaultAccount},
        function(error, result) {
            console.log(result);
        }).then(() => {
        web3.eth.getBalance(web3.eth.defaultAccount, (error, wei) => {
            console.log(web3.utils.fromWei(wei, 'ether'));
        });
    });
});

//simpleContractInstance.methods.giveMoney().call({from: web3.eth.defaultAccount});
