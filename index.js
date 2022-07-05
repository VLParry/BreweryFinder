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

            })
    }




    //allows user to enter state and find breweries in that state (EVENT LISTENER)
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        listOfBreweries.innerHTML = ""
        const searchInput = document.getElementById('search')
        const searchValue = searchInput.value.toLowerCase().replace(" ", "_")
        searchInput.value = ''
        getBreweriesByState(searchValue)

    })


    //changes link(li) color when the user's mouse goes over it (EVENT LISTENER)
    listOfBreweries.addEventListener("mouseover", (event) => {
        event.target.style.color = "red"
        setTimeout(function () {
            event.target.style.color = ""
        }, 300)
    }, false)
})





function displayBrewery(event) {
    const breweryInfo = document.getElementById('breweryinfo')
    const ul = document.getElementById('breweries')
    ul.innerHTML = ' '
    fetch(`https://api.openbrewerydb.org/breweries/${event.target.dataset.id}`)
        .then(resp => resp.json())
        .then(data => {
            breweryInfo.innerHTML =
                `<h2 class="brewery-name">${data.name}</h2>
            </br>
                <h4 class="brewery-city">City:</h4>
                 <p>${data.city}</p>
                <h4>State:</h4>
                <p>${data.state}</p>
                <h4>Website:</h4>
                <p>${data.website_url}</p>
                <h4>Phone #: </h4>
                <p>${data.phone}</p>`
        })

}


