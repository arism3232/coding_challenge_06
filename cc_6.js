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
