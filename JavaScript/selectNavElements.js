let navLinks = document.querySelectorAll("nav ul li a");

function markElements(links) {
    // beim Laden: aktuellen Link markieren
    let currentPath = window.location.pathname;
    // Beispiel: "/bildergalerie.html"

    links.forEach(link => {
        // prüft, ob href den aktuellen Pfad enthält
        if (link.getAttribute("href") === currentPath.split("/").pop()) {
            link.classList.add("active");
        }

        // Klick-Event wie vorher
        link.addEventListener("click", () => {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
}

markElements(navLinks);
