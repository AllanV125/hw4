/*
Name: Allan Vega
Date Created: 02/08/2024
Date Last Modified: 02/08/2024
Version: 1.1
Description: Homework 3 – Updated for matching HTML element IDs and improved validations.
*/


const d = new Date();
document.getElementById("today").innerHTML = d.toDateString();


let slider = document.getElementById("range"); 
let output = document.getElementById("range-slider"); 


slider.oninput = function() {
   output.innerHTML = this.value;
};

function validateFname() {
    const fnameInput = document.getElementById("fname"); 
    const fname = document.getElementById("fname").value.trim();
    const namePattern = /^[A-Za-z'-]{1,2}[0-9]?[A-Za-z'-]{0,27}$/;
    if (!fname.match(namePattern)) {
      document.getElementById("fnameError").innerHTML =
        "First name must be 1-30 characters: letters, apostrophes, and dashes only.";
        fnameInput.style.borderColor = "red";
        return false;
    } else {
      document.getElementById("fnameError").innerHTML = "";
      fnameInput.style.borderColor = "green";
      return true;
    }
  }
  function validateLname() {
    const lnameInput = document.getElementById("lname");
    const lname = document.getElementById("lname").value.trim();
    const basicPattern = /^[A-Za-z'-\d]{1,30}$/;
    if (!basicPattern.test(lname)) {
         document.getElementById("lnameError").innerHTML = "Last name must be 1-30 characters and contain only letters, apostrophes, dashes, and numbers.";
         lnameInput.style.borderColor = "red";
         return false;
    }
    for (let i = 0; i < lname.length; i++) {
       if (/\d/.test(lname[i]) && i === 0) {
         document.getElementById("lnameError").innerHTML = "No numbers allowed in the first character.";
         lnameInput.style.borderColor = "red";
         return false;
       }
       if (/\d/.test(lname[i]) && i > 4) {
         document.getElementById("lnameError").innerHTML = "Digits, if present, must be within positions 2 to 5.";
         lnameInput.style.borderColor = "red";
         return false;
       }
    }
    document.getElementById("lnameError").innerHTML = "";
    lnameInput.style.borderColor = "green";
    return true;
}
function validateMiddleInitial() {
    const miInput = document.getElementById("minital");
   const middleInitial = document.getElementById("minital").value;
   if (!middleInitial) {
       document.getElementById("minitalError").innerHTML = "Middle initial cannot be blank";
       miInput.style.borderColor = "red";
       return false;
   } else if (middleInitial.length > 1) {
       document.getElementById("minitalError").innerHTML = "Middle initial must be a single character";
       miInput.style.borderColor = "red"; 
       return false;
   } else {
       document.getElementById("minitalError").innerHTML = "";
       miInput.style.borderColor = "green";
       return true;
   }
}

function validateDob() {
    const dobInput = document.getElementById("DOB");
    const dob = new Date(dobInput.value);
    const today = new Date();
    const minDate = new Date();
    minDate.setFullYear(today.getFullYear() - 120);
    
    if (dob > today) {
        document.getElementById("DOB-Error").innerHTML = "Date of Birth cannot be in the future.";
        return false;
    } else if (dob < minDate) {
        document.getElementById("DOB-Error").innerHTML = "Date of Birth cannot be more than 120 years ago.";
        return false;
    } else {
        document.getElementById("DOB-Error").innerHTML = "";
        return true;
    }
 }
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;
    if (ssnPattern.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "";
        ssnInput.style.borderColor = "green";
        return true;
    } else {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid SSN";
        ssnInput.style.borderColor = "red";
        return false;
    }
 }
 document.getElementById("ssn").addEventListener("input", function() {
     let digits = this.value.replace(/\D/g, "");
          if (digits.length > 5) {
          digits = digits.substring(0, 3) + "-" + digits.substring(3, 5) + "-" + digits.substring(5, 9);
     } else if (digits.length > 3) {
          digits = digits.substring(0, 3) + "-" + digits.substring(3, 5);
     }
     this.value = digits;
 });
 
function validateZcode() 
{
    const zcodeInput = document.getElementById("zipcode");
   let zcode = document.getElementById("zipcode").value;
   let zip = zcode.replace(/[^0-9]/g, "");
   if (!zip) {
       document.getElementById("zipcodeError").innerHTML = "Zip code cannot be blank";
       zcodeInput.style.borderColor = "red";
       return false;
   }
   if (zcode.length > 5) {
       zcode = zcode.substring(0, 5) + "-" + zcode.slice(5, 9);
   } else {
       zcode = zcode.slice(0, 5);
   }
   document.getElementById("zipcode").value = zcode;
   document.getElementById("zipcodeError").innerHTML = "";
   zcodeInput.style.borderColor = "green";
   return true;
}
function validateEmail() 
{
   const emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   const emailInput = document.getElementById("email");
   let email = emailInput.value;
   if (!email) {
       document.getElementById("email-addressError").innerHTML = "Email cannot be blank";
       emailInput.style.borderColor = "red";
        return false;
   }
   if (!emailR.test(email)) {
       document.getElementById("email-addressError").innerHTML = "Please enter a valid email";
       emailInput.style.borderColor = "red";
        return false;

   } else {
       document.getElementById("email-addressError").innerHTML = "";
       emailInput.style.borderColor = "green";
        return true;
   }
}
function formatPhoneNumber(phone) {
    phone = phone.replace(/[^0-9]/g, "");
    if (phone.length === 10) {
        return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }
    return null;
}
function validatePhone() {
    const phoneInput = document.getElementById("phone-number");
    let phone = phoneInput.value;
    if (!phone) {
        document.getElementById("phone-numberError").innerHTML = "Phone cannot be blank";
        phoneInput.style.borderColor = "red";
        return false;
    }
    phone = phone.replace(/[^0-9]/g, "");
    if (phone.length === 10) {
        phone = phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        document.getElementById("phone-numberError").innerHTML = "";
        phoneInput.style.borderColor = "green";
    } else {
        document.getElementById("phone-numberError").innerHTML = "Please enter a valid phone number";
        phoneInput.style.borderColor = "red";
        return false;
    }
    return true;
 }
 
function validateUid() {
    const uidField = document.getElementById("uid");
    let uid = uidField.value.toLowerCase();
    uidField.value = uid;
    const pattern = /^[a-z][a-z0-9_-]{4,29}$/; 

    if (uid.length === 0) {
      document.getElementById("uid-error").innerHTML = "User ID must be at least 5 characters.";      uidField.style.borderColor = "red";
      return false;
    }
    
    if (!isNaN(uid.charAt(0))) {
      document.getElementById("uid-error").innerHTML = "User ID must start with a letter.";

      uidField.style.borderColor = "red";
      return false;ss
    }
    
    let regex = /^[a-z0-9_-]+$/;
    if (!regex.test(uid)) {
      document.getElementById("uid-error").innerHTML = "User ID must contain only letters, numbers, dashes, or underscores.";
      uidField.style.borderColor = "red";
      return false;
    }
    
    if (uid.length < 5) {
      document.getElementById("uid-error").innerHTML = "User ID must be at least 5 characters.";
      uidField.style.borderColor = "red";
      return false;
    } else if (uid.length > 30) {
      document.getElementById("uid-error").innerHTML = "User ID cannot be more than 30 characters.";
      uidField.style.borderColor = "red";
      return false;
    } else {
      document.getElementById("uid-error").innerHTML = "";
      uidField.style.borderColor = "green";
      return true;
    }
}
function validatePassword() {
    const uid = document.getElementById("uid").value.toLowerCase();
    const passwordInput = document.getElementById("password");
    const pword = document.getElementById("password").value;
    let errors = [];
    let criteria = [];
    
    if (pword.length < 8 || pword.length > 30) {
        errors.push("Password must be 8-30 characters long.");
        criteria.push("✗ Must be 8-30 characters long");
    } else {
        criteria.push("✓ Length OK");
    }
    
    if (!pword.match(/[a-z]/)) {
        errors.push("Must contain at least one lowercase letter.");
        criteria.push("✗ At least one lowercase letter required");
    } else {
        criteria.push("✓ Contains lowercase letter");
    }
    
    if (!pword.match(/[A-Z]/)) {
        errors.push("Must contain at least one uppercase letter.");
        criteria.push("✗ At least one uppercase letter required");
    } else {
        criteria.push("✓ Contains uppercase letter");
    }
    
    if (!pword.match(/[0-9]/)) {
        errors.push("Must contain at least one digit.");
        criteria.push("✗ At least one digit required");
    } else {
        criteria.push("✓ Contains a digit");
    }
    
    if (!pword.match(/[!\@#\$%\^&*\(\)\-_+=\\\/><.,`~]/)) {
        errors.push("Must contain at least one special character.");
        criteria.push("✗ At least one special character required");
    } else {
        criteria.push("✓ Contains special character");
    }
    
    if (uid && pword.includes(uid)) {
        errors.push("Password cannot contain the User ID.");
        criteria.push("✗ Must not include the User ID");
    } else {
        criteria.push("✓ Does not contain User ID");
    }
  let feedbackHTML = "<ul>";
  criteria.forEach(function(item) {
       feedbackHTML += "<li>" + item + "</li>";
  });
  feedbackHTML += "</ul>";
  document.getElementById("passwordCriteria").innerHTML = feedbackHTML;
  
  if (errors.length > 0) {
       document.getElementById("passwordError").innerHTML = errors.join("<br>");
       passwordInput.style.borderColor = "red";
       return false;
  } else {
       document.getElementById("passwordError").innerHTML = "";
       passwordInput.style.borderColor = "green";
       return true;
  }
}
function validatePwordMatch() {
    let pword1 = document.getElementById("password").value;
    let pword2 = document.getElementById("rpword").value;
    if (pword1 !== pword2) {
        document.getElementById("pword-error").innerHTML = "Passwords do not match.";
        return false;
    } else {
        document.getElementById("pword-error").innerHTML = "";
        return true;
    }
}
document.getElementById("password").addEventListener("input", validatePassword);
document.getElementById("rpword").addEventListener("input", validatePassword);
function reviewInput() {
   var formcontent = document.getElementById("signup-form");
   var output = '<h3>Please review your information:</h3><table>';
   for (let i = 0; i < formcontent.elements.length; i++) {
       if (formcontent.elements[i].value !== "Review") {
           switch (formcontent.elements[i].type) {
               case "checkbox":
                   if (formcontent.elements[i].checked) {
                       output += '<tr><td align="right">' + formcontent.elements[i].name + '</td><td>Yes</td></tr>';
                   }
                   break;
               case "radio":
                   if (formcontent.elements[i].checked) {
                       output += '<tr><td align="right">' + formcontent.elements[i].name + '</td><td>' + formcontent.elements[i].value + '</td></tr>';
                   }
                   break;
               default:
                   output += '<tr><td align="right">' + formcontent.elements[i].name + '</td><td>' + formcontent.elements[i].value + '</td></tr>';
           }
       }
   }
   output += '</table>';
   document.getElementById("review-output").innerHTML = output;
}
function Reset() {
   console.log("Reset function triggered");
   alert("Reset function triggered");
   document.getElementById("signup-form").reset();
   validatePhone();
   validateZcode();
   alert("Form has been reset successfully!");
   document.getElementById("fnameError").innerHTML = "";
   document.getElementById("lnameError").innerHTML = "";
   document.getElementById("minitalError").innerHTML = "";
   document.getElementById("DOB-Error").innerHTML = "";
   document.getElementById("ssn-error").innerHTML = "";
   document.getElementById("zipcodeError").innerHTML = "";
   document.getElementById("phone-numberError").innerHTML = "";
   document.getElementById("email-addressError").innerHTML = "";
   document.getElementById("uid-error").innerHTML = "";
   document.getElementById("pword-error").innerHTML = "";
   document.getElementById("review-output").innerHTML = "";
}
function validateEverything() {
    let valid = true;
    
    if (!validateFname()) valid = false;
    if (!validateMiddleInitial()) valid = false;
    if (!validateLname()) valid = false;
    if (!validateDob()) valid = false;
    if (!validateSsn()) valid = false;
    if (!validateAddress1()) valid = false;
    let addr2 = document.getElementById("address2").value.trim();
    if (addr2 !== "" && !validateAddress2()) valid = false;
    if (!validateCity()) valid = false;
    if (!validateState()) valid = false;
    if (!validateZcode()) valid = false;
    if (!validatePhone()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validateUid()) valid = false;
    if (!validatePassword()) valid = false;
    if (!validatePwordMatch()) valid = false;
    if (!validateRadio()) valid = false;
    
    if (valid) {
        document.getElementById("submitBtn").disabled = false;
    } else {
        showAlert();
    }
}

function validateCity() {
    const cityInput = document.getElementById("city");
    const city = cityInput.value.trim();

   city = document.getElementById("city").value.trim();


   if (!city) {
       document.getElementById("city-error").innerHTML = "City can't be blank";
       cityInput.style.borderColor = "red";
       return false;
   } else {
       document.getElementById("city-error").innerHTML = "";
       cityInput.style.borderColor = "green";
       return true;
   }
}
function validateAddress() {
    let valid1 = validateAddress1();
    let address2 = document.getElementById("address2").value.trim();
    let valid2 = (address2 === "" || validateAddress2());
    return valid1 && valid2;
}

function validateAddress1() {
    const address1Input = document.getElementById("address1");
    let address1 = document.getElementById("address1").value.trim();
    if (address1 === "") {
        document.getElementById("address1Error").innerHTML = "Address Line 1 cannot be blank";
        address1Input.style.borderColor = "red";
        return false;
    } else {
        document.getElementById("address1Error").innerHTML = "";
        address1Input.style.borderColor = "green";
        return true;
    }
}

function validateAddress2() {
    const address2Input = document.getElementById("address2");
    let address2 = document.getElementById("address2").value.trim();
    if (address2 !== "" && (address2.length < 2 || address2.length > 30)) {
        document.getElementById("address2-error").innerHTML =
          "Address Line 2 must be 2-30 characters if provided";
          address2Input.style.borderColor = "red";
          return false;
    } else {
        document.getElementById("address2-error").innerHTML = "";
        address2Input.style.borderColor = "green";
        return true;
    }
}
function validateState() {
    const stateSelect = document.getElementById("state");
   let state = document.getElementById("state").value;
   if (!state) {
       document.getElementById("state-error").innerHTML = "State cannot be blank";
       stateSelect.style.borderColor = "red";
       return false;
   } else {
       document.getElementById("state-error").innerHTML = "";
       stateSelect.style.borderColor = "green";
       return true;
   }
}
function validateCheckbox() {
   let checkbox = document.getElementById("checkbox").checked;
   if (!checkbox) {
       document.getElementById("checkbox-error").innerHTML = "You must agree to the terms";
       return false;
   } else {
       document.getElementById("checkbox-error").innerHTML = "";
       return true;
   }
}
function validateRadio() {
    let radios = document.getElementsByName("pgender");
    let checked = false;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            checked = true;
            break;
        }
    }
    if (!checked) {
        document.getElementById("radio-error").innerHTML = "Please select a gender.";
        return false;
    } else {
        document.getElementById("radio-error").innerHTML = "";
        return true;
    }
}


function showAlert() {
   const alertBox = document.getElementById("alert-box");
   alertBox.style.display = "block";
   const closeButton = document.getElementById("close-alert");
   closeButton.addEventListener("click", function() {
       alertBox.style.display = "none";
   });
}