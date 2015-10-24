for (var chapter in book) {
	$("#output").append("Chapter "+chapter+" : "+book[chapter].title+"<br>")

	console.log("Chapter "+chapter+ " : " + book[chapter].title);
}
