    const popupData = {
        film1: {
            title: "Tsijinema Production",
            text: "Sabar yaa..."
        },
        film2: {
            title: "Dua Kosong Production",
            text: "Sabar yaa..."
        },
        film3: {
            title: "Iyalagi Production",
            text: "Sabar yaa..."
        },
        MV1: {
            title: "The Jorts",
            text: "Sabar yaa..."
        },
        MV2: {
            title: "Charmless Pals",
            text: "Sabar yaa..."
        }
    };

    function showPopup(id) {
        const data = popupData[id];

        if (!data) return;

        document.getElementById("popup-title").textContent = data.title;
        document.getElementById("popup-text").textContent = data.text;

        document.getElementById("popup-overlay").style.display = "block";
        document.getElementById("popup-box").style.display = "block";
    }

    function closePopup() {
        document.getElementById("popup-overlay").style.display = "none";
        document.getElementById("popup-box").style.display = "none";
    }
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