document.addEventListener("DOMContentLoaded", () => {
window.addEventListener("scroll",function(){
    let navbar=document.querySelector('header');
    if(this.window.scrollY>50){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

let backgroundContent = document.querySelector('.background-content');
backgroundContent.classList.add('active');
  let card = document.querySelector(".card");

  let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              card.classList.add("slide-in");
          }
      });
  });

  observer.observe(card);
let buttons = document.querySelectorAll('.belief-button');
let contentItems = document.querySelectorAll('.belief-item');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('active'));
    contentItems.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const targetId = button.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});

})