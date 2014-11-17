var zoning = require('../lib/zoning')

// Get the permission types that have been defined in a jurisdiction.
var z = new Zoning();
z .permissionTypes({}, function(response, error) {
	if(error) {
		console.log(error);
	}
	else {
		console.log(JSON.stringify(response));
	}	
})