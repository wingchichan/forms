// const form = document.getElementById("form");
// form.addEventListener("submit", function () {
//   event.preventDefault();

// //   console.dir(event.target.email.value);
// //   console.log(event.target.password.value);

// });

const form = document.getElementById("form");
form.addEventListener("submit", function () {
  event.preventDefault();

  const formData = new FormData(form);
  console.log(formData);

  const jsObject = Object.fromEntries(formData);
  console.log(jsObject);
});

const display = document.createElement("p");
document.body.appendChild(display);
display.append(" ");
