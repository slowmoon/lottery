pragma solidity ^0.4.24;


contract Lottery{
    
   address public manager;
   
//   mapping(address=>uint256) users;
   address[] players;
   
   uint256 public round = 1;
   
   address public winer;
   
   constructor() public{
       manager = msg.sender;
   }
   
   function play()payable public returns(bool){
       assert(msg.value==1 ether);
       players.push(msg.sender);
   }
   
   function getPlayers()public view returns(address[]){
       return players;
   }

   function getPlayersCount()public view returns(uint) {
      return players.length; 
   }
   //开奖
   function draw()public  onlyManager{
      bytes memory packed =  abi.encodePacked(block.timestamp, players.length, block.difficulty);
      bytes32 hashValue = keccak256(packed);
      uint index = uint256(hashValue) % players.length;
      winer = players[index];
      //transfer...
      winer.transfer(address(this).balance);
      delete players;
      round ++;
   }
   
   //tuijiang
   
   function withdraw() onlyManager public {
       assert(players.length != 0);
       for (uint i=0;i< players.length;i++){
           players[i].transfer(1 ether);
       }
       
       delete players;
       round ++ ;
       
   }
   
   
   modifier onlyManager {
       assert(manager == msg.sender);
       _;
   }
   
   function getBalance()public view returns(uint256){
       return address(this).balance;
   }

   
}