var iznajmljene = JSON.parse(localStorage.getItem("iznajmljene-knjige"));
if (iznajmljene == null) {
    iznajmljene = [];
}

function vratiKnjigu(id) {
    var noviNiz = [];
    for (var j = 0; j < iznajmljene.length; j++) {
        if (iznajmljene[j].id != id) {
            noviNiz.push(iznajmljene[j]);
        }
    }

    iznajmljene = noviNiz;

    localStorage.setItem("iznajmljene-knjige", JSON.stringify(iznajmljene));

    popuniTabelu();
}

function popuniTabelu() {
    var tbody = document.querySelector("#reserved-table tbody");
    tbody.innerHTML = "";

    if (iznajmljene.length == 0) {
        tbody.innerHTML = "<tr><td colspan='3'>Nema iznajmljenih knjiga</td></tr>";
        return;
    }

    for (var i = 0; i < iznajmljene.length; i++) {
        var knjiga = iznajmljene[i];

        var red = document.createElement("tr");

        var tdBr = document.createElement("td");
        tdBr.textContent = i + 1;

        var tdNaziv = document.createElement("td");
        tdNaziv.textContent = knjiga.title;

        var tdDugme = document.createElement("td");
        var dugme = document.createElement("button");
        dugme.textContent = "Vrati";
        dugme.style.backgroundColor = "#007bff";
        dugme.style.color = "white";
        dugme.style.border = "none";
        dugme.style.padding = "6px 12px";
        dugme.style.cursor = "pointer";

        dugme.setAttribute("onclick", "vratiKnjigu('" + knjiga.id + "')");

        tdDugme.appendChild(dugme);

        red.appendChild(tdBr);
        red.appendChild(tdNaziv);
        red.appendChild(tdDugme);

        tbody.appendChild(red);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    popuniTabelu();
});