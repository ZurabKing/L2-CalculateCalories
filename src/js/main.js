document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
  displayTotalCalories();
  updateChart();
  filterProducts("");
  sortProducts();
});

document.getElementById("add").addEventListener("click", () => addProduct());
document.getElementById("clear").addEventListener("click", () => clearData());
document
  .getElementById("sortBtn")
  .addEventListener("click", () => sortProducts());
