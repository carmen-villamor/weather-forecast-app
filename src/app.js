function handleSubmit(event) {
  event.preventDefault();
  let input = document.querySelector("#search-form-input");
  let city = document.querySelector("#weather-app-city");
  city.innerHTML = input.value;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
