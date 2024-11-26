window.addEventListener("scroll",function(){
    let navbar=document.querySelector('header');
    if(this.window.scrollY>50){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
function toggleMenu() {
  let menuIcon = document.querySelector('.menu-icon');
  let navLinks = document.querySelector('.nav-links');
  menuIcon.classList.toggle('active');
  navLinks.classList.toggle('active'); 
}
document.addEventListener("DOMContentLoaded", () => {
  const dropdownButton = document.querySelector(".dropdown-button");
  const dropdownContentWrapper = document.querySelector(".dropdown-content-wrapper");

  if (dropdownButton) {
    dropdownButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent closing the dropdown if clicked inside
      dropdownContentWrapper.classList.toggle("active");
    });

    // Close the dropdown if clicked outside
    document.addEventListener("click", () => {
      dropdownContentWrapper.classList.remove("active");
    });
  }
});

$(document).ready(function(){
    $(".filter-item").click(function(){
        let value=$(this).attr("data-filter");
        if(value=="all"){
            $(".post-box").show("1000");
        } else{
            $(".post-box")
            .not("."+ value)
            .hide("1000");
            $(".post-box")
            .filter("."+ value)
            .show("1000")
        }
    });
    $(".filter-item").click(function(){
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});