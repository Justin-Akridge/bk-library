let library = [
  {
    title: "harry potter",
    author: "J.R.R Tolkien",
    pages: 245,
    read: true,
  },
  {
    title: "Hunger Games",
    author: "Hillary clinton",
    pages: 545,
    read: false,
  },
];

// DEAD FUNCTIONS
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;


function addBookToLibrary() {

}


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function addRow(book) {
  const table = document.getElementsByTagName('table')[0];
  const tr = document.createElement('tr');

  let td = document.createElement('td');
  td.style.border = '1px solid black';
  td.appendChild(document.createTextNode(book.title));
  tr.appendChild(td);
  table.appendChild(tr);

  td = document.createElement('td');
  td.style.border = '1px solid black';
  td.appendChild(document.createTextNode(book.author));
  tr.appendChild(td);
  table.appendChild(tr);

  td = document.createElement('td');
  td.style.border = '1px solid black';
  td.appendChild(document.createTextNode(book.pages));
  tr.appendChild(td);
  table.appendChild(tr);

  td = document.createElement('td');
  td.style.border = '1px solid black';
  if (book.read) {
    td.appendChild(document.createTextNode("yes"));
  } else {
    td.appendChild(document.createTextNode("no"));
  }
  tr.appendChild(td);
  table.appendChild(tr);

  td = document.createElement('button');
  td.innerHTML = "Delete";
  td.addEventListener("click", deleteBook);
  tr.appendChild(td);
  table.appendChild(tr);
  
  td = document.createElement('button');
  td.innerHTML = "Change read status";
  td.addEventListener("click", changeReadStatus);
  tr.appendChild(td);
  table.appendChild(tr);
}

function changeReadStatus(e) {
  const row = e.target.parentNode;
  const rowIndex = row.rowIndex - 1;
  const statusCell = row.cells[3];
  const currentStatus = statusCell.innerText.toLowerCase().trim();
  const newStatus currentStatus === 'yes' ? 'no' : 'yes';
  statusCell.innerText = newStatus;
  library[rowIndex].read = newStatus === 'yes'; 
}

function deleteBook(e) {
  const row = e.target.parentNode;
  const rowIndex = row.rowIndex - 1;
  row.parentNode.removeChild(row);
  library.splice(rowIndex, 1);
  console.log("Book deleted", library);
}

function tableCreate() {
  const body = document.body;
  const table = document.createElement('table');
  //table.style.width = '500px';
  table.style.border = '1px solid black';
  //title
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.style.fontSize = '24px';
  td.style.borderBottom = '1px solid black';
  td.appendChild(document.createTextNode("Library"));
  tr.appendChild(td);
  table.appendChild(tr);

  tr = document.createElement('tr');
  td = document.createElement('td');
  td.style.fontSize = '18px';
  td.style.border = '1px solid black';
  td.appendChild(document.createTextNode("Title"));
  tr.appendChild(td);
  table.appendChild(tr);

  td = document.createElement('td');
  td.style.fontSize = '18px';
  td.style.border = '1px solid black';
  td.appendChild(document.createTextNode("Author"));
  tr.appendChild(td);
  table.appendChild(tr);

  td = document.createElement('td');
  td.style.fontSize = '18px';
  td.style.border = '1px solid black';
  td.appendChild(document.createTextNode("Pages"));
  tr.appendChild(td);
  table.appendChild(tr);
  
  td = document.createElement('td');
  td.style.fontSize = '18px';
  td.style.border = '1px solid black';
  td.appendChild(document.createTextNode("Has read"));
  tr.appendChild(td);
  table.appendChild(tr);

  for (let i = 0; i < library.length; i++) {
    const tr = document.createElement('tr');
    
    let td = document.createElement('td');
    td.style.border = '1px solid black';
    td.appendChild(document.createTextNode(library[i].title));
    tr.appendChild(td);
    table.appendChild(tr);

    td = document.createElement('td');
    td.style.border = '1px solid black';
    td.appendChild(document.createTextNode(library[i].author));
    tr.appendChild(td);
    table.appendChild(tr);

    td = document.createElement('td');
    td.style.border = '1px solid black';
    td.appendChild(document.createTextNode(library[i].pages));
    tr.appendChild(td);
    table.appendChild(tr);

    td = document.createElement('td');
    td.style.border = '1px solid black';
    if (library[i].read) {
      td.appendChild(document.createTextNode("yes"));
    } else {
      td.appendChild(document.createTextNode("no"));
    }
    tr.appendChild(td);
    table.appendChild(tr);

    td = document.createElement('button');
    td.innerHTML = "Delete";
    td.addEventListener("click", deleteBook);
    tr.appendChild(td);
    table.appendChild(tr);

    td = document.createElement('button');
    td.innerHTML = "Change read status";
    td.addEventListener("click", changeReadStatus);
    tr.appendChild(td);
    table.appendChild(tr);
  }

  body.appendChild(table);
}


let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  let author = document.getElementById("author");
  let title = document.getElementById("title");
  let pages = document.getElementById("pages");
  let read = false; 
  
  if (document.getElementById("read").checked) {
    read = true;
    document.getElementById("read").checked = false;
  } else {
    document.getElementById("!read").checked = false;
  }
  console.log(read);
  const newBook = {
    title: title.value,
    author: author.value,
    pages: pages.value,
    read: read
  }
  library.push(newBook);
  addRow(newBook);
  document.querySelector('#author').value = '';
  document.querySelector('#title').value = '';
  document.querySelector('#pages').value = '';
})

console.log(library)
tableCreate();
