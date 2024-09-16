function getWeather(){

    const apiKey = '390fef299780cf53b2aca2303adea2be'
    const city = document.getElementById('city').value

    if (!city){
        alert("Please enter a city")
        return;
    }
 
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`


}
