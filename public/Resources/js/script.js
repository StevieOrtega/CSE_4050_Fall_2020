/* might have some animations for the navigation
or for the buttons or when you scroll down the page*/

/* some example js code*/
window.alert(5 + 6);

/* some example json code using the parse() method */
var txt = '{"name":"John", "age":30, "city":"New York"}'
var obj = JSON.parse(txt);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;
// expected output: true


/* some example json code using the string() method */
var obj = { name: "John", age: 30, city: "New York" };
var myJSON = JSON.stringify(obj);
document.getElementById("demo2").innerHTML = myJSON;
