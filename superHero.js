const searchInput = document.getElementById("searchInput")
const searchButton = document.getElementById("searchButton")
const randomButton = document.getElementById("randomButton")
const heroImage = document.getElementById("heroImage")

const superHero_token = '5956653471037022'
const base_url = `https://superheroapi.com/api.php/${superHero_token}`

function getSuperHero(id) {
    debugger
    fetch(`${base_url}/${id}`)
    .then(response => response.json())
        .then(json => {
            console.log(json.name)
            console.log(json.powerstats)
            const superHero = json
           showHeroInfo(superHero)
            
        })

}

function searchbar(name) {
    debugger
    fetch(`${base_url}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        console.log(json.results)
        if(json.results != undefined) {
            
            const superHero = json.results[1]
            showHeroInfo(superHero)
        }
        else {
            heroImage.innerHTML = `These are not the heros youre looking for`
        }
    })

}

function randomHero() {
    debugger
    const numberOfHero = 731
    return Math.floor(Math.random()*numberOfHero) + 1
}

const emoji = {
    intelligence: 'Brain',
    strength: 'Flex',
    speed: 'Light',
    durability: 'Lift',
    power: 'Table',
    combat: 'Sword',
}

function showHeroInfo(character) {
    const name = `<h2>${character.name}</h2>`
    const image = `<img src="${character.image.url}"height=200 width=200/>`
    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p> ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join('')
    heroImage.innerHTML = `${name}${image}${stats}`
}

randomButton.onclick = () => getSuperHero(randomHero())
searchButton.onclick = () => searchbar(searchInput.value)