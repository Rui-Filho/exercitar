function createChessboard(size) {
    let board = "";
  
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {        
        if ((row + col) % 2 == 0) {
          board += "#";
        } else {
          board += " ";
        }
      }      
      board += "\n";
    }  
    return board;
  }  
  let size = 40;
  console.log(createChessboard(size));
  