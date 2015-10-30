function makeAccordion () {
	for (var chapter in book) {
		$("#accordion").append("<h3>Chapter "+chapter+": "+book[chapter].title+"</h3>")
		$("#accordion").append("<div><p>"+book[chapter].summary+"</p></div>")
	}
	$("#accordion").accordion();
	$(".ui-accordion-header").css("background","#F6996A") ;
	$(".ui-accordion-content").css("background","none") ;
	return chapter;
}
var chapter = makeAccordion();

function changeText() {
	var textIndex = 1;
	textIndex++;
	$("#banner").fadeIn().html("<p>\""+book[textIndex].summary+"\"</p>").delay(8000).fadeOut();
	if (textIndex >= chapter) {
	textIndex = 0;
	};	
}

function banner() {
	$("#banner").html("<p>\""+book[1].summary+"\"</p").delay(8000).fadeOut();
	setInterval(changeText,10000);
}

 $(document).ready(function () {
	banner();
})
 $("#hero").hover(function() {
 	$(this).children("p").fadeIn(3000).css("display","block");
 	}, function() {
 	$(this).children("p").css("display","none");
 })