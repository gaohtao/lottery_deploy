pragma solidity ^0.4.25;

contract HelloWorld{
  string public name;

  constructor (string _name) public {
    name = _name;
  }

  function getName() public view returns(string){
    return name;
  }
  function setName(string _name) public {
    name = _name;
  }
}
