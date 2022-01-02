// If reCAPTCHA is still loading, grecaptcha will be undefined.
grecaptcha.ready(function () {
  grecaptcha.render("container", {
    sitekey: "ABC-123",
  });
});
