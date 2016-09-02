<?php
header("Access-Control-Allow-Origin: * ");	
header("Content-Type: Application/json; charset= UTF-8");
$conn = new mysqli("localhost", "textkhmernews", "Excellent0", "khmernews");

$limit =$_GET['limit'];
$start =$_GET['start'];
$before = $_GET['before'];
$id = $_GET['id'];
$arr = array();

if(isset($_GET['limit']) && isset($_GET['start'])){

       $st="select * from subnews order by SubID desc limit $limit offset $start";
}elseif(isset($_GET['before'])){
       $st="select * from subnews where SubID > $before";  
}elseif(isset($_GET['id'])){
      $st="select * from subnews where SubID = $id";
}


$qr=$conn->query($st);
while($row=$qr->fetch_assoc()){
  $arr[]=$row;     
}

echo json_encode($arr);


?>