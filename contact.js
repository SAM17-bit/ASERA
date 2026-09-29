// Get the form
let form = document.getElementById("contactForm");

// Get the message area
let message = document.getElementById("formMessage");

// When the form is submitted
form.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the user's name
    let name = document.getElementById("name").value;

    // Show a success message
    message.innerHTML =
        "Thank you, " + name +
        "! Your form has been submitted.";

    // Clear the form
    form.reset();

});