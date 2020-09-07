<?php

header("Content-Type:application/json");

include "data.php";

$genre = $_GET["genre"];

$disks = $data["response"];


  foreach ($disks as $disk) {


   if ($disk["genre"] == $genre) {


     $array[] = $disk;

  }

};

echo json_encode($array);

 ?>
