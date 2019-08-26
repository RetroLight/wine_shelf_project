<?php 
	$name = $_GET['name'];
	$number = $_GET['number'];
	$message = $_GET['message'];
	if(!$name || !$number || !$message) {
		echo 'Заполните все поля';
	} else {
		echo 'Данные верхней формы получены и обработаны. Это ответ от сервера';
	}
?>