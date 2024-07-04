import { computeStats } from './dataFunctions.js';
import { seriesData } from './data/dataset.js'; 
import Chart from 'chart.js/auto';

document.getElementById('buttonStats').addEventListener('click', function() {
  const stats = computeStats(seriesData);

  const ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Promedio de años de transmisión'],
      datasets: [{
        label: 'Años',
        data: [stats.avgYears],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
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
});
