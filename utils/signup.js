const Expense = require("../models/expense");
const User = require("../models/user");

const Signup = async (req,res)=>{
    const {username,email, password, monthlyLimit} = req.body;
    try{
        let emailUser = await User.findOne({email});
        if(emailUser){
            return res.status(400).json({message: "Email already exists"});
        }
        let nameUser  = await User.findOne({username});
        if(nameUser) {
            return res.status(400).json({message: "Username already exists"});
        }

        const user = new User({
            username,
            email,
            password,
            monthlyLimit
        });
        await user.save();
        return res.status(200).json({message:"User Signed Up Successfully",
            userId: user.userId,
            username: user.username,
            monthlyLimit: user.monthlyLimit,
        })
    }
    catch(err){
        res.status(500).json({ message: "Error Signing UP User", err });

    }
}

module.exports = {Signup};