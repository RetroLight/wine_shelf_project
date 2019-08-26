<?php
	$bname = $_GET['bname'];
	$bnumber = $_GET['bnumber'];
	$bmanufacturer = $_GET['bmanufacturer'];
	$bproblem = $_GET['bproblem'];
	if(!$bname || !$bnumber || !$bmanufacturer || !$bproblem) {
		echo 'Заполните все поля';
	} else {
		echo 'Данные с нижней формы получены и обработаны.';
	}
?>