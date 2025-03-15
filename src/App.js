import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Search from "./components/Search";
import { useWeather } from "./context/weather";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const weather = useWeather();

  const handleRefresh = async () => {
    setIsLoading(true);
    try {
      await weather.fetchCurrentUserLocationData();
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    weather.fetchCurrentUserLocationData();
  }, [weather]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast</h1>
        <Search />
        <Button onClick={weather.fetchData} value="Search" />
        {isLoading ? <div>Loading...</div> : <Card />}

        <Button onClick={handleRefresh} value="Refresh" type="reset" />
      </header>
    </div>
  );
}

export default App;
