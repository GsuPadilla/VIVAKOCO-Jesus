document.addEventListener('DOMContentLoaded', function () {
    // Inicializar el mapa
    var map = L.map('map').setView([0, 0], 2); // Configura la vista inicial del mapa

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Datos de ejemplo para los personajes
    const characters = {
        Amber: {
            name: "Amber",
            description: "Amber es una arquera de elemento Pyro en Genshin Impact. Conocida como la única Outrider de los Caballeros de Favonius, Amber siempre está lista para ayudar a los ciudadanos de Mondstadt con una sonrisa.",
            image: "amber.jpg",
            element: "Pyro",
            weapon: "Arco",
            rarity: 4
        },
        Kaeya: {
            name: "Kaeya",
            description: "Kaeya es un espadachín de elemento Cryo en Genshin Impact. Caballero de Favonius con una actitud despreocupada, Kaeya es conocido por su astucia y sus habilidades de espionaje.",
            image: "kaeya.jpg",
            element: "Cryo",
            weapon: "Espada",
            rarity: 4
        },
        Lisa: {
            name: "Lisa",
            description: "Lisa es una maga de elemento Electro en Genshin Impact. Bibliotecaria de los Caballeros de Favonius, Lisa es una poderosa hechicera con un aire misterioso y una personalidad relajada.",
            image: "lisa.jpg",
            element: "Electro",
            weapon: "Catalizador",
            rarity: 4
        }
        // Añade más personajes según sea necesario
    };

    // Función para mostrar información del personaje
    window.showCharacterInfo = function(characterName) {
        var character = characters[characterName];
        if (character) {
            document.getElementById('map').style.display = 'none';
            var characterInfo = document.getElementById('character-info');
            characterInfo.style.display = 'block';
            characterInfo.innerHTML = `
                <h2>${character.name}</h2>
                <img src="${character.image}" alt="${character.name}" style="width: 150px; height: 150px; border-radius: 50%;">
                <p><strong>Elemento:</strong> ${character.element}</p>
                <p><strong>Arma:</strong> ${character.weapon}</p>
                <p><strong>Rareza:</strong> ${character.rarity} ★</p>
                <p>${character.description}</p>
                <button onclick="showMap()" class="back-button">Volver al Mapa</button>
            `;
        }
    };

    // Función para mostrar el mapa y ocultar la información del personaje
    window.showMap = function() {
        document.getElementById('character-info').style.display = 'none';
        document.getElementById('map').style.display = 'block';
    };

    // Añadir event listeners a los botones de personajes
    document.querySelectorAll('.character-box').forEach(box => {
        box.addEventListener('click', function() {
            const characterName = this.querySelector('p').textContent;
            showCharacterInfo(characterName);
        });
    });
});