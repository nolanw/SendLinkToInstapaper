// Set the event's userInfo to the link's URL if a link was clicked and its 
// url starts with 'http'; otherwise, clear the event's userInfo.
// If we don't clear userInfo its value is reused for future events, which 
// breaks our context menu item validation.
function addURLToUserInfo(event) {
  if (event.target.nodeName == "A")
  {
    if (event.target.href.substr(0, 1) != "#")
    {
      safari.self.tab.setContextMenuEventUserInfo(event, event.target.href);
      return;
    }
  }
  safari.self.tab.setContextMenuEventUserInfo(event, '');
}
document.addEventListener("contextmenu", addURLToUserInfo, false);
