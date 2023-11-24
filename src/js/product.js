const addProduct = () => {
  const productNameInput = document.getElementById("productName");
  const caloriesInput = document.getElementById("calories");

  const productName = productNameInput.value.trim();
  const calories = parseInt(caloriesInput.value, 10);

  if (productName && !isNaN(calories)) {
    const product = {
      name: productName,
      calories: calories,
      date: new Date().toLocaleDateString(),
    };
    const products = getProducts();
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));

    productNameInput.value = "";
    caloriesInput.value = "";
    displayProducts();
    displayTotalCalories();
    updateChart();
  }
};

const getProducts = () => JSON.parse(localStorage.getItem("products")) || [];

const displayProducts = () => {
  const productList = document.getElementById("productList");
  const productContainer = document.querySelector(".product__container");
  const products = getProducts();

  if (products.length === 0) {
    productContainer.style.display = "none";
  } else {
    productContainer.style.display = "block";
  }

  productList.innerHTML = "";
  products.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.name}: ${product.calories} калорий (${product.date})`;
    productList.appendChild(li);
  });
};

const displayTotalCalories = () => {
  const totalCaloriesElement = document.getElementById("totalCalories");
  const targetCaloriesInput = document.getElementById("targetCaloriesInput");
  const products = getProducts();

  const totalCalories = products.reduce(
    (sum, product) => sum + product.calories,
    0
  );
  const targetCalories = parseInt(targetCaloriesInput.value, 10) || 0;

  totalCaloriesElement.textContent = `Общее количество калорий: ${totalCalories}`;

    if (totalCalories > targetCalories) {
      alert("Превышен дневной лимит калорий!");
    }
};

const filterProductsByButton = () => {
  const filterInput = document.getElementById("filter");
  const filterValue = filterInput.value.trim().toLowerCase();
  filterProducts(filterValue);
};

const filterProducts = (filterValue) => {
  const products = getProducts();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filterValue)
  );

  displayFilteredProducts(filteredProducts);
};

const displayFilteredProducts = (filteredProducts) => {
  const productList = document.getElementById("productList");
  const productContainer = document.querySelector(".product__container");

  productList.innerHTML = "";
  filteredProducts.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.name}: ${product.calories} калорий (${product.date})`;
    productList.appendChild(li);
  });
};

const sortProducts = () => {
  const products = getProducts();

  const compareCalories = (a, b) => {
    return a.calories - b.calories;
  };

  const sortedProducts = products.slice().sort(compareCalories);

  displayFilteredProducts(sortedProducts);
};

const clearData = () => {
  localStorage.removeItem("products");
  displayProducts();
  displayTotalCalories();
  updateChart();
};
