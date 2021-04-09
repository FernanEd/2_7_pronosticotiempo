const API_KEY = "653ada71ed7b4d56228b06e2f0fc17b5";
const cityName = "tampico";
const displayedDays = 15;

const getWeatherData = async () => {
  let res = await fetch(
    `api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=${displayedDays}&appid=${API_KEY}`
  );
  let data = await res.json();

  console.log(data);
};

getWeatherData();
