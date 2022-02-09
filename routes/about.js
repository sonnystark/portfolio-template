const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.render("main", {
    title: "About | Sonny Stark",
    content: "about",
  });
});

module.exports = route;
