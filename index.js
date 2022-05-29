const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const usersUrls = require("./routes/users");
const adminUrls = require("./routes/admin");

dotenv.config();

mongoose.connect(process.env.DATABASE_URL, () =>
  console.log("Database connected")
);

app.use(express.json());
app.use(cors());
app.use("/", usersUrls);
app.use("/", adminUrls);

const port = 4000;
app.listen(port, () => console.log(`Server is running on port: ${port}`));
