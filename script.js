let typeHeading = document.getElementById('type-heading');
let text = typeHeading.textContent;

function teletype(id, string, rate){
  let type = document.getElementById(id);
  let displayString = '';
  for (let i=0; i<string.length; i++){
    setTimeout(function(){
      if (i===0){
        typeHeading.setAttribute("class","visible teletype")
      }
      while (type.firstChild) {
        type.removeChild(type.lastChild);
      }
      displayString += string[i];
      let textNode = document.createTextNode(displayString);
      type.appendChild(textNode);
    }, i * rate);
  }
}


setTimeout(function(){
  teletype("type-heading", text, 50);
}, 1000);
