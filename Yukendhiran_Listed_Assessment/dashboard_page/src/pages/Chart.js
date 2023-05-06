import { useEffect } from "react";
import { Chart } from "chart.js";

function LineChart() {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [" ", "week1", "week2", "week3", "Week4"],
        datasets: [
          {
            data: [86, 214, 406, 306, 207, 411, 133, 10],
            label: "Applied",
            borderColor: "#9BDD7C",
            backgroundColor: "#EAEAEA",
            fill: false,
          },
          {
            data: [300, 332, 234, 276, 56, 0, 162, 100],
            label: "Rejected",
            borderColor: "#E9A0A0",
            backgroundColor: "#EAEAEA",
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 500,
                stepSize: 100,
              },
            },
          ],
        },
      },
      
      legend: {
    		labels: {
      		fontColor: "#858585", // customize font color
      		fontSize: 14, // customize font size
   		 },
  		},
    });
  }, []);

  return (
    <div className="w-[1000px] h-[359px] rounded-[20px] bg-white mx-auto my-auto">
      <canvas
        id="myChart"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      ></canvas>
    </div>
  );
}

export default LineChart;
