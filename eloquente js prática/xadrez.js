function createChessboard(size) {
    let board = "";
  
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        // Se a soma dos índices de linha e coluna for par, insira "#", caso contrário, insira espaço
        if ((row + col) % 2 === 0) {
          board += "#";
        } else {
          board += " ";
        }
      }
      // Adiciona uma nova linha após cada linha ser construída
      board += "\n";
    }
  
    return board;
  }
  
  // Definindo o tamanho
  let size = 5;
  console.log(createChessboard(size));
  