document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

        // Validar campos antes de enviar
        if (validateInputs()) {
            // Simular envío de formulario (puedes reemplazar con una llamada real a tu backend)
            alert("Mensaje enviado correctamente");
            contactForm.reset(); // Limpiar campos después del envío
        }
    });

    function validateInputs() {
        let isValid = true;

        if (nameInput.value.trim() === "") {
            isValid = false;
            alert("Por favor ingresa tu nombre");
        }

        if (!isValidEmail(emailInput.value)) {
            isValid = false;
            alert("Por favor ingresa un email válido");
        }

        if (messageInput.value.trim() === "") {
            isValid = false;
            alert("Por favor ingresa un mensaje");
        }

        return isValid;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
