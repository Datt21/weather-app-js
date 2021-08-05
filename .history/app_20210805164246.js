const APP_ID = '7da4c9404d786bf671905a74c989c8f4'; // API Key luu o serve de tranh lo key 

const searchInput = document.querySelector('#search-input');


searchInput.addEventListener('change', (e) => {
    // console.log('[Search]', e);   
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}`)
    .then( async res => {
        const data = await res.json();
        console.log('[Search Input]', data)
    })
});