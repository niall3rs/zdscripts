var num = 1000;
for (var i=0; i<Math.ceil(num/100); i++) {
	var data = '{"organizations": [';
	for (var j=0; j<Math.min(100,num); j++) {
		data += '{"name":"BulkOrg' + ((100*i) + (j+1)) + '"},'
	}
	date.slice(0,-1);
	console.log(data);
}

working on it