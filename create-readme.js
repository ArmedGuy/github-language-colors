var fs = require('fs');
var file = "The Colors used by GitHub to represent programming languages\r\n\r\n\r\n";
fs.readFile("colors.json", function(err, data) {
	json = JSON.parse(data);
	for(var key in json) {
		file += ".. image:: http://www.placehold.it/200/" + json[key].replace("#", "") + "/ffffff&text=" + encodeURIComponent(key.replace("++","pp").replace("#","-Sharp")) + "\r\n";
	}
	fs.writeFileSync("README.rst", file);
});