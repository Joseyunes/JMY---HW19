const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faqs.forEach(otherFaq => {
      if (otherFaq !== faq) {
        otherFaq.classList.remove("active");
        otherFaq.querySelector(".answer").style.maxHeight = 0;
      }
    });

    faq.classList.toggle("active");
    const answer = faq.querySelector(".answer");
    if (faq.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});