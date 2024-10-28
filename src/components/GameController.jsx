import {useState} from 'react'
import {useEffect} from 'react'
import '../style/GameController.css'
import Card from './Card.jsx'
export default function GameController({pokemons,setPokemons})
  {
   const [score,setScore]=useState(0)
   const [chosenPokemons,setChosenPokemons]=useState([]);
   const [bestScore,setBestScore]=useState(0)
  return <div id="controller">
    <div className="scoreBoard">
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </div>
    <div id="cardDeck">
<Card name={pokemons[0]} pokemons={pokemons} setPokemons={setPokemons} score={score} setScore={setScore} chosenPokemons={chosenPokemons} setChosenPokemons={setChosenPokemons}    bestScore={bestScore} setBestScore={setBestScore}/>                                                                                                           
    <Card name={pokemons[1]} pokemons={pokemons} setPokemons={setPokemons} score={score} setScore={setScore} chosenPokemons={chosenPokemons} setChosenPokemons={setChosenPokemons}    bestScore={bestScore} setBestScore={setBestScore}/>
    <Card name={pokemons[2]} pokemons={pokemons} setPokemons={setPokemons} score={score} setScore={setScore} chosenPokemons={chosenPokemons} setChosenPokemons={setChosenPokemons}    bestScore={bestScore} setBestScore={setBestScore}/>
    <Card name={pokemons[3]} pokemons={pokemons} setPokemons={setPokemons} score={score} setScore={setScore} chosenPokemons={chosenPokemons} setChosenPokemons={setChosenPokemons}    bestScore={bestScore} setBestScore={setBestScore}/>
    <Card name={pokemons[4]} pokemons={pokemons} setPokemons={setPokemons} score={score} setScore={setScore} chosenPokemons={chosenPokemons} setChosenPokemons={setChosenPokemons}    bestScore={bestScore} setBestScore={setBestScore}/>
    <Card name={pokemons[5]} pokemons={pokemons} setPokemons={setPokemons} score={score} setScore={setScore} chosenPokemons={chosenPokemons} setChosenPokemons={setChosenPokemons}    bestScore={bestScore} setBestScore={setBestScore}/>
    <Card name={pokemons[6]} pokemons={pokemons} setPokemons={setPokemons} score={score} setScore={setScore} chosenPokemons={chosenPokemons} setChosenPokemons={setChosenPokemons}    bestScore={bestScore} setBestScore={setBestScore}/>
    <Card name={pokemons[7]} pokemons={pokemons} setPokemons={setPokemons} score={score} setScore={setScore} chosenPokemons={chosenPokemons} setChosenPokemons={setChosenPokemons}    bestScore={bestScore} setBestScore={setBestScore}/>
    <Card name={pokemons[8]} pokemons={pokemons} setPokemons={setPokemons} score={score} setScore={setScore} chosenPokemons={chosenPokemons} setChosenPokemons={setChosenPokemons}    bestScore={bestScore} setBestScore={setBestScore}/>
    <Card name={pokemons[9]} pokemons={pokemons} setPokemons={setPokemons} score={score} setScore={setScore} chosenPokemons={chosenPokemons} setChosenPokemons={setChosenPokemons}    bestScore={bestScore} setBestScore={setBestScore}/>
    <Card name={pokemons[10]} pokemons={pokemons} setPokemons={setPokemons}  score={score} setScore={setScore} chosenPokemons={chosenPokemons} setChosenPokemons={setChosenPokemons}  bestScore={bestScore} setBestScore={setBestScore}/>
    <Card name={pokemons[11]} pokemons={pokemons} setPokemons={setPokemons}  score={score} setScore={setScore} chosenPokemons={chosenPokemons} setChosenPokemons={setChosenPokemons}  bestScore={bestScore} setBestScore={setBestScore}/>
    <Card name={pokemons[12]} pokemons={pokemons} setPokemons={setPokemons}  score={score} setScore={setScore} chosenPokemons={chosenPokemons} setChosenPokemons={setChosenPokemons}  bestScore={bestScore} setBestScore={setBestScore}/>
    <Card name={pokemons[13]} pokemons={pokemons} setPokemons={setPokemons}  score={score} setScore={setScore} chosenPokemons={chosenPokemons} setChosenPokemons={setChosenPokemons}  bestScore={bestScore} setBestScore={setBestScore}/>
    </div>
</div>


}
