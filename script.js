let rows = 5;
let cols = 5;
let grid = createGrid(rows, cols);
function createGrid(rows, cols) {
  let grid = [];
  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < cols; c++) {
      const value = Math.floor(Math.random() * 2);
      row.push(value);
    }
    grid.push(row);
  }
  return grid;
}

console.table(grid);
