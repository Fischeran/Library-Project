function findAccountById(accounts, user) {

const foundUser = accounts.find((ident) => ident.id === user);
return foundUser;
}

function sortAccountsByLastName(accounts) {
  accounts = accounts.sort((a, b) => { return a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1}
    );
  
  return accounts;
}

//It returns a _number_ that represents the number of times the account's ID appears in any book's `borrows` array.
//- An array of all book objects.
//- An account object.

function getTotalNumberOfBorrows(account, books) {
let count = 0;
books.forEach((element) => element.borrows.forEach((borrow) => {if (borrow.id === account.id)  {count += 1}}));
return count;
}

//The `getBooksPossessedByAccount` function in `public/src/accounts.js` has three parameters, in the following order:
//- An account object.
//- An array of all book objects.
//- An array of all author objects.
/*It returns an array of book objects, including author information, that represents all books _currently checked out_ by 
the given account. _Look carefully at the object below,_ as it's not just the book object; the author object is nested inside of it.*/


function getBooksPossessedByAccount(account, books, authors) {
//we need to find all the books checked out by a given account.id
//we need to push those books into an array of new objects via filtered
//lastly we need to add the corresponding author object in the book object 

let booksWithoutAuthor = [];

books.forEach((element) => element.borrows.forEach((borrow) => {if (borrow.id === account.id && borrow.returned === false)  {booksWithoutAuthor.push(element)}}));

booksWithoutAuthor.forEach((element) => {
const found = authors.find((it) => it.id === element.authorId);

element["author"] = found;
}
)

console.log(booksWithoutAuthor);

return booksWithoutAuthor
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
