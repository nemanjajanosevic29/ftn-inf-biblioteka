function vratiKnjigu(id) {
    let iznajmljene = JSON.parse(localStorage.getItem("iznajmljene-knjige")) || [];

    iznajmljene = iznajmljene.filter(k => k.id !== id);

    localStorage.setItem("iznajmljene-knjige", JSON.stringify(iznajmljene));

    popuniTabelu();
    if (typeof renderAvailable === "function") {
        renderAvailable();
    }
}

function popuniTabelu() {
    let iznajmljene = JSON.parse(localStorage.getItem("iznajmljene-knjige")) || [];
    let tbody = document.querySelector("#reserved-table tbody");
    tbody.innerHTML = "";

    if (iznajmljene.length === 0) {
        tbody.innerHTML = "<tr><td colspan='3'>Nema iznajmljenih knjiga</td></tr>";
        return;
    }

    iznajmljene.forEach((knjiga, i) => {
        let red = document.createElement("tr");

        let tdBr = document.createElement("td");
        tdBr.textContent = i + 1;

        let tdNaziv = document.createElement("td");
        tdNaziv.textContent = knjiga.title;

        let tdDugme = document.createElement("td");
        let dugme = document.createElement("button");
        dugme.textContent = "Vrati";
        dugme.style.backgroundColor = "#007bff";
        dugme.style.color = "white";
        dugme.style.border = "none";
        dugme.style.padding = "6px 12px";
        dugme.style.cursor = "pointer";

        dugme.onclick = () => vratiKnjigu(knjiga.id);

        tdDugme.appendChild(dugme);
        red.appendChild(tdBr);
        red.appendChild(tdNaziv);
        red.appendChild(tdDugme);

        tbody.appendChild(red);
    });
}

document.addEventListener("DOMContentLoaded", popuniTabelu);
