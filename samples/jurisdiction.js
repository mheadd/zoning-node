var zoning = require('../lib/zoning')

var z = new Zoning();
z.jurisdictions({id: 78}, function(response, error){
	if(error) {
		console.log(error);
	}
	else {
		console.log(JSON.stringify(response));
	}	
})