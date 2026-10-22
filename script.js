//var root = document.querySelector("#root");
// const h1 = document.createElement('h1');
// h1.innerHTML ="Hello !!";
// root.appendChild(h1);

var h1 = React.createElement('h1', null, "hello from react");
var parent =document.querySelector("#parent")


var root = ReactDOM.createRoot(parent)
root.render(h1)