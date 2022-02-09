const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.render("main", {
    title: "Contact | Sonny Stark",
    content: "contact",
  });
});

module.exports = route;
