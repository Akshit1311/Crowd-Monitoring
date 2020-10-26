// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {
  // Process our return data
  if (xhr.status >= 200 && xhr.status < 300) {
    // What do when the request is successful
    console.log("success!", xhr);
  } else {
    // What do when the request fails
    console.log("The request failed!");
  }

  // Code that should run regardless of the request status
  console.log("This always runs...");
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open("GET", "https:/localhost:5000/");
xhr.send();

// XHR endded

var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Underbelly",
      "Academic Block",
      "1st Floor",
      "2nd Floor",
      "3rd Floor",
      "4th Floor",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
