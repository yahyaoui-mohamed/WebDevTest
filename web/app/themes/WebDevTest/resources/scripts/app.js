import domReady from '@roots/sage/client/dom-ready';

/**
 * Application entrypoint
 */
domReady(async () => {
  document.querySelector(".navbar-toggle").addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("active");
    if (document.querySelector(".navbar-brand img").getAttribute("src") === "img/logo_light.svg") {
      document.querySelector(".navbar-brand img").setAttribute("src", "img/logo.svg");
    }
    else {
      document.querySelector(".navbar-brand img").setAttribute("src", "img/logo_light.svg");
    }
  });

  onscroll = function () {
    if (scrollY > 200) {
      document.querySelector(".navbar").classList.add("fixed");
    }
    else {
      document.querySelector(".navbar").classList.remove("fixed");

    }
  }

  document.querySelector(".form form").addEventListener("submit", function (e) {
    e.preventDefault();
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let div = document.createElement("div");
        div.setAttribute("class", "success");
        div.innerText = "Votre message a été bien envoyé !";
        document.querySelector(".message").appendChild(div);
        document.querySelector(".message").classList.add("show");
        document.getElementById("nom").value = "";
        document.getElementById("prenom").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telephone").value = "";
        document.getElementById("message").value = "";
        setTimeout(() => {
          document.querySelector(".message").classList.remove("show");
        }, 2000);
      }
    };
    ajax.open("POST", "send.php", true);
    ajax.send();
  });

  document.querySelector(".down").addEventListener("click", function () {
    scrollTo({
      top: 550,
      behavior: "smooth"
    })
  });

});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
if (import.meta.webpackHot) import.meta.webpackHot.accept(console.error);
