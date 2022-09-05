import {Book} from "./book";
import {BookManager} from "./bookManager";

let book1 = new Book('a1','Lập trình Java');
let book2 = new Book('a2','Lập trình PHP');
let book3 = new Book('a3','Lập trình TypeScript');

let bookManager = new BookManager();
bookManager.addBook(book1);
bookManager.addBook(book2);
bookManager.addBook(book3);
console.log(bookManager.getListBook())
bookManager.updateBook('a3', 'lập trình MySQL')
console.log(bookManager.getListBook())
bookManager.deleteBook('a1')
console.log(bookManager.getListBook())



