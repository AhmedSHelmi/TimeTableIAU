/*
 Time Table Creator Version 1.0.1
 coded by: Ahmed Shawkat
 
*/

var arr = [];
var numofsub;
//Colors were removed to improve performance ( Will be added in the up coming releases

function st() {
  numofsub = document.getElementById("number").value;

  var str = "";
  for (var i = 1; i <= numofsub; i++) {
    str +=
      "subject no " +
      i +
      ": <input type='text' class='mdl-textfield__input' id='name" +
      i +
      "'class='subjects' > <br/><br/>";
  }
  document.getElementById("subjects").innerHTML = str;
  if (numofsub != 0) {
    var elem = document.getElementById("number");
    elem.parentNode.removeChild(elem);
    var elem = document.getElementById("myDiv");
    elem.parentNode.removeChild(elem);

    var E = (document.getElementById("button").innerHTML =
      "<input type='submit' class='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent' id='ctable'class='button' />");
    document.getElementById("ctable").addEventListener("click", CTable);
  } else {
    alert("Number of courses can't be " + numofsub);
  }
}

function reload() {
  document.location.reload(true);
}

function CTable() {
  var elem = document.getElementById("button");
  elem.parentNode.removeChild(elem);
  for (var i = 1; i <= numofsub; i++) {
    var sub = document.getElementById("name" + i).value;
    arr.push(sub);
  }

  var tab = document.getElementById("table");
  tab.innerHTML =
    '<table style="">' +
    "<tr>" +
    "<td>" +
    "Time/Day" +
    "</td>" +
    "<td>" +
    "Sunday" +
    "</td>" +
    "<td>" +
    "Monday" +
    "</td>" +
    "<td>" +
    "Tuesday" +
    "</td>" +
    "<td>" +
    "Wednesday" +
    "</td>" +
    "<td>" +
    "Tursday" +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "8-9" +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "9-10" +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "10-11" +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "11-12" +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "12-1" +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "1-2" +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "2-3" +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" +
    "3-4" +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "</tr>" +
    "<tr>" +
    "</tr>" +
    "<td>" +
    "4-5" +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "<td>" +
    Selector() +
    "</td>" +
    "</tr>" +
    "</table>";
}

function Selector() {
  var string =
    '<input type="text" id="list" list="mylist"><datalist id="mylist">';
  for (var i = 0; i < 1; i++) {
    string += "<option value=''id='mylist'>";
  }
  for (var i = 0; i < arr.length; i++) {
    string += "<option value='" + arr[i] + "'id='mylist' >";
  }
  string += "</ul>";
  return string;
}
