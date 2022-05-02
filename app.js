const container = document.querySelector(".container");


function createSquares(num) {
    for(let i = 0; i<num*num; i++) {
        const square = document.createElement("div");
        square.classList.add("square")
    
        square.addEventListener("mouseover", (e) => {
            e.target.style.cssText += "background-color: blue;"
        })

        container.appendChild(square)
    }
}

function deleteSquares() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        container.removeChild(square)
    })
} 

function changeSizeOfSquares() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.cssText += `width: ${352/(Math.sqrt(squares.length))}px; height: ${352/Math.sqrt(squares.length)}px`;

    })
}

const changeSizeBtn = document.querySelector(".changeSizeBtn");
changeSizeBtn.addEventListener("click", () => {
    let newSize = prompt("How many squares u want per side? (Max. is 100!)");
    if(newSize > 100) return;
    deleteSquares();
    createSquares(newSize)
    changeSizeOfSquares();
})


createSquares(16)
