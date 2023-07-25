import React, { Component } from 'react'
import CardSection from './components/CardSection';
import Header from './components/Header';
import ChartSection from './components/ChartSection';

export default class App extends Component {
  // Make Constructor
  constructor(){
    super();
    this.state={
      Id:"bitcoin",
      Data:{}
    }
  }

handleSubmit = async (event)=>{
  console.log(event.target.value)
  await this.setState({Id: event.target.value, Data: this.state.Data})
  this.fetchData()
}

  // Fetch Data from API
// currency='solana'  
  fetchData=async()=>{
    let Data=await fetch('https://api.coingecko.com/api/v3/coins/'+this.state.Id);
    let JsonData= await Data.json();
    this.setState({Id:this.state.Id,Data:JsonData})
  }
//Re rendering for Changing component
  componentDidMount(){
    this.fetchData() 
  }
  render() {
    return (
      <div>
        <Header handle_submit={this.handleSubmit}/>
       {/* <h1>{this.state.Id}</h1> */}
       {/* <h2>{this.state.Data.name}</h2>
       <h2>{this.state.Data.sentiment_votes_up_percentage}</h2> */}
        {/* Passing Props */}
        <CardSection coinName={this.state.Data.name} currentPrice={this.state.Data.market_data ? this.state.Data.market_data.current_price["usd"]:""}
        mCap24={this.state.Data.market_data ? this.state.Data.market_data.market_cap_change_percentage_24h :""}
        ath={this.state.Data.market_data ? this.state.Data.market_data.ath.usd:""}
        atl={this.state.Data.market_data ? this.state.Data.market_data.atl.usd:""}
        sentiment={this.state.Data.sentiment_votes_up_percentage}
        high24={this.state.Data.market_data ? this.state.Data.market_data.high_24h.usd:""}
        low24={this.state.Data.market_data ? this.state.Data.market_data.low_24h["usd"]:""}
        currentP={this.state.Data.market_data ? this.state.Data.market_data.current_price["usd"]:""}

       
       /> 
       <ChartSection Id={this.state.Id} 
 m_cap={this.state.Data.market_data ? this.state.Data.market_data.market_cap.usd:""}
 price_cng={this.state.Data.market_data ? this.state.Data.market_data.price_change_24h:""}
 vol={this.state.Data.market_data ? this.state.Data.market_data.total_volume.usd:""}
 tfol={this.state.Data.community_data ? this.state.Data.community_data.twitter_followers:""}
       />
      </div> 
    )
  }
}
