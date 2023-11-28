function drawGrid(context, squareSize, rows, cols) {
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          const x = j * squareSize;
          const y = i * squareSize;

          context.strokeRect(x, y, squareSize, squareSize);
      }
  }
}

// Get the canvas element and its 2d context
const canvas = document.getElementById('gridCanvas');
const context = canvas.getContext('2d');

// Set the size of each square and the number of rows and columns
const squareSize = 25;

// Set canvas width and height to match the browser's dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Calculate the number of rows and columns based on the canvas size
const rows = Math.floor(canvas.height / squareSize);
const cols = Math.floor(canvas.width / squareSize);

// Draw the grid on the canvas
drawGrid(context, squareSize, rows, cols);

// Redraw the grid on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const rows = Math.floor(canvas.height / squareSize);
  const cols = Math.floor(canvas.width / squareSize);

  context.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid(context, squareSize, rows, cols);
});