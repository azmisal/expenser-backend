const express = require("express");
const router = express.Router();
const Expense = require("../models/expense");
const User = require("../models/user");
const {fetchTodayBalance} = require("../utils/today");
const { Intialiser } = require("../utils/initializeExpenses");
const { Signup} = require("../utils/signup")

//Signup
router.post("/signup",Signup);


//initialising
router.post("/initialise", Intialiser);


//todays Balance
router.post("/today", fetchTodayBalance)
  
  
module.exports = router



