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
        choice="rock";
    }
    else if(random==2)
    {
        console.log("Scissors");
        choice="rock";
    }
    return choice;
}
