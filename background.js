chrome.contextMenus.onClicked.addListener(function(e) {
	window.prompt("",e.pageUrl)
	});	

chrome.contextMenus.create({
	"type":"normal",
	"title":"Copy window URL",
	"contexts":["page"],
	"id":"item"
});