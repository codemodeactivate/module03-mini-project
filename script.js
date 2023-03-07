/* The completed application should meet the following criteria:

As a user, I want to play Rock, Paper, Scissors against an automated opponent.

As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

As a user, I expect the computer to choose R, P, or S in return.

As a user, I want the option to play again whether I win or lose.

As a user, I want to see my total wins, ties, and losses after each round.

Specifications
Must use the alert(), confirm(), and prompt() methods to collect user input and display information to the user.

The computer's selection must be random to ensure a fair game.
*/


//define variables or there initial value?
let userScore = 0;
let compScore = 0;
let ties = 0;
var compChoice
var userChoice


let playRockPaperScissors =  () => {
    //ask user their choice
    let userChoice = prompt("Pick R for Rock, P for Paper, and S for Scissors. Type \"Stop\" to stop.");
    //generate computer choice
    compChoice = generateCompChoice();
    console.log(compChoice);
    //check if user wants to stop
    if (userChoice.toUpperCase() === "STOP") {
        return
    }

    //check if not valid selection

    if (userChoice != "R" && userChoice != "P" && userChoice != "S") {
        alert("You must select either R, P, or S");

        //console.log(userChoice);
        //if invalid selection, loop to play again.
        playRockPaperScissors();

    } else if (userChoice === compChoice) {
        //check for tie. If so alert & add to tie count
        alert("TIE!");
        ties += 1;
        alert(`Wins: ${userScore}
        Losses: ${compScore}
        Ties: ${ties}`)


    } else if
    ((userChoice === "R" && compChoice === "S") ||
    (userChoice === "P" && compChoice === "R") ||
    (userChoice === "S" && compChoice === "P")
    ) {
        alert("You Win");
        userScore += 1;
        alert(`Wins: ${userScore}
        Losses: ${compScore}
        Ties: ${ties}`)
    } else {
        alert("You Lose");
        compScore += 1;
        alert(`Wins: ${userScore}
        Losses: ${compScore}
        Ties: ${ties}`)

    }

    playRockPaperScissors();


}



let generateCompChoice = () => {
    let compRoll = Math.random();
    if (compRoll < .334) {
        return "R"
    } else if (compRoll < .667) {
        return "P"
    } else {
        return "S"
    }
}


playRockPaperScissors();
