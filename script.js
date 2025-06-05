let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn =document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let line=document.getElementById("line");


let turnO= true;//playerX,playerY -> maane kiska turn
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =() =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    boxes.forEach(box => {
        box.classList.remove("clickedO");
        box.classList.remove("clickedX");
    });
};



boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("Box was clicked");
        if(turnO){
        box.innerText="O";
        box.classList.add("clickedO");
        turnO=false;
        }else{
        box.innerText="X";
        box.classList.add("clickedX");
        turnO=true;
        }
        box.disabled=true;
        checkWinner();

    } );

});

const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner) =>{
    msg.innerText= `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};


const checkWinner =() => {
    for(pattern of winPatterns){
        
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
                return;
            }

        }

    }
    
    let allFilled=true;
    boxes.forEach(box =>{
        if(box.innerText===""){
            allFilled=false;

        }
    });

    if(allFilled){
        msg.innerText="Its a Draw!";
        msgContainer.classList.remove("hide");
    }


};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


