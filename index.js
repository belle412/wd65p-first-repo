//Declaring inputs

const productName = 'Handmade Rattan Wallet'
const quantity = 20
const amount = 250
const taxRate = 0.12

//Calculate the Subtotal

const subtotal = quantity * amount

//Calculate the Tax amount

const taxAmount = subtotal * taxRate

//Calculate the Total amount

const totalAmount = subtotal + taxAmount

console.log ('Product Name:  ' + productName)
console.log ('Quantity:  ' + quantity)
console.log ('Amount:  ' + amount)
console.log ('Tax Rate: ' + (taxRate * 100) + '%')
console.log ('Subtotal:  ' + subtotal)
console.log ('Tax Amount:  ' + taxAmount)
console.log ('Total Amount:'  + totalAmount)