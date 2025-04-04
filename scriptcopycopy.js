
const buttonDiv = document.querySelector(".bottom")

buttonDiv.addEventListener("click", (e) => {playGame(e)}, {once: true})


function playGame(e){
    let round = 0;
    humanScore = 0;
    pcScore = 0;
    while (round < 5) {
        if (round == 0) {getChoices(e)} 
            else{
         
            }
        
        console.log ("Human: " +humanScore,"\n","Computer: "+pcScore)
        round += 1;
    }

    if (humanScore > pcScore) {
        console.log ("Human: " +humanScore, "\n", "Computer: " +pcScore, "\n", "You've won the game!" )
    } else if (humanScore < pcScore) {
        console.log ("Human: " +humanScore, "\n", "Computer: " +pcScore, "\n", "You've lost the game!" )
    } else {
        console.log ("Human: " +humanScore, "\n", "Computer: " +pcScore, "\n", "It's a draw, play again to set this once and for all!" )
    }
    console.log ("The game has ended")
}

function getPcChoice(){                                                 //get PC option
    choicePc=undefined;
    let random = Math.random()
    if (random < (1/3)){
        choicePc = "rock";
    } else if (random < (2/3)){
        choicePc = "paper"; 
    } else {
        choicePc = "scissors";
    }
    console.log ("PC Choosed "+choicePc)
    return choicePc;
    
}


function getChoices(e){

    getPcChoice()                                                       
  
    if (e.target==document.querySelector("#rock")){                     //get human choice
        choiceHuman= "rock"

    } else if (e.target==document.querySelector("#scissors")) {
        choiceHuman= "scissors"
        
    } else {
        choiceHuman= "paper"
        }
    
    const optionPCRef = document.querySelector("#optionPC")             //get img element ref for editing the src
    const optionHumanRef = document.querySelector("#optionHuman")  
    optionHumanRef.src= "images/"+choiceHuman+"Logo.png"                //change the images based on the player choices
    optionPCRef.src= "images/"+choicePc+"Logo.png"

    return playRound(choiceHuman,choicePc) 
}


function playRound(optionH,optionPc){
    let humanScore
    let pcScore
    let veredict;
    let justification;
    optionPCRef = document.querySelector("#optionPC")
    optionHumanRef = document.querySelector("#optionHuman")
    if (optionH  == "rock"){
        if (optionPc == "paper"){
            veredict = "You Lose!"
            justification = "Paper beats Rock!"
            pcScore +=1;
        }
        if (optionPc == "rock"){
            veredict = "It's a draw!"
            justification = "Play Again!"
        } 
        if (optionPc == "scissors") {
            veredict = "You Win!"
            justification = "Rock beats Scissors!"
            humanScore += 1;
        }
    } if (optionH  == "paper"){
        if (optionPc == "scissors"){
            veredict = "You Lose!"
            justification = "Scissors beats Paper!"
            pcScore +=1;
        }
        if (optionPc == "paper"){
            veredict = "It's a draw!"
            justification = "Play Again!"
        } 
        if (optionPc == "rock") {
            veredict = "You Win!"
            justification = "Paper beats Rock!"
            humanScore += 1;
        }
    } if (optionH  == "scissors"){
        if (optionPc == "rock"){
            veredict = "You Lose!"
            justification = "Rock beats Scissors!"
            pcScore +=1;
        }
        if (optionPc == "scissors"){
            veredict = "It's a draw!"
            justification = "Play Again!"
        } 
        if (optionPc == "paper") {
            veredict = "You Win!"
            justification = "Scissors beats Paper!"
            humanScore += 1;
        }
    }
    console.log(veredict + ". " + justification)
}
