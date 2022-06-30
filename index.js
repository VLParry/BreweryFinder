window.addEventListener('DOMContentLoaded', () => {
    getBreweries()
    // getRandomBrewery()
    getBreweriesByState()
})


//fetch breweries returns all the breweries to the page once the page is loaded
function getBreweries() {
    const listOfBreweries = document.getElementById('breweries')
    fetch("https://api.openbrewerydb.org/breweries?per_page=100")
        .then(resp => resp.json())
        .then(data => {
            data.forEach(brewery => {
                listOfBreweries.innerHTML +=
                    `<li> <a href="#" data-id="${brewery.id}">* ${brewery.name} - ${brewery.state}</a></li>`

            })
            clicksOnLinks()
        })
}

const clicksOnLinks = () => {
    const breweries = document.querySelectorAll('a')
    breweries.forEach((brewery) =>
        brewery.addEventListener('click', displayBrewery))

}

const displayBrewery = (event) => {
    console.log(event.target.dataset.id)
    const info = document.getElementById('brewery-info')
    const ul = document.getElementById('breweries')
    ul.innerHTML = ' '
    fetch(`https://api.openbrewerydb.org/breweries/${event.target.dataset.id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            breweryinfo.innerHTML =
                `<h1>${data.name}</h1>
    <h3>INFO:</h2>
    <h4>City:</h4>
<p>${data.city}</p>
<h4>State:</h4>
<p>${data.state}</p>
<h4>Website:</h4>
<p>${data.website_url}</p>
<h4>Phone #: </h4>
<p>${data.phone}</p>`
        })
}







//Click a button to get random brewery


// function getRandomBrewery() {
//     const random = document.getElementById('')
//     fetch("https://api.openbrewerydb.org/breweries/random")
//         .then(resp => resp.json())
//         .then(data => {
//             data.forEach(brewery => {
//                 random.innerHTML +=
//                     `<li>${brewery.name} - ${brewery.state}</li>`
//             })

//         })
// }

//Let user input state they want to find breweries in(FORM)
function getBreweriesByState() {
    // GET https://api.openbrewerydb.org/breweries?by_state=new_york&per_page=3
}

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