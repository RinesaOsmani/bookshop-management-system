const db = require("./db");

const Book = {
  getAll: (callback) => db.query("SELECT * FROM books", callback),
  create: (title, author, price, stock, callback) => {
    db.query(
      "INSERT INTO books (title, author, price, stock) VALUES (?, ?, ?, ?)",
      [title, author, price, stock],
      callback
    );
  },
  update: (id, data, callback) => {
    db.query(
      "UPDATE books SET title=?, author=?, price=?, stock=? WHERE id=?",
      [data.title, data.author, data.price, data.stock, id],
      callback
    );
  },
  delete: (id, callback) => {
    db.query("DELETE FROM books WHERE id=?", [id], callback);
  },
};

module.exports = Book;