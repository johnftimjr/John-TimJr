// JavaScript for Animating Skill Bars on Page Load
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-bar span');
    
    skillBars.forEach(skill => {
        const skillLevel = skill.getAttribute('data-skill');
        skill.style.width = skillLevel;
    });
});

// Typing Effect for Hero Section
const textArray = ["Engineering", "Innovation", "Technology", "Design", "Creativity"];
let textIndex = 0;
let letterIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    const typedTextElement = document.getElementById("typed-text");
    
    if (isDeleting) {
        currentText = textArray[textIndex].substring(0, letterIndex--);
    } else {
        currentText = textArray[textIndex].substring(0, letterIndex++);
    }
    
    typedTextElement.textContent = currentText;
    
    if (!isDeleting && letterIndex === textArray[textIndex].length) {
        isDeleting = true;
        setTimeout(type, 1500);
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, 150);
    }
}

document.addEventListener("DOMContentLoaded", type);
