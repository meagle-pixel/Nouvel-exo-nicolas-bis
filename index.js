// ********** FORMULAIRE **********

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const lastName = document.getElementById("lastName").value.trim();
  const firstName = document.getElementById("firstName").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const message = document.getElementById("textarea").value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobilePattern = /^[0-9]{10}$/;

  let isValid = true;

  if (!lastName) {
    document.getElementById("lastName").classList.add("error");
    isValid = false;
  }

  if (!firstName) {
    document.getElementById("firstName").classList.add("error");
    isValid = false;
  }

  if (!email) {
    document.getElementById("email").classList.add("error");
    isValid = false;
  }

  if (!mobile) {
    document.getElementById("mobile").classList.add("error");
    isValid = false;
  }

  if (!message) {
    document.getElementById("textarea").classList.add("error");
    isValid = false;
  }

  if (!isValid) {
    alert("Veuillez remplir tous les champs obligatoires !");
    return;
  }

  if (!emailPattern.test(email)) {
    document.getElementById("email").classList.add("error");
    alert("Veuillez enter une adresse mail valide");
    return;
  }

  if (mobile && !mobilePattern.test(mobile)) {
    document.getElementById("mobile").classList.add("error");
    alert("Votre numéro de téléphone doit contenir des chiffres (1,2,3...)");
    return;
  }

  alert("Formulaire complété avec succés !");
  form.reset();
});

// Pour enlever le border bottom rouge
const inputs = document.querySelectorAll("input, textarea");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.classList.remove("error");
  });
});

// ***** Formulaire FIN *****


