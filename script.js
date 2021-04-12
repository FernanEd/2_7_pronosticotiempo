const API_KEY = "653ada71ed7b4d56228b06e2f0fc17b5";
const tampico = {
  lat: 22.3,
  lon: -97.85,
};

const toCelsius = (kelvin) => Math.floor((kelvin - 273) * 10) / 10;

const getWeatherData = async () => {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${tampico.lat}&lon=${tampico.lon}&exclude=hourly,minutely,alerts&appid=${API_KEY}`
  );
  let data = await res.json();
  console.log(data.daily);
  populateContent(data.daily);
};

const populateContent = (data) => {
  const $wrapper = document.querySelector("#pronostico-wrapper");

  $wrapper.innerHTML = data
    .map(({ dt, pressure, temp, weather }, i) => {
      return `<div class='pronostico-item'>
      <div>${new Date(dt).toLocaleDateString()}</div>
      <div>${pressure}mb</div>
      <div>${toCelsius(temp.min)}C   ${toCelsius(temp.max)}C</div>
      <div>${weather[0].main}</div>
      </div>`;
    })
    .join("");
};

getWeatherData();
