document.addEventListener("DOMContentLoaded", function () {
    // Get all sections
    const sections = document.querySelectorAll('section');
    // Get all nav buttons
    const buttons = document.querySelectorAll('.nav-bar button, .nav-bar-mobile button');

    // Function to hide all sections
    function hideAllSections() {
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    // Function to show a specific section
    function showSection(sectionId) {
        hideAllSections();
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block'; // Show the section
        }
    }

    // Initial display of intro-section
    showSection('about-section');

    // Add click event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const sectionId = this.textContent.trim().toLowerCase() + '-section';
            showSection(sectionId);
        });
    });
});

function myFunction() {
    var x = document.getElementById("nav-bar-mobile");
    if (x.style.display === "block" ) {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// sections
// intro-section hobbies-section publications photo-gallery