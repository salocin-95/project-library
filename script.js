const bookInformation = document.querySelector("#bookInformation")
const showDialog = document.querySelector("#addDialog")
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

// Use <dialog> to open form and here use evnent.preventDefault
// Opens dialog window
document.querySelector("#addBookWindow").addEventListener("click", (event) => {
    event.preventDefault();
    showDialog.showModal();
});

bookInformation.addEventListener("submit", (event) => {
  console.log('aa')
  lista = []
  event.preventDefault();
//  bookInfo.array.forEach(element => {
//    console.log(bookInfo[element].value
//    });
  for(i = 0; i < bookInformation.length; i++) {
    console.log(bookInformation[i].checked)
    lista.push(bookInformation[i].value);
  }

  showDialog.close()
});

document.querySelector(".close").addEventListener("click", (event) => {
  event.preventDefault();
  showDialog.close();
});

document.querySelector(".remove").addEventListener("click", (event) => {
  event.preventDefault();
  // tiene que remover el libro del boton que estoy tocando
  if (myLibrary > 0) {
    console.log(myLibrary)
  };
});