//B2

const sveKnjige = JSON.parse(localStorage.getItem("moje-knjige")) || [];
var iznajmljene = JSON.parse(localStorage.getItem("iznajmljene-knjige")) || [];

// funkcija za prikaz dostupnih knjiga u tabeli
function renderAvailable() {
    var tbody = document.querySelector("#available-table tbody");
    tbody.innerHTML = "";

    // filtriraj samo dostupne knjige (koje nisu iznajmljene)
    const dostupne = sveKnjige.filter(k => !iznajmljene.some(i => i.id === k.id));

    if (dostupne.length === 0) {
        tbody.innerHTML = "<tr><td colspan='3'>Sve knjige su iznajmljene</td></tr>";
        return;
    }

    for (var i = 0; i < dostupne.length; i++) {
        var knjiga = dostupne[i];

        var red = document.createElement("tr");

        var tdBr = document.createElement("td");
        tdBr.textContent = i + 1;

        var tdNaziv = document.createElement("td");
        tdNaziv.textContent = knjiga.title;

        var tdDugme = document.createElement("td");
        var dugme = document.createElement("button");
        dugme.textContent = "Iznajmi";
        dugme.style.backgroundColor = "#28a745";
        dugme.style.color = "white";
        dugme.style.border = "none";
        dugme.style.padding = "6px 12px";
        dugme.style.cursor = "pointer";

        dugme.addEventListener("click", function(id) {
            return function() {
                iznajmiKnjigu(id);
            };
        }(knjiga.id));

        tdDugme.appendChild(dugme);

        red.appendChild(tdBr);
        red.appendChild(tdNaziv);
        red.appendChild(tdDugme);

        tbody.appendChild(red);
    }
}

function iznajmiKnjigu(id) {
    const knjiga = sveKnjige.find(k => k.id === id);
    if (!knjiga) return;

    iznajmljene.push(knjiga);
    localStorage.setItem("iznajmljene-knjige", JSON.stringify(iznajmljene));

    renderAvailable(); // osvezi dostupne knjige
    if (typeof popuniTabelu === "function") {
        popuniTabelu();
    }
}

// inicijalno renderovanje dostupnih knjiga
document.addEventListener("DOMContentLoaded", function() {
    renderAvailable();
});
