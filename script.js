const upper = document.querySelector(".gridCount");
const buttons = document.querySelector(".btns");

const container = document.querySelector(".container");
let lineCount = 1;
let eraserActive = false;

const eraserBtn = document.createElement("button");
eraserBtn.textContent = "Eraser";
eraserBtn.classList.add("eraser-btn");
eraserBtn.setAttribute("aria-pressed", "false");
document.body.prepend(eraserBtn);


const confirmBtn = document.createElement("button");
confirmBtn.textContent = "Confirm";
buttons.append(confirmBtn);



const gridSize = document.createElement("input");
gridSize.id = "input";
gridSize.type = "number";
gridSize.placeholder = "Enter grid size from 1 to 100";
upper.append(gridSize);

function createGrid(size) {
    container.innerHTML = ""; //clears previous grid
    lineCount = 1;

    for (let i = 0; i < size; i++) {
        const parentLineDiv = document.createElement("div");

        for (let k = 0; k < size; k++) {
            const childDiv = document.createElement("div");

            childDiv.addEventListener("mouseenter", () => {
                childDiv.style.backgroundColor = eraserActive ? "#f5f5f5" : randomColor();
            });

            parentLineDiv.append(childDiv);
        }

        parentLineDiv.classList.add("line", `${lineCount}`);
        lineCount++;

        container.append(parentLineDiv);
    }
}

function proceed() {
    let size = Number(gridSize.value);

    if (Number.isNaN(size) || size < 1 || size > 100) {
        alert("Not a valid input!");
        location.reload();
        return;
    }

    createGrid(size);
}

confirmBtn.addEventListener("click", proceed);
eraserBtn.addEventListener("click", () => {
    eraserActive = !eraserActive;
    eraserBtn.classList.toggle("active", eraserActive); // Adds "active" if eraserActive is true, removes it if false to the class name of eraserBtn
    eraserBtn.setAttribute("aria-pressed", eraserActive);
    eraserBtn.textContent = eraserActive ? "Eraser: On" : "Eraser";
    container.classList.toggle("eraser-active", eraserActive);
});


// initial grid of 16 by 16
createGrid(16); 

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'); //code to generate a random color hex code
}

const reload = document.createElement("button");
reload.textContent = "Reset";

buttons.append(reload);
reload.addEventListener("click", () => {
    location.reload();
});