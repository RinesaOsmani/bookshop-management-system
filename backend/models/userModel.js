const db = require("./db");
const bcrypt = require("bcryptjs");

const User = {
  create: (name, email, password, role, callback) => {
    const hashed = bcrypt.hashSync(password, 8);
    db.query(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, hashed, role],
      callback
    );
  },
  findByEmail: (email, callback) => {
    db.query("SELECT * FROM users WHERE email = ?", [email], callback);
  },
};

module.exports = User;