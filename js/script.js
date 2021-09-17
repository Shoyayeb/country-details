const fetchCountry = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => showCountry(data))
}
const showCountry = (countries) => {
    console.log(countries[0]);
    const countryHTML = countries.map(country => getCountyHTML(country));
    const container = document.getElementById("countries")
    container.innerHTML = countryHTML[0]
}
const getCountyHTML = country => {
    return `
        <div>
            <h2>${country.name}</h2>
            <h4> Capital: ${country.capital}</h4>
            <img src="${country.flag}">
        </div>
    `
}
fetchCountry()