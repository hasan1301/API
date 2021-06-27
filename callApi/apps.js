fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))


let displayCountries = countries => {
    let countiesDiv = document.getElementById('countries')

    countries.forEach(country => {
        let countryDiv = document.createElement('div');
        countryDiv.className = 'country'

        let countryInfo = `
            <h3 class= 'country-name'> ${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick= "displayCountriesDetail('${country.name}')">Details</button>
        `

        countryDiv.innerHTML = countryInfo

        countiesDiv.appendChild(countryDiv);
    });

    // for (let i = 0; i < countries.length; i++) {
    // const country = countries[i];
    // let countryDiv = document.createElement('div');
    // countryDiv.className = 'country'

    // let countryInfo = `
    //     <h3 class= 'country-name'> ${country.name}</h3>
    //     <p>${country.capital}</p>
    // `

    // let countryName = document.createElement('h2');
    // countryName.innerText = country.name;

    // let countryCapital = document.createElement('p');
    // countryCapital.innerText = country.capital;

    // countryDiv.appendChild(countryName);
    // countryDiv.appendChild(countryCapital);
    // countryDiv.innerHTML = countryInfo

    // countiesDiv.appendChild(countryDiv);

    // }
}

let displayCountriesDetail = name => {
    let url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]))
}
let renderCountryInfo = country => {
    let countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
        <h1>${country.name}</h1>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <img src="${country.flag}">
        
    `
}