const searchBtn = document.getElementById('search-btn');
const input = document.getElementById('input-box');

async function checkContry(country) {
    let countryName = input.value;
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    if(response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.result').style.display = 'none';
    } else {
        let data = await response.json()
        console.log(data);
        document.querySelector('.flag').src = data[0].flags.svg;
        document.querySelector('.capital').innerHTML = data[0].capital[0];
        document.querySelector('.continent').innerHTML = data[0].continents[0];
        document.querySelector('.population').innerHTML = data[0].population;
        document.querySelector('.currency').innerHTML = Object.keys(data[0].currencies) + ' - ' + data[0].currencies[Object.keys(data[0].currencies)].name;
        document.querySelector('.lang').innerHTML = Object.values(data[0].languages);
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.result').style.display = 'block';
    }
}



searchBtn.addEventListener('click', () => {
    let countryName = input.value;
    checkContry()
})