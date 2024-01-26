  
// Default Theme
let chathams_blue = "#1A4B84";

// Set the Theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);

function validatePhoneNumber() {
  var phoneInput = document.getElementById("phoneInput");
  var phoneNumber = phoneInput.value.trim();
  // Check if the phone number is empty or doesn't match the pattern
  if (phoneNumber === '' || !/^[0-9]{3}[0-9]{3}[0-9]{4}$/.test(phoneNumber)) {
    alert("Please enter a valid phone number.");
  } else {
    alert("Phone number is valid: " + phoneNumber);
  }
}   
