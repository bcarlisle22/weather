
import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentForecast, setCurrentForecast] = useState(null);

  const handleOnSearchChange = (searchData) =>{   // was initally outside of the function
    const[lat, lon] = searchData.value.split(" ");
   
    const currentWeatherFetch = fetch (`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY})}`);
    const currentForecastFetch = fetch (`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY})}`);

    Promise.all([currentWeatherFetch, currentForecastFetch])
    .then(async(response)=> {
      const weatherResponse = await response [0].json();
      const forecastResponse = await response [1].json();

      setCurrentWeather({ city: searchData.label , ...weatherResponse});
      setCurrentForecast({ city: searchData.label , ...forecastResponse});

    })

    .catch((err) => console.log(err));
  }

  console.log(currentWeather);
  console.log(currentForecast);

  return (
    <div className="container">
      <Search onSearchChange = {handleOnSearchChange}/>
    </div>
  );
}

export default App;
