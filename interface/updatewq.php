<?php
require('./model/_connect.php');

$id = $_REQUEST['id'];
$num = $_REQUEST['num'];//商品数量
$master = $_REQUEST['master'];//获取当前购物车的主人
$sql = "UPDATE `cart` SET `num`='$num' WHERE `serial`='$id' AND `master`= '$master' ";

$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}
?>