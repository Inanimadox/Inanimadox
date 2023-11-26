document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aquí debes implementar la lógica de autenticación, por ejemplo, enviar datos a un servidor para verificar el usuario y contraseña.

        // Ejemplo de mensaje en la consola
        console.log(`Iniciar Sesión - Usuario: ${username}, Contraseña: ${password}`);
    });

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        // Aquí debes implementar la lógica de registro, por ejemplo, enviar datos a un servidor para crear una nueva cuenta.

        // Ejemplo de mensaje en la consola
        console.log(`Registrarse - Nuevo Usuario: ${newUsername}, Nueva Contraseña: ${newPassword}`);
    });
});
