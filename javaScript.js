function getComputerChoice()
{ 
   let random = Math.floor(Math.random()*3);
   let choice;
    if(random==0)
    {   
        console.log("Rock");
        choice="rock";
    }
    else if(random==1)
    {
        console.log("Paper");
        choice="paper";
    }
    else if(random==2)
    {
        console.log("Scissors");
        choice="scissors";
    }
    return choice;
}


function playRound(playerSelection,computerSelection)
{  
    let result;
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection===computerSelection)
    {
      result="Its a tie!"
    }
    else if(playerSelection=="rock"&& computerSelection=="paper")
    {
        result="You Lose! Paper beats Rock";
    }
    else if(playerSelection=="rock"&& computerSelection=="scissors")
    {
        result="You Win! Rock beats Scissors";
    }
    else if(playerSelection=="paper"&& computerSelection=="rock")
    {
        result="You Win! Paper beats Rock";
    }
    else if(playerSelection=="paper"&& computerSelection=="scissors")
    {
        result="You Lose! Scissors beats Paper";
    }
    else if(playerSelection=="scissors"&& computerSelection=="paper")
    {
        result="You Win! Scissors beats Paper";
    }
    else if(playerSelection=="scissors"&& computerSelection=="rock")
    {
        result="You Lose! Rock beats Scissors";
    }
    return result;
}

function playGame()
{
    for(let i=0; i<5;i++)
    {
      const playerSelection = prompt("Enter your selection: ");
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
    }
}

playGame();

