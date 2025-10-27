// Basic simulation (no backend yet)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert(`Thanks, ${name}! Your message has been received.`);
    console.log("Message details:", { name, email, message });

    // Reset the form
    document.getElementById("contactForm").reset();
  } else {
    alert("Please fill out all fields before submitting.");
  }
});
