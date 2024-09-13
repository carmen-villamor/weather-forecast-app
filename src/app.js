function updateWeather(response) {
  //console.log(response.data);
  let temperature = response.data.temperature.current;
  let city = response.data.city;
  //console.log(temperature);
  let tempValueElement = document.querySelector("#weather-app-temp-value");
  let cityElement = document.querySelector("#weather-app-city");
  tempValueElement.innerHTML = Math.round(temperature);
  cityElement.innerHTML = city;
}

function searchCity(city) {
  let apiKey = "b31e4f8fab9a29e19b02bcteb776oab4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let input = document.querySelector("#search-form-input");
  //let city = document.querySelector("#weather-app-city");
  //city.innerHTML = input.value;
  searchCity(input.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

searchCity("sydney");
