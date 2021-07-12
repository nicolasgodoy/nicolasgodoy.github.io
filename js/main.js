(function($) {
    "use strict";
  
    // Hero typed                    /* FRASES QUE SE ESCRIBEN SOLAS */
    if ($('.typed').length) {
      var typed_strings = $(".typed").data('typed-items');
      typed_strings = typed_strings.split(',')
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000
      });
    };
})(jQuery);


let btn = document.querySelector('#boton');
let sidebar = document.querySelector('#sidebar');

btn.onclick = function () {
  sidebar.classList.toggle("active");
} 



