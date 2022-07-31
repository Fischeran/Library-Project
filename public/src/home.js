function getTotalBooksCount(books) {

  let bookCount = books.reduce((total, its) => {return total + 1}, 0);

  return bookCount
}

function getTotalAccountsCount(accounts) {

  let accountCount = accounts.reduce((total, its) => {return total + 1}, 0);

  return accountCount
}

function getBooksBorrowedCount(books) {
let count = 0;

books.forEach((book) => {if (book.borrows.some((borrow) => borrow.returned === false) === true) {count += 1}});

return count;
}


//making helper function here to use in getMostCommonGenres

function countByGenre(arr, genre) {
    let count = 0;
    arr.forEach((element) =>  
    {if (element.toLowerCase() === genre.toLowerCase()) {count += 1}})
return count;}


function getMostCommonGenres(books) {
  const genres = books.map((book) => book.genre);

const historyCount = countByGenre(genres, "historical fiction");
const sciCount = countByGenre(genres, "science");
const classCount = countByGenre(genres, "classics");
const youngCount = countByGenre(genres, "young adult");
const nonF = countByGenre(genres, "nonfiction");
const travCount = countByGenre(genres, "travel");

let answerSoon = [
  {name: "Historical Fiction", count: historyCount}, 
  {name: "Science", count: sciCount}, 
  {name: "Classics", count: classCount}, 
  {name: "Young Adult", count: youngCount},
  {name: "Nonfiction", count: nonF},
  {name: "Travel", count: travCount},];

  answerSoon.sort((a, b) => b.count - a.count);

  let [first, second, third, fourth, fifth] = answerSoon;

  let answer = [first, second, third, fourth, fifth];

  return answer
  
}

function getMostPopularBooks(books) {

  let genres = [];

  books.forEach((book) => {
  let total = book.borrows.reduce((total, keys) => {return total + 1}, 0);
  let final = {name: book.title, count: total};
   genres.push(final);
});

   let sorted = genres.sort((a,b) => b.count - a.count);

   let [first, second, third, fourth, firth] = sorted;

   let final = [first, second, third, fourth, firth];

   return final

}

function getMostPopularAuthors(books, authors) {

  let unSorted = [];
  let withAuthors = [];

  books.forEach((book) => {
  let total = book.borrows.reduce((total, keys) => {return total + 1}, 0);
  let final = {name: book.title, count: total, author: book.authorId};
   unSorted.push(final);
});

authors.forEach((author) => unSorted.forEach((item) => {if (item.author === author.id)
 {withAuthors.push({name : `${author.name.first} ${author.name.last}`, count: item.count})}}));


 

 let sorted = withAuthors.sort((a,b) => b.count - a.count).slice(0, 5);

 let [first, second, third, fourth, firth] = sorted;

 let final = [first, second, third, fourth, firth];

 return sorted
  
console.log(withAuthors);
}




module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};