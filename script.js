const container = document.querySelector(".container");
let lineCount = 1;
let gridSize;


for (let i = 0; i < gridSize ; i++) {
    const parentLineDiv = document.createElement("div");
    for (let k = 0; k < gridSize; k++) {
        const childDiv = document.createElement("div");
        // 1. Triggers when the mouse moves ONTO the element
        childDiv.addEventListener('mouseenter', () => {
          childDiv.style.backgroundColor = 'purple';
        });
        
        // 2. Triggers when the mouse MOVES AWAY from the element
        childDiv.addEventListener('mouseleave', () => {
          childDiv.style.backgroundColor = 'gray';
        });
        parentLineDiv.append(childDiv);
    }
    parentLineDiv.classList.add("line", `${lineCount}`); lineCount++;
    container.append(parentLineDiv);
}
