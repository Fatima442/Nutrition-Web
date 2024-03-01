// JavaScript for the contact us page

// Example JavaScript code (you can add more as needed)

$(document).ready(function(){
    // Example: Submit contact form
    $('#contactForm').submit(function(e) {
        e.preventDefault(); // Prevent form submission

        // Example: Validate form fields
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        // Example: Submit form via AJAX (you would replace this with your backend logic)
        $.ajax({
            type: "POST",
            url: "submit_contact_form.php",
            data: {
                name: name,
                email: email,
                message: message
            },
            success: function(response) {
                // Example: Show success message
                alert('Message sent successfully!');
            },
            error: function(xhr, status, error) {
                // Example: Show error message
                alert('An error occurred while sending the message.');
            }
        });
    });
});
