// Task1- Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
}; // Calculating total profit.
// Test Data
calculateProfit(20, 30, 100); // Total Profit: $1000
calculateProfit(50, 70, 200); // Ttoal Profit: $4000

// Task2- Function Expression
const calculateSalesTax = function(amount, taxRate) {
    let tax = amount * taxRate;
    console.log(`Sales Tax: $${tax}`);
}; // Calculating sales tax.
// Test Data
calculateSalesTax(100, 0.07); // Sales Tax: $7
calculateSalesTax(500, 0.1); // Sales Tax: $50

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
calculateBonus(5000, "Excellent"); // Bonus: $1000
calculateBonus(7000, "Good"); // Bonus: $700

// Task4- Parameters and Arguments
function calculateSubscriptionCost(plan, months, discount = 0) {
    let pricePerMonth = 0;
    switch (plan) {
        case "Basic": pricePerMonth = 10; break;
        case "Premium": pricePerMonth = 20; break;
        case "Enterprise": pricePerMonth = 50; break;
        default: console.log("Invalid plan"); return;
    }
    let totalCost = (pricePerMonth * months) - discount;
    console.log(`Total Cost: $${totalCost}`);
}; // Calculating cost based on plans.
// Test Data
calculateSubscriptionCost("Basic", 6, 10); // Total Cost: $50
calculateSubscriptionCost("Premium", 12, 0); // Total Cost: $240

// Task5- Returning Values
function convertCurrency(amount, exchangeRate) {
    let convertAmount = amount * exchangeRate
    return `Converted Amount: $${convertAmount.toFixed(2)}`;
}; // Writing a function that returns converted amount.
// Test Data
console.log(convertCurrency(100, 1.1)); // Converted Amount: $110.00
console.log(convertCurrency(250, 0.85)); // Converted Amount: $212.50

// Task6- Higher-Order Functions
let orders = [200, 600, 1200, 450, 800];
function applyBulkDiscount(orders, discountFunction) {
    return orders.map(discountFunction);
}; // Writing function that discount. 
let discountFunction = amount => amount > 500 ? amount * 0.9 : amount;
let discountedOrders = applyBulkDiscount(orders, discountFunction);
// Test Data
console.log(discountedOrders); // [200, 540, 1080, 450, 720]

// Task7- Closures
function createExpenseTracker() {
    let totalExpenses = 0;
    return function(expense) {
        totalExpenses += expense;
        return `Total Expenses: $${totalExpenses}`;
    };
}; // Writing function that returns function to add expenses.
// Test Data
let tracker = createExpenseTracker();
console.log(tracker(200)); // Total Expenses: $200
console.log(tracker(150)); // Total Expenses: $350

// Task8- Recursion in JavaScript
function calculateYearsToPromotion(employeeLevel) {
    if (employeeLevel >= 10) {
        return "Years to Level 10: 0";
    }
    else return `Years to Level 10: ${(10 - employeeLevel) * 2}`;
}; // Promotion takes 2 years.
// Test Data
console.log(calculateYearsToPromotion(7)); // Years to Level 10: 6
console.log(calculateYearsToPromotion(5)); // Years to Level 10: 10