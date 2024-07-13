document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const infoBox = document.querySelector('.info-box');
    const infoTitle = document.querySelector('.info-title');
    const infoDescription = document.querySelector('.info-description');
    const infoImage = document.querySelector('.info-image');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const closeButton = document.querySelector('.info-box .close');
    const cartIcon = document.getElementById('cart-icon');
    const cartContentBox = document.getElementById('cart-content');
    const cartContent = cartContentBox.querySelector('.cart-items');
    const cartCountElement = document.querySelector('.cart-count');
    const cartCloseButton = cartContentBox.querySelector('.close');

    // Function to update cart count
    function updateCartCount() {
        const items = cartContent.querySelectorAll('li');
        let totalCount = 0;
        items.forEach(item => {
            totalCount += parseInt(item.getAttribute('data-quantity'));
        });
        cartCountElement.textContent = totalCount;
    }

    // Function to find an item in the cart by name
    function findCartItemByName(name) {
        const items = cartContent.querySelectorAll('li');
        for (let item of items) {
            if (item.dataset.name === name) {
                return item;
            }
        }
        return null;
    }

    // Event listener for menu items
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const name = item.getAttribute('data-name');
            const description = item.getAttribute('data-description');
            const price = item.getAttribute('data-price');
            const imagePath = item.querySelector('img').src;

            infoTitle.textContent = name;
            infoDescription.textContent = description;
            infoImage.src = imagePath;
            infoBox.style.display = 'block';
        });
    });

    // Event listener for add to cart buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const name = infoTitle.textContent.trim();
            const price = infoDescription.textContent.split(' ')[0].trim();

            let cartItem = findCartItemByName(name);

            if (cartItem) {
                let quantity = parseInt(cartItem.getAttribute('data-quantity')) || 0;
                quantity++;
                cartItem.setAttribute('data-quantity', quantity);
                cartItem.textContent = `${name} - ${price} x ${quantity}`;
            } else {
                cartItem = document.createElement('li');
                cartItem.textContent = `${name} - ${price} x 1`;
                cartItem.setAttribute('data-name', name);
                cartItem.setAttribute('data-quantity', 1);
                cartContent.appendChild(cartItem);
            }

            infoBox.style.display = 'none';
            cartContentBox.style.display = 'block'; // Ensure cart is visible after adding item
            updateCartCount();
        });
    });

    // Event listener for close button of item info box
    closeButton.addEventListener('click', function() {
        infoBox.style.display = 'none';
    });

    // Event listener for cart icon toggle
    cartIcon.addEventListener('click', function() {
        toggleCartContent();
    });

    // Event listener for cart close button
    cartCloseButton.addEventListener('click', function() {
        toggleCartContent();
    });

    // Function to toggle cart content box visibility
    function toggleCartContent() {
        cartContentBox.style.display = cartContentBox.style.display === 'block' ? 'none' : 'block';
    }

//const checkoutButton = document.querySelector('.checkout-button');
//checkoutButton.addEventListener('click', function() {
  
   // cartContent.innerHTML = '';


  //  updateCartCount();

 //   const successMessage = document.createElement('div');
 //   successMessage.textContent = 'Purchased successfully!';
 //   successMessage.classList.add('success-message'); 


 //   cartContentBox.appendChild(successMessage);

  
 //   const purchasedImage = document.createElement('img');
 //   purchasedImage.src = '../../images/mocha.png';
 //   purchasedImage.alt = 'Purchased Image';
  //  purchasedImage.classList.add('purchased-image'); 

 //   cartContentBox.appendChild(purchasedImage);

 
 //   setTimeout(function() {
 //       successMessage.remove();
 //       purchasedImage.remove(); 
 //   }, 3000);
});
//});
