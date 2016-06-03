function plusReady() {}
if (window.plus) {
	plusReady();
} else {
	document.addEventListener("plusready", plusReady, false);
}

function openWebView() {
	plus.webview.open("main/pageBrand.html");
}