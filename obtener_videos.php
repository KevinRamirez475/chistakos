<?php
include 'conexion.php';

$resultado = $conexion->query("SELECT * FROM videos ORDER BY fecha DESC");
$videos = [];

while($fila = $resultado->fetch_assoc()) {
  $videos[] = $fila;
}

echo json_encode($videos);
?>
