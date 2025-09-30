const gameInfo = document.querySelector("[gameInfo]");
const boxes = document.querySelectorAll('.box');
const newGame = document.querySelector("[newGame]");

let currentPlayer ;
let gameGrid ;

const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
initilize();
function initilize()
{
    currentPlayer = 'X' ;
    gameInfo.innerText = ` Current Player is : ${currentPlayer}`;

    gameGrid = ["","","","","","","","","",];
   
    // green bg removal from boxes 
    boxes.forEach((box ,index) =>{
        box.textContent = "";
        box.style.poinerevents = "all";
        box.classList = `box box${index + 1}`;
    })
    boxes.forEach((box)=>{
            box.style.pointerEvents = "all";
        })
    newGame.classList.remove("active");
}
    function handleClick(index)
    {
    if(gameGrid[index] === ""){
         boxes[index].style.poinerevents = "none";
   
    
     boxes[index].innerText = currentPlayer;
     gameGrid[index] = currentPlayer;
      swapTurn();
     checkGame()
    }
     } 
 function swapTurn(){
    currentPlayer = currentPlayer === "X"? "O" : "X";
     gameInfo.innerText = ` Current Player is : ${currentPlayer}`;
 }
 function checkGame(){
    let winner ="" ;
    winningPositions.forEach((position) =>{
    if((gameGrid[position[0]]  != "" || gameGrid[position[1]]  != "" || gameGrid[position[2]] ) && ((gameGrid[position[0]]  ===gameGrid[position[1]] ) && (gameGrid[position[1]]  ===gameGrid[position[2]] )))
    {
        boxes.forEach((box)=>{
            box.style.pointerEvents = "none";
        })

        winner = gameGrid[position[0]] === "X"? "X":"O";

        boxes[position[0]].classList.add("win");
        boxes[position[1]].classList.add("win");
        boxes[position[2]].classList.add("win");
    }
 })
     if(winner !== ""){
        gameInfo.innerText = ` The Winner is Player  : ${winner}`;
         newGame.classList.add("active");
         return ;
     }

     let gameCount = 0;
     gameGrid.forEach((box) => {
        if(box != ""){
            gameCount++;

             if(gameCount===9){
        // boxes.style.poinerevents = "none"; 
        gameInfo.innerText = `!! The Game has Tied !!`;
        newGame.classList.add("active");
     }
        }
     }

     )
    
 }

boxes.forEach((box,index)=>
{
    box.addEventListener('click' , ()=>{
          handleClick(index);   
    })
})

newGame.addEventListener('click', initilize);
