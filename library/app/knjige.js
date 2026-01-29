function renderAvailable() {
    const sveKnjige = JSON.parse(localStorage.getItem("moje-knjige")) || [];
    const iznajmljene = JSON.parse(localStorage.getItem("iznajmljene-knjige")) || [];
    const tbody = document.querySelector("#available-table tbody");
    tbody.innerHTML = "";

    const dostupne = sveKnjige.filter(k => !iznajmljene.some(i => i.id === k.id));

    if (dostupne.length === 0) {
        tbody.innerHTML = "<tr><td colspan='3'>Sve knjige su iznajmljene</td></tr>";
        return;
    }

    dostupne.forEach((knjiga, i) => {
        let red = document.createElement("tr");

        let tdBr = document.createElement("td");
        tdBr.textContent = i + 1;

        let tdNaziv = document.createElement("td");
        tdNaziv.textContent = knjiga.title;

        let tdDugme = document.createElement("td");
        let dugme = document.createElement("button");
        dugme.textContent = "Iznajmi";
        dugme.style.backgroundColor = "#28a745";
        dugme.style.color = "white";
        dugme.style.border = "none";
        dugme.style.padding = "6px 12px";
        dugme.style.cursor = "pointer";

        dugme.onclick = () => {
            iznajmiKnjigu(knjiga.id);
        };

        tdDugme.appendChild(dugme);
        red.appendChild(tdBr);
        red.appendChild(tdNaziv);
        red.appendChild(tdDugme);

        tbody.appendChild(red);
    });
}

function iznajmiKnjigu(id) {
    const sveKnjige = JSON.parse(localStorage.getItem("moje-knjige")) || [];
    let iznajmljene = JSON.parse(localStorage.getItem("iznajmljene-knjige")) || [];

    const knjiga = sveKnjige.find(k => k.id === id);
    if (!knjiga) return;

    iznajmljene.push(knjiga);
    localStorage.setItem("iznajmljene-knjige", JSON.stringify(iznajmljene));

    renderAvailable();
    if (typeof popuniTabelu === "function") {
        popuniTabelu();
    }
}

document.addEventListener("DOMContentLoaded", renderAvailable);
