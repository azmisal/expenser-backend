const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("Connected to Database"))
  .catch((err) => {
    console.error("Database connection failed:", err.message);
    process.exit(1); // Exit the app if the database connection fails
  });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.use(express.json());
app.use(cors());
app.use("/app", routesUrls);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
