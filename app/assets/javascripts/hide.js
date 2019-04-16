function hideWhenClicked(){
        var elem = document.getElementById("hide_this");
        elem.parentNode.removeChild(elem);
}

document.getElementById("hide_this").addEventListener("click", hideWhenClicked);
