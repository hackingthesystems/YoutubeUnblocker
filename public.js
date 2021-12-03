var jqueryLoader = document.createElement('SCRIPT');
jqueryLoader.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
jqueryLoader.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(jqueryLoader);

function resizeIframe(iframe) {
    iframe.width  = 875
    iframe.height = 475
};


const stripreg = /\?t=\d+/;

var ogLink = window.location.href;
var id = ogLink.replace(stripreg, "")
id = id.substr(id.length - 11, 11);

var newParams = "?wmode=transparent&amp;iv_load_policy=3&amp;autoplay=0&amp;html5=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=0&amp;theme=dark";
var baseLink = "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ";
var newLink = baseLink.replace("dQw4w9WgXcQ", id) + newParams;

console.log(newLink);

$("#player-wrap").remove();

var iframe = document.createElement('IFRAME');
iframe.src = newLink;
iframe.title = "video";
iframe.clientWidth;
$("#player").append(iframe);
resizeIframe(iframe)
