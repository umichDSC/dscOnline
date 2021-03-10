function changeButtonHTML(obj) {
  var element = document.body;
  var head = document.getElementById("headerContainer");
  var headText = document.getElementById("header");
  if (obj.innerHTML == "Dark Mode") {
    obj.innerHTML = "Light Mode";
    element.classList.toggle("dark2");
    head.classList.toggle("dark");
    headText.classList.toggle("dark");
    return;
  }
  if (obj.innerHTML == "Light Mode") {
    obj.innerHTML = "Dark Mode";
    element.classList.toggle("dark2");
    head.classList.toggle("dark");
    headText.classList.toggle("dark");
    return;
  }
}

jQuery(function ($) {
  var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
  $("ul a").each(function () {
    if (this.href === path) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
});
