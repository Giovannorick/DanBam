document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const genderInputs = document.getElementsByName("gender");
  const branchSelect = document.getElementById("branch");
  const messageTextarea = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      window.location.href = "index.html";
    }
  });

  function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === "") {
      showError("nameError", "Name is required");
      isValid = false;
    } else {
      clearError("nameError");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      showError("emailError", "Invalid email address");
      isValid = false;
    } else {
      clearError("emailError");
    }

    let genderSelected = false;
    for (let i = 0; i < genderInputs.length; i++) {
      if (genderInputs[i].checked) {
        genderSelected = true;
        break;
      }
    }
    if (!genderSelected) {
      showError("genderError", "Please select a gender");
      isValid = false;
    } else {
      clearError("genderError");
    }

    if (branchSelect.value === "") {
      showError("branchError", "Please select a branch");
      isValid = false;
    } else {
      clearError("branchError");
    }

    if (messageTextarea.value.trim() === "") {
      showError("messageError", "Message is required");
      isValid = false;
    } else {
      clearError("messageError");
    }

    return isValid;
  }

  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
  }

  function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = "";
  }
});