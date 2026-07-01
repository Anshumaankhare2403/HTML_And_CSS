async function data() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const pokemon = await response.json();

        const container = document.getElementById("pokemon");
        container.innerHTML = "";

        for (const item of pokemon.results) {
            const res = await fetch(item.url);
            const details = await res.json();

            container.innerHTML += `
           
            <div class="col">
            <img src="${details.sprites.other["official-artwork"].front_default}" width="200">
            <h2 class="textsp">${details.name}</h2>
            <p><strong>Height:</strong> ${details.height}</p>
            <p><strong>Weight:</strong> ${details.weight}</p>
            <p><strong>Type:</strong> ${details.types[0].type.name}</p>
            </div>
            
            `;
            console.log(details);
        }

    } catch (error) {
        console.error(error);
    }
}

data();