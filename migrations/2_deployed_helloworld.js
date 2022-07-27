const HelloWorld = artifacts.require("../contracts/HelloWorld.sol");

module.exports = function (deployer, age) {
    age = 3;
    deployer.deploy(HelloWorld,age);
};
