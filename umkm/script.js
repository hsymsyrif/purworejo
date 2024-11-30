function openModal(product) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const modalTitle = document.getElementById('modal-title');
    
    if (product === 'kerajinan') {
        modalTitle.textContent = 'Kerajinan Tangan';
        modalContent.innerHTML = `
            <div class="flex flex-col items-center text-center">
                <img src="/assets/placeholder-produk-1.webp" alt="Kerajinan Tangan" class="w-40 h-40 object-cover rounded-lg mb-4">
                <p>Produk unik dari anyaman bambu yang cocok sebagai souvenir.</p>
                <p><strong>Harga:</strong> Rp. 100.000,-</p>
                <p><strong>Deskripsi:</strong> Kerajinan tangan dari bambu yang dapat dijadikan sebagai pajangan di rumah atau souvenir.</p>
            </div>
        `;
    } else if (product === 'makanan') {
        modalTitle.textContent = 'Makanan Khas';
        modalContent.innerHTML = `
            <div class="flex flex-col items-center text-center">
                <img src="/assets/placeholder-produk-2.webp" alt="Makanan Khas" class="w-40 h-40 object-cover rounded-lg mb-4">
                <p>Kue tradisional yang lezat, perfect untuk oleh-oleh.</p>
                <p><strong>Harga:</strong> Rp. 50.000,-</p>
                <p><strong>Deskripsi:</strong> Kue khas desa Purworejo, dibuat dengan bahan alami dan cita rasa khas.</p>
            </div>
        `;
    } else if (product === 'pertanian') {
        modalTitle.textContent = 'Hasil Pertanian';
        modalContent.innerHTML = `
            <div class="flex flex-col items-center text-center">
                <img src="/assets/placeholder-produk-3.webp" alt="Hasil Pertanian" class="w-40 h-40 object-cover rounded-lg mb-4">
                <p>Produk organik langsung dari petani, segar dan alami.</p>
                <p><strong>Harga:</strong> Rp. 30.000,-</p>
                <p><strong>Deskripsi:</strong> Sayuran dan buah-buahan organik yang ditanam tanpa bahan kimia, dijamin segar dan sehat.</p>
            </div>
        `;
    }

    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}     