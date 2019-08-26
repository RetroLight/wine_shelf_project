$(document).ready(function(){
	$('.diagnostic_button').on('click', myAJAX);
	$('.callback-form_button').on('click', myAJAX2);
})

function myAJAX(event) {
	event.preventDefault()
	$.get(
			'./backEnd/back.php',
			{
				'name': $('#name').val(),
				'number': $('#number').val(),
				'message': $('#message').val()
			},
			function(data) {
				console.log(data)
			}
		)	
}

function myAJAX2(event) {
	event.preventDefault()	
	$.get(
			'./backEnd/bottom_form.php',
			{
				'bname': $('#bname').val(),
				'bnumber': $('#bnumber').val(),
				'bmanufacturer': $('#bmanufacturer').val(),
				'bproblem': $('#bproblem').val()
			},	
			function(data) {
				console.log(data)
			}
		)	
}