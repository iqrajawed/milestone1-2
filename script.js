"use strict";
const toggleButton = document.getElementById("toggle");
const skills = document.getElementById("Skills");
toggleButton.addEventListener("click", () => {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
