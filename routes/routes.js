const express = require("express");
const router = express.Router();
const Expense = require("../models/expense")



router.post("/app/expenses", async (req, res) => {
    try {
      const { userId, limit, year, month, day, amount } = req.body;
  
      // Check if the userId and limit are provided
      if (!userId || !limit) {
        return res.status(400).json({ message: "userId and limit are required" });
      }
  
      let expense = await Expense.findOne({ userId, year, month, day });
  
      if (expense) {
        expense.amount += amount;
      } else {
        expense = new Expense({ userId, limit, year, month, day, amount });
      }
  
      await expense.save();
      res.status(200).json({ message: "Expense saved successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Error saving expense", error });
    }
  });
  



module.exports = router



