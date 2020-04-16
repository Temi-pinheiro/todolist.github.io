//Check off specific todos.clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
})


//Click the X to delete TODO
$("ul").on("click", "span", function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  e.stopPropagation();
})

$("input[type='text']").keypress(function(e){
  if (e.which === 13) {
    //grabbing new todo from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " +todoText +"</li>")
  }
})

$("h1 span").click(function(){
  $("input[type='text']").fadeToggle(400);
})
