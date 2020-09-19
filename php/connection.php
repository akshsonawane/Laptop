<?php
/*header("Access-Control-Allow-Origin:*");
header("Content-Type: application/json;charset=UTF-8");
header("Access-Control-Allow-Origin:PUT,GET,POST");
header("Access-Control-Allow-Origin: Origin,X-Requested-With,Content-Type,Accept");*/

define('DB_HOST',"localhost:3306");
define('DB_USER',"root");
define('DB_PASS',"");
define('DB_NAME',"lapreg");

$con= mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);
?>
