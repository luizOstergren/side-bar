let menu = document.querySelector(".menu-bar");
let sidebar = document.querySelector(".sidebar");
let search = document.querySelector(".search-widht");
let avatar = document.querySelector(".avatar");

menu.onclick = function() {
    avatar.classList.toggle("close");
    search.classList.toggle("close");
    sidebar.classList.toggle("close");
    console.log("click");
}

search.onclick = function() {
    sidebar.classList.remove("close");
    avatar.classList.remove("close");
    search.classList.remove("close");
}
