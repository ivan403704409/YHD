document.writeln("<div id=\"msn\" style=\"Z-INDEX:99999; RIGHT:0px; WIDTH:271px; POSITION:absolute; BOTTOM:0px; HEIGHT:199px; \">");
document.writeln("<table width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"BORDER-TOP:#ffffff 1px solid; BORDER-LEFT:#ffffff 1px solid\" bgcolor=\"#cfdef4\">")
document.writeln("<tr><td height=\"24\" width=\"26\" style=\"FONT-SIZE:12px;BACKGROUND-IMAGE:url(/Templates/acto/images/msgTopBg.gif);COLOR:#0f2c8c\" valign=\"middle\"><img src=\"/Templates/acto/images/msgLogo.gif\" hspace=\"5\" align=\"absMiddle\" vspace=\"1\"\/><\/td>");
document.writeln("<td style=\"FONT-WEIGHT:normal;FONT-SIZE:9pt;BACKGROUND-IMAGE:url(/Templates/acto/images/msgTopBg.gif);COLOR:#fff;PADDING-TOP:4px\" \" valign=\"middle\" width=\"100%\">雅图新闻<\/td>");
document.writeln("<td style=\"BACKGROUND-IMAGE:url(/Templates/acto/images/msgTopBg.gif);PADDING-TOP:2px\" valign=\"middle\" width=\"19\" align=\"right\"><img src=\"/Templates/acto/images/msgClose.gif\" hspace=\"3\" style=\"CURSOR:pointer\" onclick=\"closeDiv()\" title=\"关闭\"\/><\/td>");
document.writeln("<\/tr><tr><td colspan=\"3\" height=\"199\">");
document.writeln("<a href=\"\"><img src=\"/upload/201406/09/201406091721365676.jpg\" /></a>");
document.writeln("<\/td><\/tr><\/table><\/div>");
msn.style.top=document.body.clientHeight-199;
moveR();
function moveR() {
msn.style.top=document.body.scrollTop+document.body.clientHeight-199;
setTimeout("moveR();",80)
}
function closeDiv(){
msn.style.visibility='hidden';
}