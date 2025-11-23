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