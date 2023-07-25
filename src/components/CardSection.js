import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
export class CardSection extends Component {
  render() {
    return (
      <>
        <h1 style={{padding:'20px 40px',paddingTop:'90px', color:'black'}}>
            {this.props.coinName}
 
        </h1>
        <div style={{display: 'flex',gap:'20px',margin:'auto',padding:'20px 40px',width:'fit-content'}}>
         <Card border="secondary" style={{ width: '12rem' }}>
        
        <Card.Body>
          <Card.Title style={{textAlign: 'center' , fontSize:'1rem', fontWeight:'600', color:'black'}}>Market Cap 24Hrs</Card.Title>
          <Card.Text style={{textAlign:'center', color:'#e54230', fontSize:'1.1rem',fontWeight:'600'}}>
            {this.props.mCap24} %
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="secondary" style={{ width: '12rem' }}>
        
        <Card.Body>
          <Card.Title style={{textAlign: 'center' , fontSize:'1rem', fontWeight:'600',color:'#black'}}>All Time High</Card.Title>
          <Card.Text style={{textAlign:'center', color:'#e54230', fontSize:'1.1rem',fontWeight:'600'}}>
            ${this.props.ath} 
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card border="secondary" style={{ width: '12rem' }}>
        
        <Card.Body>
          <Card.Title style={{textAlign: 'center' , fontSize:'1rem', fontWeight:'600'}}>Positive Sentiment Votes</Card.Title>
          <Card.Text style={{textAlign:'center', color:'#e54230', fontSize:'1.1rem',fontWeight:'600'}}>
            {this.props.sentiment} % 
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card border="secondary" style={{ width: '12rem' }}>
        
        <Card.Body>
          <Card.Title style={{textAlign: 'center' , fontSize:'1rem', fontWeight:'600'}}>High 24Hrs</Card.Title>
          <Card.Text style={{textAlign:'center', color:'#38b000', fontSize:'1.1rem',fontWeight:'600'}}>
            ${this.props.high24} 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="secondary" style={{ width: '12rem' }}>
        
        <Card.Body>
          <Card.Title style={{textAlign: 'center' , fontSize:'1rem', fontWeight:'600'}}>Low 24Hrs </Card.Title>
          <Card.Text style={{textAlign:'center', color:'#a51c30', fontSize:'1.1rem',fontWeight:'600'}}>
            ${this.props.low24} 
          </Card.Text>
        </Card.Body>
      </Card>
     
   
      </div>
     
      <div className='current-price' style={{backgroundColor:'transparent'}}>
        <p style={{textAlign:'center', color:'black', fontSize:'1.15rem'}}>Current Price</p>
        <h1 style={{textAlign:'center', fontSize:'4rem', color:'#e54230',fontWeight:'700'}}>${this.props.currentP}</h1>
      </div>
   
      </>

    )
  }
}

export default CardSection