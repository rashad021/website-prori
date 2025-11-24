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
