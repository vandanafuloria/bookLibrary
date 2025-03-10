
const buttonEl = document.querySelector('button');
const closeBtnEl = document.querySelector('.close');
const dialogEl = document.querySelector('#dialogBox');
const submitEl = document.querySelector('.submit');
const bookNameEl = document.querySelector('#bookName');
const writerEl = document.querySelector('#author');
const pagesEl = document.querySelector('#page');
const readEl = document.querySelector('#read');
const bookContainerEl = document.querySelector('.content-box');

let mylibrary = [];

function BookInfo(book, writer, pages, read){
    this.book = book;
    this.writer = writer;
    this.pages = pages;
    this.read = read;
    this.id = Date.now(); // every book have a id //
    }



function dialogBoxOpen(){
    dialogEl.showModal();
}

function closeDialogBox(){
    dialogEl.close();
}








function getBookElement(book){
    const bookElement = document.createElement('div');
    bookElement.classList.add('bookInfo')
    const nameOfBook = document.createElement('h3');
    nameOfBook.innerText = book.book;
  
    
    const nameOfWriter = document.createElement('p');
    nameOfWriter.innerText = book.writer;
    const numberOfPages = document.createElement('h6');
    numberOfPages.innerText = book.pages;

    bookElement.append(nameOfBook, nameOfWriter, numberOfPages);

    const fileContainerEl = document.createElement('div');
    fileContainerEl.classList.add('file-container')


    const fileUploadEl = document.createElement('input');
    fileUploadEl.setAttribute("type", 'file');
    fileUploadEl.setAttribute('id', 'file')
 
  
    const urlUpload = document.createElement('input');
    urlUpload.setAttribute('id', 'url');
    urlUpload.setAttribute('placeholder', 'URL for image')
    
    fileContainerEl.append(fileUploadEl,  urlUpload);
    
    bookElement.append(fileContainerEl);

    const btnBoxEl = document.createElement('div');
    btnBoxEl. classList.add('displayButtons');
    const deleteBookEl = document.createElement('button');
    deleteBookEl.classList.add("delete");
    const readBookEl = document.createElement('button');
    readBookEl.classList.add('read');
    deleteBookEl.innerText = "Delete";
    readBookEl.innerText = "Read";

    btnBoxEl.append(readBookEl, deleteBookEl);
    bookElement.appendChild(btnBoxEl);
    // bookContainerEl.appendChild(bookElement);
    console.log(book);

// working properly //
    deleteBookEl.addEventListener('click', function (event){
      
        bookContainerEl.removeChild(bookElement);
        
        for(let i = 0; i < mylibrary.length; i++) {
            if(mylibrary[i].id === book.id) {
                mylibrary.splice(i, 1);
                break;
            }
        }
        saveToLocalStorage();
       
    })

    return bookElement;
}
const urlUpload = document.querySelector('#url');
const fileUpload = document.querySelector('#file');

const bookElement = document.querySelector(".bookInfo");
const deleteBookEl = document.querySelector('.delete');


function saveToLocalStorage() {
    const libraryJsonString = JSON.stringify(mylibrary);
    localStorage.setItem('books', libraryJsonString);    
}


function submitInfo(event){
    event.preventDefault();
    
   let book = bookNameEl.value;
  
   let writer =writerEl.value;
   let pages = pagesEl.value;
   let read = readEl.checked;
 
   if(book == "")
    {
        alert("Enter Book name");
        return;
    } 
   if(writer == ""){
    alert("Enter Author Name");
    return;
   } 
 
   const books = new BookInfo(book, writer, pages, read)
   mylibrary.push(books);
   console.log(mylibrary);

   const bookEl = getBookElement(books);
   bookContainerEl.appendChild(bookEl);
   bookNameEl.value = "";
   writerEl.value = "";
   pages.value = "";
   read= false;
  
   closeDialogBox()
   console.log("saving to local storage: ", mylibrary)
   saveToLocalStorage();
  
}


submitEl.addEventListener('click', submitInfo);

closeBtnEl.addEventListener('click', closeDialogBox);
buttonEl.addEventListener('click', dialogBoxOpen);



function initializeApplication (){
    const booksJsonString  = localStorage.getItem('books');
    const parsed = JSON.parse(booksJsonString);
    mylibrary = parsed;
    
    // console.log("initialize");
    // console.log(parsed);
    // console.log(parsed.length);
    for(let book of parsed){
        const bookEl = getBookElement(book)
        bookContainerEl.appendChild(bookEl);
        console.log(book);
    }
  

    
    
}

window.addEventListener('load', initializeApplication);
// window.addEventListener('keydown',function(event){
//       console.log(event.key)
//     if(event.key === 13 ){
        
//        closeDialogBox()
//     }
// })
// deleteBookEl.addEventListener("click", delelteBook);

