<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">

    <!-- FONTS -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">

    


    <title>Music-Cards</title>




  </head>

  <body>

    <?php  include __DIR__ ."/data.php" ?>


    <div class="container">


          <?php

          $dataResponse = $data['response'];

          foreach ($dataResponse as $key => $music) {

            ?>
        <div class="card">
          <h2 class="author"> <?php echo $music["author"]; ?></h2>
          <h3 class = "title"> <?php echo $music["title"]; ?></h3>
          <h3 class = "genre"> <?php echo $music["genre"]; ?></h3>
          <h3 class = "year"> <?php echo $music["year"]; ?></h3>
          <div class="poster_img">
              <img src="<?php echo $music["poster"]; ?>" alt="img">

          </div>
        </div>

              <?php

            };

            ?>




      </div>



  </body>
</html>
