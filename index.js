/*
* CRUD operations (2x)
* Kontaktseite
*/
// Variables
let header = document.querySelector("h1");
let text = header.textContent;
header.textContent = "";

// Funktion für den Schreibmaschinen-Effekt
function typeWriter(header, text, delay = 100) {

    let i = 0;
    function typing() {
        if (i < text.length) {
            header.textContent += text.charAt(i);
            i++;
            setTimeout(typing, delay); // ruft sich selbst zeitverzögert wieder auf
        }
    }
    typing();
}
// Funktionsaufruf
typeWriter(header, text, 120);



