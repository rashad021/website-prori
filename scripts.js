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
    // Pastikan kita mendapatkan elemen, dan jika tidak ada, biarkan null.
    const prevButton = document.querySelector('.prev-project');
    const nextButton = document.querySelector('.next-project');

    const projects = [
        'tsijinema', // Pastikan nama ini sesuai dengan bagian awal nama file HTML Anda
        'duakosong',
        'iyalagi',
        'thejorts',
        'charmlesspals'
    ];

    function getCurrentProjectId() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        return filename.split('.')[0];
    }

    let currentIndex = projects.indexOf(getCurrentProjectId());

    // --- Tambahan / Perbaikan Logika ---

    // Fungsi untuk mengupdate status tombol
    function updateButtonStates() {
        if (prevButton) { // Hanya update jika tombol ada di DOM
            prevButton.disabled = currentIndex === 0;
            // Jika Anda ingin menyembunyikan, bukan hanya menonaktifkan
            prevButton.style.visibility = (currentIndex === 0) ? 'hidden' : 'visible';
        }
        if (nextButton) { // Hanya update jika tombol ada di DOM
            nextButton.disabled = currentIndex === projects.length - 1;
            // Jika Anda ingin menyembunyikan, bukan hanya menonaktifkan
            nextButton.style.visibility = (currentIndex === projects.length - 1) ? 'hidden' : 'visible';
        }
    }

    // Panggil updateButtonStates saat halaman dimuat
    updateButtonStates();

    // Event listener untuk tombol Previous
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                window.location.href = `${projects[currentIndex]}.html`;
            }
        });
    }

    // Event listener untuk tombol Next
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            if (currentIndex < projects.length - 1) {
                currentIndex++;
                window.location.href = `${projects[currentIndex]}.html`;
            } else {
                alert('Ini adalah proyek terakhir!');
            }
        });
    }

    // Opsional: Sembunyikan seluruh container navigasi jika tidak relevan
    if (projects.length <= 1 || currentIndex === -1) {
        const navContainer = document.querySelector('.project-navigation');
        if (navContainer) {
            navContainer.style.display = 'none';
        }
    }
});