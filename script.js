document.addEventListener("DOMContentLoaded", () => {
  // 1. Модальне вікно для галереї
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".modal-close");
  const galleryImages = document.querySelectorAll(".gallery-item img");

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  const closeModal = () => {
    modal.style.display = "none";
  };

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // 2. Інтерактивна кнопка зворотного зв'язку
  const contactBtn = document.getElementById("contactBtn");
  contactBtn.addEventListener("click", () => {
    alert("Дякуємо за інтерес! Зв'яжіться з нами за номером: +380 (XX) XXX-XX-XX або напишіть у Viber/Telegram.");
  });
});