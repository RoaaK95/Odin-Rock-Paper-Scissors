let counter;
let finalCounter=0;
function getComputerChoice()
{ 
   let random = Math.floor(Math.random()*3);
   let choice;
    if(random==0)
    {   
        //console.log("Rock");
        choice="rock";
    }
    else if(random==1)
    {
        //console.log("Paper");
        choice="paper";
    }
    else if(random==2)
    {
        //console.log("Scissors");
        choice="scissors";
    }
    return choice;
}

function playRound(playerSelection,computerSelection)
{  
    let result;
   
   //playerSelection = playerSelection.toLowerCase();
    if(playerSelection===computerSelection)
    {
      result="Round "+buttonClicks+": Its a tie!"
      counter=0;
    }
    else if(playerSelection=="rock"&& computerSelection=="paper")
    {
        result="Round "+buttonClicks+": You Lose! Paper beats Rock";
        counter=-1;
    }
    else if(playerSelection=="rock"&& computerSelection=="scissors")
    {
        result="Round "+buttonClicks+": You Win! Rock beats Scissors";
        counter=1;
    }
    else if(playerSelection=="paper"&& computerSelection=="rock")
    {
        result="Round "+buttonClicks+": You Win! Paper beats Rock";
        counter=1;
    }
    else if(playerSelection=="paper"&& computerSelection=="scissors")
    {
        result="Round "+buttonClicks+": You Lose! Scissors beats Paper";
        counter=-1;
    }
    else if(playerSelection=="scissors"&& computerSelection=="paper")
    {
        result="Round "+buttonClicks+": You Win! Scissors beats Paper";
        counter=1;
    }
    else if(playerSelection=="scissors"&& computerSelection=="rock")
    {
        result="Round "+buttonClicks+ ": You Lose! Rock beats Scissors";
        counter=-1;
    }
    return result;
  
}

//play five rounds
 function playGame()
{
    finalCounter+=counter;
    if(buttonClicks>=6)
    {
     buttonClicks=1;
     result.textContent="Final Result: "+calculateResult();
     console.log("finalCounter:",finalCounter);
     counter=0;
     finalCounter=0;
    }
      
} 


function calculateResult()
{
    let finalResult;

     if(finalCounter>0)
     {
        finalResult="YOU WIN!";
     }
     else if(finalCounter<0)
     {
        finalResult="YOU LOSE!";
     }
     else
     {
        finalResult="ITS A TIE!";
     }
     return finalResult;
     
} 

//Result container
  const result=document.createElement("div");
  const mainDiv=document.querySelector("#main");
  mainDiv.setAttribute("style",
    "background-color:#050F; text-align:center; padding:10px;margin:100px 100px");
   result.setAttribute("style",
    "border: solid 2px;text-align:center;font-size:20px; width:auto; height:50px; margin:20px 100px;padding:10px;");
   

//Buttons logic
let buttonClicks=1;
const buttons=document.querySelectorAll("button");
const computerSelection = getComputerChoice();       
let playerSelection;
 buttons.forEach((button)=>{
    button.setAttribute("style","width:100px;height:auto; font-size:18px;");
    button.addEventListener("click",()=>{
        playerSelection=button.id.toString();
        console.log("playerSelection: ",playerSelection);
        console.log("computerSelection",computerSelection);
        result.textContent= playRound(playerSelection,computerSelection).toString();
        buttonClicks++;
        console.log("counter: ",counter);
        playGame();
    })
 })

 
  mainDiv.appendChild(result);
  


