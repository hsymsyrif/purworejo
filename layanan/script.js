const form = document.getElementById('pengaduan-form');
const loadingPopup = document.getElementById('loading-popup');
const successPopup = document.getElementById('success-popup');
const closePopup = document.getElementById('close-popup');
const teleponInput = document.getElementById('telepon');
const teleponError = document.getElementById('telepon-error');
const submitButton = form.querySelector('button[type="submit"]');

// Fungsi validasi nomor telepon
function validateTelepon() {
    const teleponValue = teleponInput.value.trim();
    const isNumber = /^\d+$/.test(teleponValue); // Regex: Memastikan hanya angka

    if (!isNumber) {
        // Tampilkan pesan error
        teleponError.classList.remove('hidden');
        teleponInput.classList.add('border-red-500');
        return false;
    } else {
        // Sembunyikan pesan error jika valid
        teleponError.classList.add('hidden');
        teleponInput.classList.remove('border-red-500');
        return true;
    }
}

// Event listener untuk input telepon
teleponInput.addEventListener('input', function () {
    validateTelepon(); // Validasi setiap kali pengguna mengetik
});

// Event listener untuk form submit
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah pengiriman form secara default
    
    if (validateTelepon()) {
        // Jika validasi berhasil, tampilkan loading
        loadingPopup.classList.remove('hidden');

        // Simulasi waktu pemrosesan (misalnya 2 detik)
        setTimeout(() => {
            loadingPopup.classList.add('hidden'); // Sembunyikan loading
            successPopup.classList.remove('hidden'); // Tampilkan popup berhasil
        }, 2000); // 2 detik
    } else {
        // Jika validasi gagal, fokuskan input telepon
        teleponInput.focus();
    }
});

// Event listener untuk tombol tutup popup berhasil
closePopup.addEventListener('click', function () {
    successPopup.classList.add('hidden'); // Sembunyikan popup berhasil
    form.reset(); // Reset form
});
