var awesomeThoughts = "I am Siraj and I am AWESOME";
var funThoughts = awesomeThoughts.replace ("AWESOME", "FUN");

var name = "Siraj Khan";
var role = "UI Architect";

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").append(formattedName).append(formattedRole);