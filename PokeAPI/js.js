function searchPokeAPI(){
    let pokemon = document.getElementById("pokeID").value;
    pokemon = pokemon.toLowerCase();
    if(!pokemon){
        console.log("Please enter a valid pokemon.");
        return;
    }

    const localData = sessionStorage.getItem(pokemon);
    if (localData){
        console.log("Found in cache. No fetch needed.");
        const data = JSON.parse(localData);
        displayPokemon(data);
    }
    else{
        console.log("Not in cache. Fetching from APi.");
        fetch("https://pokeapi.co/api/v2/pokemon/"+ pokemon)
            .then(response => response.json())
            .then(data => {
                sessionStorage.setItem(pokemon, JSON.stringify(data));
                displayPokemon(data);
            });

    }
}

function displayPokemon(data){
    let name = document.getElementById("pokeName");
    name.textContent = data.name;

    let image = document.getElementById("pokePic");
    image.src = data.sprites.front_default;

    let audio = document.getElementById("pokeSound");
    audio.src = data.cries.latest;
    document.getElementById("pokeSound").load();

    let dropdowns = document.getElementsByClassName("moves");
    for (let i = 0; i < dropdowns.length; i++){
        let temp = dropdowns[i];
        temp.innerText = "";

        data.moves.forEach(element => {
            let move = document.createElement("option");
            move.textContent = element.move.name;
            temp.appendChild(move);
        });
    }

}

function addTeam(){
    let member = document.createElement("div");
    member.className = "teammember";

    let name = document.createElement("h3");
    name.textContent = document.getElementById("pokeName").textContent;

    let image = document.createElement("img");
    image.src = document.getElementById("pokePic").src;

    member.appendChild(name);
    member.appendChild(image);

    let dropdowns = document.getElementsByClassName("moves");
    for (let i = 0; i < dropdowns.length; i++){
        let temp = document.createElement("li")
        temp.innerText = dropdowns[i].value;

        member.appendChild(temp);
    }

    document.getElementById("team").appendChild(member);

}