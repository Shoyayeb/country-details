const fetchCountry = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(data => showCountry(data))
}
const showCountry = (countries) => {
    const countryHTML = countries.map(country => getCountyHTML(country));
    const container = document.getElementById("countries")
    container.innerHTML = countryHTML.join('')
}
const getCountyHTML = country => {
    return `
        <div class="country">
            <h2>${country.name}</h2>
            <h4> Capital: ${country.capital}</h4>
            <img src="${country.flag}">
        </div>
    `
}
fetchCountry('https://restcountries.eu/rest/v2/all')

document.getElementById("search-btn").addEventListener("click", function showCustomCountry() {
    const searchedCountry = document.getElementById("searchedCountry").value
    const customUrl = `https://restcountries.eu/rest/v2/name/${searchedCountry}`
    fetchCountry(customUrl)
})
