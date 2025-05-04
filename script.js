const bookInformation = document.querySelector("#bookInformation")
const showDialog = document.querySelector("#addDialog")
const myLibrary = [];
const gridContainer = document.querySelector(".grid-container")

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const addBookCard = (book) => {
  const card = document.createElement("div")
  card.classList.add("card")
  gridContainer.appendChild(card)
  i = myLibrary.length - 1
  const button = document.createElement("button")

  for (const propertyName in myLibrary[i]) {
    if (propertyName === 'id') {
      continue
    } 
//    if (propertyName === 'true' || 'false') {
//      card.appendChild(button)
    else {
      let p = document.createElement("p")
      p.innerText = `${(capitalize(propertyName))}: ${myLibrary[i][propertyName]}`
      card.appendChild(p)
      console.log(`${propertyName}: ${myLibrary[i][propertyName]}`)
    }   
    
  }

  
}

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

document.querySelector('#bookInformation').addEventListener("submit", (event) => {
  console.log('aa')
  newBook = []
  event.preventDefault();

  for(i = 0; i < bookInformation.length; i++) {
    
    if (i < 4) {
      newBook.push(bookInformation[i].value)
    }

    if (i === 4) {
      newBook.push(bookInformation[i].checked)
    }
  }

  addBookToLibrary(newBook[0], newBook[1], newBook[2], newBook[3], newBook[4])
  console.log(newBook)
  console.log(myLibrary)
  addBookCard(myLibrary)
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