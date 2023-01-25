jQuery(document).ready(function ($) {
  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // Stick the header at top on scroll
  $("#header").sticky({
    topSpacing: 0,
    zIndex: "50",
  });

  // Intro background carousel
  $("#intro-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    dots: true,
    loop: true,
    animateOut: "fadeOut",
    items: 1,
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $(".nav-menu").superfish({
    animation: {
      opacity: "show",
    },
    speed: 400,
  });

  // Mobile Navigation
  if ($("#nav-menu-container").length) {
    var $mobile_nav = $("#nav-menu-container").clone().prop({
      id: "mobile-nav",
    });
    $mobile_nav.find("> ul").attr({
      class: "",
      id: "",
    });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>'
    );
    $("body").append('<div id="mobile-body-overly"></div>');
    $("#mobile-nav")
      .find(".menu-has-children")
      .prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on("click", ".menu-has-children i", function (e) {
      $(this).next().toggleClass("menu-item-active");
      $(this).nextAll("ul").eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on("click", "#mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
      $("#mobile-body-overly").toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $(".nav-menu a, #mobile-nav a, .scrollto").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($("#header").length) {
          top_space = $("#header").outerHeight();

          if (!$("#header").hasClass("header-fixed")) {
            top_space = top_space - 20;
          }
        }

        $("html, body").animate(
          {
            scrollTop: target.offset().top - top_space,
          },
          1500,
          "easeInOutExpo"
        );

        if ($(this).parents(".nav-menu").length) {
          $(".nav-menu .menu-active").removeClass("menu-active");
          $(this).closest("li").addClass("menu-active");
        }

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
          $("#mobile-body-overly").fadeOut();
        }
        return false;
      }
    }
  });

  // Porfolio - uses the magnific popup jQuery plugin
  $(".portfolio-popup").magnificPopup({
    type: "image",
    removalDelay: 300,
    mainClass: "mfp-fade",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: "ease-in-out",
      opener: function (openerElement) {
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 4,
      },
      900: {
        items: 6,
      },
    },
  });
});

// Moj Javascript

// Menu
const menuTekst = new Array(
  "Home",
  "About us",
  "Services",
  "Portfolio",
  "Testimonials",
  "Register",
  "Author"
);
const menuHref = new Array(
  "index.html",
  "#about",
  "#services",
  "#portfolio",
  "#testimonials",
  "#contact",
  "author.html"
);
menuIspis = "";
for (let i = 0; i < menuTekst.length; i++) {
  menuIspis += `<li><a href="${menuHref[i]}">${menuTekst[i]}</a></li>`;
}

const navDiv = document.querySelector(".nav-menu");
navDiv.innerHTML = menuIspis;

// Homepage Slider
const introItems = [
  {
    introImage: "img/intro-carousel/1.jpg",
  },
  {
    introImage: "img/intro-carousel/2.jpg",
  },
  {
    introImage: "img/intro-carousel/3.jpg",
  },
  {
    introImage: "img/intro-carousel/4.jpg",
  },
  {
    introImage: "img/intro-carousel/5.jpg",
  },
];

introSection = "";
for (let i = 0; i < introItems.length; i++) {
  introSection += `<div class="item" style="background-image: url('${introItems[i].introImage}');"></div>`;
}

const introDiv = document.querySelector("#intro-carousel");
introDiv.innerHTML = introSection;

// Our Services
const servicesItems = [
  {
    servicesText: "We offer best projects in every IT niche",
    servicesTitle: "Software Development",
    servicesIcon: "bar-chart",
  },
  {
    servicesText: "We offer best projects in every IT niche",
    servicesTitle: "Mobile Development",
    servicesIcon: "picture-o",
  },
  {
    servicesText: "We offer best projects in every IT niche",
    servicesTitle: "SEO Development",
    servicesIcon: "shopping-bag",
  },
  {
    servicesText: "We offer best projects in every IT niche",
    servicesTitle: "Business Development",
    servicesIcon: "map",
  },
];

servicesSection = "";
for (let i = 0; i < servicesItems.length; i++) {
  servicesSection += `<div class="col-lg-6">
  <div class="box wow fadeInLeft">
    <div class="icon"><i class="fa fa-${servicesItems[i].servicesIcon}"></i></div>
      <h4 class="title"><a href="">${servicesItems[i].servicesTitle}</a></h4>
      <p class="description">${servicesItems[i].servicesText}</p>
  </div>
</div>`;
}

const servicesDiv = document.querySelector("#servicesContent");
servicesDiv.innerHTML = servicesSection;

//Clients Slider
const clientsItems = [
  {
    clientImage: "img/clients/client-1.png",
  },
  {
    clientImage: "img/clients/client-2.png",
  },
  {
    clientImage: "img/clients/client-3.png",
  },
  {
    clientImage: "img/clients/client-4.png",
  },
  {
    clientImage: "img/clients/client-5.png",
  },
  {
    clientImage: "img/clients/client-6.png",
  },
  {
    clientImage: "img/clients/client-7.png",
  },
  {
    clientImage: "img/clients/client-8.png",
  },
];

clientsSection = "";
for (let i = 0; i < clientsItems.length; i++) {
  clientsSection += `<img src="${clientsItems[i].clientImage}" alt="">`;
}

const clientsDiv = document.querySelector("#clientSlider");
clientsDiv.innerHTML = clientsSection;

//Portfolio Gallery
const portfolioItems = [
  {
    portfolioImage: "img/portfolio/1.jpg",
    portfolioTitle: "",
  },
  {
    portfolioImage: "img/portfolio/2.jpg",
    portfolioTitle: "",
  },
  {
    portfolioImage: "img/portfolio/3.jpg",
    portfolioTitle: "",
  },
  {
    portfolioImage: "img/portfolio/4.jpg",
    portfolioTitle: "",
  },
  {
    portfolioImage: "img/portfolio/5.jpg",
    portfolioTitle: "",
  },
  {
    portfolioImage: "img/portfolio/6.jpg",
    portfolioTitle: "",
  },
  {
    portfolioImage: "img/portfolio/7.jpg",
    portfolioTitle: "",
  },
  {
    portfolioImage: "img/portfolio/8.jpg",
    portfolioTitle: "",
  },
];

portfolioSection = "";
for (let i = 0; i < portfolioItems.length; i++) {
  portfolioSection += `<div class="col-lg-3 col-md-4">
  <div class="portfolio-item wow fadeInUp">
    <a href="${portfolioItems[i].portfolioImage}" class="portfolio-popup">
      <img src="${portfolioItems[i].portfolioImage}" alt="">
      <div class="portfolio-overlay">
        <div class="portfolio-info"><h2 class="wow fadeInUp">${portfolioItems[i].portfolioTitle}</h2></div>
      </div>
    </a>
  </div>
</div>`;
}

const portfolioDiv = document.querySelector("#portfolioSlider");
portfolioDiv.innerHTML = portfolioSection;

// Testimonial Slider
const testimonialItems = [
  {
    testimonialImage: "img/testimonial-1.jpg",
    testimonialTitle: "Saul Goodman",
    testimonialAuthor: "CEO & Founder",
    testimonialText:
      "Great software company! They made my work so much easier.",
  },
  {
    testimonialImage: "img/testimonial-2.jpg",
    testimonialTitle: "Sara Wilsson",
    testimonialAuthor: "Designer",
    testimonialText:
      "I've been using their software for years and it just keeps getting better.",
  },
  {
    testimonialImage: "img/testimonial-3.jpg",
    testimonialTitle: "Jena Karlis",
    testimonialAuthor: "Store Owner",
    testimonialText:
      "Their customer service is top notch and they always go the extra mile.",
  },
  {
    testimonialImage: "img/testimonial-4.jpg",
    testimonialTitle: "Matt Brandon",
    testimonialAuthor: "Freelencer",
    testimonialText:
      "I highly recommend this software company to anyone in need of a reliable solution.",
  },
  {
    testimonialImage: "img/testimonial-5.jpg",
    testimonialTitle: "John Larson",
    testimonialAuthor: "Entrepreneur",
    testimonialText:
      "The software they provide is user-friendly and efficient, made my job a breeze.",
  },
];

testimonialSection = "";
for (let i = 0; i < testimonialItems.length; i++) {
  testimonialSection += `<div class="testimonial-item">
  <p>
    <img src="img/quote-sign-left.png" class="quote-sign-left" alt="">
    ${testimonialItems[i].testimonialText}
    <img src="img/quote-sign-right.png" class="quote-sign-right" alt="">
  </p>
  <img src="${testimonialItems[i].testimonialImage}" class="testimonial-img" alt="">
  <h3>${testimonialItems[i].testimonialTitle}</h3>
  <h4>${testimonialItems[i].testimonialAuthor}</h4>
</div>`;
}

const testimonialDiv = document.querySelector("#testimonialSlider");
testimonialDiv.innerHTML = testimonialSection;

// Contact Form
const nizIdNameLabel = new Array(
  "full-name",
  "email",
  "password",
  "passwordConfirm"
);
const nizFormLabel = new Array(
  "Full Name*",
  "Email address*",
  "Password*",
  "Confirm password*"
);
const nizPlaceholders = new Array(
  "John Smith",
  "me@example.com",
  "Password",
  "Confirm password"
);
const nizIspisGreske = new Array(
  "First and Last name must start with uppercase (John Smith ...)",
  "Email must be in format me@example.com",
  "Min 1 char 1 uppercase and 1 number length 6",
  "Passwords must match"
);

const tipPolje = new Array("text", "text", "password", "password");

let formaIspis = `
      <form class="cta-form" name="sign-up">`;
for (let i = 0; i < nizIdNameLabel.length; i++) {
  formaIspis += `
  <div>
    <label for="${nizIdNameLabel[i]}">${nizFormLabel[i]}</label>
    <input id="${nizIdNameLabel[i]}" type="${tipPolje[i]}" placeholder="${nizPlaceholders[i]}" name="${nizIdNameLabel[i]}"/>
    <p class="display-none">${nizIspisGreske[i]}</p>
  </div>
  `;
}
const nizValue = new Array("0", "male", "female", "other");
const nizTekst = new Array(
  "Please choose one option:",
  "I'm male",
  "I'm female",
  "Other"
);
formaIspis += `
      <div>
      <label for="ddl-gender">Select your gender*</label>
      <select id="ddl-gender" name="ddl-gender">
`;
for (let i = 0; i < nizValue.length; i++) {
  formaIspis += ` <option value="${nizValue[i]}">${nizTekst[i]}</option> 
  `;
}
formaIspis += ` </select>
<p class="display-none">You must select your gender</p>
              </div>`;

formaIspis += `
              <input type="button" value="Sign up now" class="btn" id="btnForma"/>
              </form>`;
// console.log(formaIspis);

const divForma = document.querySelector(".cta-text-box");
divForma.innerHTML = formaIspis;

function proveraFormeOnBlur() {
  const ime = document.querySelector("#full-name");
  let regIme = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})+$/;

  //Ime validacija
  ime.addEventListener("blur", () => {
    if (regIme.test(ime.value)) {
      ime.nextElementSibling.classList.add("display-none");
    } else {
      ime.nextElementSibling.classList.remove("display-none");
    }
  });

  //Email validacija
  const email = document.querySelector("#email");
  let regEmail = /^[a-zA-Z0-9_\.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+$/;

  email.addEventListener("blur", () => {
    if (regEmail.test(email.value)) {
      email.nextElementSibling.classList.add("display-none");
    } else {
      email.nextElementSibling.classList.remove("display-none");
    }
  });

  //Password validacija
  const pass = document.querySelector("#password");
  var regPass =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  pass.addEventListener("blur", () => {
    if (regPass.test(pass.value)) {
      pass.nextElementSibling.classList.add("display-none");
    } else {
      pass.nextElementSibling.classList.remove("display-none");
    }
  });

  //Confirm password validacija
  const passConfirm = document.querySelector("#passwordConfirm");

  passConfirm.addEventListener("blur", () => {
    if (passConfirm.value == pass.value && passConfirm.value != "") {
      passConfirm.nextElementSibling.classList.add("display-none");
    } else {
      passConfirm.nextElementSibling.classList.remove("display-none");
    }
  });
  //DDL validacija
  const ddlPol = document.querySelector("#ddl-gender");
  ddlPol.addEventListener("change", () => {
    if (ddlPol.options[ddlPol.options.selectedIndex].value == "0") {
      ddlPol.nextElementSibling.classList.remove("display-none");
    } else {
      ddlPol.nextElementSibling.classList.add("display-none");
    }
  });
}

proveraFormeOnBlur();

//validacija forme - onBlur Kraj

//validacija forme - onCliick na dugme pocetak
window.addEventListener("load", () => {
  const dugmeForma = document.querySelector("#btnForma");
  dugmeForma.addEventListener("click", proveriFormu);
});

function proveriFormu() {
  let brojGresaka = 0;
  //Ime validacija
  const ime = document.querySelector("#full-name");
  let regIme = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})+$/;

  if (regIme.test(ime.value)) {
    ime.nextElementSibling.classList.add("display-none");
  } else {
    ime.nextElementSibling.classList.remove("display-none");
    brojGresaka++;
  }

  //Email validacija
  const email = document.querySelector("#email");
  let regEmail = /^[a-zA-Z0-9_\.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+$/;

  if (regEmail.test(email.value)) {
    email.nextElementSibling.classList.add("display-none");
  } else {
    email.nextElementSibling.classList.remove("display-none");
    brojGresaka++;
  }

  //Password validacija
  const pass = document.querySelector("#password");
  var regPass =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (regPass.test(pass.value)) {
    pass.nextElementSibling.classList.add("display-none");
  } else {
    pass.nextElementSibling.classList.remove("display-none");
    brojGresaka++;
  }

  //Confirm password validacija
  const passConfirm = document.querySelector("#passwordConfirm");

  if (passConfirm.value == pass.value && passConfirm.value != "") {
    passConfirm.nextElementSibling.classList.add("display-none");
  } else {
    passConfirm.nextElementSibling.classList.remove("display-none");
    brojGresaka++;
  }

  //DDL validacija
  const ddlPol = document.querySelector("#ddl-gender");

  if (ddlPol.options[ddlPol.options.selectedIndex].value == "0") {
    ddlPol.nextElementSibling.classList.remove("display-none");
    brojGresaka++;
  } else {
    ddlPol.nextElementSibling.classList.add("display-none");
  }
  if (brojGresaka == 0) {
    ime.value = "";
    email.value = "";
    pass.value = "";
    passConfirm.value = "";
    ddlPol.selectedIndex = 0;
    alert("You are sucessfully registred");
  }
}
//validacija forme - onCliick na dugme kraj
