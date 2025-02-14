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
        const cell=cells[row]
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