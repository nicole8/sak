item + document.getElementById("interactive");

item.onclick = function(){
    if (item.style.color == "green"){
        item.style.color = "blue";
    }
    else{
        item.style.color = "green";
    }
}
