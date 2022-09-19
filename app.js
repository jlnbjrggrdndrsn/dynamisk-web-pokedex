document.addEventListener("DOMContentLoaded", () => {
    let section = document.querySelector("section");
    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(data => {
            console.log(data);

            data.results.forEach(result => {

                let link = document.createElement("div");
                link.innerHTML = `
                <h2>${result.name}</h2>
                <a href="detail.html?name=${result.name}">More</a>
                `;

                section.append(link);
            });
        });
});