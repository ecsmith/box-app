// Listens for the app launching then creates the window
chrome.app.runtime.onLaunched.addListener(function() {
	var width = 640;
	var height = 750;

chrome.app.window.create('index.html', {
	id: 'box',
	bounds: {
		width: width,
		height: height
	}
});
});
