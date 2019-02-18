let addr = '0x5992ef40e3389096e10fa59ebccda00d0c418650'
let abi = [{"constant":false,"inputs":[],"name":"draw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"round","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getPlayers","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"play","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getPlayersCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"winer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]

let web3  = require("../utils/web3util")
let instance = new web3.eth.Contract(abi,addr)

module.exports = instance

// let owner = '0x94c251f9d52741d6c39cdcb859b02c84d4915782'
// let sender = '0x'

// let play = async ()=>{
//   let res = await instance.methods.play().send({
//        from : sender,
//        gas:21000, 
//        value: 10**18,
//     })
//   console.log("play result:",res)
// }

// let draw = async ()=>{
//     let res = await instance.methods.draw().send({
//         from: sender,
//         gas: 100000,
//     })
//     console.log("draw result:", res)
// }

// let withdraw = async ()=>{
//     let res = await instance.methods.withdraw().send({
//         from: sender,
//         gas: 100000,
//     })
//     console.log("withdraw result:", res)
// }


