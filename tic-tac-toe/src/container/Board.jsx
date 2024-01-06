import Square from './Square'

const Board = ({isNext, square, handlePlay}) => {

    function handleOnClic(i) {
        if(calculateWinner(square) || square[i]){
            return ;
        }
        const nextSquare = square.slice();
        if(isNext){
            nextSquare[i] = "X";
        } else {
            nextSquare[i] = "O";
        }
        handlePlay(nextSquare)
    }
    let status;
    const winner =  calculateWinner(square);
    if(winner) {
        status = "Winner =" + winner;
    }

    return (
        <div className="container">
            <div className="player">{status}</div>
            <div className="board">
                <div className="borard_row">
                    <Square value={square[0]} handleOnClic={() =>handleOnClic(0)} />
                    <Square value={square[1]} handleOnClic={() =>handleOnClic(1)} />
                    <Square value={square[2]} handleOnClic={() =>handleOnClic(2)} />
                </div>
                <div className="borard_row">
                    <Square value={square[3]} handleOnClic={() =>handleOnClic(3)} />
                    <Square value={square[4]} handleOnClic={() =>handleOnClic(4)} />
                    <Square value={square[5]} handleOnClic={() =>handleOnClic(5)} />
                </div>
                <div className="borard_row">
                    <Square value={square[6]} handleOnClic={() =>handleOnClic(6)} />
                    <Square value={square[7]} handleOnClic={() =>handleOnClic(7)} />
                    <Square value={square[8]} handleOnClic={() =>handleOnClic(8)} />
                </div>
            </div>
        </div>
    )
}

function calculateWinner(square){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for(let i = 0 ; i < lines.length ;i++){
         const[a,b,c] = lines[i];
         if(square[a] && square[a] === square[b] && square[a] === square[c]){
            return square[a]
         }
      }

      return null;

}

export default Board
