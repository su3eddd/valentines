$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var btn_open_flowers = $("#open-flowers");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });
  btn_open_flowers.click(function () {
    window.location.href = 'animated_flower.html'; // Change 'flowers.html' to the path of your HTML file
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});
