document.addEventListener("DOMContentLoaded", function () {
    const typewriter = document.getElementById("typewriter");
    const statements = [
      " ",
      "E-Learning",
      " Innovative",
      " Transformative learning",
      " Accessible education",
    ];
    let currentIndex = 0;
    let isDeleting = false;
    const typingSpeed = 200; // Speed of typing in milliseconds
    const deletingSpeed = 100; // Speed of deleting in milliseconds
  
    function typeNextCharacter() {
      const currentText = typewriter.textContent;
      const targetText = statements[currentIndex];
  
      if (!isDeleting) {
        typewriter.textContent = targetText.substring(0, currentText.length + 1);
        if (currentText === targetText) {
          isDeleting = true;
          setTimeout(typeNextCharacter, deletingSpeed);
        } else {
          setTimeout(typeNextCharacter, typingSpeed);
        }
      } else {
        typewriter.textContent = targetText.substring(0, currentText.length - 1);
        if (currentText === "") {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % statements.length;
          setTimeout(typeNextCharacter, typingSpeed);
        } else {
          setTimeout(typeNextCharacter, deletingSpeed);
        }
      }
    }
  
    typeNextCharacter();
  });
  
  function scrollToAbout() {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
  