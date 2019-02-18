let {bytecode, interface} = require("./01-compile")

let Web  = require("web3")
let web3 = new Web("http://localhost:8545")

let contract = new web3.eth.Contract(JSON.parse(interface))
let owner = '0x94c251f9d52741d6c39cdcb859b02c84d4915782'

let deploy = async  ()=>{
   let res = await contract.deploy({
        data: bytecode,
        arguments:[],
    }).send({
        from:  owner,
        gas: 1000000,
    })
    console.log("deploy address :", res.options.address)
} 

deploy()
