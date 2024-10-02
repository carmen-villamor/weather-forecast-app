function updateWeather(response) {
  console.log(response.data);
  let temperature = response.data.temperature.current;
  let city = response.data.city;
  let description = response.data.condition.description;
  let humidity = response.data.temperature.humidity;
  let wind = response.data.wind.speed;
  let date = new Date(response.data.time * 1000);
  let iconUrl = response.data.condition.icon_url;
  let icon = `<img
      src=${iconUrl}
      class="weather-app-temp-icon"
    />`;

  let tempValueElement = document.querySelector("#weather-app-temp-value");
  let cityElement = document.querySelector("#weather-app-city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let iconElement = document.querySelector("#icon");

  tempValueElement.innerHTML = Math.round(temperature);
  cityElement.innerHTML = city;
  descriptionElement.innerHTML = description;
  humidityElement.innerHTML = `${humidity}%`;
  windElement.innerHTML = `${wind}km/h`;
  timeElement.innerHTML = formatDate(date);
  iconElement.innerHTML = icon;
}

function formatDate(date) {
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${days[day]} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "b31e4f8fab9a29e19b02bcteb776oab4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let input = document.querySelector("#search-form-input");
  searchCity(input.value);
}

function displayForecast() {
  let forecast = document.querySelector("#weather-forecast");

  let days = ["Tues", "Wed", "Thurs", "Fri", "Sat"];

  days.forEach(function (day) {
    forecast.innerHTML += `   <div class="weather-forecast-day">
            <div class="weather-forecast-date">${day}</div>
            <div class="weather-forecast-icon">⛅️</div>
            <div class="weather-forecast-temperatures">
              <div class="weather-forecast-temp"><strong>15°</strong></div>
              <div class="weather-forecast-temp">9°</div>
            </div>
          </div>`;
  });
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

searchCity("sydney");
displayForecast();
