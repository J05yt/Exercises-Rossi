function createBoard() {
    let board = document.getElementById("demo1");

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");


            if ((row + col) % 2 === 0) {
                cell.classList.add("white");
            } else {
                cell.classList.add("black");
            }
            cell.onclick = function () {
                if (cell.classList.contains("white")) {
                    cell.classList.remove("white");
                    cell.classList.add("black");
                } else if (cell.classList.contains("black")) {
                    cell.classList.remove("black");
                    cell.classList.add("white");
                }
            };
            let selectedCell = null;
            cell.onclick = function () {

                if (selectedCell) {
                    selectedCell.classList.remove("selected");
                }


                selectedCell = cell;
                selectedCell.classList.add("selected");


                if (cell.classList.contains("white")) {
                    cell.classList.remove("white", "additional1");
                    cell.classList.add("black", "additional2");
                } else if (cell.classList.contains("black")) {
                    cell.classList.remove("black", "additional2");
                    cell.classList.add("white", "additional1");
                }
            };

            board.appendChild(cell);
        }
    }
}


window.onload = createBoard;
let count = 0;

function invertBColors() {
    let board = document.getElementById("demo1");
    const cells = document.getElementsByClassName("cell");
    for (let row = 0; row < cells.length; row++) {
        const cell = cells[row]
        if (cell.classList.contains("white")) {
            cell.classList.remove("white");
            cell.classList.add("black");
        }
        else {
            cell.classList.remove("black");
            cell.classList.add("white");
        }
    }


}

