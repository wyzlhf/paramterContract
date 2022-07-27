var Web3 = require('web3');
var web3 = new Web3('http://localhost:8545');
const Artifact = require("./build/contracts/HelloWorld.json");
const accountOne = "0x1311a3037d2cB16c8097690Ca525be94e5ec263D";
const ABI=Artifact.abi
const ADDRESS =Artifact.networks["5777"].address
// 参考文档：https://web3js.readthedocs.io/en/v1.7.4/web3-eth-contract.html#
const contract = new web3.eth.Contract(ABI, ADDRESS)

// contract.methods.getAge().call({from:accountOne}).then((err,data)=>{
//     if(err){
//         console.log(err)
//     }else {
//         console.log(data)
//     }
// })

// contract.methods.setAge(9).send({from:accountOne}).then(data=>{
//     console.log(data)
// })
contract.methods.getXuAge(2).call({from:accountOne}).then((err,data)=>{
    if(err){
        console.log(err)
    }else {
        console.log(data)
    }
})