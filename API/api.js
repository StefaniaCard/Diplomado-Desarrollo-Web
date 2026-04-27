const fragmento = document.createDocumentFragment();
const main = document.querySelector("main");
const template = document.createElement("template");
main.innerHTML = "";

const apiRequest = async () => {

    for(let i = 1; i <= 84; i++){
        try{

            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await respuesta.json();
            console.log(data)
            if(data) paintPokemon(data);

        }catch (error) {
            console.log(
                "Hubo un error al pedir los datos de la pokeApi" + error
            );
        }
    }
};

const paintPokemon = (data) => {

    try {

        if (data) {
    template.innerHTML = `
        <div class="card">
            <img 
                loading="lazy"
                class="card_img" 
                src="${data.sprites.other.dream_world.front_default}" 
                alt="${data.name}">
            
            <h2 class="card_title">${data.name}</h2>

            <div class="types">
                ${data.types.map(type => {
                    const typePokemon = type.type.name;

                    return `<span class="pokemon-type-span pokemon-type-${typePokemon}">
                                ${typePokemon}
                            </span>`;
                }).join("")}
            </div>
        </div>
    `;

            const cloneTemplate = template.content.cloneNode(true);
            fragmento.appendChild(cloneTemplate);
            main.appendChild(fragmento);

        }

    } catch (error) {
        console.log("Hubo un error al mostrar los datos" + error);
    }
    
};

const paintPokemonForType = async (e) => {
    
};

document.addEventListener("DOMContentLoaded", () => {
    apiRequest();
});

document.addEventListener("click", (e) => {
    
});