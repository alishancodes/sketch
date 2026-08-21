const container = document.querySelector(".container");
let lineCount = 1;


for (let i = 0; i < 16; i++) {
    const parentLineDiv = document.createElement("div");
    for (let k = 0; k < 16; k++) {
        const childDiv = document.createElement("div");
        parentLineDiv.append(childDiv);
    }
    parentLineDiv.classList.add("line", `${lineCount}`); lineCount++;
    container.append(parentLineDiv);
}
