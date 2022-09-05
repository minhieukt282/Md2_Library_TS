import {Book} from "./book";

export class BookManager {
    listbooks: Book[] = []

    constructor() {
    }

    addBook(book: Book): void {
        this.listbooks.push(book)
    }

    getListBook(): Book[] {
        return this.listbooks
    }

    deleteBook(id: string): void {
        let indexBookdelete = this.findId(id)
        if (indexBookdelete != -1)
            this.listbooks.splice(indexBookdelete, 1)
        else throw new Error('delete error')
    }

    updateBook(id: string, name: string): void {
        let indexBookUpdate = this.findId(id)
        if (indexBookUpdate != -1)
            this.listbooks[indexBookUpdate].setName(name)
        else throw new Error('update error')
    }

    findId(id: string): number {
        let flag = -1
        this.listbooks.forEach((book, index) => {
            if (book.ID == id) flag = index
        })
        return flag
    }

}