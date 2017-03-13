console.log('test sourced');
buttonClicks = 0;

$(document).ready(function(){
  eventListener();
});

function eventListener() {
  $(".container").on("click",".generate",function() {
      buttonClicks++;
      $(".container").append("<div id='box'></div>");
      var $el = $(".container").children().last();
      $el.append("<p>"+buttonClicks+"</p>");
      $el.append("<button class='swap'>swap</button>");
      $el.append("<button class='delete'>delete</button>");
  });

  $(".container").on("click",".swap",function(){
    $(this).parent().css("background-color",'yellow');
  });

  $(".container").on("click",".delete",function(){
    $(this).parent().remove();
  });
}
