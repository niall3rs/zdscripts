for (var i=0; i<50; i++) {
	var formTitle  = "Bulk Form " + (i+1);
	(function(index){
		$.ajax("/api/v2/ticket_forms.json", {
				"type":"POST",
				"contentType":"application/json",
				"data": JSON.stringify({
					"ticket_form": {
						"name": formTitle,
						"end_user_visible": false,
						"display_name": formTitle,
						"position": (i+2),
						"active": true,
						"default": false
					}
				})
			})
		.done(function(data){
			console.log("created form " + index);
		})
		.fail(function(data){
			console.log("error creating form " + index);
		});
	})(formTitle);
}
