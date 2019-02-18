import React from 'react'
import { Card, Icon, Image ,Button } from 'semantic-ui-react'

const CardExampleCard = (props) => (
  <Card>
    <Image src='/images/lottery.png' />
    <Card.Content>
      <Card.Header>管理员:</Card.Header>
      <Card.Meta>
        <span className='date'>{props.manager}</span>
      </Card.Meta>
     <Card.Header>当前用户:</Card.Header>
      <Card.Meta>
        <span className='date'>{props.currentPlayer}</span>
      </Card.Meta>
    <Card.Header>上期中奖用户:</Card.Header>
      <Card.Meta>
        <span className='date'>{props.winer}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
    <Card.Header>当前奖池:</Card.Header>
        <Icon name='money bill alternate' />
         {props.balance} ETH 
    </Card.Content>
   <Card.Content extra>
    <Card.Header>当前参与人数:</Card.Header>
        <Icon name='money bill alternate' />
         {props.playersCount}  人 
    </Card.Content>
    <Button animated='fade' onClick={props.play} loading={props.isPlaying} disabled={props.show}>
      <Button.Content visible >let`s play draw the lottery</Button.Content>
      <Button.Content hidden> &gt; one for a big reward &lt;</Button.Content>
    </Button>
     <Card.Content extra>
     <Button inverted color='orange' style={{ display:props.display}} onClick={props.draw} loading={props.isDrawing} disabled={props.show}>
       > draw           
      </Button> 
    </Card.Content>
       <Card.Content extra>
     <Button inverted color='red' style={{ display:props.display}}  onClick={props.withdraw} loading={props.isDrawback} disabled={props.show}>
        &gt; draw back   &lt;  
      </Button> 
    </Card.Content>
  <Card.Content extra>
       <Icon name='coffee' color='orange' />
         {props.round}  期数 
    </Card.Content>

  </Card>
)

export {
    CardExampleCard
} 