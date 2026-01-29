function ucitajKnjige() {
    const sacuvaneKnjige = localStorage.getItem("moje-knjige");

    if (sacuvaneKnjige) {
        return JSON.parse(sacuvaneKnjige);
    }

    
    const pocetneKnjige = [
        { id: "B1234", title: "Most na Žepi", date: "2022", url: "assets/images/book1.jpg", description: "Opis...", popularity: 4 },
        { id: "B5678", title: "Proces", date: "2021", url: "assets/images/book2.jpg", description: "Opis...", popularity: 5 },
        { id: "B9101", title: "1984", date: "1949", url: "assets/images/book3.jpg", description: "Opis...", popularity: 5 }
    ];

    localStorage.setItem("moje-knjige", JSON.stringify(pocetneKnjige));
    return pocetneKnjige;
}

function sacuvajKnjige() {
    localStorage.setItem("moje-knjige", JSON.stringify(knjige));
}

let knjige = ucitajKnjige();

function popuniTabelu() {
    const tabela = document.querySelector("#books-table");
    const tbody = tabela.querySelector("tbody");
    tbody.innerHTML = "";

    knjige.forEach((knjiga, index) => {
        const red = document.createElement("tr");

        const tdBr = document.createElement("td");
        tdBr.textContent = index + 1;

        const tdNaziv = document.createElement("td");  
        tdNaziv.textContent = knjiga.title;

        const tdAkcija = document.createElement("td");
        const dugme = document.createElement("button");
        dugme.textContent = "Obrisi";  
        dugme.style.backgroundColor = "#dc3545";
        dugme.style.color = "white";
        dugme.style.border = "none";
        dugme.style.padding = "6px 12px";
        dugme.style.cursor = "pointer";

        dugme.addEventListener("click", () => {
            obrisiKnjigu(knjiga.id);
        });

        tdAkcija.appendChild(dugme);

        red.appendChild(tdBr);
        red.appendChild(tdNaziv);
        red.appendChild(tdAkcija);

        tbody.appendChild(red);
    });
}

function obrisiKnjigu(id) {
    knjige = knjige.filter(knjiga => knjiga.id !== id);
    sacuvajKnjige();
    popuniTabelu();
}

document.addEventListener("DOMContentLoaded", () => {
    popuniTabelu();
});