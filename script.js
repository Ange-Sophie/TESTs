var popup=document.getElementById("popup");

var closeBtn=document.getElementById("closepopup");

var openBtn =document.getElementById("openpopup");
openBtn.onclick = function()
{
    popup.style.display = "block";
}
closeBtn.onclick= function() {

    popup.style.display ="none";

}
window.onclick=function(event){
    if(event.target==popup) {
        popup.style.display="none";
    }
}
