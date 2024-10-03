// Password protection for the gallery
function showPasswordPrompt() {
    const password = prompt("Please enter the password:");
    if (password === "chichuuu") {
      window.location.href = "private-gallery.html";
    } else {
      alert("Incorrect password. Please try again.");
    }
  }
  