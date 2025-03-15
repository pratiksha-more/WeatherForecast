import React from 'react'
import { useWeather } from '../context/weather';

const Search=()=>{
  const weather=useWeather(0);
  
  return(
    <>
      <input className='inputfield'
      placeholder='Search here'
      value={weather.searchCity}
      onChange={(e)=>weather.setSearchCity(e.target.value)}
      />
    </>
  );


};

export default Search;