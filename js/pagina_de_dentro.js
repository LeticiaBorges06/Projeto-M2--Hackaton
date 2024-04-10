// Header scroll effect
window.addEventListener("scroll", function() {
    let header = document.querySelector('.header');
    header.classList.toggle('rolagem', window.scrollY > 400);
  });
  
  //"Tooltip" effect: which displays additional information when the user hovers the mouse over menu items... 
  //...and hides this information when the mouse is moved away from menu items.
  const menuItems = document.querySelectorAll('.menu-item');
  const infoBox = document.getElementById('information-box');
  
  menuItems.forEach(item => {
    item.addEventListener('mouseover', function() {
      const infoText = this.getAttribute('data-info');
      const bounding = this.getBoundingClientRect(); // Gets the dimensions of the element
      const infoBoxWidth = 200; // Information box width
      const infoBoxX = bounding.left + window.pageXOffset + (bounding.width - infoBoxWidth) / 2; // Horizontal position of the information box
      const infoBoxY = bounding.top + window.pageYOffset + bounding.height + 10; // Vertical position of the information box, adding 10 pixels for separation
      infoBox.textContent = infoText;
      infoBox.style.display = 'block';
      infoBox.style.left = `${infoBoxX}px`; // Sets the horizontal position of the information box
      infoBox.style.top = `${infoBoxY}px`; // Sets the vertical position of the information box
    });
  
    item.addEventListener('mouseout', function() {
      infoBox.style.display = 'none';
    });
  });
  
  //Input effect:
  let swiper = new Swiper(".swiper",{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initiaSlide: 2,
    speed: 600,
    preventClicks: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 350,
      modifier: 1,
      slideShadows: true,
    },
    on: {
      click(event) {
        swiper.slideTo(this.clickedIndex);
      },
    },
    pagination: {
      el: ".swiper-pagination",
    }
  });
  
  // Testimonials Effect:
  document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.testimonials-slider');
    const slides = document.querySelectorAll('.testimonial-slide');
    let currentIndex = 0;
  
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }
  
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
  
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }
  
    showSlide(currentIndex);
  
    document.querySelector('.prev-slide').addEventListener('click', prevSlide);
    document.querySelector('.next-slide').addEventListener('click', nextSlide);
  });
  
  //PART OF VIDEO:
  const lista = document.querySelectorAll('.lista')
  
  function ativaLink() {
      for(let i of lista){
          i.classList.remove('ativo')
      }
      this.classList.add('ativo')
  }
  
  for(let i of lista) {
      i.addEventListener('click', ativaLink)
  }
  
  