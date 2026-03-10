function changeBackground(){document.body.style.backgroundColor='#618399';}
function sendMessage(){alert('تم إرسال رسالتك بنجاح!');}
function darkMode(){
document.body.classList.toggle("dark-mode");
}
let size = 16;

function zoomIn(){
size += 2;
document.body.style.fontSize = size + "px";
}

function zoomOut(){
size -= 2;
document.body.style.fontSize = size + "px";
}