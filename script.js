const upper = document.querySelector(".gridCount");
const buttons = document.querySelector(".btns");

const container = document.querySelector(".container");
let lineCount = 1;

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
                childDiv.style.backgroundColor = randomColor();
            });
            childDiv.addEventListener("mouseleave", () => {
                childDiv.style.backgroundColor = randomColor();
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