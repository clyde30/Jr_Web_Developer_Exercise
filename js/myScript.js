for (var chapter in book) {
	$("#accordion").append("<h3>Chapter "+chapter+": "+book[chapter].title+"</h3>")
	$("#accordion").append("<div><p>"+book[chapter].summary+"</p></div>")
}
