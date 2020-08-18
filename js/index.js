// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span') //.innerHTML = list;
  const quantity = product.querySelector('.quantity input').value;
  const netPrice = price.innerText;
  console.log(quantity);
  const subTotal =netPrice * quantity;
  product.querySelector('subtotal span').innerText = subTotal;
  return subTotal;
  
  //... your code goes here
}

let unitPrice = +product.querySelector(".price span")innerText
let quantity = +product.querySelector("quantity input").value
let subtotal = product.querySelector("subtotal span")

function calculateAll() {

  const singleProduct = document.querySelector(".product")
  updateSubtotal(singleProduct)

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
const allProdukt = document.querySelectorAll(".product")
let total = 0
for (let i = 0; i < allProduct.length; i++) {
  const element = allProduct[i]
  total += updateSubtotal(element)
}
  

  //... your code goes here

  // ITERATION 3
  let totalVal = document.querySelector("#total-value span")
  totalVal.innerText = total
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
