// Ambil semua tombol tab
const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        // hilangkan status aktif dari tombol lain
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // tampilkan konten sesuai tombol
        let target = btn.getAttribute("data-tab");

        contents.forEach(content => {
            content.classList.remove("active");
            if(content.id === target){
                content.classList.add("active");
            }
        });

    });
});

/* =========================================
   TAMBAHAN: ANIMASI AOS (KHUSUS HALAMAN ABOUT)
   ========================================= */

// Kita cek dulu: "Apakah Library AOS ada di halaman ini?"
// Kalau ada, baru jalankan animasinya. Kalau tidak ada (di halaman lain), diam saja.
if (typeof AOS !== 'undefined') {
    
    AOS.init({
        duration: 1000, /* Durasi 1 detik */
        once: true,     /* Animasi sekali jalan */
        offset: 100,    /* Mulai saat gambar nongol dikit */
    });
    
}

document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev-project');
    const nextButton = document.querySelector('.next-project');

    // Contoh array ID atau nama proyek Anda
    const projects = [
        'tsijinema',
        'duakosong',
        'iyalagi',
        'thejorts',
        'charmlesspals'
    ];

    // Fungsi untuk mendapatkan ID proyek saat ini dari URL (misalnya, 'tsijinema.html')
    function getCurrentProjectId() {
        const path = window.location.pathname;
        const filename = path.split('/').pop(); // Mendapatkan 'tsijinema.html'
        return filename.split('.')[0]; // Mendapatkan 'tsijinema'
    }

    let currentIndex = projects.indexOf(getCurrentProjectId());

    // Fungsi untuk menavigasi ke proyek sebelumnya
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            window.location.href = `${projects[currentIndex]}.html`; // Sesuaikan format URL Anda
        } else {
            // Opsional: navigasi ke proyek terakhir jika sudah di awal
            // currentIndex = projects.length - 1;
            // window.location.href = `${projects[currentIndex]}.html`;
            alert('Ini adalah proyek pertama!'); // Atau tampilkan notifikasi lain
        }
    });

    // Fungsi untuk menavigasi ke proyek selanjutnya
    nextButton.addEventListener('click', () => {
        if (currentIndex < projects.length - 1) {
            currentIndex++;
            window.location.href = `${projects[currentIndex]}.html`; // Sesuaikan format URL Anda
        } else {
            // Opsional: navigasi ke proyek pertama jika sudah di akhir
            // currentIndex = 0;
            // window.location.href = `${projects[currentIndex]}.html`;
            alert('Ini adalah proyek terakhir!'); // Atau tampilkan notifikasi lain
        }
    });


    // Sembunyikan panah jika hanya ada satu proyek atau di luar halaman proyek
    if (projects.length <= 1 || currentIndex === -1) {
        document.querySelector('.project-navigation').style.display = 'none';
    } else {
        // Atur status tombol (nonaktifkan jika di awal/akhir)
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === projects.length - 1;
    }
});

