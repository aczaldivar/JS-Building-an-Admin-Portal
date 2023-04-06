
// Your Code Here
async function getBooks() {

    let response = await fetch('http://localhost:3001/listBooks');

    let books = await response.json();
    books.forEach(renderBookList);
    console.log(books);
}
function renderBookList(book) {
    let root = document.getElementById('root')
    let bookitem = document.createElement('li')
    bookitem.innerHTML= book.title;
    let quantitytext = document.createElement ('input')
    quantitytext.setAttribute('value', book.quantity)
    let updatebutton = document.createElement('button')
    updatebutton.textContent= 'Update';
    updatebutton.addEventListener('click', async ()=>{
        let response = await fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": book.id,   
                "quantity": quantitytext.value
                
            })
        });
    
        console.log(updatedBook);
    })
    bookitem.append(quantitytext)
    bookitem.append(updatebutton)
    root.append(bookitem)
}
async function updateBook() {
    
}
getBooks()