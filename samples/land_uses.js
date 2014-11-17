var zoning = require('../lib/zoning')

// Get list of land use codes.
var z = new Zoning();
z.landUses({category_name: 'retail'}, function(response, error) {
	if(error) {
		console.log(error);
	}
	else {
		console.log(JSON.stringify(response));
	}	
})