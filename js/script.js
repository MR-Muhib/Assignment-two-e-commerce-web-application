// Timer count down
//! Set the end date and time for the sale
const endDate = new Date("2024-11-10T00:00:00"); // Set your end date here (e.g., Nov 10, 2024)

function updateTimer() {
  const now = new Date();
  const timeRemaining = endDate - now; // Time difference in milliseconds

  if (timeRemaining <= 0) {
    document.getElementById("timer").innerHTML = "Sale Ended!";
    clearInterval(timerInterval); // Stop the countdown once it reaches zero
    return;
  }

  // Calculate the remaining days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the remaining time
  document.getElementById(
    "timer"
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update the timer every second
const timerInterval = setInterval(updateTimer, 1000);

// Initial call to display the timer
updateTimer();

//! Handle contact form
const contactBtn = document.getElementById("btn");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

contactBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission

  const nameValue = fullName.value.trim(); // Corrected line
  const emailValue = email.value.trim();
  const messageValue = message.value.trim(); // Avoid reusing the `message` variable name

  const userInfo = {};

  if (nameValue === "" || emailValue === "" || messageValue === "") {
    alert("Please fill in all fields.");
    return;
  } else {
    // Submit the form
    alert(`Thank you for contacting us! Your message has been sent.`);
    // store the form information in the object
    userInfo.name = nameValue;
    userInfo.email = emailValue;
    userInfo.message = messageValue;

    // Store the form information in local storage
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    // Clear form fields
    fullName.value = "";
    email.value = "";
    message.value = "";
  }
  // print the form information into console
  console.log(userInfo);
});

// Popups submit form information
const submitPopup = document.querySelector("#submit_your_product");

submitPopup.addEventListener("click", function (event) {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  alert(`Thank you for your purchase! Your form information has been sent.`);
  console.log(userInfo);
});

// Active navigation button
function setActive(activeId) {
  // Get all navigation items
  const navItems = document.querySelectorAll(".nav-item");

  // Remove 'active' class from all nav items
  navItems.forEach((item) => {
    item.classList.remove("active");
  });

  // Add 'active' class to the clicked item
  document.getElementById(activeId).classList.add("active");
}
