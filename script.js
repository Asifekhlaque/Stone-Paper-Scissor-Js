let options = document.querySelectorAll(".option");
let compOption = document.querySelector("#compOption");
let output = document.querySelector("#output");

let Userpoint = document.querySelector("#Userpoint");
let CompPoint = document.querySelector("#CompPoint");

function getComputerChoice(){
    let choices=["Stone","Paper","Scissor"]
    return choices[Math.floor(Math.random()*3)]
}

options.forEach((element) => {
    element.addEventListener("click", (e) => {
        const choiceID = e.target.id; //? Get the id of the clicked element
        // console.log("User", choiceID);
        const getComp=getComputerChoice()
        // console.log("Comp", getComp)
        getWinner(choiceID,getComp)
    });
});

function getWinner(choiceID,getComp){
    if(choiceID==getComp){
        compOption.innerHTML = getComputerChoice();
        console.log("Draw")
        output.innerHTML="Draw"
        output.style.color="black"
    }
    else if(choiceID=="Stone" && getComp=="Scissor"){
        compOption.innerHTML = getComputerChoice();
        console.log("You win")
        output.innerHTML="You win"
        output.style.color="green"
        Userpoint.innerHTML=parseInt(Userpoint.innerHTML)+1
    }
    else if(choiceID=="Paper" && getComp=="Stone"){
        compOption.innerHTML = getComputerChoice();
        console.log("You win")
        output.innerHTML="You win"
        output.style.color="green"
        Userpoint.innerHTML=parseInt(Userpoint.innerHTML)+1
    }
    else if(choiceID=="Scissor" && getComp=="Paper"){
        compOption.innerHTML = getComputerChoice();
        console.log("You win")
        output.innerHTML="You win"
        output.style.color="green"
        Userpoint.innerHTML=parseInt(Userpoint.innerHTML)+1
    }
    else{
        compOption.innerHTML = getComputerChoice();
        console.log("You lose")
        output.innerHTML="You lose"
        output.style.color="red"
        CompPoint.innerHTML=parseInt(CompPoint.innerHTML)+1
    }
}
