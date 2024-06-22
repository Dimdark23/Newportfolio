function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
      
  function showPhotos(category) {
      var i, tabcontent;
      tabcontent = document.getElementsByClassName("tab-content");
      if (category === 'all') {
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "flex";
        }
      } else {
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        document.getElementById(category).style.display = "flex";
      }
    }