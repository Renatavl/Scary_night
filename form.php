<?php
$name = $_POST['firstname'];
$tel = $_POST['lastname'];
$tele = $_POST['subject'];
$to = "markiankostur@icloud.com";
$from = "bella.biz.ua@gmail.com";
$subject = "Nazva";
$message = "Ім'я: $name \n Номер телефону: $tel \n Коментар: $tele";
$headers = "From: $from \r\n";
mail ($to,$subject,$message,$headers . "Content-type:text/plain; charset = utf-8") or print "Не можу відправити лист !!!";
echo "<h1>Дякуюмо! Наш менеджер скоро вам зателефонує.</h1>";

?>