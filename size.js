var idselect = ["1", false];

var setsize = function (id, sb) {
	var img = document.getElementById(id);
	if (sb == true) {
	    if (img.classList.item(0) == "img") {
	    	img.style.height = "calc(297px * 1.5)";
	    	img.style.width = "calc(210px * 1.5)";
	    }
	    else if (img.classList.item(0) == "bigimg") {
	    	img.style.height = "calc(297px * 1.5)";
	    	img.style.width = "calc(297px * 1.4142857142857143 * 1.5)";
	    }
    }
    else if (sb == false) {
        if (img.classList.item(0) == "img") {
		    img.style.height = "calc(297px / 2)";
		    img.style.width = "calc(210px / 2)";
	    }
	    else if (img.classList.item(0) == "bigimg") {
	    	img.style.height = "calc(297px / 2)";
	    	img.style.width = "calc(297px * 1.4142857142857143 / 2)";
	    }
	}
}

var selected = function (id) {
	if (id != idselect[0] || idselect[1] == false) {
	    setsize(idselect[0], false);
	    setsize(id, true);
	    idselect[0] = id;
	    idselect[1] = true;
    }
    else if (id == idselect[0] && idselect[1] == true) {
    	setsize(id, false);
    	idselect[1] = false;
    }
}