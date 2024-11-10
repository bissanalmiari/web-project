// FIXED SCROLL NAVIGATION:
window.addEventListener('scroll',function(){
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>0);   
}); 
function toggle(){
    let header=document.getElementById('header');
    header.classList.toggle('active');
};

//change of background-color of nav

window.addEventListener("scroll",function(){
    let navbar=document.querySelector('header');
    if(this.window.scrollY>50){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

//effect on meals button 
const button = document.querySelector('.meal-btn');

button.addEventListener('click', function () {
    button.classList.toggle('clicked');
});

//effect on recipes section 
document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll(".top h1, .top .meal-btn, .box #meals");
    
    function animateOnScroll() {
        elementsToAnimate.forEach(element => {
            let rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add("appear");
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); 
});

window.addEventListener("scroll", function() {
    let header = document.querySelector(".work-btn");
    if (window.scrollY > 50) { 
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    let workoutsSection = document.querySelector('.workout');
    if (workoutsSection) {
        console.log('Workouts section is loaded and exists on the page.');
    } else {
        console.warn('Workouts section not found. Check if HTML is correct.');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let cards = document.querySelectorAll('.card');
    let options = {
      root: null,
      threshold: 0.2
    };
  
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 150); 
          
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    cards.forEach(card => {
      observer.observe(card);
    });
  });
  
//effect on brand slider [doing double images]:
document.addEventListener("DOMContentLoaded", function() {
  let copy = document.querySelector('.brand-slide').cloneNode(true);
  document.querySelector('.brands').appendChild(copy);
});


//effect on the FAQS:
let faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
    } else {
      faq.classList.add("active");
      faqs.forEach(otherFaq => {
        if (otherFaq != faq) {
          otherFaq.classList.remove("active");
        }
      });
    }
  });
});

