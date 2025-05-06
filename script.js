const bookInformation = document.querySelector("#bookInformation")
const showDialog = document.querySelector("#addDialog")
const bookList = document.querySelector(".book-list")
let myLibrary = [];

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function Book(author, title, genre, pages, read) {

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

Book.prototype.toggleRead = function() {
  this.read = !this.read;
}

const addBookCard = (book) => {
  
  i = book.length - 1

  const card = document.createElement("div")
  card.classList.add("book")
  
  bookList.appendChild(card)
  
  const button = document.createElement("button")
  button.innerHTML = "Read"
  
  const removeBtn = document.createElement("button")
  removeBtn.innerHTML = "Remove"
  removeBtn.classList.add("remove")


  for (const propertyName in book[i]) {
   
    if (propertyName === "id") {
      card.dataset.id = book[i][propertyName]
    } 

    if (propertyName === "read") {
      card.appendChild(button)
      
      if (book[i][propertyName] === true) {
        button.classList.add("read")
        button.classList.add("toggle-read")

      } else {
        button.classList.add("not-read")
        button.classList.add("toggle-read")
        
      }

    } else if (propertyName !== "id" && propertyName !== "toggleRead"){
      let p = document.createElement("p")
      p.innerText = `${(capitalize(propertyName))}: ${book[i][propertyName]}`
      card.appendChild(p)
      console.log(`${propertyName}: ${book[i][propertyName]}`)
    }   
    

  
  }

  card.appendChild(removeBtn)

}


function addBookToLibrary(author, title, genre, pages , read) {

    const book = new Book(author, title, genre, pages , read);
    myLibrary.push(book);

};

const removeBook = (event) => {

  const bookElement = event.target.closest(".book")
  
  const bookId = bookElement.dataset.id

  bookElement.remove();
  
  myLibrary = myLibrary.filter(book => book.id !== bookId)

}

const toggleRead = (event) => {
 
  
  const bookId = event.target.closest(".book").dataset.id
  const book = myLibrary.find(book => book.id === bookId);
  
  if (book) {
    book.toggleRead();
  }
  
  if (book.read === false) {
    event.target.classList.add("not-read")
    event.target.classList.remove("read")
    
  }

  if (book.read === true) {
    event.target.classList.add("read")
    event.target.classList.remove("not-read")
  }

}

document.querySelector("#addBookWindow").addEventListener("click", (event) => {
    event.preventDefault();
    showDialog.showModal();
});



document.querySelector('#bookInformation').addEventListener("submit", (event) => {
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
  addBookCard(myLibrary)
  showDialog.close()

});

document.querySelector(".book-list").addEventListener("click", (event) => {
  
  if (event.target.classList.contains("remove")) {
    removeBook(event);
  }

  if (event.target.classList.contains("toggle-read")) {
    toggleRead(event)
  }



});