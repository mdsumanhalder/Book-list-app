const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (title.value == "" && author.value == "" && year.value == "") {
        alert("please fill the data");
    } else {
        const newRow = document.createElement("tr");
        // creating new title
        const newTitle = document.createElement("th");
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);
        // creating new title
        const newAuthor = document.createElement("th");
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);
        // creating new title
        const newYear = document.createElement("th");
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);
        bookList.appendChild(newRow);
    }
});