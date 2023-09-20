let currCity = 'Los Angeles';
let units = 'imperial'

//selectors
let city = document.querySelector(".city");
function convertStateCode(country){
    let regionNames = new Intl.DisplayNames(["en"], {type: "region"});
    return regionNames.of(country)
}
function getWeather()
{
    const API_KEY =

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=imperial`).then(res => res.json()).then(data => {city.innerHTML = `${data.name}, ${convertStateCode(data.sys.country)}`})
}

document.body.addEventListener('load', getWeather())