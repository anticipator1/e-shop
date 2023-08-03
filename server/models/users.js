const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	phoneNumber: Number,
	role: {
		type: String,
		enum: ["customer", "admin", "vendor"],
		default: "customer",
	},
});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
