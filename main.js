var main  = function(){
	  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"}, 200);

    $('body').animate({
      left: "150px"}, 200);
      
  });
  
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-150px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
  
    $('.article').click(function()
        {
          $(this).children('.description').toggle();   
         // $(this).children('.description').toggle();   
        }
        );
     /*   
     $('.menu').click(function()
       {
         $('.contact').popover('toggle');
       }
       );
    */
};
$(document).ready(main);
