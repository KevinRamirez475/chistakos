<?php
$conexion = new mysqli("localhost", "usuario", "contraseña", "chistakos_db");
if ($conexion->connect_error) {
  die("Error de conexión: " . $conexion->connect_error);
}
?>
