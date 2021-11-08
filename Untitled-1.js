let UppCase = document.getElementById("upper-case");
let LowCase = document.getElementById("lower-case");
let PropCase = document.getElementById("proper-case");
let SetCase = document.getElementById("sentence-case");
let TextFile = document.getElementById("save-text-file");

UppCase.addEventListener("click",function(){
    let TextArea = document.getElementById("text");
    TextArea.value = TextArea.value.toUpperCase();
 })
LowCase.addEventListener("click",function(){
    let TextArea = document.getElementById("text");
    TextArea.value = TextArea.value.toLowerCase();
})
PropCase.addEventListener("click",function(){
    let TextArea = document.getElementById("text");
    TextArea.value = TextArea.value.split(' ').map(i => i[0].toUpperCase() + i.substr(1).toLowerCase()).join(' ');
})
SetCase.addEventListener("click", function(){
    let TextArea = document.getElementById("text");
    TextArea.value = TextArea.value.split('.').map(i => i[0].toUpperCase() + i.substr(1).toLowerCase()).join('.');
})
function download(name, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', name);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}
TextFile.addEventListener("click",function(){
    let TextArea = document.getElementById("text").value;
    download("text.txt", TextArea,);
})

  
  
 
