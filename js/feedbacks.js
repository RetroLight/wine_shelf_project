let message = document.querySelectorAll('.feedback-message, .feedback-message_active')
let numOfMessage = document.getElementsByClassName('feedback-num_item')
for(let i = 0; i < numOfMessage.length; i++) {
	numOfMessage[i].onclick = showFeedback;
}

function showFeedback(eventObj) {
	let feedBackIndex = undefined;
	console.log(eventObj)
	for(let i = 0; i < eventObj.path[1].children.length; i++) {
		eventObj.path[1].children[i].className = eventObj.path[1].children[i].className.replace('_active', '')
	}

	eventObj.target.className = eventObj.target.className + '_active'
	feedBackIndex = parseInt(eventObj.target.innerHTML) - 1
	console.log(feedBackIndex)
	
	for(let i = 0; i < message.length; i++) {
		message[i].className = message[i].className.replace('_active', '')
		console.log(message)
	}
	message[feedBackIndex].className = message[feedBackIndex].className + '_active'

}