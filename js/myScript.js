for (var chapter in book) {
	$("#accordion").append("<h3>Chapter "+chapter+": "+book[chapter].title+"</h3>")
	$("#accordion").append("<div><p>"+book[chapter].summary+"</p></div>")
}

var textIndex = 1;

function changeText() {
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