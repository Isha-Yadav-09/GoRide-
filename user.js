const signUpForm = document.getElementById('signup-form');
const signInForm = document.getElementById('signin-form');
const signUpMessage = document.getElementById('signup-message');
const signInMessage = document.getElementById('signin-message');

const loginButton = document.getElementById('login');
const registerButton = document.getElementById('register');

// Toggle Sign Up/Sign In Forms
loginButton.addEventListener('click', () => {
  document.getElementById('container').classList.remove('active');
});

registerButton.addEventListener('click', () => {
  document.getElementById('container').classList.add('active');
});

// Sign Up Form Submission 
signUpForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const phone = document.getElementById('signup-phone').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;

  // Basic Validation
  if (!name || !email || !phone || !password || !confirmPassword) {
    signUpMessage.textContent = 'Please fill in all required fields.';
    return;
  }

  if (password !== confirmPassword) {
    signUpMessage.textContent = 'Passwords do not match.';
    return;
  }

  signUpMessage.textContent = 'Sign Up Successful! (Simulated)';
  signUpForm.reset();
  window.location = "index.html";
});

// Sign In Form Submission
signInForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('signin-email').value;
  const password = document.getElementById('signin-password').value;

  if (!email || !password) {
    signInMessage.textContent = 'Please enter your email and password.';
    return;
  }
  signInMessage.textContent = 'Sign In Successful! (Simulated)';
  window.location = "index.html";
 
});

 window.onload = function () {
            google.accounts.id.initialize({
                client_id: "614644614887-nhamup3fqheeu2n0nir869jh4gjfnddo.apps.googleusercontent.com", // Replace with your client ID
                callback: handleCredentialResponse
            });
            google.accounts.id.renderButton(
                document.getElementById("g_id_signup"),
                { theme: "outline", size: "large", text: "signup_with" }
            );
            google.accounts.id.renderButton(
                document.getElementById("g_id_signin"),
                { theme: "outline", size: "large", text: "signin_with" }
            );
        };

        function handleCredentialResponse(response) {
            console.log("Google JWT:", response.credential);
            document.getElementById("signin-message").innerText = "Google login successful!";
        }


