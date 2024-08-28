
// payment method
document.getElementById('purchaseForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
 
    // Get form values
    const courseElement = document.getElementById('course');
    const course = courseElement.value;
    const coursePrice = courseElement.options[courseElement.selectedIndex].getAttribute('data-price');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const paymentMethod = document.getElementById('payment-method').value;
 
    // Basic validation
    if (!name || !email) {
        alert('Please fill in all required fields.');
        return;
    }
 
    if (paymentMethod === 'upi') {
        initiateUPITransaction(course, coursePrice, name, email);
    } else {
        // Simulate other payment methods
        processPayment(course, name, email, paymentMethod);
    }
 });
 
 function initiateUPITransaction(course, amount, name, email) {
    // UPI payment gateway URL and parameters (for demonstration purposes)
    const upiGatewayUrl = 'https://your-upi-gateway.com/pay'; // Replace with actual UPI gateway URL
    const upiId = 'yourupi@bank'; // Replace with actual UPI ID
 
    // Redirect to UPI payment gateway with query parameters
    const paymentUrl = `${upiGatewayUrl}?pa=${upiId}&pn=${name}&mc=1234&tid=000000000000&tr=1234567890&tn=Payment+for+${course}&am=${amount}&cu=INR&url=https://yourwebsite.com/confirmation`;
 
    window.location.href = paymentUrl;
 }
 
 function processPayment(course, name, email, paymentMethod) {
    // Simulate a payment process
    setTimeout(function() {
        // Hide the form and show confirmation message
        document.getElementById('purchaseForm').classList.add('hidden');
        document.getElementById('confirmation').classList.remove('hidden');
 
        // Log the purchase details (in a real application, send this data to a server)
        console.log(`Course: ${course}`);
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Payment Method: ${paymentMethod}`);
    }, 1000);
 }
 