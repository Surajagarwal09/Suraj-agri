let menu = document.getElementById("navList")
menu.style.maxHeight = "0px";

function toggleMenu(){
    if(menu.style.maxHeight == "0px")
    {
        menu.style.maxHeight = "300px";
    }
    else{
        menu.style.maxHeight = "0px";
    }
}
const listItems = document.querySelectorAll("#navList li");
listItems.forEach(item => {
    item.addEventListener("click", () => {
        menu.style.maxHeight = "0px";
    });
});