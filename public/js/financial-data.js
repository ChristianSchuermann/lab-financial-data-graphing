let fromDate = new Date("2021-12-08").toISOString().split("T")[0];
let toDate = new Date().toISOString().split("T")[0];



const getBitcoin = (fromDate, toDate) => {
  axios
    .get(
      `http://api.coindesk.com/v1/bpi/historical/close.json?start=${fromDate}&end=${toDate}`
    )
    .then((responseFromAPI) => {
      printChart(responseFromAPI.data.bpi);
    })
    .catch((err) => console.log(err));
};


const printChart = (responseFromAPI) => {
  const ctx = document.getElementById("myChart").getContext("2d");
  myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(responseFromAPI),
      datasets: [
        {
          label: "Bitcoin",
          data: Object.values(responseFromAPI),
          backgroundColor: ["rgba(0, 255, 0, 1)"],
          borderColor: ["rgba(0, 255, 0, 1)"],
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

getBitcoin(fromDate, toDate);















    