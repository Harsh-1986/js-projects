const apiKey = "b5a4cf1013e23eb7814be7320b461283";
const apiLink = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let input = document.querySelector(".text")
let button = document.querySelector("button")
let weatherIcon = document.querySelector(".weather-icon")
console.log(weatherIcon.src);


async function checkWeather(city) {
    let response = await fetch(apiLink +city+`&appid=${apiKey}`);
    console.log(response);
    let data = await response.json();
    console.log(data);
    document.querySelector("h1").innerHTML = Math.round(data.main.temp)+`°C`;
    document.querySelector("h2").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%"
    document.querySelector(".wind-speed").innerHTML= Math.round(data.wind.speed)+" Km/h"
    
    if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./images/sunny.png"

    }else if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/clouds.png"

    }else {
        weatherIcon.src = "./images/rainy.png"

    }
    
}


button.addEventListener("click",()=>{
    let city = input.value;
    checkWeather(city)
})