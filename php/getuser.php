<?php

$servername ="localhost:3306";
$dbname ="lapreg";
$username ="root";
$password="";

$con= new mysqli($servername,$username,$password,$dbname);
$sql="select * from userdata";

result= $con->query($sql);

$outp= array();

$outp= $result ->fetch_all(MYSQLI_ASSOC);

echo $json=json_encode($outp);

mysqli_close($con)















?>
