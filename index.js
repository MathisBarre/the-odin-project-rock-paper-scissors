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

/**
 * Custom error to throw when player or computer return an value other than "Rock", "Paper" or "Scissors"
 */
class BadGameValueError extends Error {
  constructor(badValue) {
    super(`Error: bad value "${badValue}". You should only enter "Rock", "Paper" or "Scissors"`);
    this.name = "BadGameValueError";
  }
}

/**
 * Take player selection and computer selection and return a string that tell who won
 */
function playRound(playerSelection, computerSelection) {
  try {
    const lowerCasePlayerSelection = playerSelection.toLowerCase()
    const lowerCaseComputerSelection = computerSelection.toLowerCase()
    
    const victoryMessage = `You won ! ${playerSelection} beats ${computerSelection} !`
    const defeatMessage = `You lose ! ${computerSelection} beats ${playerSelection} !`
    const equalityMessage = `Equality ! ${playerSelection} can't win over another ${playerSelection} !`
  
    if (lowerCasePlayerSelection === "rock") {
      if (lowerCaseComputerSelection === "rock") return equalityMessage
      if (lowerCaseComputerSelection === "scissors") return victoryMessage
      if (lowerCaseComputerSelection === "paper") return defeatMessage
      throw new BadGameValueError(computerSelection)
    }
    
    if (lowerCasePlayerSelection === "paper") {
      if (lowerCaseComputerSelection === "rock") return victoryMessage
      if (lowerCaseComputerSelection === "scissors") return defeatMessage
      if (lowerCaseComputerSelection === "paper") return equalityMessage
      throw new BadGameValueError(computerSelection)
    }
    
    if (lowerCasePlayerSelection === "scissors") {
      if (lowerCaseComputerSelection === "rock") return defeatMessage
      if (lowerCaseComputerSelection === "scissors") return equalityMessage
      if (lowerCaseComputerSelection === "paper") return victoryMessage
      throw new BadGameValueError(computerSelection)
    }
  
    throw new BadGameValueError(playerSelection)
  } catch (error) {
    if (error instanceof BadGameValueError) return error.message
    if (error instanceof TypeError) return "Please enter a string"
    throw error
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper or Scissors ?")
    const computerSelection = computerPlay();
  
    console.log(playRound(playerSelection, computerSelection));
  }
}

game()