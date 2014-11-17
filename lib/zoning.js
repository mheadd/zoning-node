// Include required modules.
var request = require('request');
var querystring = require('querystring');

// Constructor - set language and/or API version.
Zoning = module.exports = function(lang, ver) {
	var base_url = 'https://zoning.io/'
	var language = lang || 'en';
	var version = ver || '1.0'
	this.api_base = base_url + language + '/api/' + version + '/'
};

// Get a list of jurisdictions.
Zoning.prototype.jurisdictions = function(options, callback) {
	makeRequest(buildURL(options, this.api_base, 'jurisdictions'), callback);
};

// Get list of land use codes.
Zoning.prototype.landUses = function(options, callback) {
	makeRequest(buildURL(options, this.api_base, 'land_uses'), callback);
};

// Get a list of land use conditions.
Zoning.prototype.landUseConditions = function(options, callback) {
	makeRequest(buildURL(options, this.api_base, 'land_use_conditions'), callback);
};

// Get the permission types that have been defined in a jurisdiction.
Zoning.prototype.permissionTypes = function(options, callback) {
	makeRequest(buildURL(options, this.api_base, 'permission_types'), callback);
};

// Get a list of zoning districts for a jurisdiction.
Zoning.prototype.zones = function(options, callback) {
	makeRequest(buildURL(options, this.api_base, 'zones'), callback);
};

// Returns all of the clearances for a given land use code across all zoning districts.
Zoning.prototype.clearances = function(options, callback) {
	var url = this.api_base + 'clearances.json'
	url += '?' + querystring.stringify(options);
	makeRequest(url, callback);
};

// Returns the single clearance (out of potentially overlapping clearances) for a given land use and location.
Zoning.prototype.calculate = function(options, callback) {
	var url = this.api_base + 'clearances/calculate.json'
	url += '?' + querystring.stringify(options);
	makeRequest(url, callback);
};

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

// Utility function to build URLs to API endpoints.
function buildURL(options, api_base, type) {
	if(options.id) {
		var url = api_base + type + '/' + options.id + '.json';
	}
	else {
		var url = api_base + type + '.json'
		url += '?' + querystring.stringify(options);
	}
	return url;
}