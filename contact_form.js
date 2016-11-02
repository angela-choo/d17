var submitted = false;

function validateForm() {
	var x = document.forms["contact_us"]["entry.1960561621"].value;
	var atpos = x.indexOf("@");
	var dotpos = x.lastIndexOf(".");
		
	if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
		var errmsg = document.getElementsByClassName("error");
		for (var i = 0; i < errmsg.length; i++){
			errmsg[i].style.display = "block";
			document.getElementById("contact_email-input").focus();
		}
		return false;
	}
	submitted = true;
}