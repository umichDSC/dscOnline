const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  // theme: 'light' or 'dark'
  document.documentElement.setAttribute("data-theme", currentTheme);
  const themeToggler = document.getElementById("theme-toggler");
  if (currentTheme === "dark") {
    themeToggler.checked = true;
  }
}

function toggleTheme(event) {
  const elt = event.target;
  if (elt.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    // store preference in localStorage
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    // store preference in localStorage
    localStorage.setItem("theme", "light");
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
