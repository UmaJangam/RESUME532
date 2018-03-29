//Ajox call(HttpRequest) initiallisation
function loadjson(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function () {
    if(xhr.readyState ===4 && xhr.status =="200") {
      callback(xhr.responseText);
    }
  }
  xhr.send();
}
    //function calling
 loadjson("data.json", function(text) {
   let data=JSON.parse(text);
   console.log(data);
   basics(data.basics);
   education(data.education);
   skill(data.skills);
 })
  //for main div class calling
  // var main=document.queryselector('.main');
   //element creation
   var main=document.getElementById('main');
   var left=document.createElement("h3");
   //add class name to element
   left.classList.add("left");
   //add id to createElement
   //left.setAttribute("id","left")
   //adding text to div
   left.textContent="Profile Details:"
   left.appendChild(document.createElement("HR"));
   //appending to main div
   main.appendChild(left);
  function basics(leftside) {
    var image=document.createElement("img");
    image.src=leftside.photo;
    left.appendChild(image);
    var NAME=document.createElement("h1");
    NAME.textContent=leftside.NAME;
    left.appendChild(NAME);
    var email=document.createElement("h3");
    email.textContent=leftside.email;
      NAME.appendChild(email);
      var ph=document.createElement("p");
      ph.textContent=leftside.phone;
        email.appendChild(ph);
console.log(left);
 }
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
//Education div set
var edu=document.createElement("h3");
edu.classList.add("edu32");
edu.textContent="Eduacation Details:";
edu.appendChild(document.createElement("HR"));
right.appendChild(edu);
function education(educa) {
for(i in educa) {
  var e32=document.createElement("h3");
  e32.classList.add("edu31");
  e32.textContent=educa[i].course;

  var ul=document.createElement("ul");
  for(j in educa[i].college) {
    var li=document.createElement("li");
    li.textContent=educa[i].college[j];
    ul.appendChild(li);
    e32.appendChild(ul);
    edu.appendChild(e32);
  }
}
}

function skill(skills){
  var skill_title=document.createElement("h3");
  skill_title.classList.add("tech_skills");
  skill_title.textContent="Technical Skills:";
  skill_title.appendChild(document.createElement("HR"));
  right.appendChild(skill_title);
  //table creation
  var table=document.createElement("table");
  var row="";
  for(var i = 0; i < skills.length; i++) {
    row = row+"<tr><td>"+skills[i].name+"</td><td>"+skills[i].value+"</td></tr>"
  }
table.innerHTML=row;
skill_title.appendChild(table);
}
