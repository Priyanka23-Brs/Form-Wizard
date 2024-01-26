  

// Date and time picker
let dateToday = new Date();    

$(function () {
  $('#date_picker').dtpicker({minDate: dateToday 
  })
})

//Phone Number
                    
function validatePhoneNumber(input) {
  var phoneNumberInput = input.replace(/\D/g, ''); // Remove non-digit characters
  document.getElementById('phoneNumber').value = phoneNumberInput;

  var errorElement = document.getElementById('error');
  if (/[^0-9]/.test(input)) {
    errorElement.textContent = 'Error: Only digits are allowed in the phone number.';
  } else if (input.length < 10) {
    errorElement.textContent = 'Error: Phone number must contain at least 10 digits.';
  } else if (input.length > 10) {
    errorElement.textContent = 'Error: Phone number must contain exactly 10 digits.';
  } else {
    errorElement.textContent = '';
    document.getElementById('tick').style.display = 'inline';
  }
}
