import React, { Component } from 'react';
import {CardExampleCard} from './display/display'

let instance = require("./deploy/03-instance")
let web3 = require('./utils/web3util')
class App extends Component {
  state = {
    manager:'',
    players:[],
    round:0,
    balance:0,
    winer: '',
    currentPlayer:'',
    playersCount:0,
    isPlaying: false,
    isDrawing: false,
    isDrawback:false,
    display:'' //none, inline
  }
  async componentWillMount(){

    let manager = await instance.methods.manager().call()
    let balance = await instance.methods.getBalance().call()
    let players = await instance.methods.getPlayers().call()
    let playersCount =await instance.methods.getPlayersCount().call()
    let round = await instance.methods.round().call()
    let winer = await instance.methods.winer().call()
    let account = await web3.eth.getAccounts()

    this.setState({
      manager: manager,
      players: players,
      round: round,
      balance: web3.utils.fromWei(balance, 'ether'), 
      winer: winer,
      playersCount: playersCount,
      currentPlayer: account[0],
      display: manager==account[0] ? 'inline':'none'
    })
  }

  show =()=>{
   return this.state.isDrawback || this.state.isDrawing || this.state.isPlaying 
  }
  // 支付1ether
    play= async ()=> {
     try {
       this.setState({isPlaying:true})
     let accounts = await web3.eth.getAccounts()
     await instance.methods.play().send({
       from: accounts[0],
       value: 10 ** 18,
     })
       this.setState({isPlaying:false})
     alert("bit success")
     window.location.reload()
     } catch (e) {
       this.setState({isPlaying:false})
       alert("bit fail", e)
     }
    }

   draw= async ()=>{
    try {
      this.setState({isDrawing:true})
     let accounts = await web3.eth.getAccounts()
     await instance.methods.draw().send({
       from: accounts[0],
     })
     alert("draw succ")
     this.setState({isDrawing:false})
     window.location.reload()
     } catch (e) {
     this.setState({isDrawing:false})
       alert("draw fail",e)
     }
   }
  withdraw= async ()=>{
    try {
     this.setState({isWithdraw: true})
     let accounts = await web3.eth.getAccounts()
      await instance.methods.withdraw().send({
       from: accounts[0],
     })
     this.setState({isWithdraw: false})
    alert("drawback succ")
     window.location.reload()
     } catch (e) {
     this.setState({isWithdraw: false})
       alert("drawback fail",e)
     }
   }


  render() {
    return (
      <div>
           <CardExampleCard manager ={this.state.manager}
                            currentPlayer={this.state.currentPlayer}
                            winer = {this.state.winer}
                            balance= {this.state.balance}
                            playersCount= {this.state.playersCount}
                            play = {this.play} 
                            draw = {this.draw}
                            round = {this.state.round}
                            withdraw = {this.withdraw}
                            isDrawback={this.state.isDrawback}
                            isDrawing={this.state.isDrawing}
                            isPlaying ={this.state.isPlaying}
                            show = {this.show()}
                            display={this.state.display}
                            />
                            
      </div>
    );
  }
}

export default App;
