/* eslint-disable no-use-before-define */
function fillSketchContainer() {
  // 600x600 Container 30x30 Cells //

  const numberOfCells = 30 * 30;
  const sizeEachCell = 600 / 30;
  const container = document.querySelector('.sketch-area');

  for (let i = 0; i < numberOfCells; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = `${sizeEachCell}px`;
    cell.style.height = `${sizeEachCell}px`;
    container.appendChild(cell);
  }
}

function activateRainbow() {
  const cells = document.querySelectorAll('.cell');

  for (let i = 0; i < cells.length; i += 1) {
    cells[i].addEventListener('mouseover', () => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      cells[i].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
  }
}

function activateBlack() {
  const cells = document.querySelectorAll('.cell');

  for (let i = 0; i < cells.length; i += 1) {
    cells[i].addEventListener('mouseover', () => {
      cells[i].style.backgroundColor = 'black';
    });
  }
}

function main() {
  fillSketchContainer();

  const darkBtn = document.querySelector('.dark-btn');
  darkBtn.addEventListener('click', activateBlack);

  const rainbowBtn = document.querySelector('.rainbow-btn');
  rainbowBtn.addEventListener('click', activateRainbow);
}

main();
