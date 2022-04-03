let selectHeader = document.getElementById("header");
if (selectHeader) {
  const headerScrolled = () => {
    if (window.scrollY > 100) {
      selectHeader.classList.add("header-scrolled");
    } else {
      selectHeader.classList.remove("header-scrolled");
    }
  };
  window.addEventListener("load", headerScrolled);
  window.addEventListener('scroll', headerScrolled);
}

const preloader = document.getElementById("preloader");

  window.addEventListener("load", () => {
    preloader.remove();
  });

  /*MOBILE NAV FUNCTION ------------------------------------------------*/
  let navbarlinks = document.querySelectorAll(".scrollto");
  const navbarlinksActive = () => {
  let position = window.scrollY + 200;
  navbarlinks.forEach((navbarlink) => {
    if (!navbarlink.hash) return;
    let section = document.querySelector('navbarlink.hash');
    if (!section) return;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      navbarlink.classList.add("active");
    } else {
      navbarlink.classList.remove("active");
    }
  });
};
window.addEventListener("load", navbarlinksActive);
window.addEventListener('scroll', navbarlinksActive);


/**
 * Mobile nav toggle
 */
 document.querySelector(".mobile-nav-toggle",).addEventListener("click",  function (e) {
  document.getElementById("navbar").classList.toggle("navbar-mobile");
  this.classList.toggle("bi-list");
  this.classList.toggle("bi-x");
});

/**
 * Mobile nav dropdowns activate
 */
document.querySelectorAll(".navbar .dropdown > a").forEach(link => link.addEventListener(
  "click",
  function (e) {
    if (document.getElementById("navbar").classList.contains("navbar-mobile")) {
      e.preventDefault();
      this.nextElementSibling.classList.toggle("dropdown-active");
    }
  })
);


// CONTACT MODAL -----------------------------------------------------------------------------

const contactModal = document.querySelector('.contact-modal')
const contactModalCloseBtn = document.querySelector('.modal-close-btn')
const contactLink = document.getElementById('contact-nav-link')

contactLink.addEventListener('click', (e) => {
  e.preventDefault()
  contactModal.classList.add('active-contact-modal');
  document.body.style.overflow = 'hidden';
})

contactModalCloseBtn.addEventListener('click', () => {
  contactModal.classList.remove('active-contact-modal');
  document.body.style.overflow = null;
})



var contactFormModal = document.getElementById("contact-us-form-modal");

var contactUsNameInputModal = document.querySelector(".name-contact-us-form-modal");
var contactUsEmailInputModal = document.querySelector(".email-contact-us-form-modal");
var contactUsSubjectInputModal = document.querySelector(".subject-contact-us-form-modal");
var contactUsTextEnteredInputModal = document.querySelector(".entered-text-contact-us-form-modal");

contactFormModal.addEventListener("submit", function (e) {
  e.preventDefault();

  var request = new XMLHttpRequest();

  const params =   `You have received a contact us submmission from ${contactUsNameInputModal.value}.\n
                    Their email is ${contactUsEmailInputModal.value}\n
                    Subject: ${contactUsSubjectInputModal.value}\n
                    They are writing to say: \n
                    ${contactUsTextEnteredInputModal.value}`

  request.open("POST", "./forms/contactForm.php", true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(params);
/*
  emailModal.innerHTML = "";
  emailModal.innerHTML = `
<div class="sending-css">
<div class="circle-outter">
  <div class="circle-inner">
    <div class="rect-loading"></div>
  </div>
</div>
</div>`;

  setTimeout(() => {
    emailModal.innerHTML = `
    <p class="fin-close-email-modal">X</p>
    <div class="fin-email-send">
    <p>Thanks for reaching out, ${nameInput.value}.</p>
    <p>I'll respond as soon as I can.</p>
    </div>
    `;
    const closeModal = document.createElement("script");
    closeModal.setAttribute("src", "js/finCloseModal.js");
    closeModal.classList.add("delete-after");
    document.body.append(closeModal);
    document.querySelector(".closeModal").remove();
    document.querySelector(".formSubmitSrc").remove();
  }, 1000);*/
});

// THIS IS FOR SUBSCRIBE FORM FOOTER ------------------------------------------------

var subscribeFormFooter = document.getElementById("subscribe-form-footer");
var emailSubscriptionInputFooter = document.querySelector(".email-subscribe-footer");

subscribeFormFooter.addEventListener("submit", function (e) {
  e.preventDefault();

  var request = new XMLHttpRequest();

  const params = `This new subscription is for the email: ${emailSubscriptionInputFooter.value}.`
    
  request.open("POST", "./forms/subscribeForm.php", true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(params);
/*
  emailModal.innerHTML = "";
  emailModal.innerHTML = `
<div class="sending-css">
<div class="circle-outter">
  <div class="circle-inner">
    <div class="rect-loading"></div>
  </div>
</div>
</div>`;

  setTimeout(() => {
    emailModal.innerHTML = `
    <p class="fin-close-email-modal">X</p>
    <div class="fin-email-send">
    <p>Thanks for reaching out, ${nameInput.value}.</p>
    <p>I'll respond as soon as I can.</p>
    </div>
    `;
    const closeModal = document.createElement("script");
    closeModal.setAttribute("src", "js/finCloseModal.js");
    closeModal.classList.add("delete-after");
    document.body.append(closeModal);
    document.querySelector(".closeModal").remove();
    document.querySelector(".formSubmitSrc").remove();
  }, 1000);*/
});
