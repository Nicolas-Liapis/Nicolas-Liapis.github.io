function email() {
  document.getElementById('email').innerHTML = "nicolas.liapis.dev@gmail.com";
}

$('#email').click(function() {
  $('#email').animate({
    opacity: 0.25,
    height: "toggle"
  }, 10000, function() {});
});

$('#popup').click(function() {
  alert('Stop poking me and click on the sandwich if you want to learn more!');
});
