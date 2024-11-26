const body = document.querySelector("body"),
      sidebar = document.querySelector(".sidebar"),
      toggle = document.querySelector(".toggle"),
      searchBtn = document.querySelector(".search-box"),
      modeSwitch = document.querySelector(".toggle-switch"),
      modeText = document.querySelector(".mode-text");
      toggleButton = document.querySelector('.toggle-btn');
      // sidebar =document.getElementById('sidebar');

      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close")
      })

      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("light")

        if(body.classList.contains("light")){
            modeText.innerText = "Dark Mode"
        }else{
            modeText.innerText = "Light Mode"
        }
      })

      function navigateTo(page) {
          window.location.href = page;
      }

      function toggleSubMenu(button) {
          button.nextElementSibling.classList.toggle("show");
          button.classList.toggle("rotate");
      }
