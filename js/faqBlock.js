const questBlocks = document.getElementsByClassName('faq-block_question')
for(let i = 0; i < questBlocks.length; i++){
	questBlocks[i].onclick = questClick
}
function questClick (eventObj) {
	if (eventObj.target.children.length > 0) {
		if (!eventObj.target.children[0].className.includes('_active')) {
			for (let i = 0; i < eventObj.target.children.length; i++) {
				eventObj.target.children[i].className = eventObj.target.children[i].className + '_active'
			}			
		} else {
			for (let i = 0; i < eventObj.target.children.length; i++) {
				eventObj.target.children[i].className = eventObj.target.children[i].className.replace('_active', '')			
			}
		}
	} else {
		if (!eventObj.path[1].children[0].className.includes('_active')) {
			for (let i = 0; i < eventObj.path[1].children.length; i++) {
				eventObj.path[1].children[i].className = eventObj.path[1].children[i].className + '_active'
			}
		} else {
			for (let i = 0; i < eventObj.path[1].children.length; i++) {
				eventObj.path[1].children[i].className = eventObj.path[1].children[i].className.replace('_active', '')		
			}
		}
	}		
}