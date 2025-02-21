const mobileNav = document.getElementById("mobile_menu");
const mobileBtn_open = document.getElementById("mobileBtn_open");
const mobileBtn_close = document.getElementById("mobileBtn_close")
const menuLinks = document.querySelectorAll("#mobile_menu a"); 

mobileNav.style.right = "100vw";

 
mobileBtn_open.addEventListener("click", function () {
  mobileNav.style.right = "0"
});

 
mobileBtn_close.addEventListener("click", function () {
    mobileNav.style.right = "100vw"
});

 
menuLinks.forEach(link => {
  link.addEventListener("click", function () {
     mobileNav.style.right = "100vw"
  });
});
