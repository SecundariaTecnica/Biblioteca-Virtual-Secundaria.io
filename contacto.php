<?php
$servername = "localhost";
$username = USERNAME1";
$password = "CONTRASEÑA";
$dbname = "biblioteca";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$stmt = $conn->prepare("INSERT INTO contactos (nombre, email, asunto, mensaje) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $nombre, $email, $asunto, $mensaje);

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

if ($stmt->execute()) {
    echo "Mensaje enviado exitosamente.";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
