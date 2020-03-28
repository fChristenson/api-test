const express = require("express");
const app = express();

app.use(express.json());

const User = () => {
  return {
    id: Math.random(),
    name: `Foo-${Math.random()}`
  }
}

const users = [
  User(),
  User(),
  User()
];

app.get("/api/v1/users", (req, res) => {
  res.json(users);
});

app.use((req, res) => {
  res.status(404).json({ error: "not found" });
});

app.use((err, req, res, next) => {
  res.json({ error: err.message });
});

module.exports = app;
