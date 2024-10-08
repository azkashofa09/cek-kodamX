function checkKhodam() {
    const names = ['Harimau Putih', 'Naga', 'sendok', 'kenalpot supra', 'berbi', 'ular', 'kaus kutang bapa', 'kecap botol'];
    const images = {
        'Harimau Putih': 'si.jpg',
        'Naga': 'n.jpg',
        'sendok': 's.jpg',
        'ular': 'ul.jpg',
        'kaus kutang bapa': 'kb.jpg',
        'kecap botol': 'kcp.jpg',
        'kenalpot supra': 'knl.jpg',
        'berbi': 'br.jpg'
    };

    const nameInput = document.getElementById('nameInput').value;
    localStorage.setItem('userName', nameInput); // Simpan nama ke localStorage
    const randomKhodam = names[Math.floor(Math.random() * names.length)];
    document.getElementById('result').innerText = `${nameInput}, khodam kamu: ${randomKhodam}`;

    // Set gambar sesuai khodam
    const khodamImage = document.getElementById('khodamImage');
    khodamImage.src = images[randomKhodam];
    khodamImage.style.display = 'block'; // Tampilkan gambar

    // Refresh setelah 2 detik
    setTimeout(() => {
        localStorage.removeItem('userName'); // Hapus nama dari localStorage
        location.reload();
    }, 6000);
}

function loadUserName() {
    localStorage.removeItem('userName'); // Menghapus nama dari localStorage setiap kali halaman dimuat
}

// Muat nama saat halaman dimuat
window.onload = loadUserName;

