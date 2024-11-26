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



const players = [];


function validateForm() {
    
    const name = document.getElementById('name').value.trim();
    const nationality = document.getElementById('nationality').value.trim();
    const position = document.getElementById('position').value.trim();
    const club = document.getElementById('club').value.trim();
    const rating = document.getElementById('rating').value;
    const pace = document.getElementById('pace').value;
    const shooting = document.getElementById('shooting').value;
    const passing = document.getElementById('passing').value;
    const defending = document.getElementById('defending').value;

    const errors = [];
    
    if (!name) errors.push("Le champ 'Nom' est obligatoire.");
    if (!nationality) errors.push("Le champ 'Nationalité' est obligatoire.");
    if (!position) errors.push("Le champ 'Position' est obligatoire.");
    if (!club) errors.push("Le champ 'Club' est obligatoire.");
    if (!rating || isNaN(rating) || rating < 0 || rating > 100) {
        errors.push("Le champ 'Note' doit être un nombre entre 0 et 100.");
    }
    if (!pace || isNaN(pace) || pace < 0 || pace > 100) {
        errors.push("Le champ 'Vitesse' doit être un nombre entre 0 et 100.");
    }
    if (!shooting || isNaN(shooting) || shooting < 0 || shooting > 100) {
        errors.push("Le champ 'Tir' doit être un nombre entre 0 et 100.");
    }
    if (!passing || isNaN(passing) || passing < 0 || passing > 100) {
        errors.push("Le champ 'Passes' doit être un nombre entre 0 et 100.");
    }
    if (!defending || isNaN(defending) || defending < 0 || defending > 100) {
        errors.push("Le champ 'Défense' doit être un nombre entre 0 et 100.");
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));
        return false;
    }

    return true;
}


function savePlayer() {
    
    if (!validateForm()) {
        return;
    }

    const player = {

        name: document.getElementById('name').value.trim(),
        nationality: document.getElementById('nationality').value.trim(),
        position: document.getElementById('position').value.trim(),
        club: document.getElementById('club').value.trim(),
        rating: document.getElementById('rating').value,
        pace: document.getElementById('pace').value,
        shooting: document.getElementById('shooting').value,
        passing: document.getElementById('passing').value,
        defending: document.getElementById('defending').value
    };

    players.push(player);

    console.log(players);

    document.getElementById('playerForm').reset();
}
