// If reCAPTCHA is still loading, grecaptcha will be undefined.
function onClick(e) {
  e.preventDefault();
  grecaptcha.ready(function () {
    grecaptcha
      .execute("6LdDIuYdAAAAAM8KBC1nIuLddsMZSugfuklWqfYo", { action: "submit" })
      .then(function (token) {
        // Add your logic to submit to your backend server here.
      });
  });
}

$(document).ready(function () {
  let htmlText =
    "<p class='listItems'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>";
  for (var i = 0; i < 3; i++) {
    $(".section2list").append(htmlText);
  }

  // Doctors
  let doctorRow = "<div class='row doctors-row'></div>";
  let doctorDetails =
    "<div class='col-md-6 column-1 text-center'><h4 class='column-heading my-3'>Pediatric BMT</h4><div class='doctor-card'><img src='assets/Bitmap Copy.png' alt='Doctor' /><h6 class='doctor-name mt-4'>Dr. Vijay Agarwal</h6><p class='doctor-degree'>MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology &Haematology</p><div class='spacer'></div><div class='doctor-desc mt-3 mb-3'> Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist withover 12 years of experience in Oncology. Dr. Agarwal has beenpractising Medical Oncology since 2004.</div><button type='button' class='know-more btn btn-primary>Know More</button></div></div>";

  for (let i = 0; i < 2; i++) {
    $(".doctors-container").append(doctorRow);
  }
  for (let i = 0; i < 2; i++) {
    $(".doctors-row").append(doctorDetails);
  }

  // List Items
  let list =
    "<li><img src='./assets/list-icon.png' alt='list-icon' class='list-image'/>Autologous Bone Marrow Transplant - Marrow cells are collected from the patient’s own body and transfused back after high dose chemotherapy.</li>";

  for (let i = 0; i < 6; i++) {
    $(".bone-listing").append(list);
  }

  // Dropdowns

  $(".link-header").click(function () {
    $(this).siblings(".link-text").toggleClass("active");
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    stagePadding: 70,
    autoplayTimeout: 5000,
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
    nav: false,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});
