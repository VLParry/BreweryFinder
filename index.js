window.addEventListener('DOMContentLoaded', () => {
    const listOfBreweries = document.getElementById('breweries')
    const form = document.getElementById('search-brewery')
    

    //Let user input state they want to find breweries in(FORM)
    function getBreweriesByState(state) {
        fetch(`https://api.openbrewerydb.org/breweries?by_state=${state}&per_page=50`)
            .then(resp => resp.json())
            .then(data => {
                data.forEach(brewery => {
                    listOfBreweries.innerHTML +=
                        `<li> <a onclick="displayBrewery(event)" href="#" data-id="${brewery.id}">* ${brewery.name} - ${brewery.state}</a></li>`
                })
                console.log("data", data)
            })
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
                </br>
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

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        console.log('test')
        listOfBreweries.innerHTML = ""
        const searchInput = document.getElementById('search')
        const searchValue = searchInput.value.toLowerCase().replace(" ", "_")
        getBreweriesByState(searchValue)
        
    })
})





// const clicksOnLinks = () => {
//     const breweries = document.querySelectorAll('a')
//     breweries.forEach((brewery) =>
//         brewery.addEventListener('click', displayBrewery))

// }





// function getAllBreweries() {


//     fetch("https://api.openbrewerydb.org/breweries?per_page=51")
//         .then(resp => resp.json())
//         .then(data => {
//             // console.log("data", data)
//             // display the name of the breweries (iteration)
//             data.forEach(brewery => {
//                 listOfBreweries.innerHTML +=
//                     `<li> <a href="#" data-id="${brewery.id}">* ${brewery.name} - ${brewery.state}</a></li>`

//             })
//             clicksOnLinks()
//         })
// }
//When user clicks on brewery, show brewery details (EVENT LISTENER)
//this function makes the links clickable and brings user to brewery info by calling the displayBrewery function