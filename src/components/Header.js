import React, { Component } from 'react'
import '../components/Header.css';
export class Header extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg ' style={{backgroundColor:'#e54230',position:'fixed',width:'100%'}}>
            <div className='container-fluid'>
                <select className='form-select form-select-lg' aria-label=".form-select-lg example" name='selectCoin'
                style={{width:'fit-content'}} onChange={this.props.handle_submit}>
                    <option value='bitcoin'>Select Coin</option>
                    <option value='avalanche-2'>Avalanche (AVAX)</option>
                    <option value='binancecoin'>Binance (BNB)</option>
                    <option value='bitcoin'>Bitcoin (BTC)</option>
                    <option value='cardano'>Cardano (ADA)</option>
                    <option value='decentraland'>DecentraLand (MANA)</option>
                    <option value='dogecoin'>Dogecoin (DOGE)</option>
                    <option value='ethereum'>Ethereum (ETH)</option>
                    <option value='ripple'>Ripple (XRP)</option>
                    <option value='solana'>Solana (SOL)</option>
                    <option value='tether'>Tether (USDT)</option>
                    
                </select>
            </div>
        </nav>
      </div>
    )
  }
}

export default Header