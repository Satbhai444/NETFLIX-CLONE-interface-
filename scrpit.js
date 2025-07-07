document.querySelectorAll('.faqbox').forEach(faq => {
    faq.addEventListener('click', () => {
      faq.classList.toggle('active');
    });
  });