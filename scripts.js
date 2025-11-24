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
