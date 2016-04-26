for (var i=0; i<100; i++) {
	var articleTitle  = "Bulk Article " + (i+1);
	(function(index){
		$.ajax("/api/v2/help_center/sections/201856899/articles.json", {
				"type":"POST",
				"contentType":"application/json",
				"data": JSON.stringify({
					"article": {
						"title": articleTitle,
						"body": "Article created in bulk",
						"locale":"en-us"
					}
				})
			})
		.done(function(data){
			console.log("created article " + index);
		})
		.fail(function(data){
			console.log("error creating article " + index);
		});
	})(articleTitle);
}
