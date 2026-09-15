// Graphique barres
const ctx1 = document.getElementById('barChart');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'MySQL'],
        datasets: [{
        label: 'Compétences techniques',
        data: [90, 80, 65, 55, 45, 60],
        borderRadius: { topLeft: 6, topRight: 6 },
        backgroundColor: [
            'rgba(99, 102, 241, 1)',    // HTML - 100%
            'rgba(99, 102, 241, 0.85)',  // CSS - 90%
            'rgba(99, 102, 241, 0.7)',  // JavaScript - 80%
            'rgba(99, 102, 241, 0.55)',  // PHP - 70%
            'rgba(99, 102, 241, 0.4)',  // Laravel - 60%
            'rgba(99, 102, 241, 0.25)',  // MySQL - 50%
        ],
    }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        layout: { 
            padding: { bottom: 36, } 
        },
        scales: { 
            x: { ticks: { color: '#9f9fa9' }, grid: { color: '#414A58' } },
            y: { min: 0, max: 100, ticks: {stepSize: 10,color: '#9f9fa9' }, grid: { color: '#414A58' } } 
        }
    }
});


// ====== GRAPHIQUE 2 : Donut - Répartition du temps projet ======
const ctx2 = document.getElementById('donutChart');

new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Design', 'Intégration', 'Scripts', 'Backend', 'Tests'],
    datasets: [{
      data: [20, 35, 25, 15, 5],
      borderWidth: 3,
      borderColor: '#364153',
      backgroundColor: [
        '#F2930D', // orange - Design
        '#6366f1', // violet - Intégration
        '#10b981', // vert - Scripts
        '#ef4444', // rouge - Backend
        '#a855f7', // mauve - Tests
      ],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
        color: '#9f9fa9',
      }
      }
    }
  }
});