// main.js

var loadHash = function(){
	// Open a link if we have a hash
	var hash = window.location.hash;
	if(hash !== "") {
		// Cut off the "#" from the front
		hash = hash.substr(1);
		
		// Find the <a> with this title and click on it
		$("a[title='" + hash + "']").click();
	}
};

// When the document is ready
$(document).ready(function(){

	$("#next").click(function(e){
		// Find the <a> with the current title
		var href = $("#image").attr("src");
		
		// Get the <a> tag after it
		var $a = $("a[href='" + href + "']").next("a.thickbox");
		
		// Click on it
		$a.click();
	});

	// Find all <a> tags with thickbox class
	$("a.thickbox").each(function(i, a){
	
		// When the <a> tag is clicked
		$(a).click(function(e){
		
			// Take the HREF value and give it to the #image
			var href = $(this).attr("href");
			$("#image").attr("src", href);
			
			// Take the title and make it into the link
			var title = $(this).attr("title");
			window.location.hash = "#" + title;
			$("#title").text(title);
			
			document.title = title + " - Curt Merlo Design";
			
			// Add the next button if there isn't one already
			$("#next").show();
						
			// Don't actually open the <a> link
			return false;
		});
	});
	
	window.onhashchange = loadHash;
	loadHash();
});