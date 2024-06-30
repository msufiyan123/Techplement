document.getElementById('get-weather-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeather(city);
    }
});

function getWeather(city) {
    const apiKey = 'your_openweathermap_api_key'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city-name').innerText = data.name;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
            } else {
                document.getElementById('city-name').innerText = 'City not found';
                document.getElementById('temperature').innerText = '';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('city-name').innerText = 'Error fetching weather data';
            document.getElementById('temperature').innerText = '';
        });
}
document.getElementById('get-weather-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeather(city);
    }
});

function getWeather(city) {
    const apiKey = '72532b0ba3c39891950adfb34f2a2fb3'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city-name').innerText = data.name;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
            } else {
                document.getElementById('city-name').innerText = 'City not found';
                document.getElementById('temperature').innerText = '';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('city-name').innerText = 'Error fetching weather data';
            document.getElementById('temperature').innerText = '';
        });
}
