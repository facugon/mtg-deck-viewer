// Global (Sitewide) Javascript functions
// Revision 1 (Sprint 2): function signatures - Dave 08:13, 25 October 2007 (PDT)
// NOTE: This is JS pseudocode, and will not run!

// Constants
var Constants = new Object();
Constants.Visibility = new Object();
Constants.Visibility.KEY = 'left';
Constants.Visibility.VISIBLE = 'auto';
Constants.Visibility.HIDDEN = '-999em';

// Window openers
// params: the javascript window parameter string, looks like: "height=X,width=Y,scrollbars=auto,..."
function OpenWin(url, name, params)
{
	return window.open(url, name, params);
}
function OpenWinBasic(url)
{
	return OpenWin(url, "", "");
}
function OpenWinWithURLDimName(url, name, h, w)
{
	var addins = $H({ height: h, width: w });
	var params = addins.toQueryString().sub('&', ',');
	return OpenWin(url, name, params);
}

// Image rollovers
function SwitchImageTo(id, new_img)
{
	// set the image src property
	$(id).src = new_img;
}

// Calls to external services for content generation *
function PlaceAdIntoContent(id, type, category)
{
	alert('This function is not yet implemented.');
}

// Visibility of elements on page
// Note: toggle visible switches the visibility state; this is a convenience function when you always want to switch 
// but don't want to check the state of the element beforehand.
function IsVisible(id)
{
	return !$(id).hasClassName('hidden');
}
function ToggleVisible(id)
{
	if(!IsVisible(id)) { SetVisible(id, true);  }
	else               { SetVisible(id, false); }
}
function SetVisible(id, visible)
{
	var elem = $(id);
	if(visible) { elem.removeClassName('hidden'); }
	else        { elem.addClassName('hidden');  }	
	
}
function CopyContent(id_from, id_to, visible_from, visible_to)
{
	// copy the content
	var content = $(id_from).innerHTML;
	$(id_to).innerHTML = content;
	
	// set visibility
	if(typeof(visible_from) == undefined) { visible_from = true; }
	if(typeof(visible_to) == undefined) { visible_to = true; }
	
	SetVisible(id_from, visible_from);
	SetVisible(id_to, visible_to);
}

// Form submission helpers
// *** This function is currently not working. Try using <asp:Panel>'s DefaultButton property instead.
function AttachEnterKey(textbox_id)
{
	var f = function(event)
	{
		if(event.keyCode == Event.KEY_RETURN)
		{
			Event.stop(event); // don't fire the onsubmit normally anymore!
			
			var elem = $(textbox_id);
			var frm = elem.form;
			if(frm.onsubmit())
			{
				//alert('about to submit!');
				frm.submit();   // do the form submission
			}
		}
	}
	Event.observe(textbox_id, 'keypress', f);
}

// String helpers
function TrimWhitespace(str)
{
	return str.strip();
}
function Trim(str, character)
{
	while(str.endsWith(character))
	{
		str = Chop(str);
	}
	return str;
}
function Chop(str)
{
	return str.substr(0, str.length-1);
}



// ====== Hide/Show Legacy Code =======
// reveal_colapse starts with content colapsed
// global_reveal_layer starts with a placeholder for hidden content

function reveal_collapse (object) {
  if (document.getElementById) {
    document.getElementById(object).style.display = 'block';
  }
  else if (document.layers && document.layers[object]) {
    document.layers[object].display = 'block';
  }
  else if (document.all) {
    document.all[object].style.display = 'block';
  }
}

function hide_collapse (object) {
  if (document.getElementById) {
    document.getElementById(object).style.display = 'none';
  }
  else if (document.layers && document.layers[object]) {
    document.layers[object].display = 'none';
  }
  else if (document.all) {
    document.all[object].style.display = 'none';
  }
}

function global_reveal_layer (object) {
  if (document.getElementById) {
    document.getElementById(object).style.visibility = 'visible';
  }
  else if (document.layers && document.layers[object]) {
    document.layers[object].visibility = 'visible';
  }
  else if (document.all) {
    document.all[object].style.visibility = 'visible';
  }
}

function global_hide_layer (object) {
  if (document.getElementById) {
    document.getElementById(object).style.visibility = 'hidden';
  }
  else if (document.layers && document.layers[object]) {
    document.layers[object].visibility = 'hidden';
  }
  else if (document.all) {
    document.all[object].style.visibility = 'hidden';
  }
}

// =========================================