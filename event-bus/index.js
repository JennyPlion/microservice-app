const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:3004/events", event);
  axios.post("http://localhost:3002/events", event);
  axios.post("http://localhost:3001/events", event);

  res.send({ status: "OKE" });
});

app.listen(3004, () => {
  console.log("Listening on port 3004");
});
