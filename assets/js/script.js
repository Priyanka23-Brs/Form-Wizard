  
// Default Theme
let chathams_blue = "#1A4B84";

// Set the Theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);

<script>
        function validatePhoneNumber() {
            // Get the phone number input value
            var phoneNumber = document.getElementById('phone').value;

            // Define the regular expression for the desired format
            var regex = /^\+91\s\d{10}$/;

            // Test the phone number against the regular expression
            if (regex.test(phoneNumber)) {
                alert('Phone number is valid!');
            } else {
                alert('Invalid phone number! Please use the format: +91 9999999999');
            }
        }
    </script>
