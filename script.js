
  AOS.init();


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav1 = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav1.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav1.classList.remove('active');
    })
}




function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

const nav = document.querySelector('nav');
const navTop = nav.offsetTop;

function stickyNavigation() {
  if (window.scrollY >= navTop) {
    document.body.classList.add('sticky');
  } else {
    document.body.classList.remove('sticky');
  }
}

window.addEventListener('scroll', stickyNavigation);






// Using jQuery:
$(function() {
    // Add new elements to the DOM
    $('.my-container').append('<div data-aos="fade-up">This element will fade in from below.</div>');
    
    // Refresh AOS
    AOS.refresh();
  });
  
  // Using React:
  function MyComponent() {
    useEffect(() => {
      // Add new elements to the DOM
      const newElement = document.createElement('div');
      newElement.setAttribute('data-aos', 'fade-up');
      newElement.innerText = 'This element will fade in from below.';
      document.querySelector('.my-container').appendChild(newElement);
    
      // Refresh AOS
      AOS.refresh();
    }, []);
  
    return (
      <div className="my-container">...</div>
    );
  }
  