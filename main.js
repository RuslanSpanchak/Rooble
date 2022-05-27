$("#services_btn_dark").hide(0)
$("#sun").hide(0)
$("#dark_mode_text").html("увімк.")

$("#btn_search").click(function() {

  let info = input_search.value;
  btn_search.setAttribute("href", "https://www.google.com.ua/search?q=" + info);

  input_search.value = "";

})

$("#services_btn").click(function() {

  $("#services_popup").css("opacity", "1")
  $("#services_popup").css("visibility", "visible")
  $("#services_content").css("transform", "translate(0px, 0px)")
  $("#services_content").css("opacity", "1")

})

$("#services_close_icon").click(function() {

  $("#services_popup").css("opacity", "0")
  $("#services_popup").css("visibility", "hidden")
  $("#services_content").css("transform", "translate(0px, -100%)")
  $("#services_content").css("opacity", "0")

})

$("#services_btn_dark").click(function() {

  $("#services_popup").css("opacity", "1")
  $("#services_popup").css("visibility", "visible")
  $("#services_content").css("transform", "translate(0px, 0px)")
  $("#services_content").css("opacity", "1")

})

$("#services_close_icon").click(function() {

  $(".services").css("opacity", "0")
  $(".services").css("visibility", "hidden")
  $(".services_content").css("transform", "translate(0px, -100%)")
  $(".services_content").css("opacity", "0")

})

$(".services").click(function() {

  $(".services").css("opacity", "0")
  $(".services").css("visibility", "hidden")
  $(".services_content").css("transform", "translate(0px, -100%)")
  $(".services_content").css("opacity", "0")

})

$("#keyboard_btn").click(function() {

  $(".keyboard").css("opacity", "1")
  $(".keyboard").css("visibility", "visible")

})

$("#btnClose").click(function() {

  $(".keyboard").css("opacity", "0")
  $(".keyboard").css("visibility", "hidden")

})

$("#btn_settings").click(function() {

  $(".settings").css("opacity", "1")
  $(".settings").css("visibility", "visible")

})

$(".header").click(function() {

  $(".settings").css("opacity", "0")
  $(".settings").css("visibility", "hidden")

})

$(".section").click(function() {

  $(".settings").css("opacity", "0")
  $(".settings").css("visibility", "hidden")

})

$(".footer_item_top").click(function() {

  $(".settings").css("opacity", "0")
  $(".settings").css("visibility", "hidden")

})

let dark_mode = 1

$("#dark_mode").click(function() {

  if (dark_mode === 1) {

    $(".wrap").css("background-color", "#fff")
    $(".header_link").css("color", "#000")
    $(".span_blue").css("color", "#4545ff")
    $(".span_red").css("color", "#fa3939")
    $(".span_green").css("color", "#23b023")
    $(".span_yellow").css("color", "#f5f50f")
    $(".btn").css("background-color", "#f0f0f0")
    $(".btn").css("border", "1px solid #f0f0f0")
    $(".btn").css("color", "#000")
    $(".footer").css("background-color", "#f0f0f0")
    $(".footer_item_top").css("border-bottom", "1px solid #999")

    $(".settings").css("opacity", "0")
    $(".settings").css("visibility", "hidden")

    $(".settings").css("background-color", "#fff")
    $(".settings_item_text").css("color", "#000")
    $("#dark_mode").css("background-color", "#fff")
    $("#background").css("background-color", "#fff")

    $(".input").css("color", "#000")
    $("#services_btn_dark").show(0)
    $("#services_btn").hide(0)
    $("#sun").show(0)
    $("#moon").hide(0)
    $("#dark_mode_text").html("вимк.")

    $(".services_content").css("background-color", "#111")

    dark_mode = 0

    $("#input_place").mouseenter(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #fff")
      $("#input_place").css("box-shadow", "0px 1px 5px #999")

    })

    $("#input_place").mouseleave(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #999")
      $("#input_place").css("box-shadow", "0px 0px 0px #000")

    })

    $("#btn_search").mouseenter(function() {

      $("#btn_search").css("border", "1px solid #999")

    })

    $("#btn_search").mouseleave(function() {

      $("#btn_search").css("border", "1px solid #f0f0f0")

    })

    $("#btn_second").mouseenter(function() {

      $("#btn_second").css("border", "1px solid #999")

    })

    $("#btn_second").mouseleave(function() {

      $("#btn_second").css("border", "1px solid #f0f0f0")

    })

    $("#dark_mode").mouseenter(function() {

      $("#dark_mode").css("background-color", "lightgrey")

    })

    $("#dark_mode").mouseleave(function() {

      $("#dark_mode").css("background-color", "#fff")

    })

    $("#background").mouseenter(function() {

      $("#background").css("background-color", "lightgrey")

    })

    $("#background").mouseleave(function() {

      $("#background").css("background-color", "#fff")

    })

    $("#services_btn_dark").mouseenter(function() {

      $("#services_btn_dark").css("background-color", "lightgrey")

    })

    $("#services_btn_dark").mouseleave(function() {

      $("#services_btn_dark").css("background-color", "#fff")

    })

  } else if (dark_mode === 0) {

    $(".wrap").css("background-color", "#222")
    $(".header_link").css("color", "#fff")
    $(".span_blue").css("color", "#fff")
    $(".span_red").css("color", "#fff")
    $(".span_green").css("color", "#fff")
    $(".span_yellow").css("color", "#fff")
    $(".btn").css("background-color", "#333")
    $(".btn").css("border", "1px solid #333")
    $(".btn").css("color", "#fff")
    $(".footer").css("background-color", "#111")
    $(".footer_item_top").css("border-bottom", "1px solid #222")

    $(".settings").css("opacity", "0")
    $(".settings").css("visibility", "hidden")

    $(".settings").css("background-color", "#444")
    $(".settings_item_text").css("color", "#fff")
    $("#dark_mode").css("background-color", "#444")
    $("#background").css("background-color", "#444")

    $("#services_btn_dark").hide(0)
    $("#services_btn").show(0)
    $("#sun").hide(0)
    $("#moon").show(0)
    $("#dark_mode_text").html("увімк.")

    $(".services_content").css("background-color", "#333")

    dark_mode = 1

    $("#input_place").mouseenter(function() {

      $("#input_place").css("background-color", "#333")
      $("#input_place").css("border", "1px solid #333")
      $("#input_place").css("box-shadow", "0px 1px 5px #000")

    })

    $("#input_place").mouseleave(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #999")
      $("#input_place").css("box-shadow", "0px 0px 0px #000")

    })

    $("#btn_search").mouseenter(function() {

      $("#btn_search").css("border", "1px solid #999")

    })

    $("#btn_search").mouseleave(function() {

      $("#btn_search").css("border", "1px solid #333")

    })

    $("#btn_second").mouseenter(function() {

      $("#btn_second").css("border", "1px solid #999")

    })

    $("#btn_second").mouseleave(function() {

      $("#btn_second").css("border", "1px solid #333")

    })

    $("#dark_mode").mouseenter(function() {

      $("#dark_mode").css("background-color", "#555")

    })

    $("#dark_mode").mouseleave(function() {

      $("#dark_mode").css("background-color", "#444")

    })

    $("#background").mouseenter(function() {

      $("#background").css("background-color", "#555")

    })

    $("#background").mouseleave(function() {

      $("#background").css("background-color", "#444")

    })

  }

})

$("#background").click(function() {

  $("#background_popup").css("opacity", "1")
  $("#background_popup").css("visibility", "visible")
  $("#background_content").css("transform", "translate(0px, 0px)")
  $("#background_content").css("opacity", "1")

  $(".settings").css("opacity", "0")
  $(".settings").css("visibility", "hidden")

})

$("#background_close_icon").click(function() {

  $("#background_popup").css("opacity", "0")
  $("#background_popup").css("visibility", "hidden")
  $("#background_content").css("transform", "translate(0px, -100%)")
  $("#background_content").css("opacity", "0")

})

$("#background_1").click(function() {

  $(".wrap").css("background-image", 'url("./img/background-site.jpg")')
  $(".services").css("opacity", "0")
  $(".services").css("visibility", "hidden")
  $(".services_content").css("transform", "translate(0px, -100%)")
  $(".services_content").css("opacity", "0")

  $(".wrap").css("background-color", "#fff")
    $(".header_link").css("color", "#000")
    $(".span_blue").css("color", "#4545ff")
    $(".span_red").css("color", "#fa3939")
    $(".span_green").css("color", "#23b023")
    $(".span_yellow").css("color", "#f5f50f")
    $(".btn").css("background-color", "#f0f0f0")
    $(".btn").css("border", "1px solid #f0f0f0")
    $(".btn").css("color", "#000")
    $(".footer").css("background-color", "#f0f0f0")
    $(".footer_item_top").css("border-bottom", "1px solid #999")

    $(".settings").css("opacity", "0")
    $(".settings").css("visibility", "hidden")

    $(".settings").css("background-color", "#fff")
    $(".settings_item_text").css("color", "#000")
    $("#dark_mode").css("background-color", "#fff")
    $("#background").css("background-color", "#fff")

    $(".input").css("color", "#000")
    $("#services_btn_dark").show(0)
    $("#services_btn").hide(0)

    dark_mode = 0

    $("#input_place").mouseenter(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #fff")
      $("#input_place").css("box-shadow", "0px 1px 5px #999")

    })

    $("#input_place").mouseleave(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #999")
      $("#input_place").css("box-shadow", "0px 0px 0px #000")

    })

    $("#btn_search").mouseenter(function() {

      $("#btn_search").css("border", "1px solid #999")

    })

    $("#btn_search").mouseleave(function() {

      $("#btn_search").css("border", "1px solid #f0f0f0")

    })

    $("#btn_second").mouseenter(function() {

      $("#btn_second").css("border", "1px solid #999")

    })

    $("#btn_second").mouseleave(function() {

      $("#btn_second").css("border", "1px solid #f0f0f0")

    })

    $("#dark_mode").mouseenter(function() {

      $("#dark_mode").css("background-color", "lightgrey")

    })

    $("#dark_mode").mouseleave(function() {

      $("#dark_mode").css("background-color", "#fff")

    })

    $("#background").mouseenter(function() {

      $("#background").css("background-color", "lightgrey")

    })

    $("#background").mouseleave(function() {

      $("#background").css("background-color", "#fff")

    })

    $("#services_btn_dark").mouseenter(function() {

      $("#services_btn_dark").css("background-color", "lightgrey")

    })

    $("#services_btn_dark").mouseleave(function() {

      $("#services_btn_dark").css("background-color", "#fff")

    })

})

$("#background_2").click(function() {

  $(".wrap").css("background-image", 'url("./img/site-background.jpg")')
  $(".services").css("opacity", "0")
  $(".services").css("visibility", "hidden")
  $(".services_content").css("transform", "translate(0px, -100%)")
  $(".services_content").css("opacity", "0")

  $(".wrap").css("background-color", "#222")
    $(".header_link").css("color", "#fff")
    $(".span_blue").css("color", "#fff")
    $(".span_red").css("color", "#fff")
    $(".span_green").css("color", "#fff")
    $(".span_yellow").css("color", "#fff")
    $(".btn").css("background-color", "#333")
    $(".btn").css("border", "1px solid #333")
    $(".btn").css("color", "#fff")
    $(".footer").css("background-color", "#111")
    $(".footer_item_top").css("border-bottom", "1px solid #222")

    $(".settings").css("opacity", "0")
    $(".settings").css("visibility", "hidden")

    $(".settings").css("background-color", "#444")
    $(".settings_item_text").css("color", "#fff")
    $("#dark_mode").css("background-color", "#444")
    $("#background").css("background-color", "#444")

    $("#services_btn_dark").hide(0)
    $("#services_btn").show(0)

    dark_mode = 1

    $("#input_place").mouseenter(function() {

      $("#input_place").css("background-color", "#333")
      $("#input_place").css("border", "1px solid #333")
      $("#input_place").css("box-shadow", "0px 1px 5px #000")

    })

    $("#input_place").mouseleave(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #999")
      $("#input_place").css("box-shadow", "0px 0px 0px #000")

    })

    $("#btn_search").mouseenter(function() {

      $("#btn_search").css("border", "1px solid #999")

    })

    $("#btn_search").mouseleave(function() {

      $("#btn_search").css("border", "1px solid #333")

    })

    $("#btn_second").mouseenter(function() {

      $("#btn_second").css("border", "1px solid #999")

    })

    $("#btn_second").mouseleave(function() {

      $("#btn_second").css("border", "1px solid #333")

    })

    $("#dark_mode").mouseenter(function() {

      $("#dark_mode").css("background-color", "#555")

    })

    $("#dark_mode").mouseleave(function() {

      $("#dark_mode").css("background-color", "#444")

    })

    $("#background").mouseenter(function() {

      $("#background").css("background-color", "#555")

    })

    $("#background").mouseleave(function() {

      $("#background").css("background-color", "#444")

    })

})

$("#background_3").click(function() {

  $(".wrap").css("background-image", 'url("./img/Zz0zZTliMjQ4MzhlNGExMWViYmJiMjFiZTI2ZWNmN2MzZA==.jpg")')
  $(".services").css("opacity", "0")
  $(".services").css("visibility", "hidden")
  $(".services_content").css("transform", "translate(0px, -100%)")
  $(".services_content").css("opacity", "0")

  $(".wrap").css("background-color", "#fff")
    $(".header_link").css("color", "#000")
    $(".span_blue").css("color", "#4545ff")
    $(".span_red").css("color", "#fa3939")
    $(".span_green").css("color", "#23b023")
    $(".span_yellow").css("color", "#f5f50f")
    $(".btn").css("background-color", "#f0f0f0")
    $(".btn").css("border", "1px solid #f0f0f0")
    $(".btn").css("color", "#000")
    $(".footer").css("background-color", "#f0f0f0")
    $(".footer_item_top").css("border-bottom", "1px solid #999")

    $(".settings").css("opacity", "0")
    $(".settings").css("visibility", "hidden")

    $(".settings").css("background-color", "#fff")
    $(".settings_item_text").css("color", "#000")
    $("#dark_mode").css("background-color", "#fff")
    $("#background").css("background-color", "#fff")

    $(".input").css("color", "#000")
    $("#services_btn_dark").show(0)
    $("#services_btn").hide(0)

    dark_mode = 0

    $("#input_place").mouseenter(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #fff")
      $("#input_place").css("box-shadow", "0px 1px 5px #999")

    })

    $("#input_place").mouseleave(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #999")
      $("#input_place").css("box-shadow", "0px 0px 0px #000")

    })

    $("#btn_search").mouseenter(function() {

      $("#btn_search").css("border", "1px solid #999")

    })

    $("#btn_search").mouseleave(function() {

      $("#btn_search").css("border", "1px solid #f0f0f0")

    })

    $("#btn_second").mouseenter(function() {

      $("#btn_second").css("border", "1px solid #999")

    })

    $("#btn_second").mouseleave(function() {

      $("#btn_second").css("border", "1px solid #f0f0f0")

    })

    $("#dark_mode").mouseenter(function() {

      $("#dark_mode").css("background-color", "lightgrey")

    })

    $("#dark_mode").mouseleave(function() {

      $("#dark_mode").css("background-color", "#fff")

    })

    $("#background").mouseenter(function() {

      $("#background").css("background-color", "lightgrey")

    })

    $("#background").mouseleave(function() {

      $("#background").css("background-color", "#fff")

    })

    $("#services_btn_dark").mouseenter(function() {

      $("#services_btn_dark").css("background-color", "lightgrey")

    })

    $("#services_btn_dark").mouseleave(function() {

      $("#services_btn_dark").css("background-color", "#fff")

    })

})

$("#background_4").click(function() {

  $(".wrap").css("background-image", 'url("./img/pexels-pixabay-531880.jpg")')
  $(".services").css("opacity", "0")
  $(".services").css("visibility", "hidden")
  $(".services_content").css("transform", "translate(0px, -100%)")
  $(".services_content").css("opacity", "0")

  $(".wrap").css("background-color", "#222")
    $(".header_link").css("color", "#fff")
    $(".span_blue").css("color", "#fff")
    $(".span_red").css("color", "#fff")
    $(".span_green").css("color", "#fff")
    $(".span_yellow").css("color", "#fff")
    $(".btn").css("background-color", "#333")
    $(".btn").css("border", "1px solid #333")
    $(".btn").css("color", "#fff")
    $(".footer").css("background-color", "#111")
    $(".footer_item_top").css("border-bottom", "1px solid #222")

    $(".settings").css("opacity", "0")
    $(".settings").css("visibility", "hidden")

    $(".settings").css("background-color", "#444")
    $(".settings_item_text").css("color", "#fff")
    $("#dark_mode").css("background-color", "#444")
    $("#background").css("background-color", "#444")

    $("#services_btn_dark").hide(0)
    $("#services_btn").show(0)

    dark_mode = 1

    $("#input_place").mouseenter(function() {

      $("#input_place").css("background-color", "#333")
      $("#input_place").css("border", "1px solid #333")
      $("#input_place").css("box-shadow", "0px 1px 5px #000")

    })

    $("#input_place").mouseleave(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #999")
      $("#input_place").css("box-shadow", "0px 0px 0px #000")

    })

    $("#btn_search").mouseenter(function() {

      $("#btn_search").css("border", "1px solid #999")

    })

    $("#btn_search").mouseleave(function() {

      $("#btn_search").css("border", "1px solid #333")

    })

    $("#btn_second").mouseenter(function() {

      $("#btn_second").css("border", "1px solid #999")

    })

    $("#btn_second").mouseleave(function() {

      $("#btn_second").css("border", "1px solid #333")

    })

    $("#dark_mode").mouseenter(function() {

      $("#dark_mode").css("background-color", "#555")

    })

    $("#dark_mode").mouseleave(function() {

      $("#dark_mode").css("background-color", "#444")

    })

    $("#background").mouseenter(function() {

      $("#background").css("background-color", "#555")

    })

    $("#background").mouseleave(function() {

      $("#background").css("background-color", "#444")

    })

})

$("#background_5").click(function() {

  $(".wrap").css("background-image", 'url("./img/sea-edge-79ab30e2.png")')
  $(".services").css("opacity", "0")
  $(".services").css("visibility", "hidden")
  $(".services_content").css("transform", "translate(0px, -100%)")
  $(".services_content").css("opacity", "0")

  $(".wrap").css("background-color", "#fff")
    $(".header_link").css("color", "#000")
    $(".span_blue").css("color", "#4545ff")
    $(".span_red").css("color", "#fa3939")
    $(".span_green").css("color", "#23b023")
    $(".span_yellow").css("color", "#f5f50f")
    $(".btn").css("background-color", "#f0f0f0")
    $(".btn").css("border", "1px solid #f0f0f0")
    $(".btn").css("color", "#000")
    $(".footer").css("background-color", "#f0f0f0")
    $(".footer_item_top").css("border-bottom", "1px solid #999")

    $(".settings").css("opacity", "0")
    $(".settings").css("visibility", "hidden")

    $(".settings").css("background-color", "#fff")
    $(".settings_item_text").css("color", "#000")
    $("#dark_mode").css("background-color", "#fff")
    $("#background").css("background-color", "#fff")

    $(".input").css("color", "#000")
    $("#services_btn_dark").show(0)
    $("#services_btn").hide(0)

    dark_mode = 0

    $("#input_place").mouseenter(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #fff")
      $("#input_place").css("box-shadow", "0px 1px 5px #999")

    })

    $("#input_place").mouseleave(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #999")
      $("#input_place").css("box-shadow", "0px 0px 0px #000")

    })

    $("#btn_search").mouseenter(function() {

      $("#btn_search").css("border", "1px solid #999")

    })

    $("#btn_search").mouseleave(function() {

      $("#btn_search").css("border", "1px solid #f0f0f0")

    })

    $("#btn_second").mouseenter(function() {

      $("#btn_second").css("border", "1px solid #999")

    })

    $("#btn_second").mouseleave(function() {

      $("#btn_second").css("border", "1px solid #f0f0f0")

    })

    $("#dark_mode").mouseenter(function() {

      $("#dark_mode").css("background-color", "lightgrey")

    })

    $("#dark_mode").mouseleave(function() {

      $("#dark_mode").css("background-color", "#fff")

    })

    $("#background").mouseenter(function() {

      $("#background").css("background-color", "lightgrey")

    })

    $("#background").mouseleave(function() {

      $("#background").css("background-color", "#fff")

    })

    $("#services_btn_dark").mouseenter(function() {

      $("#services_btn_dark").css("background-color", "lightgrey")

    })

    $("#services_btn_dark").mouseleave(function() {

      $("#services_btn_dark").css("background-color", "#fff")

    })

})

$("#background_6").click(function() {

  $(".wrap").css("background-image", 'url("./img/istockphoto-1293539824-170667a.jpg")')
  $(".services").css("opacity", "0")
  $(".services").css("visibility", "hidden")
  $(".services_content").css("transform", "translate(0px, -100%)")
  $(".services_content").css("opacity", "0")

  $(".wrap").css("background-color", "#222")
    $(".header_link").css("color", "#fff")
    $(".span_blue").css("color", "#fff")
    $(".span_red").css("color", "#fff")
    $(".span_green").css("color", "#fff")
    $(".span_yellow").css("color", "#fff")
    $(".btn").css("background-color", "#333")
    $(".btn").css("border", "1px solid #333")
    $(".btn").css("color", "#fff")
    $(".footer").css("background-color", "#111")
    $(".footer_item_top").css("border-bottom", "1px solid #222")

    $(".settings").css("opacity", "0")
    $(".settings").css("visibility", "hidden")

    $(".settings").css("background-color", "#444")
    $(".settings_item_text").css("color", "#fff")
    $("#dark_mode").css("background-color", "#444")
    $("#background").css("background-color", "#444")

    $("#services_btn_dark").hide(0)
    $("#services_btn").show(0)

    dark_mode = 1

    $("#input_place").mouseenter(function() {

      $("#input_place").css("background-color", "#333")
      $("#input_place").css("border", "1px solid #333")
      $("#input_place").css("box-shadow", "0px 1px 5px #000")

    })

    $("#input_place").mouseleave(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #999")
      $("#input_place").css("box-shadow", "0px 0px 0px #000")

    })

    $("#btn_search").mouseenter(function() {

      $("#btn_search").css("border", "1px solid #999")

    })

    $("#btn_search").mouseleave(function() {

      $("#btn_search").css("border", "1px solid #333")

    })

    $("#btn_second").mouseenter(function() {

      $("#btn_second").css("border", "1px solid #999")

    })

    $("#btn_second").mouseleave(function() {

      $("#btn_second").css("border", "1px solid #333")

    })

    $("#dark_mode").mouseenter(function() {

      $("#dark_mode").css("background-color", "#555")

    })

    $("#dark_mode").mouseleave(function() {

      $("#dark_mode").css("background-color", "#444")

    })

    $("#background").mouseenter(function() {

      $("#background").css("background-color", "#555")

    })

    $("#background").mouseleave(function() {

      $("#background").css("background-color", "#444")

    })

})

$("#background_7").click(function() {

  $(".wrap").css("background-image", 'url("./img/website-background-image-size-psd-vector-photo.jpg")')
  $(".services").css("opacity", "0")
  $(".services").css("visibility", "hidden")
  $(".services_content").css("transform", "translate(0px, -100%)")
  $(".services_content").css("opacity", "0")

  $(".wrap").css("background-color", "#222")
    $(".header_link").css("color", "#fff")
    $(".span_blue").css("color", "#fff")
    $(".span_red").css("color", "#fff")
    $(".span_green").css("color", "#fff")
    $(".span_yellow").css("color", "#fff")
    $(".btn").css("background-color", "#333")
    $(".btn").css("border", "1px solid #333")
    $(".btn").css("color", "#fff")
    $(".footer").css("background-color", "#111")
    $(".footer_item_top").css("border-bottom", "1px solid #222")

    $(".settings").css("opacity", "0")
    $(".settings").css("visibility", "hidden")

    $(".settings").css("background-color", "#444")
    $(".settings_item_text").css("color", "#fff")
    $("#dark_mode").css("background-color", "#444")
    $("#background").css("background-color", "#444")

    $("#services_btn_dark").hide(0)
    $("#services_btn").show(0)

    dark_mode = 1

    $("#input_place").mouseenter(function() {

      $("#input_place").css("background-color", "#333")
      $("#input_place").css("border", "1px solid #333")
      $("#input_place").css("box-shadow", "0px 1px 5px #000")

    })

    $("#input_place").mouseleave(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #999")
      $("#input_place").css("box-shadow", "0px 0px 0px #000")

    })

    $("#btn_search").mouseenter(function() {

      $("#btn_search").css("border", "1px solid #999")

    })

    $("#btn_search").mouseleave(function() {

      $("#btn_search").css("border", "1px solid #333")

    })

    $("#btn_second").mouseenter(function() {

      $("#btn_second").css("border", "1px solid #999")

    })

    $("#btn_second").mouseleave(function() {

      $("#btn_second").css("border", "1px solid #333")

    })

    $("#dark_mode").mouseenter(function() {

      $("#dark_mode").css("background-color", "#555")

    })

    $("#dark_mode").mouseleave(function() {

      $("#dark_mode").css("background-color", "#444")

    })

    $("#background").mouseenter(function() {

      $("#background").css("background-color", "#555")

    })

    $("#background").mouseleave(function() {

      $("#background").css("background-color", "#444")

    })

})

$("#background_8").click(function() {

  $(".wrap").css("background-image", 'url("./img/Background-website-01.jpg")')
  $(".services").css("opacity", "0")
  $(".services").css("visibility", "hidden")
  $(".services_content").css("transform", "translate(0px, -100%)")
  $(".services_content").css("opacity", "0")

  $(".wrap").css("background-color", "#fff")
    $(".header_link").css("color", "#000")
    $(".span_blue").css("color", "#4545ff")
    $(".span_red").css("color", "#fa3939")
    $(".span_green").css("color", "#23b023")
    $(".span_yellow").css("color", "#f5f50f")
    $(".btn").css("background-color", "#f0f0f0")
    $(".btn").css("border", "1px solid #f0f0f0")
    $(".btn").css("color", "#000")
    $(".footer").css("background-color", "#f0f0f0")
    $(".footer_item_top").css("border-bottom", "1px solid #999")

    $(".settings").css("opacity", "0")
    $(".settings").css("visibility", "hidden")

    $(".settings").css("background-color", "#fff")
    $(".settings_item_text").css("color", "#000")
    $("#dark_mode").css("background-color", "#fff")
    $("#background").css("background-color", "#fff")

    $(".input").css("color", "#000")
    $("#services_btn_dark").show(0)
    $("#services_btn").hide(0)

    dark_mode = 0

    $("#input_place").mouseenter(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #fff")
      $("#input_place").css("box-shadow", "0px 1px 5px #999")

    })

    $("#input_place").mouseleave(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #999")
      $("#input_place").css("box-shadow", "0px 0px 0px #000")

    })

    $("#btn_search").mouseenter(function() {

      $("#btn_search").css("border", "1px solid #999")

    })

    $("#btn_search").mouseleave(function() {

      $("#btn_search").css("border", "1px solid #f0f0f0")

    })

    $("#btn_second").mouseenter(function() {

      $("#btn_second").css("border", "1px solid #999")

    })

    $("#btn_second").mouseleave(function() {

      $("#btn_second").css("border", "1px solid #f0f0f0")

    })

    $("#dark_mode").mouseenter(function() {

      $("#dark_mode").css("background-color", "lightgrey")

    })

    $("#dark_mode").mouseleave(function() {

      $("#dark_mode").css("background-color", "#fff")

    })

    $("#background").mouseenter(function() {

      $("#background").css("background-color", "lightgrey")

    })

    $("#background").mouseleave(function() {

      $("#background").css("background-color", "#fff")

    })

    $("#services_btn_dark").mouseenter(function() {

      $("#services_btn_dark").css("background-color", "lightgrey")

    })

    $("#services_btn_dark").mouseleave(function() {

      $("#services_btn_dark").css("background-color", "#fff")

    })

})

$("#background_9").click(function() {

  $(".wrap").css("background-image", 'url("./img/Elegant_Background-3.jpg")')
  $(".services").css("opacity", "0")
  $(".services").css("visibility", "hidden")
  $(".services_content").css("transform", "translate(0px, -100%)")
  $(".services_content").css("opacity", "0")

  $(".wrap").css("background-color", "#222")
    $(".header_link").css("color", "#fff")
    $(".span_blue").css("color", "#fff")
    $(".span_red").css("color", "#fff")
    $(".span_green").css("color", "#fff")
    $(".span_yellow").css("color", "#fff")
    $(".btn").css("background-color", "#333")
    $(".btn").css("border", "1px solid #333")
    $(".btn").css("color", "#fff")
    $(".footer").css("background-color", "#111")
    $(".footer_item_top").css("border-bottom", "1px solid #222")

    $(".settings").css("opacity", "0")
    $(".settings").css("visibility", "hidden")

    $(".settings").css("background-color", "#444")
    $(".settings_item_text").css("color", "#fff")
    $("#dark_mode").css("background-color", "#444")
    $("#background").css("background-color", "#444")

    $("#services_btn_dark").hide(0)
    $("#services_btn").show(0)

    dark_mode = 1

    $("#input_place").mouseenter(function() {

      $("#input_place").css("background-color", "#333")
      $("#input_place").css("border", "1px solid #333")
      $("#input_place").css("box-shadow", "0px 1px 5px #000")

    })

    $("#input_place").mouseleave(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #999")
      $("#input_place").css("box-shadow", "0px 0px 0px #000")

    })

    $("#btn_search").mouseenter(function() {

      $("#btn_search").css("border", "1px solid #999")

    })

    $("#btn_search").mouseleave(function() {

      $("#btn_search").css("border", "1px solid #333")

    })

    $("#btn_second").mouseenter(function() {

      $("#btn_second").css("border", "1px solid #999")

    })

    $("#btn_second").mouseleave(function() {

      $("#btn_second").css("border", "1px solid #333")

    })

    $("#dark_mode").mouseenter(function() {

      $("#dark_mode").css("background-color", "#555")

    })

    $("#dark_mode").mouseleave(function() {

      $("#dark_mode").css("background-color", "#444")

    })

    $("#background").mouseenter(function() {

      $("#background").css("background-color", "#555")

    })

    $("#background").mouseleave(function() {

      $("#background").css("background-color", "#444")

    })

})

$("#background_10").click(function() {

  $(".wrap").css("background-image", 'url("./img/0_AIiBI_PACYwsqIrd.jpg")')
  $(".services").css("opacity", "0")
  $(".services").css("visibility", "hidden")
  $(".services_content").css("transform", "translate(0px, -100%)")
  $(".services_content").css("opacity", "0")

  $(".wrap").css("background-color", "#fff")
    $(".header_link").css("color", "#000")
    $(".span_blue").css("color", "#4545ff")
    $(".span_red").css("color", "#fa3939")
    $(".span_green").css("color", "#23b023")
    $(".span_yellow").css("color", "#f5f50f")
    $(".btn").css("background-color", "#f0f0f0")
    $(".btn").css("border", "1px solid #f0f0f0")
    $(".btn").css("color", "#000")
    $(".footer").css("background-color", "#f0f0f0")
    $(".footer_item_top").css("border-bottom", "1px solid #999")

    $(".settings").css("opacity", "0")
    $(".settings").css("visibility", "hidden")

    $(".settings").css("background-color", "#fff")
    $(".settings_item_text").css("color", "#000")
    $("#dark_mode").css("background-color", "#fff")
    $("#background").css("background-color", "#fff")

    $(".input").css("color", "#000")
    $("#services_btn_dark").show(0)
    $("#services_btn").hide(0)

    dark_mode = 0

    $("#input_place").mouseenter(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #fff")
      $("#input_place").css("box-shadow", "0px 1px 5px #999")

    })

    $("#input_place").mouseleave(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #999")
      $("#input_place").css("box-shadow", "0px 0px 0px #000")

    })

    $("#btn_search").mouseenter(function() {

      $("#btn_search").css("border", "1px solid #999")

    })

    $("#btn_search").mouseleave(function() {

      $("#btn_search").css("border", "1px solid #f0f0f0")

    })

    $("#btn_second").mouseenter(function() {

      $("#btn_second").css("border", "1px solid #999")

    })

    $("#btn_second").mouseleave(function() {

      $("#btn_second").css("border", "1px solid #f0f0f0")

    })

    $("#dark_mode").mouseenter(function() {

      $("#dark_mode").css("background-color", "lightgrey")

    })

    $("#dark_mode").mouseleave(function() {

      $("#dark_mode").css("background-color", "#fff")

    })

    $("#background").mouseenter(function() {

      $("#background").css("background-color", "lightgrey")

    })

    $("#background").mouseleave(function() {

      $("#background").css("background-color", "#fff")

    })

    $("#services_btn_dark").mouseenter(function() {

      $("#services_btn_dark").css("background-color", "lightgrey")

    })

    $("#services_btn_dark").mouseleave(function() {

      $("#services_btn_dark").css("background-color", "#fff")

    })

})

$("#background_11").click(function() {

  $(".wrap").css("background-image", 'url("./img/Savin-NY-Website-Background-Web1.jpg")')
  $(".services").css("opacity", "0")
  $(".services").css("visibility", "hidden")
  $(".services_content").css("transform", "translate(0px, -100%)")
  $(".services_content").css("opacity", "0")

  $(".wrap").css("background-color", "#fff")
    $(".header_link").css("color", "#000")
    $(".span_blue").css("color", "#4545ff")
    $(".span_red").css("color", "#fa3939")
    $(".span_green").css("color", "#23b023")
    $(".span_yellow").css("color", "#f5f50f")
    $(".btn").css("background-color", "#f0f0f0")
    $(".btn").css("border", "1px solid #f0f0f0")
    $(".btn").css("color", "#000")
    $(".footer").css("background-color", "#f0f0f0")
    $(".footer_item_top").css("border-bottom", "1px solid #999")

    $(".settings").css("opacity", "0")
    $(".settings").css("visibility", "hidden")

    $(".settings").css("background-color", "#fff")
    $(".settings_item_text").css("color", "#000")
    $("#dark_mode").css("background-color", "#fff")
    $("#background").css("background-color", "#fff")

    $(".input").css("color", "#000")
    $("#services_btn_dark").show(0)
    $("#services_btn").hide(0)

    dark_mode = 0

    $("#input_place").mouseenter(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #fff")
      $("#input_place").css("box-shadow", "0px 1px 5px #999")

    })

    $("#input_place").mouseleave(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #999")
      $("#input_place").css("box-shadow", "0px 0px 0px #000")

    })

    $("#btn_search").mouseenter(function() {

      $("#btn_search").css("border", "1px solid #999")

    })

    $("#btn_search").mouseleave(function() {

      $("#btn_search").css("border", "1px solid #f0f0f0")

    })

    $("#btn_second").mouseenter(function() {

      $("#btn_second").css("border", "1px solid #999")

    })

    $("#btn_second").mouseleave(function() {

      $("#btn_second").css("border", "1px solid #f0f0f0")

    })

    $("#dark_mode").mouseenter(function() {

      $("#dark_mode").css("background-color", "lightgrey")

    })

    $("#dark_mode").mouseleave(function() {

      $("#dark_mode").css("background-color", "#fff")

    })

    $("#background").mouseenter(function() {

      $("#background").css("background-color", "lightgrey")

    })

    $("#background").mouseleave(function() {

      $("#background").css("background-color", "#fff")

    })

    $("#services_btn_dark").mouseenter(function() {

      $("#services_btn_dark").css("background-color", "lightgrey")

    })

    $("#services_btn_dark").mouseleave(function() {

      $("#services_btn_dark").css("background-color", "#fff")

    })

})

$("#background_12").click(function() {

  $(".wrap").css("background-image", 'url("./img/337-3371635_must-have-seamless-patterns-for-website-backgrounds-blue.jpg")')
  $(".services").css("opacity", "0")
  $(".services").css("visibility", "hidden")
  $(".services_content").css("transform", "translate(0px, -100%)")
  $(".services_content").css("opacity", "0")

  $(".wrap").css("background-color", "#222")
    $(".header_link").css("color", "#fff")
    $(".span_blue").css("color", "#fff")
    $(".span_red").css("color", "#fff")
    $(".span_green").css("color", "#fff")
    $(".span_yellow").css("color", "#fff")
    $(".btn").css("background-color", "#333")
    $(".btn").css("border", "1px solid #333")
    $(".btn").css("color", "#fff")
    $(".footer").css("background-color", "#111")
    $(".footer_item_top").css("border-bottom", "1px solid #222")

    $(".settings").css("opacity", "0")
    $(".settings").css("visibility", "hidden")

    $(".settings").css("background-color", "#444")
    $(".settings_item_text").css("color", "#fff")
    $("#dark_mode").css("background-color", "#444")
    $("#background").css("background-color", "#444")

    $("#services_btn_dark").hide(0)
    $("#services_btn").show(0)

    dark_mode = 1

    $("#input_place").mouseenter(function() {

      $("#input_place").css("background-color", "#333")
      $("#input_place").css("border", "1px solid #333")
      $("#input_place").css("box-shadow", "0px 1px 5px #000")

    })

    $("#input_place").mouseleave(function() {

      $("#input_place").css("background-color", "transparent")
      $("#input_place").css("border", "1px solid #999")
      $("#input_place").css("box-shadow", "0px 0px 0px #000")

    })

    $("#btn_search").mouseenter(function() {

      $("#btn_search").css("border", "1px solid #999")

    })

    $("#btn_search").mouseleave(function() {

      $("#btn_search").css("border", "1px solid #333")

    })

    $("#btn_second").mouseenter(function() {

      $("#btn_second").css("border", "1px solid #999")

    })

    $("#btn_second").mouseleave(function() {

      $("#btn_second").css("border", "1px solid #333")

    })

    $("#dark_mode").mouseenter(function() {

      $("#dark_mode").css("background-color", "#555")

    })

    $("#dark_mode").mouseleave(function() {

      $("#dark_mode").css("background-color", "#444")

    })

    $("#background").mouseenter(function() {

      $("#background").css("background-color", "#555")

    })

    $("#background").mouseleave(function() {

      $("#background").css("background-color", "#444")

    })

})

let str = ""

$("#btnQ").click(function() {

  str += "q"
  input_search.value = str

})

$("#btnE").click(function() {

  str += "e"
  input_search.value = str

})

$("#btnW").click(function() {

  str += "w"
  input_search.value = str

})

$("#btnR").click(function() {

  str += "r"
  input_search.value = str

})

$("#btnT").click(function() {

  str += "t"
  input_search.value = str

})

$("#btnY").click(function() {

  str += "y"
  input_search.value = str

})

$("#btnU").click(function() {

  str += "u"
  input_search.value = str

})

$("#btnI").click(function() {

  str += "i"
  input_search.value = str

})

$("#btnO").click(function() {

  str += "o"
  input_search.value = str

})

$("#btnP").click(function() {

  str += "p"
  input_search.value = str

})

$("#btnA").click(function() {

  str += "a"
  input_search.value = str

})

$("#btnS").click(function() {

  str += "s"
  input_search.value = str

})

$("#btnD").click(function() {

  str += "d"
  input_search.value = str

})

$("#btnF").click(function() {

  str += "f"
  input_search.value = str

})

$("#btnG").click(function() {

  str += "g"
  input_search.value = str

})

$("#btnH").click(function() {

  str += "h"
  input_search.value = str

})

$("#btnJ").click(function() {

  str += "j"
  input_search.value = str

})

$("#btnK").click(function() {

  str += "k"
  input_search.value = str

})

$("#btnL").click(function() {

  str += "l"
  input_search.value = str

})

$("#btnenter").click(function() {

  let info = input_search.value;
  btn_search.setAttribute("href", "https://www.google.com.ua/search?q=" + info);

  input_search.value = "";
  console.log(input_search.value)

})

$("#btnZ").click(function() {

  str += "z"
  input_search.value = str

})

$("#btnX").click(function() {

  str += "x"
  input_search.value = str

})

$("#btnC").click(function() {

  str += "c"
  input_search.value = str

})

$("#btnV").click(function() {

  str += "v"
  input_search.value = str

})

$("#btnB").click(function() {

  str += "b"
  input_search.value = str

})

$("#btnN").click(function() {

  str += "n"
  input_search.value = str

})

$("#btnM").click(function() {

  str += "m"
  input_search.value = str

})

$("#btnspace").click(function() {

  str += " "
  input_search.value = str

})