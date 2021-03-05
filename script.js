$(".next").click(function(){
    $(".bedroom").show();
    $(".part2").show();       
    $(".noise").show();
    $(".next2").show();
    $(".intro").hide();
    $(".hanger").hide();
    $(".title").hide();
    $(".first").hide();
    $(".music").hide();
    $(".next").hide();
});

$(".next2").click(function(){
   $(".part2v2").fadeIn();
   $(".yes").fadeIn();
   $(".no").fadeIn();
   $(".next2").fadeOut();
   $(".part2").fadeOut();
   $(".noise").hide(); 
});    

$(".yes").click(function(){
	$(".part3").fadeIn();
    $(".next3").fadeIn();
    $(".bedroom").hide();
    $(".noise").hide();
    $(".part2").hide();
    $(".part2v2").hide();
    $(".yes").hide();
    $(".no").hide();
});

$(".next3").dblclick(function(){
    $(".surprise").show();
    $(".end").fadeIn();
    $(".next3").hide();
    $(".part3").hide();
});

$(".no").click(function(){
    $(".part3v2").fadeIn();
    $(".next4").fadeIn();
    $(".bedroom").hide();
    $(".noise").hide();
    $(".part2").hide();
    $(".part2v2").hide();
    $(".yes").hide();
    $(".no").hide();    
});    

$(".next4").dblclick(function(){
   $(".endv2").fadeIn();
    $(".surprisev2").fadeIn();
    $(".part3v2").fadeOut();
    $(".next4").hide();    
});    

