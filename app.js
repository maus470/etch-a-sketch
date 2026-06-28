let container = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.style.display = "flex";
    row.style.flexDirection = "row";
    for (let j = 0; j < 16; j++) {
        let item = document.createElement("div");
        item.style.width = "20px";
        item.style.height = "20px";
        // item.style.backgroundColor = "black";
        item.style.border = "1px solid black";
        row.appendChild(item);
    }
    container.appendChild(row);
}
