const pokemon = require('./data.js')

const game = {
  party: [],
  gyms: [
    { location: 'Pewter City', completed: false, difficulty: 1 },
    { location: 'Cerulean City', completed: false, difficulty: 2 },
    { location: 'Vermilion City', completed: false, difficulty: 3 },
    { location: 'Celadon City', completed: false, difficulty: 4 },
    { location: 'Fuchsia City', completed: false, difficulty: 5 },
    { location: 'Saffron City', completed: false, difficulty: 6 },
    { location: 'Cinnabar Island', completed: false, difficulty: 7 },
    { location: 'Viridian City', completed: false, difficulty: 8 }
  ],
  items: [
    { name: 'potion', quantity: 4 },
    { name: 'pokeball', quantity: 8 },
    { name: 'rare candy', quantity: 99 }
  ],
  gymStatus() {
    const gymTally = {
      completed: 0,
      incomplete: 0
    }
    game.gyms.forEach((gym) => {
      if (gym.completed === true) {
        gymTally.completed += 1
      } else {
        gymTally.incomplete += 1
      }
    })

    console.log(gymTally)
  },
  partyCount() {
    return game.party.length
  }
}

/*
Exercise 3
Solve Exercise 3 here:
*/
game.difficulty = 'easy'

/*
Exercise 4
Solve Exercise 4 here:
*/

game.party.push(pokemon[24])

/*
Exercise 5
*/
//game.party.push(pokemon[112], pokemon[39], pokemon[149])
game.party.push(pokemon[112])
game.party.push(pokemon[39])
game.party.push(pokemon[149])

/*
Exercise 6
*/

game.gyms.forEach((level) => {
  if (level.difficulty < 3) {
    level.completed = true
  }
})

/*
Exercise 7
Solve Exercise 7 here:
*/
//solution without solice: game.party[0] = pokemon[25]
game.party.splice(0, 1, pokemon[25])
/*
Exercise 8
*/
console.log('Q8 result:------------------')
for (let i = 0; i < game.party.length; i++) {
  console.log(game.party[i].name)
}

/*
Exercise 9
*/
console.log('Q9 result:------------------')
for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].starter === true) {
    console.log(pokemon[i].name)
  }
}
/*
Exercise 10
Solve Exercise 10 here:
*/
game.catchPokemon = function (pokemonObj) {
  game.party.push(pokemonObj)
}
game.catchPokemon(pokemon[88])

/*
Exercise 11
Solve Exercise 11 here:
*/
game.catchPokemon = function (pokemonObj) {
  game.party.push(pokemonObj)
  game.items[1].quantity -= 1
}
game.catchPokemon(pokemon[90])

/*
Exercise 12
Solve Exercise 12 here:
*/
game.gyms.forEach((level) => {
  if (level.difficulty < 6) {
    level.completed = true
  }
})

/*
Exercise 13
Solve Exercise 13 here:
*/

console.log('answer Q13:')
console.log(game.gymStatus())
// console.dir(pokemon, { maxArrayLength: null })

/*
Exercise 14
Solve Exercise 14 here:
*/
console.log('answer Q14:')
console.log(game.partyCount())

/*
Exercise 15
Solve Exercise 15 here:
*/
game.gyms.forEach((level) => {
  if (level.difficulty < 8) {
    level.completed = true
  }
})
/*
Exercise 16
Solve Exercise 16 here:
*/

console.log(game)
