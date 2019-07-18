const randomButton = document.getElementById("random-btn");
const resetButton = document.getElementById("reset-btn");
const blackButton = document.getElementById("black-btn");
const cleanButton = document.getElementById("clear-btn");

createGrid(16);

function createGrid(gridSize){

    let gridContainer = document.querySelector('.grid-container');   
    
    while (gridContainer.firstChild) {
		gridContainer.firstChild.remove();
    }
    
    gridContainer.style.gridTemplateColumns = "1fr ".repeat(gridSize);
	gridContainer.style.gridTemplateRows = "1fr ".repeat(gridSize);

    for (let j = 0; j < (gridSize * gridSize); j++) {
        var gridCell = document.createElement("div");
        gridCell.classList.add('grid-cell');
        gridContainer.appendChild(gridCell);
    }

    let gridCells = document.getElementsByClassName('grid-cell');
	let gridCellsArr = Array.from(gridCells);

    gridCellsArr.forEach(function (cell) {
        cell.addEventListener("mouseover", function(){
            cell.classList.add('painted');
        });
        
        cell.addEventListener("click", function(){
            clearCell(cell);
        });
    });

}

cleanButton.addEventListener("click", function(){
    let gridCells = document.getElementsByClassName('grid-cell');
        
    for (let j = 0; j < gridCells.length; j++) {
		clearCell(gridCells[j]);
	}
		
});

randomButton.addEventListener("click", function () {
	randomizeColor();
});

blackButton.addEventListener("click", function () {
	blackColor();
});

resetButton.addEventListener('click', first);

function first(e){
    resetButton.innerHTML = 'Submit';
    document.getElementById("hide").style.display = "inline";
    e.stopImmediatePropagation();
    this.removeEventListener("click", first);
    resetButton.onclick = second; 
}
  
function second(){
    let nr = document.getElementById("nr").value;
    createGrid(nr);
    document.getElementById("hide").style.display = "none";
    resetButton.innerHTML = "Change Table Nr.";
    resetButton.onclick = first; 
}

function clearCell(cell) {
    cell.classList.remove("painted");
    cell.style.backgroundColor = "white";
}

function blackColor() {
	gridCells = document.getElementsByClassName('grid-cell');
	gridCellsArr = Array.from(gridCells);
	gridCellsArr.forEach(function (cell) {
		cell.addEventListener("mouseover", function () {
			cell.classList.add("painted");
		});
	});
}

function randomizeColor() {
	gridCells = document.getElementsByClassName('grid-cell');
	gridCellsArr = Array.from(gridCells);
	gridCellsArr.forEach(function (cell) {
		cell.addEventListener("mouseover", function () {
			cell.classList.remove("painted");
			cell.style.backgroundColor = getRandom();
		});
	});
}

function getRandom(){
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}