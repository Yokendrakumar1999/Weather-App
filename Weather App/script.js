const apikey = "f92e5ac29739db8a8ba5d5f875e260ff";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const inputbox = document.querySelector(".search input");
const searchbutton = document.querySelector(".search button");
const weathericon = document.querySelector(".weatherimages");
const gifimage = document.querySelector(".gif");

async function checkweather(cityname) {
  const response = await fetch(apiurl + cityname + `&appid=${apikey}`);
  let data = await response.json();

  document.querySelector(".cityname").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML =
    Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weathericon.src = "weather icons/cloudy.png";
  } else if (data.weather[0].main == "Rain") {
    weathericon.src = "weather icons/rain.png";
  } else if (data.weather[0].main == "Clear") {
    weathericon.src = "weather icons/sun.png";
  } else if (data.weather[0].main == "Fog") {
    weathericon.src = "weather icons/fog.png";
  } else if (data.weather[0].main == "Drizzle") {
    weathericon.src = "weather icons/sun-and-cloud-65PMRJT84G.png";
  }

  document.querySelector(".weather").style.display = "block";
  gifimage.style.display = "none";
}

function cityname() {
  let city = inputbox.value || "Bengaluru"; 
  checkweather(city);
}

checkweather("Bengaluru");

searchbutton.addEventListener("click", cityname);
