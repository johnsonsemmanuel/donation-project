document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Dummy authentication, you should implement real authentication logic here
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // For simplicity, consider it always authenticates
    // You can replace this with actual authentication logic using backend or API
    if (email && password) {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('donationContainer').style.display = 'block';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

document.getElementById('donationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var amount = document.getElementById('amount').value;
    // You can add logic to process the donation here, like sending it to a server
    alert('Thank you for your donation of $' + amount);
});

document.getElementById('signupBtn').addEventListener('click', function() {
    // Redirect to the sign-up page or display a sign-up modal
    alert('Redirecting to Sign Up Page...');
});
