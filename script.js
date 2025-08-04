// Gérer l'envoi du formulaire
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message envoyé (simulation). Merci de votre contact !");
});

// Gérer l'affichage des sections
function showSection(id) {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => section.classList.add("hidden"));

  const selected = document.getElementById(id);
  if (selected) {
    selected.classList.remove("hidden");
  }
}