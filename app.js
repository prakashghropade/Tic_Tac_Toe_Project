let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#btn");
let newBtn = document.querySelector("#wbtn");
let winmsg = document.querySelector("#win");
let wincontainer = document.getElementById("winner");

let turnO = true;

// Player x and Player Y
let winpattern = 
          [[0, 1, 2],
           [0, 3, 6],
           [0, 4, 8], 
           [1, 4, 7],
           [2, 5, 8], 
           [2, 4, 6], 
           [3, 4, 5], 
           [6, 7, 8]];


// showing X and Y in the Boxes  add EventListner
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnO){   
            box.style.color = "yellow";         // Player O turn
            box.innerText = "O";
            turnO = false;
        }
        else{           // Player X turn
            box.style.color = "white";       
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});




// Disable the all the boxes
const disabledBoxes =() =>{
             for(let box of boxes){
                box.disabled = true;
             }
}

// Enabel All the boxes
const EnabledBoxes =() =>{
             for(let box of boxes){
                box.disabled = false;
                box.innerHTML = "";
             }
}

// Reset The Game
const resetGame = () =>{
    turnO = true;
    EnabledBoxes();
    wincontainer.classList.add("hide");
}

//  Showing the Winner Of the Game
const Showwinner = (winner) => {
    winmsg.innerText = `Congratulations, Winner is ${winner}`;
    wincontainer.classList.remove("hide");
    disabledBoxes();
}

// Checking The Winner Of the Game
const checkWinner = () =>{   
    for( pattern of winpattern){
        
        let positon1 = boxes[pattern[0]].innerText; 
        let positon2 = boxes[pattern[1]].innerText;
        let positon3 = boxes[pattern[2]].innerText;

        if(positon1 != "" && positon2 != "" && positon3 != ""){
             if(positon1 === positon2 && positon2 === positon3){
                console.log("Winner");

                Showwinner(positon1);
             }
        }
    }

};


newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
