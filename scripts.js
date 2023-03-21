
const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random()*3);
    if(randomNum === 1) return "rock"
    else if (randomNum === 2) return "paper"
    else return "scissors"
}

const validatePlayerSelection = (choice) => {
    if (choice === "") return 0
    else if (choice === 'rock' ||
    choice === 'paper' ||
    choice === 'scissors') return 1
    else return 2
}

const playRound = (playerSelection, computerSelection) => {
    /* const options = [
        {id: 0, name: "rock", beats: "scissors"},
        {id: 1, name: "scissors", beats: "paper"},
        {id: 2, name: "paper", beats: "rock"}
    ]
    if(options[playerSelection].beats.includes(computerSelection))*/
    
    if(playerSelection === computerSelection) return 0
    if(playerSelection === "rock" && computerSelection ==="scissors" ||
    playerSelection === "scissors" && computerSelection ==="paper" ||
    playerSelection === "paper" && computerSelection ==="rock") return 1
    else return 2
}
const game = () => {
    let initGame = confirm("Are you ready?")
    let humanWins = 0;
    let computerWins = 0;

    if(initGame){
        for(let i= 0; i < 5; i++){
            const playerSelection = prompt(`type your choice:
            rock - paper - scissors`).toLowerCase()
    
            const okSelection = validatePlayerSelection(playerSelection)
            if (okSelection === 0) {
                console.log("Type a real option");
                i--;
            }
            if (okSelection === 1) {
                console.log(`You have played: ${playerSelection}`)  
                
                const computerSelection = getComputerChoice();
                console.log("Computer choice: " + computerSelection)
                let result = playRound(playerSelection,computerSelection)
                if(result === 1){
                    console.log("You win")
                    humanWins++
                } else if(result === 2) {
                    console.log("Computer wins")
                    computerWins++
                } else {
                    console.log("It's tie, repeat it")
                    i--
                }
            }
            if (okSelection === 2) {
                console.log("Sorry I don't understand");
                i--
            }
            
        }
        alert(`Final result
        You: ${humanWins}
        Computer: ${computerWins}`)
    } else console.log("It's ok, come back later and refresh")
}

game()