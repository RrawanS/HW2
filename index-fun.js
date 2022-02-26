

function addTask(){
var inputTask = document.getElementById("text").value;
const H2Element = document.createElement('h2');
const AppendDiv3 = document.querySelector('.Third_Div')
H2Element.innerHTML = inputTask;
AppendDiv3.append(H2Element);
}