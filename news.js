//Button Top Up


const topButton = document.querySelector('.top-button');
window.addEventListener("scroll" , function(){
  if(window.scrollY <= 50){
    topButton.style.display = "none";}

  if(window.scrollY >= 50){
    topButton.style.display = "block";

  }
})



//Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade');
      }
    });
})

  const sections = document.querySelectorAll('.animated');
  sections.forEach(section => {
    observer.observe(section);
  });

