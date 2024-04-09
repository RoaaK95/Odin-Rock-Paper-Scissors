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
      result="Its a tie!"
      counter=0;
    }
    else if(playerSelection=="rock"&& computerSelection=="paper")
    {
        result="You Lose! Paper beats Rock";
        counter=-1;
    }
    else if(playerSelection=="rock"&& computerSelection=="scissors")
    {
        result="You Win! Rock beats Scissors";
        counter=1;
    }
    else if(playerSelection=="paper"&& computerSelection=="rock")
    {
        result="You Win! Paper beats Rock";
        counter=1;
    }
    else if(playerSelection=="paper"&& computerSelection=="scissors")
    {
        result="You Lose! Scissors beats Paper";
        counter=-1;
    }
    else if(playerSelection=="scissors"&& computerSelection=="paper")
    {
        result="You Win! Scissors beats Paper";
        counter=1;
    }
    else if(playerSelection=="scissors"&& computerSelection=="rock")
    {
        result="You Lose! Rock beats Scissors";
        counter=-1;
    }
    return result;
  
}

//play five rounds
 function playGame()
{
 
    //for(let i=0; i<5;i++)
  //  {
      //const playerSelection = prompt("Rock, Paper or Scissors: ");
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
      finalCounter+=counter;
   // }
    calculateResult();
} 


function calculateResult()
{
    //console.log(finalCounter);

     if(finalCounter>0)
     {
        console.log("YOU WIN!");
     }
     else if(finalCounter<0)
     {
        console.log("YOU LOSE!");
     }
     else
     {
        console.log("ITS A TIE!");
     }
     
} 

//Result container
  const result=document.createElement("div");
  const mainDiv=document.querySelector("#main");

   result.setAttribute("style",
    "border: solid 2px;text-align:center;font-size:20px; width:400px; height:50px; margin-top:20px;");
   

//Buttons logic
  
const buttons=document.querySelectorAll("button");
const computerSelection = getComputerChoice();
       
let playerSelection;
 buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        playerSelection=button.id.toString();
        result.textContent= playRound(playerSelection,computerSelection).toString();
        
    })
 })

 
  mainDiv.appendChild(result);
  

//playGame();

