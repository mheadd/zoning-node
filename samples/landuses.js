var zoning = require('../lib/zoning')

var z = new Zoning();
z.landUses({id: 'retail'}, function(response, error) {
	if(error) {
		console.log(error);
	}
	else {
		console.log(JSON.stringify(response));
	}	
})