//Write a separate JavaScript file that adds the words "Hello, World!" to your page using 
//document.getElementById(),
//document.createElement(),
//document.createTextNode(), and 
//Node.appendChild().

let destination=document.getElementById('bodies')

var funnybunny=document.createElement('div')
var sometext=document.createTextNode("Hello, World!")

funnybunny.appendChild(sometext)
destination.appendChild(funnybunny)


// USING FUNCTION FROM KATAS 3

function createNewElement(content){
    // Create a div, with class "bar", and set the width to 100px.
    var newElement = document.createElement('div');
    newElement.className="indent";
    // Place a text label inside the new div.
    var newText = document.createTextNode(content);
    newElement.appendChild(newText);

    destination.appendChild(newElement);
}
createNewElement("oh hi there");