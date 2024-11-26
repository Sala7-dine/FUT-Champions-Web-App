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

  
  function savePlayer() {
    
      const player = {
          name: document.getElementById('name').value,
          nationality: document.getElementById('nationality').value,
          position: document.getElementById('position').value,
          club: document.getElementById('club').value,
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