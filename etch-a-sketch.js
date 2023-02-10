const topContainer = document.querySelector('#topContainer');

function createGrid () {
    console.log("in the function");
    for (let a = 0; a < 16; a++) {
        console.log('in the loop');
        const containerDiv = document.createElement('div');
        containerDiv.setAttribute('id', `containerDiv${a}`);
        containerDiv.classList.add(`containerDiv`);
        topContainer.appendChild(containerDiv);
        for (let b = 0; b < 16; b++) {
            const paintDiv = document.createElement('div');
            paintDiv.setAttribute('id', `paintDiv${b}`);
            paintDiv.classList.add(`paintDiv`);
            containerDiv.appendChild(paintDiv);
        }
    }
    const allDivs = document.querySelectorAll('.paintDiv');
    allDivs.forEach((divy) => {
        divy.addEventListener('hover', () => {
            divy.classList.toggle('painted')
        })
    })
}

createGrid();