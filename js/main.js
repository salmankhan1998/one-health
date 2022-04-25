
// Applying active class to nav bar list items

let links = document.querySelectorAll('#tab li a');

Array.from(links).forEach(function(link){

  link.addEventListener('click', function(e){
    
    var elems = document.querySelector(".active");
    if(elems !=null) {
      elems.classList.remove('active');
    }
    e.target.classList.add('active');
  })
})

// <!--------- Ends here --------------->


// Mobile Menu js code
$(document).ready(function(){

    $('#hamburger').click(function(){

        $('nav').toggleClass('show');
        $('.header').toggleClass('show');
    });
});



// Back to top js code

  $('document').ready(function() {
    // Back to top
    var backTop = $(".back-to-top");
  
    $(window).scroll(function() {
      if($(document).scrollTop() > 400) {
        backTop.css('visibility', 'visible');
      }
      else if($(document).scrollTop() < 400) {
        backTop.css('visibility', 'hidden');
      }
    });
  
    backTop.click(function() {
      $('html').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  });
  
  
  $('document').ready(function() {
    // Tooltips
    $('[data-toggle="tooltip"]').tooltip();
  
    // Popovers
    $('[data-toggle="popover"]').popover();
  
    // Page scroll animate
    new WOW().init();
  });