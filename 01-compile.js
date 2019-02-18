
let fs = require("fs")
let fd = fs.readFileSync("./00-contract.sol")

let solc = require("solc")
let res = solc.compile(fd.toString(), 1)
console.log(res)

module.exports = res.contracts[":Lottery"]