 // URL base de la PokeAPI
 const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

 // Elementos del DOM
 let searchButton = document.getElementById('searchButton');
 let pokemonNameInput = document.getElementById('pokemonName');
 let pokemonDataDiv = document.getElementById('pokemonData');

 // Función para buscar un Pokémon
 searchButton.addEventListener('click', function(){
     let pokemonName = pokemonNameInput.value.trim().toLowerCase();
     if (pokemonName === '') {
         pokemonDataDiv.textContent = 'Por favor, escribe un nombre de Pokémon.';
         return;
     }

     fetch(baseUrl + pokemonName)
         .then(response => {
             if (!response.ok) {
                 throw new Error('Pokémon no encontrado.');
             }
             return response.json();
         })
         .then(data => {
             // Mostrar datos básicos del Pokémon
             pokemonDataDiv.innerHTML = `
                 <h2>${data.name.toUpperCase()}</h2>
                 <img src="${data.sprites.front_default}" alt="${data.name}">
                 <p><strong>Altura:</strong> ${data.height}</p>
                 <p><strong>Peso:</strong> ${data.weight}</p>
             `;
         })
         .catch(error => {
             pokemonDataDiv.textContent = error.message;
         });
 });
