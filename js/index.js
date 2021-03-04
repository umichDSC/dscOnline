function changeButtonHTML(obj)
{
  var element = document.body;
    if (obj.innerHTML == "Dark Mode")
    {
      obj.innerHTML = "Light Mode";
      element.classList.toggle("dark")
      return;
    }
    if (obj.innerHTML == "Light Mode")
    {
      obj.innerHTML = "Dark Mode";
      element.classList.toggle("dark")
      return;
    }
}

$('.carousel').carousel({
  interval: 7000,
  pause: false
})
