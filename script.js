function calcDiscount() {
   const price = parseFloat(document.getElementById('price').value);
   let discountPercentage;

   if (isNaN(price) || price <= 0) {
      showAlert('Invalid price. Please enter a positive number.', 'danger');
      return;
   }

   if (price >= 1000) {
      discountPercentage = 0.15;
   } else if (price >= 500) {
      discountPercentage = 0.10;
   } else {
      discountPercentage = 0.05;
   }

   const priceWithDiscount = price * (1 - discountPercentage);

   showAlert(`Original price: $${price.toFixed(2)}<br>Discounted price: $${priceWithDiscount.toFixed(2)}`, 'success');
}

function showAlert(message, type) {
   const alertPlaceholder = document.getElementById('alertPlaceholder');
   const wrapper = document.createElement('div');
   wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
   ].join('');

   alertPlaceholder.innerHTML = '';
   alertPlaceholder.append(wrapper);
}