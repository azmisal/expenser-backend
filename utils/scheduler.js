const schedule = require("node-schedule");
const initializeMonthlyExpenses = require("./initializeExpenses");


const scheduleMonthInitialisation = ()=>{
    schedule.scheduleJob("0 0 1 * *", async ()=>{
        console.log("Running monthly expense Initialisation...");
    })
}
