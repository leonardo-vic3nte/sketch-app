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

function main() {
  fillSketchContainer();
}

main();
