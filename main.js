$("#btn_search").click(function() {

  let info = input_search.value;
  btn_search.setAttribute("href", "https://www.google.com.ua/search?q=" + info);

  input_search.value = "";

})

$("#services_btn").click(function() {

  $(".services").css("opacity", "1")
  $(".services").css("visibility", "visible")
  $(".services_content").css("transform", "translate(0px, 0px)")
  $(".services_content").css("opacity", "1")

})

$("#services_close_icon").click(function() {

  $(".services").css("opacity", "0")
  $(".services").css("visibility", "hidden")
  $(".services_content").css("transform", "translate(0px, -100%)")
  $(".services_content").css("opacity", "0")

})

$("#keyboard_btn").click(function() {

  $(".keyboard").css("opacity", "1")

})

$("#btnClose").click(function() {

  $(".keyboard").css("opacity", "0")

})