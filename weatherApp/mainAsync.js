const API_KEY = '1e37aa1d6e7893e46fc18e5a28e8561e';
const output = document.querySelector('.output');
const searchCity = document.querySelector('.searchCity');

searchCity.addEventListener('submit', (e)=> {
  e.preventDefault();

  const cityValue = searchCity.city.value.trim();

  if(!cityValue || !isNaN(cityValue)){
    return;
  }

  getWeather(cityValue)
  searchCity.city.value = '';
});


const imprimirDatosTiempo = (data) => {
 
  const sunrise = new Date(data.sunrise * 1000);
  const sunset = new Date(data.sunset * 1000);

  const timeOptions = {    
    hour: 'numeric',
    minute: 'numeric'
  }
  const sunriseTime = sunrise.toLocaleString('es', timeOptions);
  const sunsetTime = sunset.toLocaleString('es', timeOptions);

  output.className = 'output row mt-4 py-4 shadow rounded';

  output.innerHTML = `
  <div class="col-12 mb-3">
    <h2 class="display-5 text-center">${data.city}</h2>
  </div> 
  <div class="col-6 d-flex flex-column justify-content-center">
    <img src="http://openweathermap.org/img/wn/${data.icon}@2x.png" alt="Icono del tiempo de hoy">
    </div>
    <div class="col-6 d-flex flex-column justify-content-center">
    <h2>${data.temp}º</h2>
    <h3 class="display-6 fs-6">${data.desc}</h3>
    <h3 class="display-6 fs-6"><span class="text-danger">🌡 ${data.max}º</span> / <span class="text-primary">${data.min}º</span></h3>
    <h3 class="display-6 fs-6">💧 ${data.hum}%</h3>
    <h3 class="display-6 fs-6">☀⬆ ${sunriseTime} </h3>
    <h3 class="display-6 fs-6">☀⬇ ${sunsetTime} </h3>
  </div>
  `;
}

const getWeather = async (city = 'Barcelona') => {
  try {
    const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`);

    const data = await respuesta.json();
    
    const datosTiempo = {
      city: data.name,
      temp: data.main.temp,
      max: data.main.temp_max,
      min: data.main.temp_min,
      hum: data.main.humidity,
      icon: data.weather[0].icon,
      desc: data.weather[0].description,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      time_offset: data.timezone
    }
    imprimirDatosTiempo(datosTiempo);
  }catch(err) {
    console.log(err);
  }
}

getWeather();

 