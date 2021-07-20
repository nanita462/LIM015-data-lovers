import  funciones  from './data.js';
import data from './data/pokemon/pokemon.js';


console.log(data)
const dataPoke = data.pokemon;



//Enlazando boton de inicio
const pokeDatastart = document.querySelector('.btnStart')
//console.table(arrayPokemon)
const cardPoke = document.getElementById("lista");
//evento de mostrar la data en el div

pokeDatastart.addEventListener('click', () => showData(dataPoke))

document.getElementById("lista").innerHTML= "";
      
function showData(data){

    data.forEach(function (element){
    
    const flipCard= document.createElement("div")
    flipCard.className=("flip-Card");
    
    const cardContainer= document.createElement("div");
    cardContainer.className=("card-Container")
    
    flipCard.appendChild(cardContainer);
    
    const cardPokemon= document.createElement("div");
    cardPokemon.className=("poke-block");
    
    const imgContain= document.createElement("div");
    imgContain.className=("img-Contain");
    
    const imgP= document.createElement('img');
    imgP.src= element.img;
    
    imgContain.appendChild(imgP);
    const numberP= document.createElement('p');
    numberP.classList.add('numberP');
    numberP.id = "numberP";
    numberP.textContent=`#${element.num}`
    
    const nameP= document.createElement('p');
    nameP.classList.add('nameP');
    nameP.textContent= element.name
    
    const cardBack= document.createElement("div");
    cardBack.className=("pokemon-block-back");
    cardBack.innerHTML= `<br/> <p><b> STATS:<b/> </P> Base Attack:${element.stats['base-attack']} <br/> 
                        Base Defense: ${element.stats['base-defense']} <br/> Base Stamina: ${element.stats['base-stamina']} <br/> 
                        Max CP: ${element.stats['max-cp']} <br/> Max HP: ${element.stats['max-hp']}`;
    
    cardPokemon.appendChild(imgContain);
    cardPokemon.appendChild(numberP);
    cardPokemon.appendChild(nameP);    
    cardContainer.appendChild(cardPokemon);
    cardContainer.appendChild(cardBack);
    cardPoke.appendChild(flipCard);

    
    let cardAll = flipCard.querySelector(".card-Container");
    //console.log(cardAll);
       // cardAll.forEach(card => {
            cardAll.addEventListener("click",showModal);           
            //console.log("Hola");
       // }) ; 
         
          function showModal() {  
            console.log("SI FUNCIONA");
            
                      
            printModal(`<div class="div-img-modal" id="div-img-modal">
            <img src="${element.img}" alt="" id="img-pokemon-modal" class="image-modal">            
            <section id="body-modal" class="modal flex-wrap">
            <article id="NameModal" class="font f-medium f-green one-fraction">
            <p class="nameP">${element.name}</p>
            
            </article>
            </section>
            </div>

            <div class="div-about-modal">
            <p class="description"><strong>About :</strong>
            <span> ${element.about} </span> </p>
            </div>
            <div class="div-atrib-modal">
            <p class="generation"><strong>Generación :</strong><br>
            <span> ${element.generation['name']} </span> </p> <br>
            <p class="generation"><strong>Height :</strong><br>
            <span> ${element.size['height']} </span> </p> <br>
            <p class="generation"><strong>Weight :</strong><br>
            <span> ${element.size['weight']} </span> </p> <br>
            <p class="generation"><strong>Type :</strong><br>
            <span> ${element.type} </span> </p> <br>
            </div> 

            <div class="div-resistant-modal">
            <p class="resistencia"><strong>Resistant :</strong><br>
            <span> ${element.resistant[0]} </span> <br>
            <span> ${element.resistant[1]} </span> <br>
            <span> ${element.resistant[2]} </span> <br>
            <span> ${element.resistant[3]} </span> <br>
            <span> ${element.resistant[4]} </span> <br>
            </p> <br><br>
            <p class="list-weaknesses"><strong>Debilidades :</strong> <br>
            <span> ${element.weaknesses[0]} </span><br>
            <span> ${element.weaknesses[1]} </span><br>
            <span> ${element.weaknesses[2]} </span><br>           
            </p>            
            </div>

            <div class="div-power-modal">
            <p class="list-weaknesses"><strong>Special-Attack :</strong> <br>
            <span> ${element['special-attack[name]']} </span> </p> <br> 
            <p class="list-weaknesses"><strong>Egg :</strong> <br>
            <span> ${element.egg} </span> </p> <br>
            <p class="list-weaknesses"><strong>Spawn-Chance :</strong> <br>
            <span> ${element.spawn_chance} </span> </p> <br>
            </div>   
           
            <div class="div-evolution-modal">
            <p class="list-weaknesses"><strong>Evolution :</strong> <br> 
            <span> ${element['next-evolution.name']} </span> 
            </p>           
            </div>
            `                
            );

           
    
            /*popup.innerHTML = `<div id="div-img-modal"><img src="${element.img}" alt="" id="img-pokemon-modal" class="image-modal">
            </div>
            <p class="nameP"></p>
            ${element.name}`;
            console.log("si funciona");*/
        };
    
     
    })};

   

const opciones= document.getElementById('opciones')
    opciones.addEventListener('change',(event)=>{
        lista.innerHTML="";
        let dat= funciones.sortData(data,event.target.value);
        showData(dat);
        
        console.log(dat);

});

const btninicio = document.getElementById('btn-start');
btninicio.addEventListener('click' , (e) => {
    e.preventDefault();
    document.getElementById('listCalcuPoke').style.display = 'none';
    document.getElementById('display1').style.display ="none";
    document.getElementById('display2').style.display ="block";
    showData(dataPoke)
}); 

const searchPokeByN= document.querySelector('#inputOrder');
searchPokeByN.addEventListener('keyup',searchPokeByName);

function searchPokeByName (){
    document.getElementById("lista").innerHTML= "";
        
        const textValue= searchPokeByN.value.toLowerCase();
        let dat= funciones.filterDatabyName(dataPoke, textValue);
        
        showData(dat);
        
        console.log(dat);  
} ;

const searchPokeByCP= document.querySelector('#inputCP')
searchPokeByCP.addEventListener('keyup',filterDataByF);
      
function filterDataByF() {
    
    document.getElementById('lista').innerHTML= "";
    const numValue= searchPokeByCP.value;
    let dat= funciones.filterDataByCP(dataPoke,numValue);
    showData(dat);
   console.log(dat);

} ;

const searchPokeByT=document.querySelectorAll('.btnCategoria')

function searchPokeByTy(event){
    document.getElementById('lista').innerHTML= "";
    let dat= funciones.filterDataByType(dataPoke, event.target.value);
    showData(dat);
};

searchPokeByT.forEach((element) => {
    element.addEventListener('click', searchPokeByTy)
    
});

const mostrarTodos=document.querySelector('#btn-CategoriaAll')
mostrarTodos.addEventListener('click', ()=>{
    
    showData(dataPoke);
});

// FUNCION CALCULAR
// la funcion para enlazar con el js
const calPo= document.getElementById("btn-nove")
    calPo.addEventListener('click', () => {
    document.getElementById('listCalcuPoke').style.display = 'block';
    document.getElementById('display2').style.display ="none";
    document.getElementById('display1').style.display ="none";

    
    
});

const containerCalcu = document.getElementById('cont-tipos');
containerCalcu.addEventListener('click', (event) => { 
  document.getElementById('respuestas').innerHTML = (funciones.computeStats(dataPoke, event.target.getAttribute('value')))
});

    

//-----------------------------------------------------------
//-------------------MODAL----------------------------------

 
/*
btnmodal.addEventListener('click', function() {
    overlay.classList.add ="active";
    popup.classList.add ="active";
    
});

btnCerrarPopup.addEventListener('click', function() {
    overlay.classList.remove ="active";
    popup.classList.remove ="active";
    
});*/

//Añadir un objeto de atributos a un elemento

const addAttributes = (element, attrObj) => {
    for(let attr in attrObj) {
        if(attrObj.hasOwnProperty(attr))
        element.setAttribute(attr,attrObj[attr])
    }
};
// crear elementos con atributos e hijos
const createCustomElement = (element,attributes,children) =>{
    let customElement = document.createElement(element);
    if(children !== undefined) children.forEach(el => {
        if(el.nodeType){
            if(el.nodeType === 1 || el.nodeType === 11)
            customElement.appendChild(el);
        }else {
            customElement.innerHTML += el;
        }
    });
    addAttributes(customElement,attributes);
    return customElement;
};

// Imprimir modal
const printModal = content => {
    //crear contenedor interno
    const modalContentEl = createCustomElement('div', {
        id: 'modal-content',
        class: 'modal-content'
    }, [content])
    //crear contenedor principal
    const modalContainerEl = createCustomElement('div', {
        id: 'modal-container',
        class: 'modal-container'
    }, [modalContentEl]);

    //Imprimir el modal
    document.body.appendChild(modalContainerEl);

    //remover el modal
    const removerModal = () => 
    document.body.removeChild(modalContainerEl);

    modalContainerEl.addEventListener('click', e => {
        if(e.target === modalContainerEl) removerModal();
    })

};


/*
dataPoke.forEach(function (element){
        let modal = document.getElementById("btn-play");
        modal.addEventListener('click', () => {
    printModal();
    console.log(element.name);
    });
});*/





    
    
