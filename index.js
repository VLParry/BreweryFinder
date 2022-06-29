window.addEventListener('DOMContentLoaded', () => {
    getBreweries()
    getRandomBrewery()
})


//fetch breweries returns all the breweries to the page once the page is loaded
function getBreweries() {
    const listOfBreweries = document.getElementById('breweries')
    fetch("https://api.openbrewerydb.org/breweries?per_page=30")
        .then(resp => resp.json())
        .then(data => {
            data.forEach(brewery => {
                listOfBreweries.innerHTML +=
                    `<li> <a href="#">* ${brewery.name} - ${brewery.state}</a></li>`
            })

        })
}
//Click a button to get random brewery


function getRandomBrewery() {
    const random = document.getElementById('random')
    fetch("https://api.openbrewerydb.org/breweries/random")
        .then(resp => resp.json())
        .then(data => {
            data.forEach(brewery => {
                random.innerHTML +=
                    `<li>${brewery.name} - ${brewery.state}</li>`
            })

        })
}

//Let user input state they want to find breweries in(FORM)


//fetch breweries from that state (EVENT LISTENER)


//display the name of the brewries (iteration)


//When user clicks on brewery, show brewery details (EVENT LISTENER)


//Show a hide button once the details are displayed


//Hide details of brewery (EVENT LISTENER)






// const fetchBreweries = () => {
//     fetch("https://api.openbrewerydb.org/breweries?per_page=30")
//         .then(resp => resp.json())
//         .then(data => {
//             console.log("data", data)
//         })
// }