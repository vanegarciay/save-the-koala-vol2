var barra = document.getElementById("barra");

barra.addEventListener("click",function(){
    document.getElementById("menu-responsive").classList.toggle("invisible");
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})