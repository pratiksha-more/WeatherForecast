import React from 'react';
import { useWeather } from '../context/weather';

const Card = () => {
  const weather = useWeather();

  console.log('Weather data:', weather);

  if (!weather || !weather.data) {
    return <div className='card'><h1>No weather data available</h1></div>;
  }

  return (
    <div className='card'>
        <h1>Card</h1>
        {weather.data.current?.condition?.icon && (
          <img src={weather.data.current.condition.icon} alt="Weather Icon" />
        )}
        <h2>{weather.data.current?.temp_c} °C</h2>
        <h5>{weather.data.location?.name},{weather.data.location?.region}{" "},{weather.data.location?.country}</h5>
        
    </div>
  );  
};  

export default Card;