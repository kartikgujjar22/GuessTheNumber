
const compNum = Math.floor(Math.random() * 10 + 1);

let guess = 1;

let data = document.getElementById("submitBtn").onclick = function () {
    let inputvalue = document.getElementById("guessField").value
    document.getElementById("background")
    document.getElementById("backgroundSmall")

    if (inputvalue == compNum) {
        // console.log("done")
        alert("Congrulation !! You Guessed It Right in " + guess + " Guesses")
        background.style.backgroundColor = "Green";
        backgroundSmall.style.backgroundColor = "Green"
    }
    else if(inputvalue < compNum){
        guess++
        // console.log("greater")
        alert("Bad Luck !! Try Again With a GREATER Number")
        background.style.backgroundColor = "Red";
        backgroundSmall.style.backgroundColor = "Red"
    }
    else{
        guess++
        alert("Bad Luck !! Try Again With a SMALLER Number")
        // console.log("smaller")
        background.style.backgroundColor = "Red";
        backgroundSmall.style.backgroundColor = "Red"
    }

}