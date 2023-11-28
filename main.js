const canvas = document.getElementById('gridCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = canvas.height = 1500;

// Define the square size
const squareSize = 30;

// Define the border color
const borderColor = 'rgba(255,255,255, 0.12)';

// Draw the grid
function drawGrid() {
  // Loop through the rows
  for (let y = 0; y < 50; y++) {
    // Loop through the columns
    for (let x = 0; x < 50; x++) {
      // Draw the border
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.rect(x * squareSize, y * squareSize, squareSize, squareSize);
      ctx.stroke();
    }
  }
}

// Draw the grid
drawGrid();