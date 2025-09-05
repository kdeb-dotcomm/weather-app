const searchInput = document.getElementById('search');
const clearButton = document.getElementById('clear-id');
const searchField = document.getElementById('city-name');
const apiKey = '98cf663da248414f4d0e4c394ef90469';
// function to receive input

function receiveInput() {
    const cityName = searchInput.value.trim();
    // let check if an input was a city

    if (!cityName) {
        alert('Please enter a city name');
        return;
    } 

    // let call the weather API and check for the city
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${apiKey}&units=metric`)
        .then(res => {
            if(!res.ok){
                throw ('City not found');
            }
            return res.json();
        })
        .then(data=> {
            console.log(data);
            const name = data.name;
            const temp = Math.round(data.main.temp);
            const icon = data.weather[0].icon;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;


            searchField.textContent = name;
            document.getElementById('temperature').innerHTML = `${temp}°C`;
            document.getElementById('weather').innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
            document.getElementById('desc').textContent = description.charAt(0).toUpperCase() + description.slice(1);
            document.getElementById('exemptional-p').textContent = `${Math.round(data.main.temp_max)}°C`;
            document.querySelector('.prev').textContent = `${Math.round(data.main.temp_min)}°C`;
            document.querySelector('.exemptional-pp').textContent = `${Math.round(windSpeed)}`;
            document.querySelector('.add').textContent = 'km/h';
            document.querySelector('.humidity').textContent = `${humidity}%`;


        })
        .catch(err  =>{
            console.error(err);
            alert('City not found. Please enter a valid City name.');
        })
}

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        receiveInput();
        clearInput()
    }
});

// function to clear input field
function clearInput() {
    searchInput.value = '';
    searchField.textContent = 'Search for a City';
}

clearButton.addEventListener('click', clearInput);

