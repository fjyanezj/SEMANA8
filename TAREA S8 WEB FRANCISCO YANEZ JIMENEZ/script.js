// 1. Botón de Alerta Personalizada
function mostrarAlerta() {
    alert("¡Hola! Gracias por interactuar con mi página web.");
}

// 2. Validación del Formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    const feedback = document.getElementById('formFeedback');

    // Validación básica
    if (nombre.length < 3) {
        feedback.innerHTML = '<div class="alert alert-danger">Por favor, ingresa un nombre válido.</div>';
        return;
    }

    if (!email.includes('@')) {
        feedback.innerHTML = '<div class="alert alert-danger">Correo electrónico no válido.</div>';
        return;
    }

    // Si todo es correcto
    feedback.innerHTML = `<div class="alert alert-success">¡Gracias, ${nombre}! Tu mensaje ha sido enviado con éxito.</div>`;
    
    // Limpiar el formulario
    this.reset();
});