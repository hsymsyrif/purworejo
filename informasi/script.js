document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('ageChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['0-4 tahun', '5-9 tahun', '10-14 tahun', '20-24 tahun', '25-29 tahun', '30-34 tahun', '35-39 tahun', '40-44 tahun', ' 45-49 tahun', '50-54 tahun', '55+ tahun'],
            datasets: [{
                data: [48312, 35609, 33023, 48200, 34000, 52301, 50002, 42034, 41103, 41000, 113204],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(52, 34, 45, 0.7)',
                    'rgba(100, 230, 255, 0.7)',
                    'rgba(30, 102, 100, 0.7)',
                    'rgba(69, 102, 50, 0.7)',
                    'rgba(59, 112, 100, 0.7)',
                    'rgba(240, 69, 23, 0.7)'
                ]
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Komposisi Usia Penduduk'
            }
        }
    });
});