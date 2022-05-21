const express = require("express");
const joi = require("joi");
const route = express.Router();


const validatee = require("../routes/middlewares/validate");
const hotel = require("../../hotel.json");

route.get("/", (req, res) => {
  res.json(hotel);
});
route.get("/:id", (req, res) => {
  const index = hotel.find((e) => e.id === req.params.id);
  index ? res.status(200).json(index) : res.status(404).send("NOT FOUND");
});
route.post("/", validatee, (req, res) => {
  const id = hotel[hotel.length - 1].id + 1;
  hotel.push({ id, ...req.body });
  //throw error to test error handling
  res.status(200).send("added succefuly");
});
route.put("/:id", validatee, (req, res) => {
  const index = hotel.find((e) => e.id === req.params.id);
  hotel[index] = req.body;
  res.status(200).send("Updated  succefuly");
});
route.delete("/:id", (req, res) => {
  const newhotel = hotel.filter((e) => e.id != req.params.id);
  hotel = newrestaurant;
  res.status(200).send("deleted   succefuly");
});

module.exports = route;