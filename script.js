// Script para manejar el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        alert(`Gracias, ${nombre}. Hemos recibido tu mensaje.`);
        this.reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Script para manejar el login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        alert('Inicio de sesión exitoso.');
        this.reset();
        
        // Redirigir a la vista interna "post_login.html" después del login exitoso
        window.location.href = 'post_login.html';  // Aquí apuntamos a la página interna
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});