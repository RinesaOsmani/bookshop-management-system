const Book = require("../models/bookModel");

exports.getBooks = (req, res) => {
  Book.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.createBook = (req, res) => {
  const { title, author, price, stock } = req.body;
  Book.create(title, author, price, stock, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Book created!" });
  });
};

exports.updateBook = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  Book.update(id, data, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Book updated!" });
  });
};

exports.deleteBook = (req, res) => {
  const { id } = req.params;
  Book.delete(id, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Book deleted!" });
  });
};