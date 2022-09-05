"use strict";
exports.__esModule = true;
exports.BookManager = void 0;
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.listbooks = [];
    }
    BookManager.prototype.addBook = function (book) {
        this.listbooks.push(book);
    };
    BookManager.prototype.getListBook = function () {
        return this.listbooks;
    };
    BookManager.prototype.deleteBook = function (id) {
        var indexBookdelete = this.findId(id);
        if (indexBookdelete != -1)
            this.listbooks.splice(indexBookdelete, 1);
        else
            throw new Error('delete error');
    };
    BookManager.prototype.updateBook = function (id, name) {
        var indexBookUpdate = this.findId(id);
        if (indexBookUpdate != -1)
            this.listbooks[indexBookUpdate].setName(name);
        else
            throw new Error('update error');
    };
    BookManager.prototype.findId = function (id) {
        var flag = -1;
        this.listbooks.forEach(function (book, index) {
            if (book.ID == id)
                flag = index;
        });
        return flag;
    };
    return BookManager;
}());
exports.BookManager = BookManager;
