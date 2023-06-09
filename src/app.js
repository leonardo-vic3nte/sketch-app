function fillSketchContainer(numCells) {
	const numberOfCells = numCells * numCells;
	const sizeEachCell = 600 / numCells;
	const container = document.querySelector(".sketch-area");

	for (let i = 0; i < numberOfCells; i += 1) {
		const cell = document.createElement("div");
		cell.classList.add("cell");
		cell.style.width = `${sizeEachCell}px`;
		cell.style.height = `${sizeEachCell}px`;
		container.appendChild(cell);
	}
}

function colorCell(event, color) {
	if (event.target.classList.contains("cell")) {
		event.target.style.backgroundColor = color;
	}
}

function activateRainbow() {
	const container = document.querySelector(".sketch-area");
	container.addEventListener("mouseover", (event) => {
		const red = Math.floor(Math.random() * 256);
		const green = Math.floor(Math.random() * 256);
		const blue = Math.floor(Math.random() * 256);
		colorCell(event, `rgb(${red}, ${green}, ${blue})`);
	});
}

function activateBlack() {
	const container = document.querySelector(".sketch-area");
	container.addEventListener("mouseover", (event) => {
		colorCell(event, "black");
	});
}

function activateEraser() {
	const container = document.querySelector(".sketch-area");
	container.addEventListener("mouseover", (event) => {
		colorCell(event, "#edf0f3");
	});
}

function clearAll() {
	const cells = document.querySelectorAll(".cell");

	for (let i = 0; i < cells.length; i += 1) {
		cells[i].style.backgroundColor = "#edf0f3";
	}
}

function clearGrid() {
	const grid = document.querySelectorAll(".cell");
	grid.forEach((element) => element.remove());
}

function main() {
	fillSketchContainer(30);

	const darkBtn = document.querySelector(".dark-btn");
	darkBtn.addEventListener("click", activateBlack);

	const rainbowBtn = document.querySelector(".rainbow-btn");
	rainbowBtn.addEventListener("click", activateRainbow);

	const eraserBtn = document.querySelector(".eraser-btn");
	eraserBtn.addEventListener("click", activateEraser);

	const clearBtn = document.querySelector(".clear-btn");
	clearBtn.addEventListener("click", clearAll);

	const smallBtn = document.querySelector("#small");
	smallBtn.addEventListener("change", () => {
		clearGrid();
		fillSketchContainer(30);
	});

	const mediumBtn = document.querySelector("#medium");
	mediumBtn.addEventListener("change", () => {
		clearGrid();
		fillSketchContainer(50);
	});

	const largeBtn = document.querySelector("#large");
	largeBtn.addEventListener("change", () => {
		clearGrid();
		fillSketchContainer(100);
	});
}

main();
