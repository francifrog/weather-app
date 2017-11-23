import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/searchbar';
import WeatherDetails from './components/weatherDetails';

class App extends Component {
  constructor(){
    super();
    this.state = {
      city: "",
      currentAPI: {},
      forecastAPI: {}
    }

    let APIs = [
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&APPID=d0a0120c31dcb3db2fe157540826b290&units=metric`),
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=Toronto,ca&APPID=d0a0120c31dcb3db2fe157540826b290&units=metric`)
    ]

    let currentRes;
    let forecastRes;
		axios.all(APIs)
		.then(result => {
      console.log("success", result);
      
      currentRes = result[0].data;
      forecastRes = result[1].data;

      this.setState({currentAPI: currentRes});
      this.setState({forecastAPI: forecastRes});
		})
		.catch(error => {
			console.log(error);
			console.log("error on the call");
		})

    
    this.handleInput = this.handleInput.bind(this);
    this.submitCity = this.submitCity.bind(this);
}
  
handleInput(event){
  console.log('set the state')
  this.setState({city: event.target.value})
}

submitCity(event) {
  event.preventDefault();
  let APIs = [
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=5d4711618829ec7ba3da47613164f2e5&units=metric`),
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&APPID=5d4711618829ec7ba3da47613164f2e5&units=metric`)
  ]
    
    let currentRes;
    let forecastRes;
		axios.all(APIs)
		.then(result => {
      console.log("success in submitting", result);
      currentRes = result[0].data;
      forecastRes = result[1].data;
      this.setState({currentAPI: currentRes});
      this.setState({forecastAPI: forecastRes});
		})
		.catch(error => {
			console.log(error);
			console.log("error on the call");
		})
}


  render() {

    return (
      <div className="App" >
          <h1>Weather App</h1>

          <Searchbar 
              submitCity  = {this.submitCity} 
              handleInput = {this.handleInput}
              city        = {this.state.city}
          />
          <WeatherDetails 
              currentAPI  = {this.state.currentAPI}
          />

      </div>
    );
  }
}

export default App;
