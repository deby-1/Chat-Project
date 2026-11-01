const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Classroom CI/CD Demo" });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

if (require.main === module) {
  app.listen(3000, "0.0.0.0", () => {
    console.log("Server listening on port 3000");
  });
}

module.exports = app;
