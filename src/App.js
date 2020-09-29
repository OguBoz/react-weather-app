import React from 'react';
import './App.css';
import Heading from './components/Heading';
import Form from './components/Form';
import Forecast from './components/Forecast';

const api_key = '4da4864f60e6213dbee5bc3a6d6ce8eb';

class App extends React.Component {
  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    pressure: '',
    icon: '',
    description: '',
    error: ''
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${api_key}`)
    const response = await api_call.json();

    if(city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        pressure: response.main.pressure,
        icon: response.weather[0].icon,
        description: response.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        error: 'Please fill out required fields...'
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Heading />
        <Form loadWeather={this.getWeather}  />
        <Forecast 
          temperature={this.state.temperature} 
          city= {this.state.city}
          country= {this.state.country}
          humidity= {this.state.humidity}
          pressure= {this.state.pressure}
          icon= {this.state.icon}
          description={ this.state.description}
          error= {this.state.error}
        />
      </div>
    );
  }
}

export default App;