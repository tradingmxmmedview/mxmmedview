// scripts.js

// Chart Integration
const chartContainer = document.getElementById("chart-container");
const chart = LightweightCharts.createChart(chartContainer);
const lineSeries = chart.addLineSeries();
lineSeries.setData([
 {time:"",value:""}]);

