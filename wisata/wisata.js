const map = L.map('map').setView([-7.7139, 109.9981], 13); // Coordinates for Desa Purworejo

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-7.7139, 109.9981]).addTo(map)
    .bindPopup('<b>Desa Purworejo</b><br>Jawa Tengah, Indonesia.')
    .openPopup();