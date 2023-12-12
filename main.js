document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.querySelector('.email-input');
    const submitButton = document.querySelector('#notifyButton');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); 

        const emailValue = emailInput.value;
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue.trim() === '' || !emailFormat.test(emailValue)) {
            emailInput.style.borderColor = 'red';
            showAlert('Please provide a valid email address');
            updatePlaceholder();
        } else {
            emailInput.style.borderColor = '';
            hideAlert();
        }
    });

    emailInput.addEventListener('input', function () {
        emailInput.style.borderColor = '';
        hideAlert();
    });

    function showAlert(message) {
        const alertMessage = document.createElement('div');
        alertMessage.className = 'alert-message';
        alertMessage.style.color = 'hsl(354, 100%, 66%)';
        alertMessage.textContent = message;
    
        const alertContainer = document.querySelector('.alert-container');
        alertContainer.innerHTML = ''; // Efface tout contenu précédent
        alertContainer.appendChild(alertMessage);
    }

    function hideAlert() {
        const alertMessage = document.querySelector('.alert-message');
        if (alertMessage) {
            alertMessage.remove();
        }
    }

    function updatePlaceholder() {
        const emailValue = emailInput.value;
        if (emailValue.trim() === '') {
            emailInput.setAttribute('placeholder', 'example@email.com');
        } else {
            emailInput.setAttribute('placeholder', 'Your email address...');
        }
    }
});
