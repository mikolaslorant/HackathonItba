$("document").ready ( function() {

	$(".boti").click( function(){
		var title = $("#" + $(this).attr("id")+"necesidades").text();
		console.log(title);
		document.getElementById("title-for-donation").innerHTML = title;

	});

	$("#notification-opener").click( function(){
			console.log("entered function");
			$('#notificacion').modal('show');
	});
	$("#medal-opener").click( function(){
			console.log("entered function");
			$('#medal-notification').modal('show');
	});

});