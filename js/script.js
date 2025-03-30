document.addEventListener("DOMContentLoaded", function () {
    // Update footer year
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
    
    // FAQ toggle functionality
    const faqToggle = document.querySelector(".faq-toggle");
    const faqContent = document.getElementById("faq-content");
    if (faqToggle && faqContent) {
      faqToggle.addEventListener("click", function () {
        const isExpanded = faqToggle.getAttribute("aria-expanded") === "true";
        faqToggle.setAttribute("aria-expanded", !isExpanded);
        faqContent.hidden = isExpanded;
        faqToggle.textContent = isExpanded ? "Show FAQs" : "Hide FAQs";
      });
    }
  });
  