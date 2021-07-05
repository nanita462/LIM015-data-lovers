import { example } from './data.js';
import pokemon from './data/pokemon/pokemon.js';


//console.log(example, data);
console.log(pokemon)
const dataPoke = pokemon.pokemon;
const arrayPokemon = dataPoke.map((poke)=>{
    return poke;
});
  
console.log(arrayPokemon)


const pokeData = document.querySelector('.poke-Data')
//console.table(arrayPokemon)



pokeData.addEventListener('click', showData)

function showData(){
arrayPokemon.forEach(function (element){

const figurePokemon= document.createElement("figure");
const imgPokemon= document.createElement("img");
const namPokemon= document.createElement("namPokemon");
const CPPokemon= document.createElement("CP")

imgPokemon.src=element.img;
namPokemon.innerText=element.name; 
CPPokemon.innerText=element.num; 

const figura= document.getElementById('lista').appendChild(figurePokemon);
figura.appendChild(imgPokemon);
figura.appendChild(namPokemon);
figura.appendChild(CPPokemon);
//figura.appendChild(div);
//figura.appendChild(p);


//document.querySelector('.lista').innerHTML= nameP +'<img src=${imagen}></img>' 

}



)

     
        
    }

    
    
