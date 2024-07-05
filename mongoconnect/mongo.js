const mongoose = require("mongoose");
require("dotenv").config();
const url =process.env.MONGODB_URL;
mongoose
  .connect(url, {
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  })
  .then(() => {
    console.log("connected to atlas");
  })
  .catch((e) => {
    console.log(e);
  });
