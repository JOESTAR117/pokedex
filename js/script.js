const pokemonname = document.querySelector('.pokemon-name')
const pokemonNumber = document.querySelector('.pokemon-number')
const pokemonimage = document.querySelector('.pokemon-image')

const form = document.querySelector('.form')
const input = document.querySelector('.input-search')
const prev = document.querySelector('.btn-prev')
const next = document.querySelector('.btn-next')

let searchPokemon =1

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (APIResponse.status === 200) {
        const data = await APIResponse.json()
        return data
    }

    
}

const renderPokemon = async (pokemon) => {
    pokemonname.innerHTML ='Loading...'
    pokemonNumber.innerHTML=''

    const data = await fetchPokemon(pokemon)

    if(data) {
        pokemonname.innerHTML = data.name
        pokemonNumber.innerHTML = data.id
        pokemonimage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        searchPokemon = data.id
    }else{
        pokemonname.innerHTML ='Not found :('
        pokemonNumber.innerHTML =''
        pokemonimage.getElementsByClassName.display ='none'
    }
}

form.addEventListener('submit', () => {
    event.preventDefault()
    renderPokemon(input.value.toLowerCase())
    input.value = ''
})
prev.addEventListener('click', () => {
    if (searchPokemon > 1) {
        searchPokemon --
        renderPokemon(searchPokemon)
    }
  
})
next.addEventListener('click', () => {
    searchPokemon ++
    renderPokemon(searchPokemon)
})

renderPokemon(searchPokemon)