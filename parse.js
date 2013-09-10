var request = require('request');
var fs = require('fs');
var yaml = require('libyaml');
var languages = {};
request("https://raw.github.com/github/linguist/master/lib/linguist/languages.yml", function(err, head, body) {
	var data = yaml.parse(body);
	console.log(data[0].ASP.color);
	for(var prop in data[0]) {
		if("color" in data[0][prop])
		{
			languages[prop] = data[0][prop].color;
		}
	}
	json = JSON.stringify(languages);
	fs.writeFileSync("languages.json", json);
});
