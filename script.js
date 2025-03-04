
const buttonEl = document.querySelector('button');
const closeBtnEl = document.querySelector('.close');
const dialogEl = document.querySelector('#dialogBox');
const submitEl = document.querySelector('.submit');
const bookNameEl = document.querySelector('#bookName');
const writerEl = document.querySelector('#author');
const pagesEl = document.querySelector('#page');
const readEl = document.querySelector('#read');
const bookContainerEl = document.querySelector('.content-box');

const mylibrary = [];

function bookInfoConstructor(book, writer, pages, read){
    this.book = book;
    this.writer = writer;
    this.pages = pages;
    this.read = read;
 
}

function dialogBoxOpen(){
    dialogEl.showModal();
}

function closeDialogBox(){
    dialogEl.close();
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
   console.log(book, writer, pages, read);
   const books = new bookInfoConstructor(book, writer, pages, read);
   mylibrary.push(book);
   generateBookDisplay(book, writer, pages, read);
   bookNameEl.value = "";
   writerEl.value = "";
   pages.value = "";
   read= false;
   
}
console.log(mylibrary);


function generateBookDisplay(book, writer, pages, read){
    const bookElement = document.createElement('div');
    bookElement.classList.add('bookInfo')
    const nameOfBook = document.createElement('h3');
    nameOfBook.innerText = book;
    
    const nameOfWriter = document.createElement('p');
    nameOfWriter.innerText = writer;
    const numberOfPages = document.createElement('h6');
    numberOfPages.innerText = pages;

    bookElement.append(nameOfBook, nameOfWriter, numberOfPages);
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
    bookContainerEl.appendChild(bookElement);

// working properly //
    deleteBookEl.addEventListener('click', function (){
        bookContainerEl.removeChild(bookElement);
    })

    // read function // // need help in this  i got confuse uff;
    // let toggle = false;
    // readBookEl.addEventListener('click', function (){
        
    //     if(toggle == true){
    //         readBookEl.innerText = "Read";
        
    //     }
    //     readBookEl.innerText = "Reading..";
    //      toggle = true;

        
        
    // })
 
}
const bookElement = document.querySelector(".bookInfo");
const deleteBookEl = document.querySelector('.delete');


// function delelteBook(){
//     bookContainerEl.removeChild(bookElement);
// }


submitEl.addEventListener('click', submitInfo);

closeBtnEl.addEventListener('click', closeDialogBox);
buttonEl.addEventListener('click', dialogBoxOpen);
// deleteBookEl.addEventListener("click", delelteBook);

