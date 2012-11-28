/*

Son of Suckerfish CSS based dropdown menus, 
For more information see:
http: //www.htmldog.com/articles/suckerfish/dropdowns/

Adds the sfhover class to elements in IE 5.5/IE 6 and other browsers
that do not support the CSS :hover pseudoclass.

See navigation.css for the code that actually controls the
hover state of the menus.

*/

sfHover = function() {
    if (!document.getElementById("mainNav")) return false;
	var sfEls = document.getElementById("mainNav").getElementsByTagName("LI");
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=" sfhover";
		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
		}
	}
    if (!document.getElementById("leftColumn")) return false;
	var sfEls = document.getElementById("leftColumn").getElementsByTagName("LI");
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=" sfhover";
		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
		}
	}
}
if (window.attachEvent) window.attachEvent("onload", sfHover);