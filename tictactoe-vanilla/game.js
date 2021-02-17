let board = [[0,0,0],[0,0,0],[0,0,0]]
let playerTurn = 0;
let result;
let player = null;


const move = (tile,coordinates) => {
    
    if (player){
        let element = document.querySelector(`div#${tile}`);
        let x = coordinates[0]
        let y = coordinates[1]
        
        if (playerTurn % 2 == 0 && element.innerText == "-" ){
            element.textContent = "X"
            playerTurn++;
            board[x][y] = 1
            let result = checkBoard(board,1)
        }else if(element.innerText == "-"){
            element.textContent = "O"
            playerTurn++;
            board[x][y] = -1
            let result = checkBoard(board,-1)
        }
     
    }
   
}

const choosePlayer = (choice) => {
    player = choice;
    let element = document.querySelector('p#player');
    if (choice == "X"){
        element.textContent = "Playing as X"
    }else{
        element.textContent = "Playing as O"
    }
    let buttonX = document.getElementById("buttonX");
    let buttonO = document.getElementById("buttonO");
    buttonX.disabled = true;
    buttonO.disabled = true;
}

const checkBoard = (boardCopy,symbol) => {
    // Row check
    for (let i = 0; i < 3; i++){
        if (boardCopy[i][0] === symbol && boardCopy[i][1] === symbol && boardCopy[i][2] === symbol){
            return true;
        }
    }

    // Column check
    for(let j = 0; j < 3; j++){
        if(boardCopy[0][j] === symbol && boardCopy[1][j] === symbol && boardCopy[2][j] === symbol){
            return true;
        }
    }

    // Diagonal check
    if (boardCopy[0][0] === symbol && boardCopy[1][1] === symbol && boardCopy[2][2] === symbol){
        return true;
    }
    if (boardCopy[0][2] === symbol && boardCopy[1][1] === symbol && boardCopy[2][0] === symbol){
        return true;
    }

    return false;
}


const maxValue = () => {

}

const minValue = () => {
    
}
