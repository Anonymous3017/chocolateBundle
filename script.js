
  const addButtonListeners = () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const selectedChocolates = document.querySelector('.selected-chocolates');
    const totalPriceElement = document.getElementById('total-price');
    const errorMessage = document.querySelector('.error-message');

    let totalItems = 0;
    let totalPrice = 0;
    const maxItems = 8;

    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (totalItems < maxItems) {
          const card = button.closest('.card');
          const productName = card.querySelector('.product-name').textContent;
          const productCost = parseFloat(card.querySelector('.product-cost').textContent.slice(1));

          totalItems++;
          totalPrice += productCost;

          const listItem = document.createElement('li');
          listItem.textContent = `${productName} - $${productCost.toFixed(2)}`;
          selectedChocolates.appendChild(listItem);

          totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
          errorMessage.textContent = '';

        } else {
          errorMessage.textContent = 'Maximum items reached (8)';
        }
      });
    });

      const modal = document.getElementById('myModal');
      const closeButton = document.querySelector('.close');
    
      addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
          if (totalItems < maxItems) {
            // ... (existing code for adding items)
          } else {
            errorMessage.textContent = 'Maximum items reached (8)';
            modal.style.display = 'block'; // Display the modal
          }
        });
      });
      
    
      closeButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Hide the modal
      });
    };
      
      addButtonListeners();
      