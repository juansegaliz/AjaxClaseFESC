async function getPokemons(limit){
    let datos = null;
    await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
    .then(response => {
        datos = response.data.results;
    })
    .catch(e => {
        console.warn(e);
    })
    return datos;
}

async function getPokemonData(url){
    let datos = null;
    await axios.get(url)
    .then(response => {
        datos = response.data;
    })
    .catch(e => {
        console.warn(e);
    })
    return datos;
}