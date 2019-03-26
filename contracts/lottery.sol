pragma solidity ^0.4.23;

contract  Lottery{
  address public manager;
  address[] public players;

  constructor(){
    manager = msg.sender;
  }

  //玩家下注，下注金额不得低于0.01ether
  function entry() public payable {
    require( msg.value > 0.01 ether);
    players.push(msg.sender);
  }

  modifier restricted(){
    require(msg.sender == manager);
    _;
  }

  //生成随机数
  function random() private view returns(uint){
    /* uint rand = uint( abi.encodePacked(keccak256(block.difficulty,now,players)) ); */
    uint rand = uint(keccak256(block.difficulty,now,players) );
    return rand;
  }

  //开奖，采用最简单的方法，随机指定玩家获胜，获得全部彩金。
  function  pickWinner() public {
    uint index = random() % players.length;
    players[index].transfer(address(this).balance);
    players = new address[](0);

  }

  function getPlayers() public returns(address[]){
    return players;
  }
}
