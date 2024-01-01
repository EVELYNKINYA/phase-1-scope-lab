// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'John';

// Function to try to change the least favorite customer
function changeLeastFavoriteCustomer(newCustomer) {
  leastFavoriteCustomer = newCustomer; 
}

