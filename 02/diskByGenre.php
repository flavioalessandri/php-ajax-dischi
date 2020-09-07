<?php

header("Content-Type:application/json");

include "data.php";

$genre = $_GET["genre"];

$disks = $data["response"];

$array =[];



  foreach ($disks as $disk) {


   if ($disk["genre"] == $genre) {

     array_push($array,$disk) ;

  }

};

echo json_encode($array);

 ?>
