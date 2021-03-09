function changeButtonHTML(obj)
{
  var element = document.body;
  var head = document.getElementById('headerContainer');
  var headText = document.getElementById('header');
    if (obj.innerHTML == "Dark Mode")
    {
      obj.innerHTML = "Light Mode";
      element.classList.toggle("dark2");
      head.classList.toggle("dark");
      headText.classList.toggle("dark");
      return;
    }
    if (obj.innerHTML == "Light Mode")
    {
      obj.innerHTML = "Dark Mode";
      element.classList.toggle("dark2")
      head.classList.toggle("dark")
      headText.classList.toggle("dark");
      return;
    }
 

}

function goToComPage() {
    window.open("https://dsc.community.dev/university-of-michigan/");
}

$('.carousel').carousel({
  interval: 7000,
  pause: false
})
