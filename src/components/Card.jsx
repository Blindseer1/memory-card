import {useEffect} from 'react'
import {useState} from 'react'
import '../style/Card.css'
import shuffleCards from '../shuffle.js'

export default function Card({name,pokemons,setPokemons,score,setScore,chosenPokemons,setChosenPokemons,bestScore,setBestScore }){
const [pokemon,setPokemon]=useState("null")
useEffect(()=>
  {
let ignore=false;
console.log('rerendered')
fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`) 
        .then(response => response.json())  
        .then(poki=>
          {
          if(!ignore)
              setPokemon(poki.sprites.front_default)
          })
 
  return ()=>{ignore=true}
    },[pokemon,name])
  return <div className="card" onClick={()=>{
    
   if(chosenPokemons.includes(name)) 
   {
       if(bestScore<score) 
        setBestScore(score) 
      setScore(0)
      setChosenPokemons([])
   console.log('it exists')
    }
    else 
     {setChosenPokemons((prevElements)=>[...prevElements,name])
      setScore(score+1)
    }
    shuffleCards(pokemons,setPokemons)
  

  }}>
    <img src={pokemon} alt=""/>
    <h2>{name}</h2>
  </div>

}
