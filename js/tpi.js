/**
* @function _guid
* @description Creates GUID for user based on several different browser variables
* It will never be RFC4122 compliant but it is robust
* @returns {Number}
* @private
*/
function getGUID() {

	var nav = window.navigator;
	var screen = window.screen;
	var guid = nav.mimeTypes.length;
	guid += nav.userAgent.replace(/\D+/g, '');
	guid += nav.plugins.length;
	guid += screen.height || '';
	guid += screen.width || '';
	guid += screen.pixelDepth || '';

	return guid;
};


var obj = new Object();

obj.guid = getGUID();
obj.page_url = $(location).attr('href'); 

// alert(JSON.stringify(obj));

$.ajax({
	type: "POST",
	url: "https://net4hgc.sperto.co.in/_api/api_post_utm.php",
	data: { "webdata": JSON.stringify(obj) },
	dataType: "json",
	success: function(data) {
		if (data.status == "success") {
			// alert("UTM posted : " + data.message);
		} else {
			alert("UTM Posting error: " + data.message);
		}
	}
});