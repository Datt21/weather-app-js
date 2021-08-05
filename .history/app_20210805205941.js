const APP_ID = '7da4c9404d786bf671905a74c989c8f4'; // API Key luu o serve de tranh lo key 
const DEFAULT_VALUE = '--';

const searchInput = document.querySelector('#search-input');
const cityName =document.querySelector('.city-name'),
      weatherState = document.querySelector('.weather-state')
      weatherIcon = document.querySelector('weather-icon')
      temperature = document.querySelector('teamperature');

const sunrise = document.querySelector('.sunrise') 
const sunset = document.querySelector('.sunset') 
const humidity = document.querySelector('.humidity')
const windSpeed = document.querySelector('.wind-speed');

searchInput.addEventListener('change', (e) => {
    // console.log('[Search]', e);   
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric`)
    .then( async res => {
        const data = await res.json();
        console.log('[Search Input]', data);
        cityName.innerHTML = data.name || DEFAULT_VALUE;
    })
});