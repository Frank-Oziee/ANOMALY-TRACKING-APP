let textarea = document.getElementById('textarea')
let anomalyInputButton = document.querySelector('.sectionOneButton')
let anomalyUl = document.querySelector("#sectionTwo_ul")
let closeOutAnomalyUl = document.querySelector("#sectionThree_ul")
let closedOutAnomaly = document.querySelector('.sectionThreeDiv')
let cumAnoReportd = document.querySelector('.sectionFourP_1')
let cumClosedOutAnomaly = document.querySelector('.sectionFourP_2')
let pendingAnomaly = document.querySelector('.sectionFourP_3')

let hide = document.createElement('button');
hide.textContent =  "Hide";
hide.classList.add("hideButton")
closedOutAnomaly.appendChild(hide)

let closeOutArray = []
let closdAnmly = JSON.parse(localStorage.getItem("closedAnomaly"))
if (closdAnmly) { 
  closeOutArray = closdAnmly;
//This code loops through each item in the closeOutArray, creates a new li element, sets its textContent to the current item, 
//and appends it to the closeOutAnomalyUl element.
  if (closeOutArray.length > 0) {
    closeOutArray.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      closeOutAnomalyUl.appendChild(li);
    });
  } 
}


let listAnomaliesDateNtime = [];
const listFromLocalStorage = JSON.parse(localStorage.getItem("anomalyRecord"));

//If 'listFromLocalStorage' is true, then 'listAnomaliesDateNtime' is equal 'listAnomaliesDateNtime', after which the 'renderAnomalies(listAnomaliesDateNtime)'
//is called so that its elements can persist/won't disappear, after each page refresh.
if (listFromLocalStorage) { 
  listAnomaliesDateNtime = listFromLocalStorage;
  renderAnomalies(listAnomaliesDateNtime);
}

anomalyInputButton.addEventListener("click", () => {
  let now = new Date();

  //Saving the current 'date' and 'time' values to a variable:
  const formattedDateTime = `${now.toLocaleDateString()}, Time: ${now.toLocaleTimeString()}`;

  //Saving the 'textarea' input value to a variable:
  let anomalyText = textarea.value;

  //if the 'textarea' value is true, that is, if a 'textarea' value has been inputed, then we push the 'inputed value', and the current date and time
  //to the 'listAnomaliesDateNtime' array, and set the array to the localstorage, after which the 'renderAnomalies(listAnomaliesDateNtime)' function was called and runned.
  if (anomalyText) {
    listAnomaliesDateNtime.push(`${anomalyText}. <span class='datE' ><i>Date: ${formattedDateTime}</i></span>`);
    localStorage.setItem("anomalyRecord", JSON.stringify(listAnomaliesDateNtime));
  }
  textarea.value = "";
  renderAnomalies(listAnomaliesDateNtime);
  accumuatedAnomalies()
  pendingAnomalies()
});


//In The function below, the 'list' parameter, which works in sync with the 'listAnomaliesDateNtime' was assign to a variable 'anomalyList' and mapped over, after which its elements were
//assigned the '<li> element' and spaces between elements were joined, using the '.join()' method. 
//The mapped out elements that were pushed to the 'listAnomaliesDateNtime' array above, were then rendered using 'anomalyUl.innerHTML = anomalyList'.
function renderAnomalies(list) {
  let anomalyList = list.map((item, index) => `<li id="anomaly_${index}">${item} 
  <button onclick='closeOut(event)'>Close Out</button></li>`).join("");
  anomalyUl.innerHTML = anomalyList;
}

function closeOut(event) {
  const li = event.target.parentNode; // get the parent li element of the clicked button by the 'items' 'index' in the 'listAnomaliesDateNtime' array
  const dateTime = new Date().toLocaleString(); // get the current date and time
  const adfff = `${li.innerText}.  Cleared at ${dateTime}`; // append the current date and time to the li element
  closeOutArray.push(adfff); // push the updated li element to the 'closeOutArray' array
  closeOutAnomalyUl.innerHTML = closeOutArray.map((item) => `<li>${item}</li>`).join(""); // update the closeOutAnomalyUl element with the new li element

  const adfffText = adfff.slice(0, -20); // remove the 'Cleared at' text and the date-time from the li element
  const index = listAnomaliesDateNtime.indexOf(adfffText); // get the index of the cleared li element in the listAnomaliesDateNtime array
  if (index) { //if the 'index' is true,
    listAnomaliesDateNtime.splice(index, 1); // remove the cleared li element from the listAnomaliesDateNtime array
  }
  anomalyUl.removeChild(li); // remove the parent li element from the anomalyUl element
  localStorage.setItem("closedAnomaly", JSON.stringify(closeOutArray))
  localStorage.setItem("anomalyRecord", JSON.stringify(listAnomaliesDateNtime)); // and update the local storage of the anomalyRecord with the updated listAnomaliesDateNtime array
  accumuatedAnomalies()
  closedOutAnomalies()
  pendingAnomalies() // Called the 'pending anomalies function' here, so that when pending 'recorded anomalies' are 'closed out' they are been substracted from the pending figure in the 'pending anomalies' column.
}

hide.addEventListener("click", function() {
if (closeOutAnomalyUl.style.display === "none") { //we added some CSS styling in the CSS Page, to initially hide the 'ul' element by placing the 'display' CSS property of the 'ul' element to 'none'.
  closeOutAnomalyUl.style.display = "inline"
  hide.textContent = 'Hide'
 }else {
   closeOutAnomalyUl.style.display = "none"
   hide.textContent = 'Unhide'
 }
})

function accumuatedAnomalies() {
  const combinedArr = [...listAnomaliesDateNtime, ...closeOutArray];
  const totalElements = combinedArr.length;
  console.log(totalElements)
  cumAnoReportd.textContent = totalElements
}
accumuatedAnomalies()

function closedOutAnomalies() {
  const combinedArr = [...closeOutArray];
  const totalElements = combinedArr.length;
  console.log(totalElements)
  cumClosedOutAnomaly.textContent = totalElements
}
closedOutAnomalies()

function pendingAnomalies() {
  const combinedArr = [...listAnomaliesDateNtime];
  const totalElements = combinedArr.length;
  console.log(totalElements)
  pendingAnomaly.textContent = totalElements
}
pendingAnomalies()











////
/*USE LATER(28/04/2023)

How to arrange and call functions in javascript so that they don't overwrite one another,  and also to avoid bugs
To avoid overwriting functions and potential bugs in JavaScript, you can follow these best practices:

Use Namespaces: One way to avoid naming conflicts is to use namespaces. A namespace is a container that holds a group of related functions, variables, and objects. By organizing your code into namespaces, you can avoid naming conflicts between different functions.

Use Immediately Invoked Function Expressions (IIFE): An IIFE is a function that is executed immediately after it is defined. It is enclosed in parentheses to make it an expression and is followed by another set of parentheses that call the function. By using an IIFE, you can create a private scope for your function, which helps to prevent naming conflicts with other functions.

Use Modular Design: Modular design is an approach to software design that emphasizes separating functionality into independent, reusable modules. By breaking your code down into smaller, more manageable modules, you can minimize the risk of naming conflicts and reduce the likelihood of bugs.

Use Strict Mode: In strict mode, JavaScript enforces a set of rules that help to prevent common coding mistakes. For example, it disallows the use of undeclared variables and throws an error when you attempt to do so. By enabling strict mode, you can catch potential bugs before they become a problem.

Here's an example of how you can use these techniques to organize your functions and avoid naming conflicts:

javascript
Copy code
// Using a namespace
var myNamespace = {
  foo: function() {
    // Do something
  },
  bar: function() {
    // Do something else
  }
};

// Using an IIFE
(function() {
  function myFunc() {
    // Do something
  }

  myFunc();
})();

// Using modular design
var module1 = (function() {
  function myFunc() {
    // Do something
  }

  return {
    myFunc: myFunc
  };
})();

var module2 = (function() {
  function myFunc() {
    // Do something else
  }

  return {
    myFunc: myFunc
  };
})();

// Using strict mode
'use strict';

function myFunc() {
  // This code is in strict mode
}
By following these best practices, you can organize your code and avoid naming conflicts and potential bugs in your JavaScript code.



/////////////////////////











/**
 * How can i get and render the numbers of elements that has been push to  two different arrays  summed together?
 */

/**USE LATER (26/04/2023)
 * 
 * You can get and render the summed numbers of elements that have been pushed to two different arrays together by following these steps:

Declare two arrays and push elements to them:
javascript
Copy code
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
Concatenate the two arrays using the spread operator:
javascript
Copy code
const combinedArr = [...arr1, ...arr2];
Use the reduce method to sum up the elements in the combined array:
javascript
Copy code
const sum = combinedArr.reduce((accumulator, currentValue) => accumulator + currentValue);
Render the sum to the UI using your preferred method, such as console.log, document.write, or a framework-specific rendering function.
Here's the complete code snippet:

javascript
Copy code
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2];
const sum = combinedArr.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum); // Outputs 21
 * 
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