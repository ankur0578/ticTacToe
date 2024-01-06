import { useState } from 'react';
import './App.css';
import Board from './container/Board';

function App() {
  const [currentMove, setCurrentMove] = useState(0);
  const [moveHistory , setHistroyMove] = useState([Array(9).fill(null)]);
  const isNext = currentMove % 2 === 0;
  const square = moveHistory[currentMove];

  function jumpTo(nextMove){
    setCurrentMove(nextMove);
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...moveHistory.slice(0, currentMove + 1), nextSquares];
    setHistroyMove(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const  moves = moveHistory.map((square, move) =>{
    let description;
    if(move > 0){
      description = "Move numner" + move;
    } else {
      description = "Game is about to start"
    }
    return(
      <li key={move}>
          <button onClick={()=> jumpTo(move)}>{description}</button>
      </li>
    )
  })
  return (
    <div className="main">
      <Board isNext = {isNext} square ={square} handlePlay={handlePlay}/>
      <div className="gameInfo">
        <ol>
          {moves}
        </ol>
      </div>
    </div>
  );
}

export default App;
