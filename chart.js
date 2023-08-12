/*
closeOutArray=JSON.parse(localStorage.getItem("closedAnomaly"))||[]
console.log(closeOutArray)

const combinedArr = [...closeOutArray];
const totalElements = combinedArr.length;
console.log(totalElements)


let listAnomaliesDateNtime = JSON.parse(localStorage.getItem("anomalyRecord")) || [];


const combindArr = [...listAnomaliesDateNtime];
const totalElments = combindArr.length;
console.log(totalElments)


const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
    type: 'pie',
    data : {
    labels: ['Red', 'Blue'],
    datasets: [{
      label: '# of Votes',
      data: [totalElements, totalElments],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },

  options : {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'My Pie Chart'
      }
    }
  }
})
*/





const closeOutArray = JSON.parse(localStorage.getItem("closedAnomaly")) || [];
console.log(closeOutArray);

const totalClosed = closeOutArray.length;
console.log(totalClosed);

const listAnomaliesDateNtime = JSON.parse(localStorage.getItem("anomalyRecord")) || [];
const totalAnomalies = listAnomaliesDateNtime.length;
console.log(totalAnomalies);

const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Closed Anomalies', 'Pending Anomalies', 'Cummulative Anomalies'],
    datasets: [{
      label: '# of Anomalies',
      data: [totalClosed,  totalAnomalies, totalAnomalies + totalClosed],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 226)',
      ],
      borderColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 226)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'My Pie Chart'
      }
    }
  }
});









// myChart = new Chart

// myChart;



/**
 *   const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>
 */













/**USE THIS LATER(26/04/2023):
 * 
 * HOW CAN I CREATE A PIE AND BAR CHARTS USING JAVASCRIPT
You can create a pie and bar chart using JavaScript by utilizing various libraries that specialize in data visualization. Some popular libraries for creating charts in JavaScript include:

D3.js: A powerful library for creating custom data visualizations using HTML, SVG, and CSS. It provides a lot of flexibility but has a steep learning curve.

Chart.js: A simpler and more user-friendly charting library that uses HTML5 canvas to render charts. It provides a variety of chart types including pie and bar charts.

Google Charts: A charting library provided by Google that allows you to create interactive charts and maps using JavaScript. It provides a wide range of chart types including pie and bar charts.

Here's an example of using Chart.js to create a bar chart:

Import the Chart.js library into your HTML file:
html
Copy code
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
Create a canvas element for the chart:
html
Copy code
<canvas id="myChart"></canvas>
Create a script section and define the data and options for the chart:
javascript
Copy code
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }]
};

const options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});
Render the chart to the canvas element:
javascript
Copy code
myChart.update();
This will create a bar chart with the provided data and options. You can modify the data and options to create different types of charts, including pie charts.
 * 
 */


/**USE LATER (26/04/2023):
 * 
 * HOW CAN I CREATE A PIE  CHARTS USING JAVASCRIPT
You can create a pie chart using JavaScript by utilizing various libraries that specialize in data visualization. Here's an example of using Chart.js to create a pie chart:

Import the Chart.js library into your HTML file:
html
Copy code
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
Create a canvas element for the chart:
html
Copy code
<canvas id="myChart"></canvas>
Create a script section and define the data and options for the chart:
javascript
Copy code
const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'My Pie Chart'
    }
  }
};

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'pie',
  data: data,
  options: options
});
Render the chart to the canvas element:
javascript
Copy code
myChart.update();
This will create a pie chart with the provided data and options. You can modify the data and options to customize the look and feel of the chart.

 * 
 */






/**USE LATER FOR CREATING OF BAR CHART FROM 'chart.js'(26/04/2023):
 * 
 * Create a Chart
In this example, we create a bar chart for a single dataset and render it on an HTML page. Add this code snippet to your page:

<div>
  <canvas id="myChart"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>
 
        Copied!
    
You should get a chart like this:

demo

Let's break this code down.

First, we need to have a canvas in our page. It's recommended to give the chart its own container for responsiveness.

<div>
  <canvas id="myChart"></canvas>
</div>
 
        Copied!
    
Now that we have a canvas, we can include Chart.js from a CDN.

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
 
        Copied!
    
Finally, we can create a chart. We add a script that acquires the myChart canvas element and instantiates new Chart with desired configuration: bar chart type, labels, data points, and options.

<script>
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>
 */


/**CHART.JS CDN FOR JAVASCRIPT:
 * 
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.1/chart.min.js" integrity="sha512-v3ygConQmvH0QehvQa6gSvTE2VdBZ6wkLOlmK7Mcy2mZ0ZF9saNbbk19QeaoTHdWIEiTlWmrwAL4hS8ElnGFbA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
 * 
 * https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.1/chart.min.js
 * 
 * sha512-v3ygConQmvH0QehvQa6gSvTE2VdBZ6wkLOlmK7Mcy2mZ0ZF9saNbbk19QeaoTHdWIEiTlWmrwAL4hS8ElnGFbA==
 * 
 * 
 * https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.1/chart.js
 * 
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.1/chart.js" integrity="sha512-Cv3WnEz5uGwmTnA48999hgbYV1ImGjsDWyYQakowKw+skDXEYYSU+rlm9tTflyXc8DbbKamcLFF80Cf89f+vOQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
 * 
 * 
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.1/chart.umd.js" integrity="sha512-vCUbejtS+HcWYtDHRF2T5B0BKwVG/CLeuew5uT2AiX4SJ2Wff52+kfgONvtdATqkqQMC9Ye5K+Td0OTaz+P7cw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
 * 
 * 
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.1/chart.umd.min.js" integrity="sha512-GCiwmzA0bNGVsp1otzTJ4LWQT2jjGJENLGyLlerlzckNI30moi2EQT0AfRI7fLYYYDKR+7hnuh35r3y1uJzugw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
 * 
 * 
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.1/helpers.js" integrity="sha512-Kkt+9BdRfSBFaKgC+9xNLDVzBX3nAlj2EE95amI6F/XV2LKxED93uUigInw7w9JABWGVnuD1WZU3SKy+J+aDPw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
 * 
 * 
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.1/helpers.min.js" integrity="sha512-JG3S/EICkp8Lx9YhtIpzAVJ55WGnxT3T6bfiXYbjPRUoN9yu+ZM+wVLDsI/L2BWRiKjw/67d+/APw/CDn+Lm0Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
 * 
 */




/**chart.js CDN FOR PIE CHART (26/04/2023):
 * 
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/pie-chart/1.0.0/pie-chart.min.js" integrity="sha512-RloOYfWgCwxbdExraq88FwUdFA/RQSuLJADn72+kUcKraQGrhn43BfDruK5dxKjqDGhNDhkE3h1bSoqdXxbGHg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
 * 
 * 
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/pie-chart/1.0.0/pie-chart.js" integrity="sha512-c65zw/mvB2mvNDewqKPGXOkPgmIGrK+wEcZsI14kWwyj/fY5axam7HXj3A6pFEhFr2X33S9H6nZ6RsY4YA4bMg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
 * 
 */