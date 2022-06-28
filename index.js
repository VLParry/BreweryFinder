//Let user input state they want to find breweries in(FORM)


//fetch breweries from that state (EVENT LISTENER)


//display the name of the brewries (iteration)


//When user clicks on brewery, show brewery details (EVENT LISTENER)


//Show a hide button once the details are displayed


//Hide details of brewery (EVENT LISTENER)






// const fetchBrewery = () => {
    fetch("https://api.openbrewerydb.org/breweries?per_page=20")
    .then(resp => resp.json())
    .then(data => {
        console.log("data", data)
    })
// }