const express = require("express");
const app = express();

app.get("/", function (req, res) {
  let value1 = req.query.value1;
  let value2 = req.query.value2;
  let mult = value1 * value2;
  res.send(`The multiply of ${value1} and ${value2} equals ${mult}`);
});

app.get("/chocolate", function (req, res) {
  let amount = req.query.amount;
  res.send(`Here is your yummy ${amount} chocolate(s) :) `);
});

app.get("/node", function (req, res) {
  res.send("Yay Node ;)");
});

app.get("/codeyourfuture", function (req, res) {
  res.send("Welcome to the best bootcamp in the UK :)");
});

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
