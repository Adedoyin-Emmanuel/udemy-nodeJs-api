const express = require("express");
const app = express();
const cors = require("cors");
const courseRoutes = require("./routes/courses");
const port = process.env.PORT || 8080;

app.use(courseRoutes);
app.use(cors({ origin: "*" }));


app.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome 🤗",
  });
});

app.listen(port, () => {
  console.log(`App is listening at ${port}`);
});
