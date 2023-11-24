const updateChart = () => {
  const products = getProducts();
  const dates = products.map((product) => product.date);

  const chart = new Chart(document.getElementById("myChart").getContext("2d"), {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Калорийность",
          data: products.map((product) => product.calories),
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};
