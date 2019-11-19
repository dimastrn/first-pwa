document.addEventListener("DOMContentLoaded", function() {
    // Activate sidebar nav
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
    loadNav();
   
    function loadNav() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status != 200) return;
   
          // Muat daftar tautan menu
          document.querySelectorAll(".topnav, .sidenav").forEach(function(elm) {
            elm.innerHTML = xhttp.responseText;
          });
        }
      };
      xhttp.open("GET", "nav.html", true);
      xhttp.send();
    }
  });

  var page = window.location.hash.substr(1);

  if(page == "") page = "home";
  loadPage(page);

  function loadPage(page) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(this.readyState == 4) {
        var content = document.querySelector('#body-content');
        if(this.status == 200) {
          content.innerHTML = xhttp.responseText;
        } else if(this.status == 404) {
          content.innerHTML == "<p>Page Not Found";
        } else {
          content.innerHTML = "Cant Access the page";
        }
      }
    };
    xhttp.open("GET", "pages/" + page + ".html", true);
    xhttp.send();
  }