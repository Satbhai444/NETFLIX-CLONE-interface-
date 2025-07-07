


    // 🔁 Replace this with your actual Firebase config
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_PROJECT_ID.appspot.com",
      messagingSenderId: "YOUR_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();

    // Handle Login
    document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const errorMsg = document.getElementById("errorMsg");

      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          errorMsg.textContent = "Login successful! ✅";
          errorMsg.style.color = "lightgreen";
          setTimeout(() => {
            window.location.href = "index.html"; // 👈 Redirect after login
          }, 1000);
        })
        .catch((error) => {
          errorMsg.textContent = error.message;
          errorMsg.style.color = "#ff5050";
        });
    });

    
  const togglePassword = document.getElementById("togglePassword");
  const password = document.getElementById("password");

  togglePassword.addEventListener("click", () => {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // Optional: Toggle icon appearance
    togglePassword.textContent = type === "password" ? "👁️" : "🙈";
  });