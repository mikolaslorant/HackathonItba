$("document").ready ( function() {

	$(".boti").click( function(){
		var title = $("#" + $(this).attr("id")+"necesidades").text();
		console.log(title);
		document.getElementById("title-for-donation").innerHTML = title;

	})

});