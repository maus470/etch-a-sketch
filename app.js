let container = document.querySelector(".container");
let tiles = 16;
const dimensions = 960;
let tileSize = parseInt(dimensions / tiles);
console.log(tileSize);
createGrid();

let button = document.querySelector(".tilesButton");
let text = document.querySelector(".tilesText");

button.addEventListener("click", () => {
    tiles = parseInt(prompt("edit tiles amount"));
    if (tiles > 100) {
        alert(`${tiles} is too much, setting size to 100.`);
        tiles = 100;
    }
    tileSize = dimensions / tiles;

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid();
    text.textContent = `${tiles}x${tiles}`;
});

function createGrid() {
    for (let i = 0; i < tiles; i++) {
        let row = document.createElement("div");
        row.style.display = "flex";
        row.style.flexDirection = "row";
        for (let j = 0; j < tiles; j++) {
            let item = document.createElement("div");
            item.classList.add("tile");
            item.style.height = `${tileSize}px`;
            item.style.width = `${tileSize}px`;
            item.addEventListener("mouseenter", () => {
                item.classList.add("hover");
            });
            row.appendChild(item);
        }
        container.appendChild(row);
    }
}
