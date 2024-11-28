let dropdownToggle = document.getElementById('dropdownToggle');
let dropdownMenu = document.getElementById('dropdownMenu');

function handleClick() {

    if (dropdownMenu.className.includes('block')) {
        dropdownMenu.classList.add('hidden')
        dropdownMenu.classList.remove('block')
    } else {
        dropdownMenu.classList.add('block')
        dropdownMenu.classList.remove('hidden')
    }

}

dropdownToggle.addEventListener('click', handleClick);

const Gardiens = [];
const Defeseurs = [];
const Attaquant = [];
const Centraux = [];

let allPlayers = [];


// function validateForm(name , nationality , position , club , rating , pace , shooting , passing , defending) {

//     const errors = [];
    
//     if (!name) errors.push("Le champ 'Nom' est obligatoire.");
//     if (!nationality) errors.push("Le champ 'Nationalité' est obligatoire.");
//     if (!position) errors.push("Le champ 'Position' est obligatoire.");
//     if (!club) errors.push("Le champ 'Club' est obligatoire.");
//     if (!rating || isNaN(rating) || rating < 0 || rating > 100) {
//         errors.push("Le champ 'Note' doit être un nombre entre 0 et 100.");
//     }
    
//     if (!pace || isNaN(pace) || pace < 0 || pace > 100) {
//         errors.push("Le champ 'Vitesse' doit être un nombre entre 0 et 100.");
//     }
    
//     if (!shooting || isNaN(shooting) || shooting < 0 || shooting > 100) {
//         errors.push("Le champ 'Tir' doit être un nombre entre 0 et 100.");
//     }
    
//     if (!passing || isNaN(passing) || passing < 0 || passing > 100) {
//         errors.push("Le champ 'Passes' doit être un nombre entre 0 et 100.");
//     }

//     if (!defending || isNaN(defending) || defending < 0 || defending > 100) {
//         errors.push("Le champ 'Défense' doit être un nombre entre 0 et 100.");
//     }

//     if (errors.length > 0) {
//         alert(errors.join('\n'));
//         return false;
//     }

//     return true;
// }

function JoueurTemplate()

{
    let div = `<div class="mb-2">
                <label class="text-gray-800 text-sm mb-2 block">Note</label>
                <input id="rating" type="number" placeholder="Saisissez la note du joueur..."
                    class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-green-600 focus:bg-transparent rounded-lg" />
            </div>
            
            <div class="flex gap-4 mb-2">
                <div>
                    <label class="text-gray-800 text-sm mb-2 block">Vitesse</label>
                    <input id="pace" type="number" placeholder="Saisissez la vitesse du joueur..."
                        class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-green-600 focus:bg-transparent rounded-lg" />
                </div>
        
                <div>
                    <label class="text-gray-800 text-sm mb-2 block">Tir</label>
                    <input id="shooting" type="number" placeholder="Saisissez la précision de tir du joueur..."
                        class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-green-600 focus:bg-transparent rounded-lg" />
                </div>
            </div>

            <div class="flex gap-4 mb-2">
                <div>
                    <label class="text-gray-800 text-sm mb-2 block">Passes</label>
                    <input id="passing" type="number" placeholder="Saisissez la précision des passes du joueur..."
                        class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-green-600 focus:bg-transparent rounded-lg" />
                </div>
        
                <div>
                    <label class="text-gray-800 text-sm mb-2 block">Défense</label>
                    <input id="defending" type="number" placeholder="Saisissez la capacité de défense du joueur..."
                        class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-green-600 focus:bg-transparent rounded-lg" />
                </div>
            </div>`


    return div;

}

function GardienTemplate(){

    let div = `
                
                <div class="mb-2">
                    <label class="text-gray-800 text-sm mb-2 block">Note</label>
                    <input id="note" type="number" placeholder="Saisissez la note du joueur..."
                    class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-green-600 focus:bg-transparent rounded-lg" />
                </div>

                <div class="flex gap-4 mb-2">
                    <div>
                        <label class="text-gray-800 text-sm mb-2 block">Plongée</label>
                        <input id="plonge" type="number" placeholder="Saisissez la note de plongée..."
                            class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-green-600 focus:bg-transparent rounded-lg" />
                    </div>
                
                    <div>
                        <label class="text-gray-800 text-sm mb-2 block">Prise de balle</label>
                        <input id="prise_balle" type="number" placeholder="Saisissez la note de prise de balle..."
                            class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-green-600 focus:bg-transparent rounded-lg" />
                    </div>
                </div>

                <div class="flex gap-4 mb-2">
                    <div>
                        <label class="text-gray-800 text-sm mb-2 block">Dégagement</label>
                        <input id="degagement" type="number" placeholder="Saisissez la note de dégagement..."
                            class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-green-600 focus:bg-transparent rounded-lg" />
                    </div>

                    <div>
                        <label class="text-gray-800 text-sm mb-2 block">Réflexes</label>
                        <input id="reflexe" type="number" placeholder="Saisissez la note de réflexes..."
                            class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-green-600 focus:bg-transparent rounded-lg" />
                    </div>
                </div>

                <div class="flex gap-4 mb-2">
                    <div>
                        <label class="text-gray-800 text-sm mb-2 block">Vitesse</label>
                        <input id="vitesse" type="number" placeholder="Saisissez la vitesse du joueur..."
                            class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-green-600 focus:bg-transparent rounded-lg" />
                    </div>

                    <div>
                        <label class="text-gray-800 text-sm mb-2 block">Positionnement</label>
                        <input id="positionnement" type="number" placeholder="Saisissez la note de positionnement..."
                            class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-green-600 focus:bg-transparent rounded-lg" />
                    </div>
                </div>
                    `


    return div;

}


const position = document.getElementById('position');
const champ = document.getElementById("champ");

position.addEventListener("change" , (e)=> {
    if(e.target.value === "GK"){
        champ.innerHTML = GardienTemplate();
    }else {
        champ.innerHTML = JoueurTemplate();
    }
});


function savePlayer() {

    // if (!validateForm(name , nationality , position , club , rating , pace , shooting , passing , defending)) {
    //     return;
    // }


    let name = document.getElementById('name').value;
    let nationality = document.getElementById('nationality').value;
    let position = document.getElementById('position').value;
    let club = document.getElementById('club').value;
    let photo = document.getElementById('photo').value;

    let rating , pace , shooting , passing  , defending;

    let note , plonge , prise_balle , degagement , reflexe , vitesse , positionnement;

    let player;

    if(position === "GK"){

        note = document.getElementById('note').value;
        plonge = document.getElementById('plonge').value
        prise_balle = document.getElementById('prise_balle').value;
        degagement = document.getElementById('degagement').value;
        reflexe = document.getElementById('reflexe').value;
        vitesse = document.getElementById('vitesse').value;
        positionnement = document.getElementById('positionnement').value;

        player = {
            name: name,
            nationality: nationality,
            position: position,
            club: club,
            photo: photo,
            note : note,
            plonge : plonge , 
            prise_balle : prise_balle ,
            degagement : degagement ,
            reflexe : reflexe ,
            vitesse : vitesse ,
            positionnement
        };

        Gardiens.push(player);
        allPlayers.push(player);
        console.log(Gardiens);

    }else{
        rating = document.getElementById('rating').value;
        pace = document.getElementById('pace').value;
        shooting = document.getElementById('shooting').value;
        passing = document.getElementById('passing').value;
        defending = document.getElementById('defending').value;

        player = {

            name: name,
            nationality: nationality,
            position: position,
            club: club,
            photo: photo,
            rating: rating,
            pace: pace,
            shooting: shooting,
            passing: passing,
            defending: defending
                
        };

        allPlayers.push(player);

        if(position === "LB" || position === "CB" || position === "RB"){
            Defeseurs.push(player);
            console.log(Defeseurs);
        }else if(position === "CM"){
            Centraux.push(player);
            console.log(Centraux);
        }else if(position === "LW" || position === "RW" || position === "ST"){
            Attaquant.push(player); 
            console.log(Attaquant);
        }

    }

    console.log("All players : ",  allPlayers);



    document.getElementById('playerForm').reset();
    
}


let add = document.getElementById("add"); 
let close = document.getElementById("close");
let Modal = document.getElementById("Modal");

add.addEventListener("click" , ()=>{
    Modal.style.display = "flex";
})

close.addEventListener("click" ,()=> {
    Modal.style.display = "none";
})


// Afficher tout les joueur ----------------------------------------------

function cardTemplate(name , rating , shooting , position , photo){


    let card = `<div class="joueurCards relative w-32 h-44 bg-[url('../assets/badge_gold.webp')] bg-cover flex flex-col justify-center items-center">
                    <img class="w-24 mt-1" src="${photo}" alt="">
                    <h1 class="font-semibold text-sm px-5 w-full flex justify-between">    <span class="text-[10px]">${rating}</span>     <span>${name}</span>  <span class="text-[10px]">${shooting}</span>     </h1>
                    <h3 class="font-semibold text-[10px]">${position}</h3>

                    <div class="delete-player absolute w-4 h-4 top-7 left-[104px] bg-red-500 rounded-full flex justify-center items-center"><i class="fa fa-close text-white cursor-pointer" style="font-size:10px"></i></div>
                    <div class="absolute w-4 h-4 top-7 left-[8px] bg-blue-500 rounded-full flex justify-center items-center"><i class="material-icons text-white cursor-pointer" style="font-size:10px">edit</i></div>
                </div>`

    return card;

}

let cards = document.getElementById("cards");
let modalCards = document.getElementById("modalCards");
let displayPlayers = document.getElementById("displayPlayers");
let closeJ = document.getElementById("closeJ");

// Ajouter des joueur sur les cards -----------------------------------

let modaPlayers = document.getElementById('modaPlayers');
let cardsJr = document.getElementById('cardsJr');
let closeJr = document.getElementById("closeJr");

function selectedCard(card, id) {
    modaPlayers.style.display = "flex";
    cardsJr.innerHTML = "";

    let players = [];
    
    if (id === "LW" || id === "ST" || id === "RW") {
        players = Attaquant.filter(player => player.position === id);
    } else if (id === "CAM" || id === "CM" || id === "CDM") {
        players = Centraux.filter(player => player.position === id);
    } else if (id === "LB" || id === "CB" || id === "CB-2" || id === "RB") {
        players = Defeseurs.filter(player => player.position === id);
    } else if (id === "GK") {
        players = Gardiens;
    }

    if (players.length === 0) {
        cardsJr.innerHTML = `
            <div class="text-white text-center w-full">
                <p>Aucun joueur disponible pour cette position</p>
                <p class="text-sm mt-2">Veuillez d'abord ajouter des joueurs pour le poste ${id}</p>
            </div>`;
        return;
    }

    players.forEach(player => {
        if (player.position === "GK") {
            cardsJr.innerHTML += cardTemplate(
                player.name,
                player.note,
                player.prise_balle,
                player.position,
                player.photo
            );
        } else {
            cardsJr.innerHTML += cardTemplate(
                player.name,
                player.rating,
                player.shooting,
                player.position,
                player.photo
            );
        }
    });

    let joueurCards = document.querySelectorAll(".joueurCards");
    
    joueurCards.forEach(joueur => {
        
        joueur.addEventListener("click", (e) => {
            if (!e.target.closest('.delete-player')) {
                card.innerHTML = joueur.innerHTML;
                
                const deleteBtn = card.querySelector('.delete-player');
                if (deleteBtn) {
                    deleteBtn.addEventListener('click', (e) => {
                        e.stopPropagation();

                        card.innerHTML = `
                            <p>${id}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                width="40" height="40" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" 
                                xml:space="preserve" class=""><g><path fill="#4bae4f" fill-rule="evenodd" 
                                d="M256 0C114.8 0 0 114.8 0 256s114.8 256 256 256 256-114.8 256-256S397.2 0 256 0z" 
                                clip-rule="evenodd" opacity="1" data-original="#4bae4f" class=""></path><path 
                                fill="#ffffff" d="M116 279.6v-47.3c0-4.8 3.9-8.8 8.8-8.8h98.9v-98.8c0-4.8 3.9-8.8 8.8-8.8h47.3c4.8 0 8.7 3.9 8.7 8.8v98.9h98.8c4.8 0 8.8 3.9 8.8 8.8v47.3c0 4.8-3.9 8.7-8.8 8.7h-98.9v98.8c0 4.8-3.9 8.8-8.7 8.8h-47.3c-4.8 0-8.8-3.9-8.8-8.8v-98.9h-98.8c-4.9.1-8.8-3.9-8.8-8.7z" 
                                opacity="1" data-original="#ffffff" class=""></path></g></svg>
                        `;

                        card.classList.remove("selected-player");
                    });
                }
                
                card.classList.add("selected-player");
                modaPlayers.style.display = "none";
            }
        });
    });
}

closeJr.addEventListener("click", () => {
    modaPlayers.style.display = "none";
});

modaPlayers.addEventListener("click", (e) => {
    if (e.target === modaPlayers) {
        modaPlayers.style.display = "none";
    }
});