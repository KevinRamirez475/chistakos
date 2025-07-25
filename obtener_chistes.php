<?php
include 'conexion.php';

$resultado = $conexion->query("SELECT * FROM chistes ORDER BY fecha DESC");
$chistes = [];

while($fila = $resultado->fetch_assoc()) {
  $chistes[] = $fila;
}

echo json_encode($chistes);
?>
