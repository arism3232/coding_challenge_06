// Task1- Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
}; // Calculating total profit.
// Test Data
calculateProfit(20, 30, 100);
calculateProfit(50, 70, 200);

// Task2- Function Expression
const calculateSalesTax = function(amount, taxRate) {
    let tax = amount * taxRate;
    console.log(`Sales Tax: $${tax}`);
}; // Calculating sales tax.
// Test Data
calculateSalesTax(100, 0.07);
calculateSalesTax(500, 0.1);

// Task3- Arrow Function
const calculateBonus = (salary, performanceRating) => {
    let bonusRate = 0;
    if (performanceRating === "Excellent") bonusRate = 0.2; // 20% of salary
    else if (performanceRating === "Good") bonusRate = 0.1; // 10% of salary
    else if (performanceRating === "Average") bonusRate = 0.05; // 5% of salary
    let bonus = salary * bonusRate;
    console.log(`Bonus: $${bonus}`);
}; // Determining a bonus.
// Test Data
calculateBonus(5000, "Excellent");
calculateBonus(7000, "Good");
