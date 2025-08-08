const searchInput = document.getElementById('search');
const clearButton = document.getElementById('clear-id');
const searchField = document.getElementById('city-name');

// function to receive input

function receiveInput() {
    const cityName = searchInput.value;
    if (cityName) {
        searchField.textContent = cityName;
    } else {
        alert('Please enter a city name');
    }
}

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        receiveInput();
    }
});

// function to clear input field
function clearInput() {
    searchInput.value = '';
    searchField.textContent = 'San Francisco';
}

clearButton.addEventListener('click', clearInput);