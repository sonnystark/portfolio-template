const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.render("main", {
    title: "Portfolio | Sonny Stark",
    content: "portfolio",
  });
});

module.exports = route;
