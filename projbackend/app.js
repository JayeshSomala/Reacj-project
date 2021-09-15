require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
const cors = require("cors");

//My Routes
const authRouts = require("./routes/auth");
const userRouts = require("./routes/user");
const categoryRouts = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");

//db connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  });


// middleware
app.use(bodyparser.json());
app.use(cookieparser());
app.use(cors());

//my routes
app.use("/api", authRouts);
app.use("/api", userRouts);
app.use("/api", categoryRouts);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);


//port
const port = process.env.PORT || 8000;


//starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
