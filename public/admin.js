
// Your Code Here
async function getBooks() {

    let response = await fetch('http://localhost:3001/listBooks');

    let books = await response.json();
    books.forEach(renderBook);
    console.log(books);
}
function renderBook(book) {
    let root = document.getElementById('root')
    let bookitem = document.createElement('li')
    bookitem.innerHTML= book.title;
    let quantitytext = document.createElement ('input')
    quantitytext.setAttribute('value', book.quantity)
    let updatebutton = document.createElement('button')

}
async function updateBook() {
    let response = await fetch('http://localhost:3001/updateBook', options, {
        method: 'PATCH',
        headers: {
            'Content-Type': '/application/json'

        },
        body: JSON.stringify({
            "id": 3,
            "title": "The Annals of Arathrae",
            "description": "This anthology tells the intertwined narratives of six fairy tales.",
            "year": 2016,
            "quantity": "8",
            "imageURL": "/assets/arathrae.jpeg",

            "error": "true",
            "message": "'id' is required to call this method",
        },
        )
    });

    let updatedBook = await response.json();
    console.log(updatedBook);
}
getBooks()