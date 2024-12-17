document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.querySelector(".booking-form");

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const eventType = document.getElementById("event-type").value;
        const eventDate = document.getElementById("date").value;
        const details = document.getElementById("details").value.trim();

     
        if (!name || !email || !phone || !eventType || !eventDate || !details) {
            alert("Please fill out all the fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validatePhone(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        alert(`Thank you, ${name}! Your booking request has been submitted successfully.`);
        bookingForm.reset();
    });

   
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    }
});
