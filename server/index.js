const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users.js");
const connectDb = require("./db/connection.js");

const app = express();
app.use(express.json());

app.use(userRoutes);

connectDb();
const port = 3005;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
