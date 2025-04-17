// app.js
/*window.onload = () => {
  setTimeout(() => {
    document.getElementById("splash").classList.add("hidden");
    document.getElementById("onboarding").classList.remove("hidden");
  }, 2000);
};

function showHome() {
  document.getElementById("onboarding").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}



// app.js

// Wait for DOM to fully load
window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById("splash");
  const onboarding = document.getElementById("onboarding");
  const home = document.getElementById("home");

  // Safeguard in case elements don't exist
  if (splash && onboarding && home) {
    // Splash screen transition
    setTimeout(() => {
      splash.classList.add("hidden");
      onboarding.classList.remove("hidden");
    }, 2000);
  }
});

// Transition from onboarding to home
function showHome() {
  const onboarding = document.getElementById("onboarding");
  const home = document.getElementById("home");
  if (onboarding && home) {
    onboarding.classList.add("hidden");
    home.classList.remove("hidden");
  }
}
*/
 document.addEventListener("DOMContentLoaded", function () {
      const splash = document.getElementById("splash");
      const onboarding = document.getElementById("onboarding");
      const home = document.getElementById("home");

      setTimeout(() => {
        splash.classList.add("hidden");
        onboarding.classList.remove("hidden");
      }, 3000);
    });

    function showHome() {
      document.getElementById("onboarding").classList.add("hidden");
      document.getElementById("home").classList.remove("hidden");
    }
