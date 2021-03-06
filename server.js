const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require('cors');
require("dotenv").config();

const app = express();
app.use(cors())
const PORT = process.env.PORT || 3000;

const workshops = require("./routes/workshops");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/workshops", workshops);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/dist/markplace-app"));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname + "/dist/markplace-app/index.html"));
  });
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
