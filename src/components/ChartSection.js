import React, { Component } from "react";
import Chart from "react-apexcharts";
export class ChartSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Price: {
        options: {
          chart: {
            id: "area-datetime",
          },
          grid: {
            show: false,
          },
          title: {
            text: "Market Price (USD)",
            style: {
              fontsize: "14px",
              fontweight: 'bold',
              color: '#e54230',
            },
          },
          stroke: {
            curve: "smooth",
            width:4,
          },
          xaxis: {
            type: "datetime",
          },
          dataLabels: {
            enabled: false,
          
          },
          yaxis: {
            show: false,
          },
          colors: ["#e54230"],
       
          tooltip: {
            y: {
              formatter: (value) => {
                return value.toFixed(2);
              },
            },
            theme: "light",
          
          },
          selection: 365,
        },
        series: [
          {
            name: "Market Price",
            data: [[164837250522, 39804.53519937617]],
          },
        ],
      },

      market_cap: {
        options: {
          chart: {
            id: "area-datetime",
          },
          grid: {
            show: false,
          },
          title: {
            text: "Market Cap (USD)",
            style: {
              fontsize: "14px",
              fontweight: 'bold',
              color: "#f62c8d",
            },
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            type: "datetime",
          },
          dataLabels: {
            enabled: false,
          },
          yaxis: {
            show: false,
          },
          colors: ["#f62c8d"],
          tooltip: {
            y: {
              formatter: (value) => {
                return value.toFixed(2);
              },
            },
            theme: "dark",
          },
          selection: 365,
        },
        series: [
          {
            name: "Market Cap",
            data: [[164837250522, 39804.53519937617]],
          },
        ],
      },

      total_volume:{
        options: {
          chart: {
            id: "area-datetime",
          },
          grid: {
            show: false,
          },
          title: {
            text: "Total Volume",
            style: {
              fontsize: "14px",
              fontweight: 'bold',
              color: "#1ccad8",
            },
          },
          stroke: {
            curve: "smooth",
            width:3,
          },
          xaxis: {
            type: "datetime",
          },
          dataLabels: {
            enabled: false,
          },
          yaxis: {
            show: false,
          },
          colors: ["#1ccad8"],
          tooltip: {
            y: {
              formatter: (value) => {
                return value.toFixed(2);
              },
            },
            theme: "dark",
          },
          selection: 365,
        },
        series: [
          {
            name: "Total Volume",
            data: [[164837250522, 39804.53519937617]],
          },
        ],
      },
    }
  }
  prevId = this.props.Id;
  fetchData = async () => {
    let chartData = await fetch(
      "https://api.coingecko.com/api/v3/coins/" +
        this.props.Id +
        "/market_chart?vs_currency=usd&days=365"
    );
    let jsonChartData = await chartData.json();
    this.setState({
      Price: {
        options: this.state.Price.options,
        series: [{ name: "Market Price", data: jsonChartData.prices }],
      },
      market_cap: {
        options:this.state.market_cap.options,
        series:[{name: "Market Cap", data: jsonChartData.market_caps}],
      },
      total_volume:{
        options:this.state.total_volume.options,
        series:[{name: "Total Volume", data: jsonChartData.total_volumes}],
      },
    });
  };
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate() {
    //Infinite run
    // this.fetchData()
    if (this.prevId != this.props.Id) {
      this.prevId = this.props.Id;
      this.fetchData();
    }
  }
  render() {
    return (
      <>
      <div style={{display:'flex',gap:'20px',width:'100%'}}>
        <div className="col" style={{
          maxWidth:'550px'
        }}>
          <div className="mixed-chart" style={{padding:'40px 40px',maxWidth:'fit-content'}}>
            <Chart
              options={this.state.Price.options}
              series={this.state.Price.series}
              type="area"
              width="550"  />
          </div>
        </div>
  

       <div style={{display:'flex', gap:'30px',marginTop:'123px',marginLeft:'55px'}}>
        <div className="col" style={{
          maxWidth:'350px', float:'right'
        }}>
          <div className="mixed-chart" style={{padding:'40px 40px',maxWidth:'fit-content'}}>
            <Chart
              options={this.state.market_cap.options}
              series={this.state.market_cap.series}
              type="line"
              width="350"  />
          </div>
        </div>
        <div className="col" style={{
          maxWidth:'350px', float:'right'
        }}>
          <div className="mixed-chart" style={{padding:'40px 40px',maxWidth:'fit-content'}}>
            <Chart
              options={this.state.total_volume.options}
              series={this.state.total_volume.series}
              type="line"
              width="350"  />
          </div>
        </div>
        </div>
      
        </div>
   <div style={{
        width:'55%',display:'flex',margin:'auto'
      }}>
        <div style={{display:'flex',margin:'auto',width:'90%'}}>
        <div style={{width:'35%',height:'fit-content',textAlign:'center'}}>
          <h2 style={{fontSize:'1.1rem'}}>Market Cap</h2>
          <p style={{color:'#e54230',fontSize:'1.05rem'}}>${this.props.m_cap}</p>
        </div>
        <div style={{width:'35%',height:'fit-content',textAlign:'center'}}>
          <h2 style={{fontSize:'1.1rem'}}>Price Change 24Hrs</h2>
          <p style={{color:'#e54230',fontSize:'1.05rem'}}>${this.props.price_cng}</p>
        </div>
        <div style={{width:'35%',height:'fit-content',textAlign:'center'}}>
          <h2 style={{fontSize:'1.1rem'}}>Total Volume</h2>
          <p style={{color:'#e54230',fontSize:'1.05rem'}}>${this.props.vol}</p>
        </div>
        <div style={{width:'35%',height:'fit-content',textAlign:'center'}}>
          <h2 style={{fontSize:'1.1rem'}}>Twitter Followers</h2>
          <p style={{color:'#e54230',fontSize:'1.05rem'}}>{this.props.tfol}</p>
        </div>
        </div>
       </div>

      </>
    );
  }
}

export default ChartSection;
