const express = require("express");
const app = express();
const AuthRouter = require("./router/UserAuth");
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/user", AuthRouter);

app.listen(5000, () => {
  console.log("app is running");
});
