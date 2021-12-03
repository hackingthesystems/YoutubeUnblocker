(function() {
	var jqueryLoader = document.createElement('SCRIPT');
	jqueryLoader.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
	jqueryLoader.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(jqueryLoader);
	await jqueryLoader.onload
})


function resizeIframe(iframe) {
	iframe.width = $(document).height();
	iframe.height = $(document).width();
};

if (window.location.hostname === "www.youtube.com") {
	const stripreg = /\?t=\d+/;

	var ogLink = window.location.href;
	var id = ogLink.replace(stripreg, "")
	id = id.substr(id.length - 11, 11);

	var newParams = "?wmode=transparent&amp;iv_load_policy=3&amp;autoplay=0&amp;html5=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=0&amp;theme=dark";
	var baseLink = "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ";
	var newLink = baseLink.replace("dQw4w9WgXcQ", id) + newParams;

	console.log(newLink);

	var iframe = document.createElement('IFRAME');
	iframe.src = newLink;
	iframe.title = "video";
	resizeIframe(iframe)
	$('head').append(iframe)
} else {
	jqueryLoader.remove()
	alert('Please run this on the YOUTUBE.COM website. ')
}
