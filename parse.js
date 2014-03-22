var request = require('request');
var fs = require('fs');
var yaml = require('yamljs');
var languages = {};
request("https://raw.github.com/github/linguist/master/lib/linguist/languages.yml", function(err, head, body) {
	var data = yaml.parse(body);
  console.log(data);
	for(var prop in data) {
		if("color" in data[prop])
		{
			languages[prop] = data[prop].color;
		}
	}
	json = JSON.stringify(languages);
	fs.writeFileSync("colors.json", json);
});
