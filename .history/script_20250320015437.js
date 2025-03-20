const apiKey = "";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".card__search input");
const searchBtn = document.querySelector(".card__search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + &appid=${apiKey});
  if (response.status == 404) {
    //event when you input city in text error -> open card
    document.querySelector(".card__error").style.display = "block";
    document.querySelector(".card__weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".weather__city").innerHTML = data.name;
    document.querySelector(".weather__temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".weather__detail--col .humidity").innerHTML =
      data.main.humidity + "%";
    document.querySelector(".weather__detail--col .wind").innerHTML =
      data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }

    //event when you input city in text success -> open card
    document.querySelector(".card__weather").style.display = "block";
    document.querySelector(".card__error").style.display = "none";
  }

  // console.log(data);
}
// input event when you input name of city
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});