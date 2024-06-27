var topNav = document.querySelectorAll(".pageSelect");

for(var i = 0; i < topNav.length; i++){
    topNav[i].addEventListener("mouseover", function (){
        this.classList.add("selected");
    }, false)
    topNav[i].addEventListener("mouseout", function (){
        this.classList.remove("selected");
    }, false)
}
