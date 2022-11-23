function shownavigasi() {
	document.querySelector(".navigasi").style.top = "0px";
	document.querySelector(".search-bar").style.width = "28px";
	document.querySelector(".icon-cancel").style.rotate = "0rad";
}

function hidenavigasi() {
	document.querySelector(".navigasi").style.top = "-100%";
	document.querySelector(".search-bar").style.minwidth = "28px";
	document.querySelector(".icon-cancel").style.rotate = "0.7801rad";
}

function showSearchBar() {
	document.querySelector(".search-input").style.width = "100%";
	document.querySelector(".search-bar").style.width = "100%";
	document.querySelector(".search-bar").style.margin = "0";
	document.querySelector(".close-search").style.display = "flex";
	document.querySelector(".search-input").style.display = "flex";
}

function closeSearchBar() {
	document.querySelector(".search-bar").style.width = "28px";
}
