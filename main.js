const canvas = document.getElementById('gridCanvas');
    const ctx = canvas.getContext('2d');
    const scriptsPane = document.querySelector('.scripts-pane');

    // Set canvas dimensions based on the scripts-pane size
    canvas.width = scriptsPane.clientWidth;
    canvas.height = scriptsPane.clientHeight;

    // Define the square size
    const squareSize = 30;

    // Define the border color
    const borderColor = 'rgba(255, 255, 255, 0.12)';

    // Draw the grid
    function drawGrid() {
      // Calculate the number of squares in each dimension
      const numColumns = Math.floor(canvas.width / squareSize);
      const numRows = Math.floor(canvas.height / squareSize);

      // Loop through the rows
      for (let y = 0; y < numRows; y++) {
        // Loop through the columns
        for (let x = 0; x < numColumns; x++) {
          // Draw the border
          ctx.strokeStyle = borderColor;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.rect(x * squareSize, y * squareSize, squareSize, squareSize);
          ctx.stroke();
        }
      }
    }

    // Draw the grid initially
    drawGrid();

    // Redraw the grid when the scripts-pane size changes
    window.addEventListener('resize', () => {
      canvas.width = scriptsPane.clientWidth;
      canvas.height = scriptsPane.clientHeight;
      drawGrid();
    });