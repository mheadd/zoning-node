var zoning = require('../lib/zoning')

// Get a list of land use conditions.
var z = new Zoning();
z.landUseConditions({'use[slug]': 'bakery'}, function(response, error) {
	if(error) {
		console.log(error);
	}
	else {
		console.log(JSON.stringify(response));
	}	
})