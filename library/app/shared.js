class book{
    constructor(id, title, date, url, description, popularity) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.url = url;
        this.description = description;
        this.popularity = popularity;
    }
}

const initialBooks = [
    new Book("B1234", "Knjiga 1", "2022", "assets/images/book1.jpg", "Opis knjige 1", 4),
    new Book("B5678", "Knjiga 2", "2021", "assets/images/book2.jpg", "Opis knjige 2", 5),
    new Book("B9101", "Knjiga 3", "2020", "assets/images/book3.jpg", "Opis knjige 3", 3),
    new Book("B1121", "Knjiga 4", "2019", "assets/images/book4.jpg", "Opis knjige 4", 2),
    new Book("B3141", "Knjiga 5", "2018", "assets/images/book5.jpg", "Opis knjige 5", 5)
];