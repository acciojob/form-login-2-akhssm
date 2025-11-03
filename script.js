//your JS code here. If required.

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("phoneNumber").value;
  const email = document.getElementById("emailID").value;

  alert(
    `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phone} Email ID: ${email}`
  );
});
