var num = 4000;

for (var i=0; i<Math.ceil(num/100); i++) {
	var data = '{"organizations": [';
	for (var j=i*100; j<Math.min((i+1)*100,num); j++) {
		data += '{"name":"BulkOrg' + (j+1) + '"},'
	}
	data = data.slice(0,-1);
	data = data + ']}';
	(function(index) {
		$.ajax("/api/v2/organizations/create_many.json", {
			"type": "POST",
			"contentType": "application/JSON",
			"data": data
		})
	})(data);
}
