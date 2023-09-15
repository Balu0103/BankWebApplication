const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");


  
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Simulate form submission and show success message
    // Replace this code with your actual form submission logic
    setTimeout(function() {
      showSuccessMessage();
    }, 1500);
  });
  
  // Show success message
  function showSuccessMessage() {
    Swal.fire({
      icon: 'success',
      title: 'Registration Successful',
      text: 'Thank you for registering!',
      confirmButtonText: 'OK'
    }).then(function() {
      // Redirect to another page or perform other actions after the user clicks "OK"
      // Replace window.location.href with your desired URL or code
      window.location.href = 'index.html';
    });
  }