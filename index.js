// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

console.log(data);

function createCard(pokemon) {

    let liEl = document.createElement('li')
    liEl.className = 'card'

    let h2El = document.createElement('h2')
    h2El.className = 'card--title'
    h2El.textContent = pokemon.name

    let imgEl = document.createElement('img')
    imgEl.width = '256'
    imgEl.className = 'card--img'
    imgEl.src = pokemon.sprites.front_default

    let ulEl = document.createElement('ul')
    ulEl.className = 'card--text'
    let li2El = document.createElement('li')
    li2El.textContent = pokemon.stats[0].stat.name + ': ' + pokemon.stats[0].base_stat 

    let li3El = document.createElement('li')
    li3El.textContent = pokemon.stats[1].stat.name + ': ' + pokemon.stats[1].base_stat

    let li4El = document.createElement('li')
    li4El.textContent = pokemon.stats[2].stat.name + ': ' + pokemon.stats[2].base_stat

    let li5El = document.createElement('li')
    li5El.textContent = pokemon.stats[3].stat.name + ': ' + pokemon.stats[3].base_stat

    let li6El = document.createElement('li')
    li6El.textContent = pokemon.stats[4].stat.name + ': ' + pokemon.stats[4].base_stat

    let li7El = document.createElement('li')
    li7El.textContent = pokemon.stats[5].stat.name + ': ' + pokemon.stats[5].base_stat

    let theul = document.querySelector('.cards')
    theul.append(liEl)
    liEl.append(h2El, imgEl, ulEl)
    ulEl.append(li2El, li3El, li4El, li5El, li6El, li7El)
}

{/* <li class="card">
<h2 class="card--title">Bulbasaur</h2>
<img
  width="256"
  class="card--img"
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
/>
<ul class="card--text">
  <li>HP: 45</li>
  <li>ATTACK: 49</li>
  <li>DEFENSE: 49</li>
  <li>SPECIAL-ATTACK: 65</li>
  <li>SPECIAL-DEFENSE: 65</li>
  <li>SPEED: 45</li>
</ul>
</li> */}
// function createActorItem(actor) {
//   let liEl = document.createElement('li')
//   liEl.className = 'actor-item'

//   let imgEl = document.createElement('img')
//   imgEl.src = actor.picture
//   imgEl.alt = ''
//   imgEl.width = 200

//   let h2El = document.createElement('h2')
//   h2El.textContent = `Name: ${actor.name}`

//   let ageEl = document.createElement('p')
//   ageEl.textContent = `Age: ${actor.age}`

//   let retirementAge = document.createElement('p')
//   retirementAge.textContent = `Retirement age: ${65 - actor.age}`

//   let deleteActorButton = document.createElement('button')
//   deleteActorButton.textContent = 'Delete'
//   deleteActorButton.addEventListener('click', () => {
//     liEl.remove()
//   })

//   liEl.append(imgEl, h2El, ageEl, retirementAge, deleteActorButton)

//   let actorUl = document.querySelector('.actor-list')
//   actorUl.append(liEl)
// }

 for (let pokemon of data) {
    createCard(pokemon)
 }