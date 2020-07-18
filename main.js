let body = document.body;
body.style.background = "red";
setTimeout(() => (body.style.background = ""), 2000);

let hello = document.getElementById("hello");
hello.style.background = "#000";
hello.style.color = "#fff";

let ulElements = document.querySelectorAll("ul>li:last-child");
console.log(ulElements);
for (let ulelem of ulElements) {
  ulelem.style.backgroundColor = "green";
  ulelem.style.padding = "5px";
  ulelem.style.color = "#fff";
}

// let table = body.children[3];
let table = document.getElementById("testTable");
for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = "red";
}

// let inputs = document.getElementsByTagName("input");

// for (let input of inputs) {
//   input.style.color = "red";
// }
