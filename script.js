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

    if (result == 1) {
        console.log("Your choice: " + humanSelection)
    }
}

let humanScore = 0, computerScore = 0;
console.log(humanScore, computerScore)

let humanSelection = getHumanChoice();
console.log("Your choice: " + humanSelection)