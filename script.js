function validateName() {
  const name = document.getElementById("nameInput").value.trim();
  const error = document.getElementById("loginError");

  if (name.length > 0) {
    // Hide login, show main content
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

    // Candle blow and show messages
    setTimeout(() => {
      document.getElementById('candle').style.display = 'none';
      document.getElementById('msg1').style.display = 'block';

      setTimeout(() => {
        document.getElementById('msg2').style.display = 'block';
      }, 3000);

      setTimeout(() => {
        document.getElementById('msg3').style.display = 'block';
      }, 6000);
    }, 3000);
  } else {
    error.textContent = "Please enter your name 😊";
  }
}
