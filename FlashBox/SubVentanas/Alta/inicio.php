

    <!-- CONEXION CON MYSQL -->

<?php
$servername = "localhost";
$username = "root"; 
$password = "";
$database = "Base"; 

// Crear una conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar si hay algún error en la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}


        // CREAR CUENTA //

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $descripcion = $_POST['descripcion'];
    

    echo "Nombre: $nombre<br>";
    echo "Correo electrónico: $email<br>";
    echo "Descripcion: $descripcion<br>";
    }






// Procesar el formulario de creación de cuenta si se envió
if ($_SERVER["REQUEST_METHOD"] == "POST") {


    $id = $_POST['id'];
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $descripcion = $_POST["descripcion"];

    // Insertar los datos en la base de datos
    $sql = "INSERT INTO tabla (id, nombre, email, descripcion) VALUES ('id', '$nombre', '$email', '$descripcion')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Cuenta creada exitosamente";
    } else {
        echo "Error al crear la cuenta: " . $conn->error;
    }
}




// Cerrar la conexión
$conn->close();
?>


