const API_KEY = "653ada71ed7b4d56228b06e2f0fc17b5";
const tampico = {
  lat: 22.3,
  lon: -97.85,
};

const getWeatherData = async () => {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${tampico.lat}&lon=${tampico.lon}&exclude=hourly,minutely,alerts&appid=${API_KEY}`
  );
  let data = await res.json();
  populateContent(data.daily.map((dia) => dia.temp.day));
};

const populateContent = (clima7Dias) => {
  const $wrapper = document.querySelector("#pronostico-wrapper");
  $wrapper.innerHTML = clima7Dias
    .map((kelvin, i) => {
      let clima = Math.floor((kelvin - 273.15) * 10) / 10;
      if (i === 0) {
        return `<div class='pronostico-item'>Hoy: ${clima}°C</div>`;
      } else {
        return `<div class='pronostico-item'>En ${i} dia(s): ${clima}°C</div>`;
      }
    })
    .join("");
};

getWeatherData();
