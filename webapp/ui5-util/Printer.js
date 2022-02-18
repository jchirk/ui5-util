sap.ui.define([], function () {
	"use strict";

	var Printer = function () {};

	Printer.prototype.print = function (oControl) {
		var id = oControl.getId();
		var newWindow = window.open("", "PRINT", "height=400,width=600");
		var sInnerHTML = document.getElementById(id).innerHTML;

		// Add CSS
		var print_Url = $.sap.getModulePath("com", "/css/");
		var printCssUrl = print_Url + "style.css";
		var hContent =
			'<link rel="stylesheet" href=' + printCssUrl + ' type="text/css" />';

		// Write header
		newWindow.document.write(
			"<html><head><title>" + document.title + "</title>"
		);
		newWindow.document.write(hContent);
		newWindow.document.write("</head><body>");

		// Add SAP CSS
		$.each(document.styleSheets, function (index, oStyleSheet) {
			if (oStyleSheet.href) {
				var link = document.createElement("link");
				link.type = oStyleSheet.type;
				link.rel = "stylesheet";
				link.href = oStyleSheet.href;
				//win.document.head.appendChild(link); --> this doesn't work in IE
				newWindow.document.getElementsByTagName("head")[0].innerHTML =
					newWindow.document.getElementsByTagName("head")[0].innerHTML +
					link.outerHTML;
			}
		});

		// Write body
		newWindow.document.write(sInnerHTML);
		newWindow.document.write("</body></html>");

		// Print
		newWindow.document.close(); // necessary for IE >= 10
		newWindow.focus(); // necessary for IE >= 10*/
		newWindow.print();
		// newWindow.close();
	};

	return Printer;
});
