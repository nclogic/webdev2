document.addEventListener("DOMContentLoaded", function () {
  const sectionTitle = document.getElementById("first-section-title");
  const prelude = document.getElementById("prelude");
  const tsunami = document.getElementById("tsunami");
  const backLink = document.getElementById("back-link");
  const nextLink = document.getElementById("next-link");

  const lessons = [
    document.getElementById("prelude"),
    document.getElementById("lesson-one"),
    document.getElementById("lesson-two"),
    document.getElementById("lesson-three"),
    document.getElementById("lesson-four"),
    document.getElementById("lesson-five"),
  ];

  let currentLesson = 0;

  // Function to control button visibility
  function updateButtonVisibility() {
    // Hide "Back" when on the initial display
    if (currentLesson === 0) {
      backLink.style.display = "none";
      nextLink.style.display = "none";
      prelude.style.display = "block";
      tsunami.style.display = "block"; // Fixed the typo here
      sectionTitle.style.display = "flex";
    } else {
      backLink.style.display = "flex";
      nextLink.style.display = "flex";
    }
  
    // Hide "Next" when at the last lesson
    if (currentLesson === lessons.length - 1) {
      nextLink.style.display = "none";
    }

    // Show "Back" on the first lesson if the initial display is hidden
    if (currentLesson === 0 && sectionTitle.style.display === "none") {
      backLink.style.display = "flex";
    }
  }
  
  // Add direct navigation for lesson-one
  const lessonOneLink = document.getElementById("lesson-one-link");
  lessonOneLink.addEventListener("click", function () {
    if (currentLesson !== 1) {
      lessons[currentLesson].style.display = "none";
      currentLesson = 1;
      lessons[currentLesson].style.display = "block";
      updateButtonVisibility();
    }
  });

  // Add direct navigation for lesson-two
  const lessonTwoLink = document.getElementById("lesson-two-link");
  lessonTwoLink.addEventListener("click", function () {
    if (currentLesson !== 2) {
      lessons[currentLesson].style.display = "none";
      currentLesson = 2;
      lessons[currentLesson].style.display = "block";
      updateButtonVisibility();
    }
  });

  // Add direct navigation for lesson-three
  const lessonThreeLink = document.getElementById("lesson-three-link");
  lessonThreeLink.addEventListener("click", function () {
    if (currentLesson !== 3) {
      lessons[currentLesson].style.display = "none";
      currentLesson = 3;
      lessons[currentLesson].style.display = "block";
      updateButtonVisibility();
    }
  });

  sectionTitle.addEventListener("click", function () {
    sectionTitle.style.display = "none";
    prelude.style.display = "none";
    tsunami.style.display = "none";
    currentLesson++;
    lessons[currentLesson].style.display = "block";
    updateButtonVisibility();

    // Scroll to the top of the displayed lesson
    lessons[currentLesson].scrollIntoView({ behavior: "smooth" });
  });

  backLink.addEventListener("click", function () {
    if (currentLesson > 0) {
      lessons[currentLesson].style.display = "none";
      currentLesson--;
      lessons[currentLesson].style.display = "block";
      updateButtonVisibility();
    } else {
      // If on the first lesson, clicking "Back" takes you back to the initial display
      sectionTitle.style.display = "block";
      prelude.style.display = "block";
      
      updateButtonVisibility();

      // Scroll to the top of the displayed lesson
      lessons[currentLesson].scrollIntoView({ behavior: "smooth" });
    }
  });

  nextLink.addEventListener("click", function () {
    if (currentLesson < lessons.length - 1) {
      lessons[currentLesson].style.display = "none";
      currentLesson++;
      lessons[currentLesson].style.display = "block";
      updateButtonVisibility();

      // Scroll to the top of the displayed lesson
      lessons[currentLesson].scrollIntoView({ behavior: "smooth" });
    }

    // Initially show "Back" to go back to the initial display
    updateButtonVisibility();
  });
});
