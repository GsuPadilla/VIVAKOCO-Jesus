document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded');

    const characters = {
        Amber: {
            name: "Amber",
            title: "Outrider Caballero",
            description: "Amber es una arquera de elemento Pyro en Genshin Impact.",
            image: "amber.jpg",
            element: "Pyro",
            weapon: "Arco",
            rarity: 4
        },
        Kaeya: {
            name: "Kaeya",
            title: "Caballero de Favonius",
            description: "Kaeya es un espadachín de elemento Cryo en Genshin Impact.",
            image: "kaeya.jpg",
            element: "Cryo",
            weapon: "Espada",
            rarity: 4
        },
        Lisa: {
            name: "Lisa",
            title: "Bruja de la Rosa",
            description: "Lisa es una maga de elemento Electro en Genshin Impact.",
            image: "lisa.jpg",
            element: "Electro",
            weapon: "Catalizador",
            rarity: 4
        }
    };

    function showCharacterInfo(characterName) {
        console.log('Mostrando información de:', characterName);
        const character = characters[characterName];
        if (character) {
            const characterInfoElement = document.getElementById('character-info');
            const mapElement = document.getElementById('genshin-map');
            
            if (characterInfoElement && mapElement) {
                mapElement.style.display = 'none';
                characterInfoElement.style.display = 'block';
                characterInfoElement.innerHTML = `
                    <h2>${character.name}</h2>
                    <hr>
                    <h3>${character.title}</h3>
                    <p>${character.description}</p>
                    <p><strong>Elemento:</strong> ${character.element}</p>
                    <p><strong>Arma:</strong> ${character.weapon}</p>
                    <p><strong>Rareza:</strong> ${character.rarity} ★</p>
                    <img src="${character.image}" alt="${character.name}">
                    <br>
                    <button onclick="showMap()">Volver al Mapa</button>
                `;
                console.log('Información del personaje actualizada');
            } else {
                console.error('No se encontraron los elementos necesarios en el DOM');
            }
        } else {
            console.error('No se encontró información para el personaje:', characterName);
        }
    }

    window.showMap = function() {
        console.log('Mostrando mapa');
        const characterInfoElement = document.getElementById('character-info');
        const mapElement = document.getElementById('genshin-map');
        
        if (characterInfoElement && mapElement) {
            characterInfoElement.style.display = 'none';
            mapElement.style.display = 'block';
        } else {
            console.error('No se encontraron los elementos necesarios en el DOM');
        }
    };

    const characterBoxes = document.querySelectorAll('.character-box');
    console.log('Número de character-boxes encontrados:', characterBoxes.length);
    
    characterBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const characterName = this.querySelector('p').textContent;
            console.log('Clic en personaje:', characterName);
            showCharacterInfo(characterName);
        });
    });
});