
//selectors
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.getElementById("humidityNumber");
let wind = document.getElementById("windNumber");
let pressure = document.getElementById("pressureNumber");
let searchBox = document.querySelector(".search input");
let searchButton = document.querySelector(".search button");
let icon = document.querySelector(".icon");
let type = document.querySelector(".type");

function convertCountryCode(country){
    let regionNames = new Intl.DisplayNames(["en"], {type: "region"});
    return regionNames.of(country)
}


async function getWeather(City)
{
    const API_KEY = ''

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}&units=imperial`);
    var data = await response.json();
    console.log(data);

    city.innerHTML = data.name + ', '+ convertCountryCode(data.sys.country);
    temp.innerHTML = data.main.temp + '°F';
    humidity.innerHTML = data.main.humidity + '%';
    wind.innerHTML = data.wind.speed + " Mph";
    pressure.innerHTML = data.main.pressure + " hPa";

    if (data.weather[0].main == "Clouds")
    {
        icon.src = "images/clouds.png";
        type.innerHTML = "Cloudy"
    }
    else if (data.weather[0].main == "Clear")
    {
        icon.src = "images/clear.png"
        type.innerHTML = "Clear";
    }
    else if (data.weather[0].main == "Rain")
    {
        icon.src = "images/rain.png"
        type.innerHTML = "Raining";
    }
    else if (data.weather[0].main == "Drizzle")
    {
        icon.src = "images/drizzle.png"
        type.innerHTML = "Drizzling";
    }
    else if (data.weather[0].main == "Mist")
    {
        icon.src = "images/mist.png"
        type.innerHTML = "Foggy";
    }
}
searchButton.addEventListener("click", ()=>{
    getWeather(searchBox.value);
})

searchBox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      getWeather(searchBox.value);
    }
});

document.body.addEventListener('load', getWeather("Los Angeles"))