🔹 Error Handling in JavaScript

Error handling allows developers to detect, catch, and handle errors gracefully instead of letting the program crash.

1. try...catch

Used to handle runtime errors.

try {
  let num = 10 / 0;
  console.log(num); // Infinity

  console.log(unknownVar); // ❌ ReferenceError
} catch (error) {
  console.log("An error occurred:", error.message);
}


✅ Output:

Infinity
An error occurred: unknownVar is not defined

2. finally

The finally block always runs, whether there’s an error or not.
Useful for cleanup tasks.

try {
  let a = JSON.parse('{"name": "Shreya"}');
  console.log(a.name);
} catch (error) {
  console.log("Error parsing JSON:", error.message);
} finally {
  console.log("This will always run ✅");
}


✅ Output:

Shreya
This will always run ✅

3. throw

You can manually create and throw errors.

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed!");
  }
  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0));
} catch (error) {
  console.log("Error:", error.message);
}


✅ Output:

5
Error: Division by zero is not allowed!

4. Custom Errors

Create your own error types by extending the Error class.

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function registerUser(username) {
  if (!username) {
    throw new ValidationError("Username is required!");
  }
  return `${username} registered successfully 🎉`;
}

try {
  console.log(registerUser("Subasri"));
  console.log(registerUser(""));
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Validation Error:", error.message);
  } else {
    console.log("Unexpected Error:", error.message);
  }
}


✅ Output:

Subasri registered successfully 🎉
Validation Error: Username is required!

🔹 Event Handling in JavaScript

Events allow web pages to respond to user interactions (clicks, key presses, mouse moves, etc.).

1. Event Listeners

Attach an action to an event with addEventListener.

<button id="myBtn">Click Me</button>

<script>
  let btn = document.getElementById("myBtn");
  btn.addEventListener("click", function () {
    alert("Button clicked!");
  });
</script>

2. Event Object

The event handler receives an event object with details.

<button id="infoBtn">Click</button>

<script>
  document.getElementById("infoBtn").addEventListener("click", function (event) {
    console.log("Event type:", event.type);
    console.log("Target element:", event.target);
  });
</script>

3. Event Bubbling

Events propagate from the target element → parent → document.

<div id="parent" style="padding:20px; background:lightblue;">
  Parent
  <button id="child">Click Me</button>
</div>

<script>
  document.getElementById("parent").addEventListener("click", function () {
    console.log("Parent DIV clicked!");
  });

  document.getElementById("child").addEventListener("click", function () {
    console.log("Button clicked!");
  });
</script>


✅ Output when clicking the button:

Button clicked!
Parent DIV clicked!

4. Event Delegation

Attach one listener to a parent to handle multiple children.

<ul id="menu">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>

<script>
  document.getElementById("menu").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      console.log("You clicked:", event.target.innerText);
    }
  });
</script>


✅ Output:

You clicked: Home

🔑 Summary
Error Handling:

try...catch → Handle errors gracefully.

finally → Runs always (cleanup).

throw → Create and send custom errors.

Custom Errors → Extend Error for specific cases.

Event Handling:

Event Listeners → Respond to user actions.

Event Object → Get details about the event.

Bubbling → Events propagate upward.

Delegation → Use parent to handle multiple child events efficiently.
