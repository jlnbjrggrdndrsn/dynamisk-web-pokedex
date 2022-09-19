document.addEventListener("DOMContentLoaded", () => {

    let params = new URLSearchParams(window.location.search);
    let name = params.get("name");

    console.log(name);

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let article = document.createElement("article")

            article.innerHTML = `
    <h1>${data.name}</h1>
    <div class="flex-container">
        <div class="flex-item">
    <img src="${data.sprites.other.home.front_default}" alt="">
    </div>
    <div class="flex-item">
    <h3>Abilities</h3>
    <ul class="abilitylist"></ul>
    <h3>Moves</h3>
    <ul class="movelist"></ul>
    <h3>Stats</h3>
    <ul class="statlist"></ul>
    </div>
    </div>
    `
            document.body.append(article)

            let list1 = document.querySelector(".abilitylist")

            data.abilities.forEach(ability => {
                let item = document.createElement("li")
                item.innerText = ability.ability.name;
                list1.append(item)
            });
            let list2 = document.querySelector(".movelist")

            data.moves.forEach(move => {
                let item = document.createElement("li")
                item.innerText = move.move.name;
                list2.append(item)
            });
            let list3 = document.querySelector(".statlist")

            data.stats.forEach(base_stat => {
                let item = document.createElement("li")
                item.innerText = base_stat.stat.name + ': ' +
                    base_stat.base_stat;
                list3.append(item)
            });
        })
})