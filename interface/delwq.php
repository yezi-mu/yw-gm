<?php
require('./model/_connect.php');
$id = $_REQUEST['id'];
$master = $_REQUEST['master'];
//根据id删除数据
$sql = "DELETE FROM `cart` WHERE `serial`='$id' AND `master`='$master'";
$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}

?>