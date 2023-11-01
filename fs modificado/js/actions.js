jQuery(function($) {
  // El slider que se sincroniza debe inicializarse primero
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,//Mueve solo el slide
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider',
    mousedrag: true
  });

  $('#slider').flexslider({
    animation: "slide",
    controlNav: true, // Flechitas laterales
    animationLoop: false, // Quitar el límite
    slideshow: false,//Mueve solo el slide
    direction: "horizontal",
    mousedrag: true,  // Habilitar el arrastre
    arrownavigation:true
  });

  $('.holamundo').append('<h3>Hola mundo cruel</h3>')
});