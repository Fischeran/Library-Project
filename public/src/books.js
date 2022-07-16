function findAuthorById(authors, id) {
  const x = authors.find((element) => element.id === id);
  return x;
}

function findBookById(books, id) {
  const y = books.find((element) => element.id === id);
  return y;
}

function partitionBooksByBorrowedStatus(books) {
let checkedOut = [];
let returned = [];

books.forEach((element) => {if (element.borrows.some((borrow) => borrow.returned === false) === true) {checkedOut.push(element)} else {returned.push(element)}} );

const status = [ [...checkedOut], [...returned ]];

return status;
}

/*It should return an array of ten or fewer account objects that represents the accounts given by the IDs in the provided book's `borrows` array. 
However, each account object should include the `returned` entry from the corresponding transaction object in the `borrows` array. */



function getBorrowersForBook(book, accounts) {
const {borrows} = book;
let borrowers = []

accounts.forEach((element) => borrows.forEach((sect) =>

{if (element.id === sect.id && borrowers.length < 10) 
  
  {element["returned"] = sect.returned, borrowers.push(element)}

}));

console.log(borrowers);

return borrowers

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
