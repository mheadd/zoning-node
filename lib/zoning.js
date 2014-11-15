// Include required modules.
var request = require('request');
var querystring = require('querystring');

// Utility function to make API call.
function makeRequest(url, callback) {
	request(url, function (error, response, body) {
	  if (error) {
            callback(null, error);
        }
        else if (response.statusCode == 200) {
            callback(JSON.parse(body), null);
        }
        else {
            callback(null, 'HTTP Response Code: ' + response.statusCode);
        }
	});
}

// Constructor - set language and/or API version.
Zoning = function(lang, ver) {
	var base_url = 'https://zoning.io/'
	var language = lang || 'en';
	var version = ver || '1.0'
	this.api_url = base_url + language + '/api/' + version + '/'
};

// Get jurisdictions.
Zoning.prototype.jurisdictions = function(options, callback) {
	if(options.id) {
		var url = this.api_url + 'jurisdictions/' + options.id + '.json';
	}
	else {
		var url = this.api_url + 'jurisdictions.json'
		url += '?' + querystring.stringify(options);
	}
	makeRequest(url, callback);
};

// Get list of land use codes.
Zoning.prototype.landUses = function(options, callback) {
	if(options.id) {
		var url = this.api_url + 'land_uses/' + options.id + '.json';
	}
	else {
		var url = this.api_url + 'land_uses.json'
		url += '?' + querystring.stringify(options);
	}
	makeRequest(url, callback);
};

// Get a list of land use conditions.
Zoning.prototype.landUseConditions = function(options, callback) {
	if(options.id) {
		var url = this.api_url + 'land_use_conditions/' + options.id + '.json';
	}
	else {
		var url = this.api_url + 'land_use_conditions.json'
		url += '?' + querystring.stringify(options);
	}
	makeRequest(url, callback);
};

// Get the permission types that have been defined in a jurisdiction.
Zoning.prototype.permissionTypes = function(options, callback) {
	if(options.id) {
		var url = this.api_url + 'permission_types/' + options.id + '.json';
	}
	else {
		var url = this.api_url + 'permission_types.json'
		url += '?' + querystring.stringify(options);
	}
	makeRequest(url, callback);
};

// Get a list of zoning districts for a jurisdiction.
Zoning.prototype.zones = function(options, callback) {
	if(options.id) {
		var url = this.api_url + 'zones/' + options.id + '.json';
	}
	else {
		var url = this.api_url + 'zones.json'
		url += '?' + querystring.stringify(options);
	}
	makeRequest(url, callback);
};

// Returns all of the clearances for a given land use code across all zoning districts.
Zoning.prototype.clearances = function(options, callback) {
	var url = this.api_url + 'clearances.json'
	url += '?' + querystring.stringify(options);
	makeRequest(url, callback);
};

// Returns the single clearance (out of potentially overlapping clearances) for a given land use and location.
Zoning.prototype.calculate = function(options, callback) {
	var url = this.api_url + 'clearances/calculate.json'
	url += '?' + querystring.stringify(options);
	makeRequest(url, callback);
};

exports.Zoning = Zoning;