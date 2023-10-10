const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("card");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

function updatePreview(event) {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function(e) {
        const preview = document.getElementById('avatar-preview');
        preview.src = e.target.result;
      }
  
      reader.readAsDataURL(file);
    }
  }
