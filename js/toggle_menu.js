const navBtn = document.getElementById("adaptive_button")
const topNav = document.getElementById("adaptive_toggle")
const cancelButton = document.getElementById("cancel_button")
navBtn.onclick = function(){
	topNav.setAttribute("class", "adaptive_menu_click")
};
cancelButton.onclick = function() {
	topNav.removeAttribute("class", "adaptive_menu_click")
	topNav.setAttribute("class", "adaptive_menu")
}