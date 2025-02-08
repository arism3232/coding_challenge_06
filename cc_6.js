// Task1- Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
}; // Calculating total profit.
// Test Data
calculateProfit(20, 30, 100);
calculateProfit(50, 70, 200);

