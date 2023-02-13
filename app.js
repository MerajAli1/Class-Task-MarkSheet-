// var month = prompt("Enter a month");
// var charsInMonth = month.length;
// if (charsInMonth > 3) {
//     var monthAbbrev = month.slice(0, 3);
//     document.write(monthAbbrev)
// }else{
//     document.write(month)
// }

// var str = prompt("Enter some text"); 
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
//     if (str.slice(i, i + 2) === "  ") {
//         document.write("No double spaces!");
//         break;
//     }
// }
// document.write(str)

var math = +prompt("Enter Maths Marks 100 out of?")
var english = +prompt("Enter English Marks 100 out of?")
var comp = +prompt("Enter Computer Marks 100 out of?")
var islamiat = +prompt("Enter Islamiat Marks 100 out of?")
var total = math + english + comp + islamiat
var percent = total / 400 * 100
document.write('<center>'+'<table bgcolor=green border=2>' + '<tr>' + '<td>' + "Maths" + '</td>'+ '<td>' + math + '</td>' + '</tr>' +'<tr>'+'<td>'+"English"+'</td>'+ '<td>' + english + '</td>'+'</tr>'+ '</tr>' +'<tr>'+'<td>'+"Computer"+'</td>'+'</td>'+ '<td>' + comp +'</tr>'+ '</tr>' +'<tr>'+'<td>'+"Islamiat"+'</td>'+ '<td>' + islamiat +'</tr>'+'</tr>'+'<tr>'+'<td>'+"Total"+'</td>'+'<td>'+total+'</td>'+'</tr>'+'<tr>'+'<td>'+"Percentage"+'</td>'+'<td>'+percent+'</td>'+'</tr>'+'</table>'+'</center>')

if (percent >= 90 && percent <= 100) {
    document.write("<center><table bgcolor=green border=2><tr><td>Grade</td><td>A1+</td></tr></table></center>")
}
else if (percent >= 80 && percent <= 90) {
    document.write("<center><table bgcolor=green border=2><tr><td>Grade</td><td>A1</td></tr></table></center>")
}
else if (percent >= 70 && percent <= 80) {
    document.write("<center><table bgcolor=green border=2><tr><td>Grade</td><td>A</td></tr></table></center>")
}
else if (percent >= 60 && percent <= 70) {
    document.write("<center><table bgcolor=green border=2><tr><td>Grade</td><td>B</td></tr></table></center>")
}
else if (percent >= 50 && percent <= 60) {
    document.write("<center><table bgcolor=green border=2><tr><td>Grade</td><td>C</td></tr></table></center>")
}
else if (percent >= 40 && percent <= 50) {
    document.write("<center><table bgcolor=green border=2><tr><td>Grade</td><td>D</td></tr></table></center>")
}
else if (percent >= 100) {
    document.write("Invalid")
}
else {
    document.write("<table bgcolor=green border=2><tr><td>Grade</td><td>Fail</td></tr></table>")
}

