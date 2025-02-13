document.addEventListener('DOMContentLoaded', function () {
    const ctx1 = document.getElementById('revenueChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Revenue',
                data: [12000, 15000, 18000, 22000, 25000, 30000],
                borderColor: 'blue',
                fill: false
            }]
        }
    });

    const ctx2 = document.getElementById('expenseChart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Expenses',
                data: [5000, 7000, 8000, 9000, 11000, 13000],
                backgroundColor: 'red'
            }]
        }
    });
});
