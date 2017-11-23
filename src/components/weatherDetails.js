import React, { Component } from 'react';

import clouds from '../img/clouds.jpeg';
import rain from '../img/rain.jpeg';
import snow from '../img/snow.jpeg';
import sun from '../img/sun.jpeg';
import mist from '../img/mist.jpeg';
import weather from '../img/weather.jpeg';
import clear from '../img/clear.jpeg';

class WeatherDetails extends Component {

    render(){
        let description;
        let currentAPI = this.props.currentAPI
        console.log(currentAPI, 'props to weather details')
        if (Object.keys(currentAPI).length === 0) {
          description = (
            <div className="col-md-4">
              <img src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif" alt="loading gif" />
            </div>
          )
        } else {
          let imageWeather
          if (currentAPI.weather[0].main === 'Clouds') {
            imageWeather = (<img className='weather-img' src={clouds} alt="weather-img"/>)
          } else if (currentAPI.weather[0].main === 'Rain'){
            imageWeather = (<img className='weather-img' src={rain} alt="weather-img"/>)
          }else if (currentAPI.weather[0].main === 'Snow'){
            imageWeather = (<img className='weather-img' src={snow} alt="weather-img"/>)
          }else if (currentAPI.weather[0].main === 'Mist'){
            imageWeather = (<img className='weather-img' src={mist} alt="weather-img"/>)
          }else if (currentAPI.weather[0].main === 'Clear'){
            imageWeather = (<img className='weather-img' src={clear} alt="weather-img"/>)
          }else if (currentAPI.weather[0].main === 'Sun'){
            imageWeather = (<img className='weather-img' src={sun} alt="weather-img"/>)
          } else{
            imageWeather = (<img className='weather-img' src={weather} alt="weather-img"/>)
          }
          console.log(imageWeather)
          description = (
            <div className="col-md-4">
              <div>
                {imageWeather}
                <p>the weather in {currentAPI.name} it's {currentAPI.weather[0].main}</p>
                <p>{currentAPI.weather[0].description}</p>
                <p>the temperature is {currentAPI.main.temp} °C with a minimun of {currentAPI.main.temp_min} °C and a max of {currentAPI.main.temp_max}°C</p>
              </div>
            </div>
          )
        }
        return(
            <div>
                {description}
            </div>
        )
      
    }

}

export default WeatherDetails;