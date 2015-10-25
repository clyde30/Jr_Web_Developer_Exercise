for (var chapter in book) {
	$("#output").append("<h3>Chapter "+chapter+": "+book[chapter].title+"</h3>")
	$("#output").append("<div><p>"+book[chapter].summary+"</p></div>")
}
