l = $("#img-animep").attr("src")

$("#flechaR").click(function(){
    $("#flechaL").show()
    $("#img-animep").attr("src","font.jpeg")
})
$("#flechaL").click(function(){
    $("#img-animep").attr("src", l)
    $(this).hide()
})