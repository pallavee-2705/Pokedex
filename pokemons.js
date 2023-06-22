 var ulcontainer = document.createElement('ul');

 let items = [
    {
        "Name": "Bulbasaur",
        "Number": "1",
        "Type" : "Poison & Grass",
        "Fast Moves": "Tackle / Vine Whip"
    },
    {
        "Name": "Ivysaur",
        "Number": "2",
        "Type" : "Poison & Grass",
        "Fast Moves": "Razor Leaf / Vine Whip"
    },
    {
        "Name": "Venusaur",
        "Number": "3",
        "Type" : "Poison & Grass",
        "Fast Moves": "Razor Leaf / Vine Whip"

    },
    {
        "Name": "Charmander",
        "Number": "4",
        "Type" : "Fire",
        "Fast Moves": "Ember / Scratch"

    },
    {
        "Name": "Charmeleon",
        "Number": "5",
        "Type" : "Fire",
        "Fast Moves": "Ember / Fine Fang"

    },
    {
        "Name": "Charizard",
        "Number": "6",
        "Type" : "Fire",
        "Fast Moves": "Fine Spin / Air Slash"

    },
    {
        "Name": "Squirtle",
        "Number": "7",
        "Type" : "Water",
        "Fast Moves": " Tackle/ Bubble"

    },
    {
        "Name": "Wartortle",
        "Number": "8",
        "Type" : "Water",
        "Fast Moves": "Bite / Water Gun"

    },
    {
        "Name": "Blastoise",
        "Number": "9",
        "Type" : "Water",
        "Fast Moves": "Bite / Water Gun"

    },
    {
        "Name": "Caterpie",
        "Number": "10",
        "Type" : "Bug",
        "Fast Moves": "Tackle / Bug Bite"

    },
    {
        "Name": "Metapod",
        "Number": "11",
        "Type" : "Bug",
        "Fast Moves": " Tackle/ Bug Bite"

    },
    {
        "Name": "Butterfree",
        "Number": "12",
        "Type" : "Bug & Flying",
        "Fast Moves": "Struggle Bug / Confusion"

    },
    {
        "Name": "Weedle",
        "Number": "13",
        "Type" : " Bug & Poison",
        "Fast Moves": "Bug Bite / Poison Sting"

    },
    {
        "Name": "Kakuna",
        "Number": "14",
        "Type" : "Bug & Poison",
        "Fast Moves": "Bug Bite/Poison Sting"

    },
    {
        "Name": "Beedrill",
        "Number": "15",
        "Type" : "Bug & Poison",
        "Fast Moves": "Infestation / Poison Jab"

    },
    {
        "Name": "Pidgey",
        "Number": "16",
        "Type" : "Normal & Flying",
        "Fast Moves": "Tackle / Quick Attack"

    },
    {
        "Name": "Pidgeotto",
        "Number": "17",
        "Type" : "Normal & Flying",
        "Fast Moves": "Bite / Quick Attack"

    },
    {
        "Name": "Pidgeot",
        "Number": "18",
        "Type" : "Normal & Flying",
        "Fast Moves": "Quick Attack / Peck"

    },
    {
        "Name": "Rattata",
        "Number": "19",
        "Type" : "Normal",
        "Fast Moves": "Tackle / Quick Attack"

    },
    {
        "Name": "Raticate",
        "Number": "20",
        "Type" : "Normal",
        "Fast Moves": "Bite / Quick Attack"
    }
 ];

 var enterTrigger1 = document.getElementById("bynumber");
 enterTrigger1.addEventListener("keypress", function(whenEnter) {
   if (whenEnter.key === "Enter") {
     whenEnter.preventDefault();
     document.getElementById("btn1").click();
   }
 }); 

function searchNumber(){

    ulcontainer.innerText='';

    let inputVal1 = document.getElementById("bynumber").value;
    let filteredResultNumber = items.filter(myelement1 => {
       if(myelement1.Number.match(inputVal1)) {
        return myelement1;
       }
    }) 
    
    if( inputVal1==null || inputVal1==""){
        ulcontainer.remove();
        return false;
    } 
    
    if(inputVal1 > 20){
        ulcontainer.innerText='';
        ulcontainer.remove();
        return false;
    }
    results(filteredResultNumber);
}

var enterTrigger2 = document.getElementById("byname");
 enterTrigger2.addEventListener("keypress", function(pressEnter) {
   if (pressEnter.key === "Enter") {
     pressEnter.preventDefault();
     document.getElementById("btn2").click();
   }
 });
function searchName(){

    ulcontainer.innerText='';

    let inputVal2 = document.getElementById("byname").value;
    let splChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let hasNum = /\d+/;

    let filteredResultName = items.filter(myelement2 => {
        if(myelement2.Name.toLowerCase().match(inputVal2.toLowerCase())) {
        return myelement2;
       }
    }) 

    if( hasNum.test(inputVal2) || splChar.test(inputVal2)){
        alert("String contains a number or special character");
        return false;
    }
    if( inputVal2==null || !/\S/.test(inputVal2)){
        ulcontainer.remove();
        return false;
    } 
    if(inputVal2.length > 20){
        alert("Name should not be more than 20 characters");
        return false;
    }

    results(filteredResultName);
    
    }

    function results (array) {
        array.forEach(
            ele => {

                let mylistelements = document.createElement('li');
                mylistelements.classList.add('myjscontainer');

                let mydiv = `<div class="pokemon" id="pokemon">
                <img src="pokemon-images/${ele.Number}.png" alt="${ele.Name}" height="150" width="150">
                <div class="poke-font" id="poke-font">
                    <p>#0${ele.Number}</p>
                </div>
                <h3 id="poke-heading">${ele.Name}</h3>
                <div class="poke-type-grass-poison" id="poke-type-grass-poison"> 
                    <p>${ele.Type}</p>
                </div>
                <br>
            </div>`;
            mylistelements.insertAdjacentHTML("beforeend", mydiv);
            ulcontainer.appendChild(mylistelements);
            }

        )
            
            var htmlcontainer = document.querySelector(".mycontainer");
            htmlcontainer.parentNode.insertBefore(ulcontainer,htmlcontainer);
            ulcontainer .classList.add('htmlcontainerstyle');
    }
    