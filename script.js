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
upper.append(gridSize);

function createGrid(size) {
    container.innerHTML = ""; //clears previous grid
    lineCount = 1;

    for (let i = 0; i < size; i++) {
        const parentLineDiv = document.createElement("div");

        for (let k = 0; k < size; k++) {
            const childDiv = document.createElement("div");

            childDiv.addEventListener("mouseenter", () => {
                childDiv.style.backgroundColor = "#facc15";
            });
            childDiv.addEventListener("mouseleave", () => {
                childDiv.style.backgroundColor = "#d97706";
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
        return;
    }

    createGrid(size);
}

confirmBtn.addEventListener("click", proceed);

// initial grid of 16 by 16
createGrid(16);

const reload = document.createElement("button");
reload.textContent = "Reset";

buttons.append(reload);
reload.addEventListener("click", () => {
    location.reload();
});