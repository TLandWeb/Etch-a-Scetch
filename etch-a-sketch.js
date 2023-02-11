function createGrid (gridSize) {
    console.log("in the function");
    for (let a = 0; a < gridSize; a++) {
        console.log('in the loop');
        const containerDiv = document.createElement('div');
        containerDiv.setAttribute('id', `containerDiv${a}`);
        containerDiv.classList.add(`containerDiv`);
        containerDiv.style.height = `${100/gridSize}%`;
        topContainer.appendChild(containerDiv);
        for (let b = 0; b < gridSize; b++) {
            const paintDiv = document.createElement('div');
            paintDiv.setAttribute('id', `paintDiv${b}`);
            paintDiv.classList.add(`paintDiv`);
            paintDiv.style.height = `100%`;
            paintDiv.style.width = `${100/gridSize}%`;
            containerDiv.appendChild(paintDiv);
        }
    }
    const allDivs = document.querySelectorAll('.paintDiv');
    allDivs.forEach((eachDiv) => {
        eachDiv.addEventListener('click', () => {
            eachDiv.classList.toggle('painted')
        });
        eachDiv.addEventListener('mouseenter', () => {
            eachDiv.classList.add('painted')
        });
    });
}

function resetPaint() {
    const allDivs = document.querySelectorAll('.paintDiv');
    allDivs.forEach((eachDiv) => {
        eachDiv.classList.remove('painted')
    });
}

function removeGrid() {
    const containerDivs = document.querySelectorAll('.containerDiv');
    containerDivs.forEach((eachDiv) => {
        topContainer.removeChild(eachDiv);
    });

}

function newGrid() {
    let newSize = prompt('Please enter a grid size between 1 and 100');
    while (newSize > 100 || newSize < 1) {
        newSize = prompt('Seriously, between 1 and 100');
    }
    removeGrid();
    createGrid(newSize);
}

const topContainer = document.querySelector('#topContainer');
createGrid(16);

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', resetPaint);

const gridButton = document.querySelector('#gridSizeButton');
gridButton.addEventListener('click', newGrid);