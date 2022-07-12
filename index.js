/**
 * Take a maximum integer and return another integer between 0 (included) and "max" (included)
 * Derived from https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random interactif exemple
 */
 function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

/**
 * Take no parameters and randomly return string "Rock", "Paper" or "Scissors"
 */
function computerPlay() {
  const randomIntBetween0And2 = getRandomInt(2)
  return ["Rock", "Paper", "Scissors"][randomIntBetween0And2]
}
