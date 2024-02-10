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

document.getElementById('signupBtn').addEventListener('click', function() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Dummy signup logic, you should implement real signup logic here
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('emailSignup').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('passwordSignup').value;

    // Process signup data
    console.log('Full Name: ' + fullName);
    console.log('Email: ' + email);
    console.log('Phone Number: ' + phone);
    console.log('Password: ' + password);
});

document.getElementById('googleSignup').addEventListener('click', function() {
    // Implement Google sign up logic
    alert('Signing up with Google...');
});

document.getElementById('facebookSignup').addEventListener('click', function() {
    // Implement Facebook sign up logic
    alert('Signing up with Facebook...');
});

document.getElementById('whyDonateBtn').addEventListener('click', function() {
    // Add functionality for "Why Donate?" button
    alert('Why Donate? Learn more about supporting local businesses.');
});
