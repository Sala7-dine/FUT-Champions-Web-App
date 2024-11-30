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

let Gardiens = [];
let Defeseurs = [];
let Attaquant = [];
let Centraux = [];

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


let currentPlayer = 0; 

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
            id : currentPlayer,
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
        currentPlayer++;
        console.log(Gardiens);

    }else{
        rating = document.getElementById('rating').value;
        pace = document.getElementById('pace').value;
        shooting = document.getElementById('shooting').value;
        passing = document.getElementById('passing').value;
        defending = document.getElementById('defending').value;

        player = {
            id : currentPlayer,
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
        console.log(position);

        if(position === "LB" || position === "CB" || position === "RB"){
            Defeseurs.push(player);
            console.log(Defeseurs);
        }else if(position === "LCM" || position === "CAM" || position === "CDM" || position === "RCM"){
            Centraux.push(player);
            console.log(Centraux);
        }else if(position === "LW" || position === "RW" || position === "ST"){
            Attaquant.push(player); 
            console.log(Attaquant);
        }
        currentPlayer++;

    }

    console.log("All players : ",  allPlayers);

    document.getElementById('playerForm').reset();

    Modal.style.display = "none";
    
}


// Modifie Player ----------------------------------------------------------------------------------------- 

function modifiePlayer(position){

    let name = document.getElementById('namem').value;
    let nationality = document.getElementById('nationalitym').value;
    let club = document.getElementById('clubm').value;
    let photo = document.getElementById('photom').value;

    let rating , pace , shooting , passing  , defending;

    let note , plonge , prise_balle , degagement , reflexe , vitesse , positionnement;

    let player;

    if(position === "GK"){

        note = document.getElementById('notem').value;
        plonge = document.getElementById('plongem').value
        prise_balle = document.getElementById('prise_ballem').value;
        degagement = document.getElementById('degagementm').value;
        reflexe = document.getElementById('reflexem').value;
        vitesse = document.getElementById('vitessem').value;
        positionnement = document.getElementById('positionnementm').value;

        player = {
            id : currentPlayer,
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

        console.log(player);

    }else{
        rating = document.getElementById('ratingm').value;
        pace = document.getElementById('pacem').value;
        shooting = document.getElementById('shootingm').value;
        passing = document.getElementById('passingm').value;
        defending = document.getElementById('defendingm').value;

        player = {
            id : currentPlayer,
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

       console.log(player)
    }
    
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

function cardTemplate(id , name , rating , shooting , defending , pace , passing , position , photo){


    let card = `<div id="${id}" class="joueurCards relative w-32 h-44 bg-[url('../assets/badge_gold.webp')] bg-cover flex flex-col justify-center items-center">
                    <img class="w-24 h-[90px] mt-1 mb-1" src="${photo}" alt="">
                    
                    <div class="absolute top-10 left-5">
                        <h1 class="text-[10px] text-center font-semibold">${position}</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" 
                        x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" 
                        class=""><g><path d="M0 85.3v341.4h512V85.3z" fill="#d80027" data-original="#d80027"></path><path 
                            d="M352 226.5h-73.3L256 156.7l-22.7 69.7H160l59.3 43.1-22.7 69.7 59.3-43.1 59.3 43.1-22.7-69.7 
                            59.5-43zm-116.1 37.7 7.7-23.6h24.8l7.7 23.6-20.1 14.6-20.1-14.6zm27.9-37.7h-15.6l7.8-24 7.8 
                            24zm24.3 29-4.8-14.9h25.3l-20.5 14.9zm-59.4-14.9-4.8 14.9-20.4-14.9h25.2zm-5.2 61.8 7.8-24 12.6 9.2-20.4 
                            14.8zm44.5-14.9 12.6-9.2 7.8 24-20.4-14.8z" fill="#6da544" data-original="#6da544"></path></g></svg>
                        
                    </div>

                    <h1 class="text-[10px] font-bold -mb-2 -mt-1">${name}</h1>
                    <div class="flex gap-1 text-[9px] font-bold mt-2">

                        <div>
                            <h1>RA</h1>
                            <h1>${rating}</h1>
                        </div>
                        <div>
                            <h1>SH</h1>
                            <h1>${shooting}</h1>
                        </div>
                        <div>
                            <h1>PS</h1>
                            <h1>${passing}</h1>
                        </div>
                        <div>
                            <h1>PC</h1>
                            <h1>${pace}</h1>
                        </div>
                        <div>
                            <h1>DF</h1>
                            <h1>${defending}</h1>
                        </div>
                        

                    </div>

                    <div class="delete-player absolute w-4 h-4 top-7 left-[104px] bg-red-500 rounded-full flex justify-center items-center"><i class="fa fa-close text-white cursor-pointer" style="font-size:10px"></i></div>
                    <div class="modifie-player absolute w-4 h-4 top-7 left-[8px] bg-blue-500 rounded-full flex justify-center items-center"><i class="material-icons text-white cursor-pointer" style="font-size:10px">edit</i></div>
                </div>`

    return card;

}


function cardTemplateG(id  , name , note , prise_balle , plonge , vitesse , degagement  , position , photo){

    let card = `<div id="${id}" class="joueurCards relative w-32 h-44 bg-[url('../assets/badge_gold.webp')] bg-cover flex flex-col justify-center items-center">
                    <img class="w-24 h-[90px] mt-1 mb-1" src="${photo}" alt="">
                    
                    <div class="absolute top-10 left-5">
                        <h1 class="text-[10px] text-center font-semibold">${position}</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" 
                        x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" 
                        class=""><g><path d="M0 85.3v341.4h512V85.3z" fill="#d80027" data-original="#d80027"></path><path 
                            d="M352 226.5h-73.3L256 156.7l-22.7 69.7H160l59.3 43.1-22.7 69.7 59.3-43.1 59.3 43.1-22.7-69.7 
                            59.5-43zm-116.1 37.7 7.7-23.6h24.8l7.7 23.6-20.1 14.6-20.1-14.6zm27.9-37.7h-15.6l7.8-24 7.8 
                            24zm24.3 29-4.8-14.9h25.3l-20.5 14.9zm-59.4-14.9-4.8 14.9-20.4-14.9h25.2zm-5.2 61.8 7.8-24 12.6 9.2-20.4 
                            14.8zm44.5-14.9 12.6-9.2 7.8 24-20.4-14.8z" fill="#6da544" data-original="#6da544"></path></g></svg>
                        
                    </div>

                    <h1 class="text-[10px] font-bold -mb-2 -mt-1">${name}</h1>
                    <div class="flex gap-1 text-[9px] font-bold mt-2">

                        <div>
                            <h1>RA</h1>
                            <h1>${note}</h1>
                        </div>
                        <div>
                            <h1>PR</h1>
                            <h1>${prise_balle}</h1>
                        </div>
                        <div>
                            <h1>PL</h1>
                            <h1>${plonge}</h1>
                        </div>
                        <div>
                            <h1>DG</h1>
                            <h1>${degagement}</h1>
                        </div>
                        <div>
                            <h1>VT</h1>
                            <h1>${vitesse}</h1>
                        </div>
                        

                    </div>

                    <div class="delete-player absolute w-4 h-4 top-7 left-[104px] bg-red-500 rounded-full flex justify-center items-center"><i class="fa fa-close text-white cursor-pointer" style="font-size:10px"></i></div>
                    <div class="modifie-player absolute w-4 h-4 top-7 left-[8px] bg-blue-500 rounded-full flex justify-center items-center"><i class="material-icons text-white cursor-pointer" style="font-size:10px">edit</i></div>
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
let Modalm = document.getElementById("Modalm");


function selectedCard(card, id) {
    modaPlayers.style.display = "flex";
    cardsJr.innerHTML = "";

    let players = [];
    
    if (id === "LW" || id === "ST" || id === "RW") {
        players = Attaquant.filter(player => player.position === id);
    } else if (id === "LCM" || id === "CAM" || id === "CDM" || id === "RCM") {
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
            cardsJr.innerHTML += cardTemplateG(
                player.id,
                player.name,
                player.note,
                player.prise_balle,
                player.plonge,
                player.vitesse,
                player.degagement,
                player.position,
                player.photo
            );
        } else {
            cardsJr.innerHTML += cardTemplate(
                player.id , player.name, player.rating , player.shooting , player.defending , player.pace , player.passing , player.position , player.photo
            );
        }
    });

    let joueurCards = document.querySelectorAll(".joueurCards");
    
    joueurCards.forEach((joueur) => {
        
        joueur.addEventListener("click", (e) => {
           if (!e.target.closest('.delete-player')) {

                card.innerHTML = joueur.innerHTML;
                joueur.remove(); 
                
                const deleteBtn = card.querySelector('.delete-player');
                const modifiePlayer = card.querySelector('.modifie-player');

                if (deleteBtn) {
                    deleteBtn.addEventListener('click', (e) => {
                        e.stopPropagation();

                        card.innerHTML = `
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
                
                if(modifiePlayer){
                    modifiePlayer.addEventListener("click" , (e)=>{
                        e.stopPropagation();

                        const champm = document.getElementById("champm");
                        let je = joueur.querySelector("#position");
                        let positionmm = document.getElementById("positionmm");  
                        positionmm.style.display = "none";

                        console.log(je)

                        if(je.textContent === "GK"){
                            champm.innerHTML = GardienTemplate();
                        }else{
                            champm.innerHTML = JoueurTemplate(); 
                        }


                        Modalm.style.display = "flex";
                    })
                }


                card.classList.add("selected-player");
                modaPlayers.style.display = "none"
            }
        });
    });
}

closeJr.addEventListener("click", () => {
    modaPlayers.style.display = "none";
});

closeJ.addEventListener("click", () => {
    modalCards.style.display = "none";
});

modaPlayers.addEventListener("click", (e) => {
    if (e.target === modaPlayers) {
        modaPlayers.style.display = "none";
    }
});

modalCards.addEventListener("click", (e) => {
    if (e.target === modalCards) {
        modalCards.style.display = "none";
    }
});

closem.addEventListener("click" , () => {
    Modalm.style.display = "none";
});

Modalm.addEventListener("click" , (e)=>{
    if(e.target === Modalm){
        Modalm.style.display = "none";
    }
})

function displayAllPlayers() {
    cards.innerHTML = "";
    allPlayers.forEach(card => {
        if (card.position === "GK") {
            cards.innerHTML += cardTemplateG(card.name, card.note, card.prise_balle, card.position, card.photo);
        } else {
            cards.innerHTML += cardTemplate(card.name, card.rating, card.shooting, card.position, card.photo);
        }
    });

    document.querySelectorAll('.joueurCards').forEach(joueur => {
        const deleteBtn = joueur.querySelector('.delete-player');
        const playerName = joueur.querySelector('h1 span:nth-child(2)').textContent;
        
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (confirm(`Êtes-vous sûr de vouloir supprimer ${playerName} ?`)) {
                deletePlayer(joueur, playerName);
            }
        });
    });
}


displayPlayers.addEventListener("click", () => {
    if (allPlayers.length == 0) {
        alert("Aucun Joueur à afficher");
    } else {
        displayAllPlayers();
        modalCards.style.display = "flex";
    }
});


// Change La formation ---------------------------------------------------- 

let formation1 = document.getElementById("4-3-3");
let formation2 = document.getElementById("4-4-2");
let RW = document.getElementById("RW");
let RCM = document.getElementById("RCM");

formation1.addEventListener("click" , ()=>{

    RCM.style.display = "none";
    RW.style.display = "flex";
    
    dropdownMenu.classList.add('hidden');
    dropdownMenu.classList.remove('block');
    console.log("433");
})

formation2.addEventListener("click" , ()=>{

    RCM.style.display = "flex";
    RW.style.display = "none";

    dropdownMenu.classList.add('hidden');
    dropdownMenu.classList.remove('block');
    console.log("433");
})