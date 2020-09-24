// $(".page-header__nav-menu").on("click","a", function (event) {
//     event.preventDefault();
//     var id  = $(this).attr('href'),
//         top = $(id).offset().top;
//     $('body,html').animate({scrollTop: top}, 500);
// });

$(".page-header__toggle").click(function(){
	// if ($(".page-header__nav-menu").hasClass('')) {
	// 	$(".page-header__nav-menu").slideDown();
	// } else {
	// 	$(".page-header__nav-menu").slideUp();
	// };

	if ($(".page-header__nav-menu").hasClass('active')) {
		$(".page-header__nav-menu").slideUp();
	} else {
		$(".page-header__nav-menu").slideDown();
	};
});

$('[data-toggle="anchor"]').click(function(e) {
 e.preventDefault();
 
 var dataTarget = $(this).attr('data-target'),
  targetPos = $(dataTarget).offset().top - 90;
 
 $('html,body').animate({
  scrollTop: targetPos
 }, 800);
});

var $things = $(".nav-block");
$things.waypoint(function(e) {
    if ("down" === e) {
        var t = this.element.id;
        $(".page-header__nav a").removeClass("active"), $('[data-target="#' + t + '"]').addClass("active")
    }
}, {
    offset: 151
});