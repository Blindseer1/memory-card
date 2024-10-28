export default function shuffleCards(pokemons,setPokemons) 
{
  let cards=pokemons.slice();
  for(let i=0;i<cards.length;i++)
  {
    let newIndex=Math.floor(Math.random()*14);
    [cards[i],cards[newIndex]]=[cards[newIndex],cards[i]];
  }
  console.log(cards)
   console.log(cards==pokemons)

    setPokemons(cards)
    console.log(pokemons)
}


