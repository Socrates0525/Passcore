document.getElementById("password").addEventListener("input", function() {
    let password = this.value;
    let strengthText = document.getElementById("strength-text");

    if (password.length < 8) {
        strengthText.textContent = "Débil";
        strengthText.style.color = "red";
    } else if (password.length < 12) {
        strengthText.textContent = "Media";
        strengthText.style.color = "orange";
    } else {
        strengthText.textContent = "Fuerte";
        strengthText.style.color = "green";
    }
});

document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let messageDiv = document.getElementById("message");

    // Simulación de éxito o error
    if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
        messageDiv.innerHTML = `
            <div class="alert alert-success">
                <i class="fas fa-check-circle"></i> Contraseña cambiada con éxito.
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="alert alert-danger">
                <i class="fas fa-exclamation-circle"></i> Error: La contraseña no cumple con los requisitos.
            </div>
        `;
    }
});
