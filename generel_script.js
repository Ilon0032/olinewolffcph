     window.addEventListener("load", sidenVises);


     function sidenVises() {
         console.log("siden vises");
         document.querySelector("#burgermenu").addEventListener("click", burger);
     }
     // burgermenu animation -------------------------------
     function burger() {
         console.log("burgermenu change");
         this.classList.toggle("burger");
         document.querySelector("#menu").classList.toggle("hide_nav");
     }
