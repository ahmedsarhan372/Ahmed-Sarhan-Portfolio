let switcher = document.querySelector("#theme-toggle-button");
let html = document.querySelector("html");
let navLinks = document.querySelectorAll(".nav-links a");
let sections = document.querySelectorAll("section");
let settinggear = document.querySelector(".fa-gear");
let settingtoggle = document.getElementById("settings-toggle");
let settinglist = document.getElementById("settings-sidebar");
let closebtn = document.querySelector(".fa-xmark");
let elementscolor = document.querySelectorAll(".theme-color ");
let elementsbgcolor = document.querySelectorAll(".themebg-color");
let color;
let btns = document.querySelectorAll("button");
let mybtns = document.querySelectorAll(".content button");
let fontBtns = document.querySelectorAll(".font-option");
let body = document.querySelector("body");
let filterBtns = document.querySelectorAll(".portfolio-filter");
let portfolioItems = document.querySelectorAll(".portfolio-item");
let resetBtn = document.getElementById("reset-settings");


switcher.addEventListener("click", function () {
  html.classList.toggle("dark");
});

window.addEventListener("scroll", function () {
  sections.forEach(function (section) {
    let hamada = section.getBoundingClientRect();
    if (hamada.top <= 100 && hamada.bottom >= 100) {
      let currentId = section.id;
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });
      let activeLink = document.querySelector(
        `.nav-links a[href="#${currentId}"]`,
      );
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
});

settinggear.addEventListener("click", function () {
  settinglist.classList.remove("translate-x-full");
  settinggear.classList.remove("hidden");
  settingtoggle.classList.add("translate-x-[-320px]");
});

closebtn.addEventListener("click", function () {
  settinglist.classList.add("translate-x-full");
});

for (let i = 0; i < mybtns.length; i++) {
  mybtns[i].addEventListener("click", function () {
    for (let j = 0; j < mybtns.length; j++) {
      mybtns[j].classList.remove("active");
    }

    mybtns[i].classList.add("active");

    color = mybtns[i].getAttribute("data-primary");

    for (let i = 0; i < elementscolor.length; i++) {
      elementscolor[i].style.setProperty("color", color, "important");
      document.documentElement.style.setProperty("--theme-color", color);
    }
    for (let i = 0; i < elementsbgcolor.length; i++) {
      elementsbgcolor[i].style.setProperty(
        "background-image",
        "none",
        "important",
      );
      elementsbgcolor[i].style.setProperty("background", color, "important");
    }
    console.log(elementsbgcolor);
  });
}

btns.forEach(function (button) {
  button.classList.add("themebg-color");
});

fontBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    fontBtns.forEach(function (b) {
      b.classList.remove("active");
      b.setAttribute("aria-checked", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-checked", "true");
    let font = btn.getAttribute("data-font");
    body.classList.forEach(function (cls) {
      if (cls.startsWith("font-")) {
        body.classList.remove(cls);
      }
    });

    body.classList.add("font-" + font);
  });
});

let scrollTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.remove("opacity-0", "invisible");
    scrollTopBtn.classList.add("opacity-100", "visible");
  } else {
    scrollTopBtn.classList.add("opacity-0", "invisible");
    scrollTopBtn.classList.remove("opacity-100", "visible");
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    filterBtns.forEach(function (b) {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-pressed", "true");

    let filter = btn.getAttribute("data-filter");

    portfolioItems.forEach(function (item) {
      let category = item.getAttribute("data-category");

      if (filter === "all" || filter === category) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
});

resetBtn.addEventListener("click", function () {
  mybtns.forEach(function (b) {
    b.classList.remove("active");
  });

  elementscolor.forEach(function (el) {
    el.style.removeProperty("color");
  });
  document.documentElement.style.removeProperty("--theme-color");

  elementsbgcolor.forEach(function (el) {
    el.style.removeProperty("background-image");
    el.style.removeProperty("background");
  });
  let currentFontClasses = Array.from(body.classList).filter(function (c) {
    return c.startsWith("font-");
  });
  currentFontClasses.forEach(function (c) {
    body.classList.remove(c);
  });
  body.classList.add("font-tajawal");

  fontBtns.forEach(function (b) {
    b.classList.remove("active");
    b.setAttribute("aria-checked", "false");
    if (b.getAttribute("data-font") === "tajawal") {
      b.classList.add("active");
      b.setAttribute("aria-checked", "true");
    }
  });
});
