const container = document.querySelector(".container");
let lineCount = 1;

const confirmBtn = document.createElement("button");
confirmBtn.textContent = "Confirm";
document.body.prepend(confirmBtn);



const gridSize = document.createElement("input");
gridSize.id ="input";
gridSize.type = "number";
document.body.prepend(gridSize);



confirmBtn.addEventListener("click", proceed);

function proceed() {
    let size = Number(gridSize.value);

    if (Number.isNaN(size)) {
        alert("Not a valid input!");
        return;
    }
    
    console.log("runing");
    for (let i = 0; i < size; i++) {
        const parentLineDiv = document.createElement("div");
        for (let k = 0; k < size; k++) {
            const childDiv = document.createElement("div");
            // 1. Triggers when the mouse moves ONTO the element
            childDiv.addEventListener('mouseenter', () => {
                childDiv.style.backgroundColor = 'purple';
            });
            
            console.log("runing2");
            // 2. Triggers when the mouse MOVES AWAY from the element
            childDiv.addEventListener('mouseleave', () => {
                childDiv.style.backgroundColor = 'gray';
            });
            parentLineDiv.append(childDiv);
        }
        parentLineDiv.classList.add("line", `${lineCount}`); lineCount++;
        container.append(parentLineDiv);
        console.log("runing3");
    }
}
