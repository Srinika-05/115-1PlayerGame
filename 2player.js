var secretNumber = 19; 
var guessCount = 0;
var maxCount = 3;

//procedure
function handleClick(){
    //constant variable - cannot be changed 
    if (guessCount>=4) {
        alert("Max guess reached - you lost")

    }

    const userInput = document.getElementById("userInput").value;
    const label = document.getElementById("label");
    guessCount = guessCount+1;

    if (isNaN(userInput) || userInput == '')
    {
        alert("Input should be numerical")
    }
    if (secretNumber == userInput){
        alert("You won!");
    }
    else if(secretNumber > userInput){
        label.innerHTML = "Incorrect Guess, Try Higher"
    }
    else{
         label.innerHTML = "Incorrect Guess, Try Lower"
    }
    
    document.getElementById("userInput").value = "";
    
    document.getElementById("quantity").value = maxCount--;
}
