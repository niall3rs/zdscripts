for (var i=0; i<100; i++) {
	var groupName  = "Bulk Group " + (i+1);
	(function(index){
		$.ajax("/api/v2/groups.json", {
				"type":"POST",
				"contentType":"application/json",
				"data": JSON.stringify({
					"group": {
						"name": groupName
					}
				})
			})
		.done(function(data){
			console.log("created group " + index);
		})
		.fail(function(data){
			console.log("error creating group " + index);
		});
	})(groupName);
}
