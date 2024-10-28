import {useState} from 'react'
import Card from './components/Card.jsx'
import GameController from './components/GameController.jsx'
import './App.css'
import shuffleCards from './shuffle.js'



function App() {
const [pokemons,setPokemons]=useState(['pikachu','vaporeon','lopunny'
  ,"cinccino","empoleon","drizzile","silicobra","bulbasaur","squirtle","butterfree",
  "zangoose","rapidash","weedle","snorunt"])



  return<>
<h1>Pokemon Memory Card Game</h1>
    <GameController pokemons={pokemons} setPokemons={setPokemons}/>
  </>
}
export default App
