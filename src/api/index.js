const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=1579bea3d5f54187bd5154913252602";

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
  return await response.json();
};
