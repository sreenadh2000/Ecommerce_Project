
// menu button clicked event occure...........

$(".menu_icon_button").click(function () {
  $(".Menu_tab").addClass("droped_menu");
  $("#header").css("margin" , "0");
  $("body, .button_section button").css("background-color","hsl(0,0%,0%,0.7)");
  $(".added_button").css("background-color","hsl(26, 100%, 55%,0.4)");
  $(".slides_a").addClass("opacity");

  $(".close_icon").click(function () {
       $(".Menu_tab").removeClass("droped_menu");
       $("#header").css("margin" , "1% 8%");
       $("body").css("background-color","white");
       $(".button_section button").css("background-color","hsl(223, 64%, 98%)");
       $(".added_button").css("background-color","hsl(26, 100%, 55%)");
       $(".slides_a").removeClass("opacity");
  });

});

$(".header_a").click(function () {
 $(this).css("opacity", "1");
});

// slides showing with cursiour............
var button_prev = $(".Slide_container .prev");
var button_next = $(".Slide_container .next");
var slide_index = 1;
show_slides(slide_index);
button_prev.click( function () {
  plus_slide(-1);
});

button_next.click( function () {
  plus_slide(1);
});

// Thumbnail image controls
function currentSlide(n) {
  show_slides(slide_index = n);
}

function plus_slide(n) {
  slide_index += n;
  show_slides(slide_index);
}

function show_slides(n) {
  var i = 0;
  var slides = $(".slides_a");
  var dots = $(".dot");
  if( n > slides.length){
    slide_index = 1;
  }
  if( n < 1){
    slide_index = slides.length;
  }
  for( i = 0 ; i < slides.length ; i++){
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide_index-1].style.display = "block";
  dots[slide_index-1].className += " active";
}

// adding and section.............

var plus = $(".button_plus");
var minus = $(".button_minus");

plus.click( function () {
  var no_items = $(".no_of_items").val();
  no_items = parseInt(no_items);
  no_items += 1;
  $(".no_of_items").val(no_items);

  minus.click( function () {
    no_items -= 1;
    if(no_items <= 0) {
        $(".no_of_items").val(0);
        return;
    }
  $(".no_of_items").val(no_items);
  });

});

// Added to the cart.....
 var add_To_cart = $(".added_button");
 add_To_cart.click( function () {
   $(this).fadeIn(100).fadeOut(100).fadeIn(100);
   var value = $(".no_of_items").val();

   $(".sectionCount").text(value);
 });

// cartesection is clicked.....
var cart = $(".cart_button");
var item_count = $(".TotalAmt .cart_value") ;
var items_value = $(".TotalAmt .Amount");
cart.click( function () {
    var value = $(".sectionCount").html();
    if( value == Number(0) ) {
      $(".TotalAmt").html("Your cart is empty");
      $(".TotalAmt").addClass("TotalAmt_no");
      $(".cartSection").css("display","block");
      $(".cartSection button").css("display","none");
    }
    else{
      $(".cartSection").css("display","block");
      item_count.html(value);
      var total_am = Number(value) * parseInt(375);
      items_value.html(total_am.toFixed(2));
    }
    $(".TotalAmt .delete").click( function () {
      $(".cartSection").css("display", "none");
    });
});
// lap_cartsection ......
$(".lap_cart_button").click( function () {
    var value = $(".sectionCount").html();
    var item_count_lap = $(".lap_TotalAmt .cart_value");
    var items_value_lap = $(".lap_TotalAmt .Amount");
    if( value == Number(0) ) {
      $(".lap_TotalAmt").html("Your cart is empty");
      $(".lap_TotalAmt").addClass("TotalAmt_no");
      $(".lap_cartSection").css("display","block");
      $(".lap_cartSection button").css("display","none");
    }
    else{
      $(".lap_cartSection").css("display","block");
      item_count_lap.html(value);
      var total_am1 = Number(value) * parseInt(375);
      items_value_lap.html(total_am1.toFixed(2));
    }
    $(".lap_TotalAmt .delete").click( function () {
    $(".lap_cartSection").css("display","none");
    });

});


// laptop view of the images.............
$("table .picture_1").click( function () {
    smallpicture_count(1);
});

$(".X_image img").click(function (){
  $(".X_image").css("display","none");
  $(".cartSection").css("display", "block");
  $(".Slide_container").removeClass("show");
  $("body").removeClass("bodyShow");
  $(".small_images").css("display","none");
  $("#header").css("border-bottom-color","gray");
  $(".header_a, .logo_button, .lap_cart_button, .avatar_button, button, input, .button_section").removeClass("background");
  $(".adding_cart").css("color","white");
  $("td img, button img, adding_cart").removeClass("opacity");
});

function smallpicture_count(n) {
  $(".X_image").css("display","block");
  $(".cartSection").css("display", "none");
  $(".Slide_container").addClass("show");
  $("body").addClass("bodyShow");
  $(".small_images").css("display","block");
  $("#header").css("border-bottom-color","hsl(0, 0%, 0%,0.2)");
  $(".header_a, .logo_button, .lap_cart_button, .avatar_button, button, input, .button_section").addClass("background");
  $(".adding_cart").css("color","hsl(0, 0%, 0%,0.4)");
  $("td img, button img, adding_cart").addClass("opacity");
  $(".slides_a img").css("border-radius","10px");
  currentSlide(n);
}
