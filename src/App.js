import React from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Search from "./components/Search";
import { useWeather } from "./context/weather";

function App() {
  const weather = useWeather();
  console.log(weather);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast</h1>

        <Search />
        <Button onClick={weather.fetchData} value="Search" />
        <Card />
        <Button value="Refresh" />
      </header>
    </div>
  );
}

export default App;
