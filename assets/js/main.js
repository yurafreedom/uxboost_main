$('[data-toggle="anchor"]').click(function(e) {
 e.preventDefault();
 
 var dataTarget = $(this).attr('data-target'),
  targetPos = $(dataTarget).offset().top - 90;
 
 $('html,body').animate({
  scrollTop: targetPos
 }, 800);
});

$('.intensives-block__slider').slick({
  variableWidth: true,
});

$('.intensives-block__slider').on('afterChange', function(event, slick, currentSlide) {
	$('.intensives-block__slider .slick-current').addClass('active').siblings().removeClass('active');
});
