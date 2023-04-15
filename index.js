const form = document.getElementById("form");

const lnam = document.getElementById("lname");
const lnerr = document.getElementsByClassName("lnerr");
const fname = document.getElementById("fname");
const fnerr = document.getElementsByClassName("fnerr");
const email = document.getElementById("email");
const emrr = document.getElementsByClassName("emrr");
const pass = document.getElementById("pass");
const paserr = document.getElementsByClassName("paserr");

form.addEventListener("submit", fun);
function fun(e) {
  e.preventDefault();
  let xfn=validateName();
  let xln=validateLastName();
  let xemail=validateEmail();
  let xpass=validatePass();
  if (xfn== true && xln== true && xemail== true && xpass== true ) {
    Swal.fire("Good job!", "Your form has been submitted!", "success");
  }
}
fname.addEventListener("blur", (event) => {
  validateName();
});
lnam.addEventListener("blur", (event) => {
  validateLastName();
});

email.addEventListener("blur", (event) => {
  validateEmail();
});
pass.addEventListener("blur", (event) => {
  validatePass();
});
function validateName() {
  if (fname.value.length == 0) {
    fname.className = "err";
    fnerr[0].textContent = "FIRST NAME CANNOT BE EMPTY";
    return false;
  } else {
    fname.className = "";
    fnerr[0].textContent = "";
    return true;
  }
}

function validateLastName() {
  if (lnam.value.length == 0) {
    lnam.className = "err";
    lnerr[0].textContent = "LAST NAME CANNOT BE EMPTY";
    return false;
  } else {
    lnam.className = "";
    lnerr[0].textContent = "";
    return true;
  }
}
function validateEmail() {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.length == 0) {
    email.className = "err";
    emrr[0].textContent = "EMAIL CANNOT BE EMPTY";
    return false;
  } else if (!email.value.match(validRegex)) {
    email.className = "err";
    emrr[0].textContent = "LOOK LIKE THIS IS NOT AN EMAIL";
  } else {
    email.className = "";
    emrr[0].textContent = "";
    return true;
  }
}

function validatePass() {
  if (pass.value.length == 0) {
    pass.className = "err";
    paserr[0].textContent = "PASSWORD CANNOT BE EMPTY";
    return false;
  } else if (pass.value.length < 8) {
    pass.className = "err";
    paserr[0].textContent = "PASSWORD MUST BE AT LEAST 8 CHARCHTERS";
    return false;
  } else {
    pass.className = "";
    paserr[0].textContent = "";
    return true;
  }
}
