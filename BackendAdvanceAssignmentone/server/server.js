require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// application
const app = express();

// middleware
app.use([morgan("dev"), cors(), express.json()]);
app.use(require("../routes/routes"));

// Error Handle
app.use((_req, _res, next) => {
  const error = new Error("404 not found");
  error.status = 404;
  next(error);
});

app.use((error, _req, res, _next) => {
  console.log("Error", error);

  if (error.status)
    return res.status(error.status).send(`<h1>${error.message}</h1>`);

  res.status(500).send("<h1>Something went wrong</h1>");
});

// app listening
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  console.log(`http://localhost:${port}`);
});
