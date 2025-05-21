// project slideshow carousel
document.addEventListener('DOMContentLoaded', function() {
    const project = document.querySelectorAll('.project');
    const backButton = document.querySelector('.backButton');
    const nextButton = document.querySelector('.nextButton');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
  
    function showSlide(index) {
        project.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active-dot'));
        project[index].classList.add('active');
        dots[index].classList.add('active-dot');
    }
  
    function nextSlide() {
        currentSlide = (currentSlide + 1) % project.length;
        showSlide(currentSlide);
    }
  
    function prevSlide() {
        currentSlide = (currentSlide - 1 + project.length) % project.length;
        showSlide(currentSlide);
    }
  
    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
    }
  
    // event listeners for nav buttons
    nextButton.addEventListener('click', nextSlide);
    backButton.addEventListener('click', prevSlide);
  
    // event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
  
    // make the entire slide clickable to open the url in a new tab 
    project.forEach(slide => {
        slide.addEventListener('click', function() {
        const projectUrl = this.getAttribute('data-project-url');
        if (projectUrl) {
            window.open(projectUrl, '_blank');
        }
      });
    });
  
    // initial display
    showSlide(currentSlide);
  
    // automatic slideshow (change slide every 10 sec)
    setInterval(nextSlide, 10000);
});