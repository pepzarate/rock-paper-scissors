
const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random()*3);
    if(randomNum === 1) return "rock"
    else if (randomNum === 2) return "paper"
    else return "scissors"
}

const validatePlayerSelection = (choice) => {
    if (choice == "") return "Type a real choice"
    else return choice
}

const playGame = (playerSelection, computerSelection) => {
    const options = [
        {id: 0, name: "rock", beats: "scissors"},
        {id: 1, name: "scissors", beats: "paper"},
        {id: 2, name: "paper", beats: "rock"}
    ]
    if(playerSelection === computerSelection) return "tie"
    /*if(options[playerSelection].beats.includes(computerSelection))*/
    if(playerSelection === "rock" && computerSelection ==="scissors" ||
    playerSelection === "scissors" && computerSelection ==="paper" ||
    playerSelection === "paper" && computerSelection ==="rock") return "You win"
    else return "Computer wins"
}

const playerSelection = prompt(`type your choice:
rock - paper - scissors`)
const realPlayerSelection = validatePlayerSelection(playerSelection)
console.log(`You have played: ${realPlayerSelection}`)

const computerSelection = getComputerChoice();
console.log("Computer choice: " + computerSelection)