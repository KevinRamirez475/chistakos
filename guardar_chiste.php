<?php
include 'conexion.php';

$titulo = $_POST['titulo'];
$contenido = $_POST['contenido'];
$categoria = $_POST['categoria'];

$sql = "INSERT INTO chistes (titulo, contenido, categoria) VALUES (?, ?, ?)";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("sss", $titulo, $contenido, $categoria);
$stmt->execute();

echo "Chiste guardado con éxito";
?>
