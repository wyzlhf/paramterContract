// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {
    uint8 public age;

    constructor(uint8 _age) {
        age = _age;
    }

    function getAge() public view returns (uint8) {
        return age;
    }

    function setAge(uint8 _age) public {
        age = _age;
    }

    function getXuAge(uint8 _Xuage) public view returns (uint8) {
        return _Xuage + age;
    }
}
