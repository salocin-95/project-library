const myLibrary = [];

function Book(author, title, genre, pages, read) {
  // the constructor...
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    };
    
    this.author = author;
    this.title = title;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID()
};

function addBookToLibrary(author, title, genre, pages , read) {
  // take params, create a book then store it in the array
    const book = new Book(author, title, genre, pages , read);
    myLibrary.push(book);
};

// Use <dialog> to open form and here use evnent.prevent    Default

document.querySelector(".submit").addEventListener("click", function (e) {
    console.log("me clickeaste");
    addBookToLibrary("rodrigo", "titulo", "genero", 345, true);
    console.log(myLibrary);
})