async function getPokemons(limit){
    let datos = null;    
    await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`).then(function (response) {
        return response.json();
    }).then(function (data){ 
        datos = data.results;
    }).catch(function (e) {
        console.warn(e);
    });    
    return datos;
}

async function getPokemonData(url){
    let datos = null;    
    await fetch(url).then(function (response) {
        return response.json();
    }).then(function (data){ 
        datos = data;
    }).catch(function (e) {
        console.warn(e);
    });    
    return datos;
}