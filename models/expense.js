const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  userId: { type: Number, required: true, unique:true },
  limit :{type: Number, required: true},
  year: { type: Number, required: true },
  month: { type: Number, required: true }, // 1 for January, 12 for December
  day: { type: Number, required: true }, // Day of the month (1-31)
  amount: { type: Number, required: true }, // Expense amount for the specific day
});

module.exports = mongoose.model("Expense", expenseSchema);
