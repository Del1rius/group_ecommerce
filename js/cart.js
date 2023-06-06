// add cart function

function addToCart(productId) {
  const cartContainer = document.getElementById("cart-container");
  const product = products.find((product) => product.id === productId);

  if (product && product.quantity > 0) {
    cart.push(product);
    product.quantity--;
    updateCart();
  }
}
// increment and decrement function

// Update function

function updateCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  cart.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `<span>${product.name}</span>
        <span>${product.price}</span>
        `;
    cartContainer.appendChild(cartItem);
  });
}

// clear cart

// calculation & local storage
function showCartTable() {
  let cart = "";
  let itemCount = 0;
  let grandTotal = 0;

  let price = 0;
  let quantity = 0;
  let subTotal = 0;

  if (localStorage.getItem("shopping-cart")) {
    let shoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));
    itemCount = shoppingCart.length;

//     //Iterate javascript shopping cart array
//     shoppingCart.forEach(function (item) {
//       let cartItem = JSON.parse(item);
//       price = parseFloat(cartItem.price);
//       quantity = parseInt(cartItem.quantity);
//       subTotal = price * quantity;

//       cart +=
//         "<tr>" +
//         "<td>" ${cartItem.productName} +"</td>" +
//         "<td class='text-right'>$" +price.toFixed(2) +"</td>" +
//         "<td class='text-right'>" +quantity +"</td>" +
//         "<td class='text-right'>$" +subTotal.toFixed(2) +"</td>" +
//         " <td class="
//         "</tr>";

//       grandTotal += subTotal;
//     });
//   }

  $("#cartTableBody").html(cartL);
  $("#itemCount").text(itemCount);
  $("#totalAmount").text("$" + grandTotal.toFixed(2));
}

// Remove item
function removeCartItem(index) {
  if (localStorage.getItem("shopping-cart")) {
    let shoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));
    localStorage.removeItem(shoppingCart[index]);
    showCartTable();
  }
}

// total bill

// clear cart
function emptyCart() {
  if (localStorage.getItem("shopping-cart")) {
    // Clear from local storage
    localStorage.removeItem("shopping-cart");
    showCartTable();
  }
}

// add more products

/*const cart = [];
  
function addToCart(productId) {
  const cartContainer = document.getElementById("cart-container");
  const product = products.find((product) => product.id === productId);

  if (product && product.quantity > 0) {
    cart.push(product);
    product.quantity--;
    updateCart();
  }
}

function updateCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";

    cart.forEach(product => {
        const cartItem = document.createElement("div")
        cartItem.innerHTML = `<span>${product.name}</span>
        <span>${product.price}</span>
        `
        cartContainer.appendChild(cartItem)
    }) 
}*/
