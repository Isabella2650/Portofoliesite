const form = document.querySelector("form");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

// Lav en funktion, der stopper refresh og nulstiller formularen

form.addEventListener("invalid", cancelPopup, true);
// Tilføj event listener, der lytter efter 'submit' eventet

function handleSubmit(event) {
  // 1. undgå refresh
  event.preventDefault();
  // 2. samle data op
  // 3. vise data
  // 4. evt. nustil formular
  form.reset();
}

form.addEventListener("submit", handleSubmit);
