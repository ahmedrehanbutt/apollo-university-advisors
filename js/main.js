// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // Highlight the current page in the nav
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });

  // Contact form handling.
  // NOTE: This currently only shows a confirmation message — it does not
  // send the message anywhere yet. Wire this up to a form backend such as
  // Formspree (https://formspree.io) or a Vercel serverless function once
  // you're ready to receive real submissions (see README.md).
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("form-status");
      status.textContent =
        "Thanks for reaching out! This form isn't connected to an inbox yet — see README.md to finish setup.";
      status.className = "form-status success";
      form.reset();
    });
  }

  // Set current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
