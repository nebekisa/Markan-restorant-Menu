// Show/hide delivery details based on delivery option
const deliveryOption = document.getElementById('delivery-option');
const deliveryDetails = document.getElementById('delivery-details');

deliveryOption.addEventListener('change', function () {
    if (this.value === 'delivery') {
        deliveryDetails.style.display = 'block';
    } else {
        deliveryDetails.style.display = 'none';
    }
});

// Show/hide account number field based on payment method
const paymentMethod = document.getElementById('payment-method');
const accountNumberGroup = document.getElementById('account-number-group');

paymentMethod.addEventListener('change', function () {
    if (this.value === 'cbe' || this.value === 'abyssinia') {
        accountNumberGroup.style.display = 'block';
    } else {
        accountNumberGroup.style.display = 'none';
    }
});

// Handle form submission
const orderForm = document.getElementById('order-form');
const outputSection = document.getElementById('output-section');
const outputDormNumber = document.getElementById('output-dorm-number');
const outputAccountNumber = document.getElementById('output-account-number');
const outputEmail = document.getElementById('output-email');

orderForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Check if all required fields are filled
    if (!orderForm.checkValidity()) {
        e.stopPropagation(); // Stop form submission
        orderForm.classList.add('was-validated'); // Show validation errors
        return;
    }

    // Get form values
    const dormNumber = document.getElementById('dorm-number').value;
    const accountNumber = document.getElementById('account-number').value;
    const email = document.getElementById('email').value;

    // Display output
    outputDormNumber.textContent = dormNumber ;
    outputAccountNumber.textContent = accountNumber;
    outputEmail.textContent = email+ "\nSuceesfull";
    outputSection.style.display = 'block';

    // Reset the form
    orderForm.reset();
    orderForm.classList.remove('was-validated');
    deliveryDetails.style.display = 'none';
    accountNumberGroup.style.display = 'none';
});