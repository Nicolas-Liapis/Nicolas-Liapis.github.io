function email() {
  document.getElementById('email').innerHTML = "nicolas.liapis.dev@gmail.com"
}

$('#email').click(function() {
  $('#email').animate({
    opacity: 0.25,
    height: "toggle"
  }, 10000, function() {});
});
