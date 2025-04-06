let round = 0;
let humanScore = 0;
let pcScore = 0;
let winner = 0;
const roundRef = document.querySelector("#round")


const buttonDiv = document.querySelector(".bottom")
buttonDiv.addEventListener("click", (e) => {playRound(e)})

function playRound(e){

    getChoices(e)

    if (round == 5){
        if (humanScore > pcScore) {
            showPopup("human")
        } else if (humanScore < pcScore) {
            showPopup("pc")
        } else {
            showPopup("draw")
        }

    }
    
}

    
function getChoices(e){

    getPcChoice()                                                       //get PC Choice
  
    if (e.target.id === "rock"){                     //get human choice
        choiceHuman= "rock"

    } else if (e.target.id === "scissors") {
        choiceHuman= "scissors"
        
    } else if (e.target.id === "paper") {
        choiceHuman= "paper"
        }
    
    const optionPCRef = document.querySelector("#optionPC")             //get img element ref for editing the src
    const optionHumanRef = document.querySelector("#optionHuman")  
    optionHumanRef.src= "images/"+choiceHuman+"Logo.png"                //change the images of both players based on the player choices
    optionPCRef.src= "images/"+choicePc+"Logo.png"

    return clash(choiceHuman,choicePc)                                
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


function clash(optionH,optionPc){                                         //states the winner of the round
    let veredict;
    let justification;
    optionPCRef = document.querySelector("#optionPC")
    optionHumanRef = document.querySelector("#optionHuman")
    if (optionH  == "rock"){
        if (optionPc == "paper"){
            veredict = "You've lost this round!"
            justification = "Paper beats Rock!"
            pcScore +=1;
        }
        if (optionPc == "rock"){
            veredict = "It's a draw!"
            justification = "Play Again!"
        } 
        if (optionPc == "scissors") {
            veredict = "You've won this round!"
            justification = "Rock beats Scissors!"
            humanScore += 1;
        }
    } if (optionH  == "paper"){
        if (optionPc == "scissors"){
            veredict = "You've lost this round!"
            justification = "Scissors beats Paper!"
            pcScore +=1;
        }
        if (optionPc == "paper"){
            veredict = "It's a draw!"
            justification = "Play Again!"
        } 
        if (optionPc == "rock") {
            veredict = "You've won this round!"
            justification = "Paper beats Rock!"
            humanScore += 1;
        }
    } if (optionH  == "scissors"){
        if (optionPc == "rock"){
            veredict = "You've lost this round!"
            justification = "Rock beats Scissors!"
            pcScore +=1;
        }
        if (optionPc == "scissors"){
            veredict = "It's a draw!"
            justification = "Play Again!"
        } 
        if (optionPc == "paper") {
            veredict = "You've won this round!"
            justification = "Scissors beats Paper!"
            humanScore += 1;
        }
    }
    document.querySelector("#roundMsg").innerText= veredict +" "+ justification

    document.querySelector(".human").innerText = "Player: " + humanScore
    document.querySelector(".computer").innerText = "Computer: " + pcScore

    round += 1
    roundRef.innerText = "Round "+round+"/5"

}



function showPopup(winner) {
    switch (winner) {
        case "human":
            document.querySelector("#endMsg").innerText = "Congratulations! \n \n You've beat the Computer!";
            break

        case "pc":
            document.querySelector("#endMsg").innerText = "Oh no... \n You've lost!";
            break

        case "draw":
            document.querySelector("#endMsg").innerText = "What a lost of time... \n It's a Draw!";
            break
        }
    document.querySelector("#popup").style.display = "flex";
}
  
function closePopup() {
    document.getElementById("popup").style.display = "none";
    round = 0
    humanScore=0
    pcScore=0
    document.querySelector(".human").innerText = "Player: " + humanScore
    document.querySelector(".computer").innerText = "Computer " + pcScore
    roundRef.innerText = "Round "+round
}