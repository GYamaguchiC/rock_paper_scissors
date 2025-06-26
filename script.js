function getComputerChoice() {
    let randomChoice = Math.random() * 3;
    if(randomChoice < 1){
        return "rock"
    } else if(randomChoice < 2){
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    const choice = prompt("Choose one of the following options to play:\n1.Rock\n2.Paper\n3.Scissors");

    if(choice == 1){
        return "rock"
    }
    if(choice == 2){
        return "paper"
    }
    if (choice == 3) {
        return "scissors"
    }
}

function playRound(humanChoice, computerChoice) {
    let result;

    /* Here: 1 = draw, 2 = loss, 3 = win */
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            result = 1;
        }
        if (computerChoice == "paper") {
            result = 2;
        }
        if (computerChoice == "scissors") {
            result = 3;
        }
    }
    if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            result = 3;
        }
        if (computerChoice == "paper") {
            result = 1;
        }
        if (computerChoice == "scissors") {
            result = 2;
        }
    }
    if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            result = 2;
        }
        if (computerChoice == "paper") {
            result = 3;
        }
        if (computerChoice == "scissors") {
            result = 1;
        }
    }

    console.log("Your choice: " + humanChoice + "\nComputer's choice: " + computerChoice)

    if ( result == 1){
        console.log("It is a draw!")
    }
    if (result == 2){
        computerScore ++;
        console.log("You lose!")
    }
    if (result == 3){
        humanScore ++;
        console.log("You win!")
    }

    console.log("Computer Score: " + computerScore + "\nYour Score: " + humanScore);


}

let humanScore = 0, computerScore = 0;

for (let index = 0; index < 5; index++) {
    

    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();

    playRound(humanSelection, computerSelection);
}

