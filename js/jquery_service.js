async function getPokemons(limit){
    let datos = null;    
    await $.ajax({
        //method: "GET",
        url: `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`,
        //data: { name: "John", location: "Boston" }
    })
    .done(function(response) {
        datos = response.results;
    })
    .fail(function(e) {
        console.warn(e);
    }); 
    
    return datos;
}

async function getPokemonData(url){
    let datos = null;    
    await $.ajax({
        //method: "GET",
        url: url,
        //data: { name: "John", location: "Boston" }
    })
    .done(function(response) {
        datos = response;
    })
    .fail(function(e) {
        console.warn(e);
    });    
    return datos;
}