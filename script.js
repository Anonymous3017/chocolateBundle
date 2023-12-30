
  const addButtonListeners = () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const selectedChocolates = document.querySelector('.selected-chocolates');
    const totalPriceElement = document.getElementById('total-price');
    const errorMessage = document.querySelector('.error-message');

   

    let totalItems = 0;
    let totalPrice = 0;
    const maxItems = 8;

    let map = {};

    addToCartButtons.forEach(button => {

      button.addEventListener('click', () => {
        if (totalItems < maxItems) {
          const card = button.closest('.card');
          const productName = card.querySelector('.product-name').textContent;
          const productCost = parseFloat(card.querySelector('.product-cost').textContent.slice(1));
          const listItems = selectedChocolates.getElementsByTagName('li');

          const select = card.children[1].children[1].children[1]

         if(parseInt(select.value)+totalItems>maxItems){
          errorMessage.textContent = 'Maximum items reached (8)';
          return ;
        }
         
         

          let productValue = productCost*parseFloat(select.value); 



          totalItems+=parseInt(select.value);
          totalPrice += productValue

          if(map[productName]===undefined){
            map[productName] = {productValue,quantity:parseInt(select.value)};
            const listItem = document.createElement('li');
            listItem.className = productName
            listItem.textContent = `${productName} - $${productValue.toFixed(2)} Qty ${select.value}`;
            selectedChocolates.appendChild(listItem);

          }
          else{
              map[productName].productValue+= productValue;
              map[productName].quantity+=parseInt(select.value);
            for (let i = 0; i < listItems.length; i++) {
              const listItem = listItems[i];
              if(listItem.className === productName){
                listItem.textContent = `${productName} - $${map[productName].productValue.toFixed(2)} Qty ${map[productName].quantity}`;
                console.log(listItem.textContent);

              }
            }
          }
          
          
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
      



  console.log('script.js loaded');