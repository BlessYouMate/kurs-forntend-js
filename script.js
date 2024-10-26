function getComputerChoice(){
    let choice = Math.floor((Math.random() * 3)+1)
    switch(choice){
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}

function getHumanChoice(){
    let choice = prompt("Choose rock (r), papier (p) or scissors (s)")
    choice = choice.toLowerCase()
    switch(choice){
        case 'r':
            return "rock"
        case 'p':
            return "paper"
        case 's':
            return "scissors"
        default:
            return undefined
    }
}

function playRound(){
    let computerChoice = getComputerChoice()
    let humanChoice = getHumanChoice()
    console.log("computer choice: ", computerChoice)
    console.log("human choice: ", humanChoice)
    if(computerChoice === humanChoice){
        return 2
    }
    else{
        if(computerChoice == 'rock' && humanChoice == 'scissors'){
            return 0
        }
        else if(computerChoice == 'paper' && humanChoice == 'rock'){
            return 0
        }
        else if(computerChoice == 'scissors' && humanChoice == 'paper'){
            return 0
        }
        else{
            return 1
        }

    }
    
}

function playGame(){
    let humanScore = 0
    let computerScore = 0
    
    for (i = 0; i<5; i++){
        let result = playRound()
        if(result == 0){
            computerScore++
        }
        else if(result == 2){
            ;
        }
        else{
            humanScore++
        }
        console.log("human score: ", humanScore)
        console.log("computer score: ", computerScore)
    }

    if(humanScore > computerScore){
        console.log("human won!")
    }
    else if(humanScore < computerScore){
        console.log("computer won!")
    }
    else{
        console.log("tie!")
    }
}

playGame()

