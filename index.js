const titles = document.querySelectorAll('.title');
const testimonials = document.querySelectorAll('.testimonial');

const changeOpacity = (elementList, opacity) => {
   for (const element of elementList) {
      element.style.opacity = opacity; 
   }
}
changeOpacity(titles, 0.5);
changeOpacity(testimonials, 0.7);
