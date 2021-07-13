const db = firebase.firestore();
console.log(db);
// document.getElementById("success_message").innerHTML.style.visibility =
//   "hidden";
// document.getElementById("error_message").style.visibility = "hidden";
function sendMessage() {
  const Fname = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  var atposition = email.indexOf("@");
  var dotposition = email.lastIndexOf(".");
  if (
    Fname == null ||
    Fname == "" ||
    email == null ||
    email == "" ||
    subject == null ||
    subject == "" ||
    message == null ||
    message == ""
  ) {
    document.getElementById("success_message").style.display = "none";
    document.getElementById("success_message").innerHTML = null;
    document.getElementById("error_message").style.display = "block";
    document.getElementById("error_message").innerHTML =
      "Please fill all the fields";
  } else if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= email.length
  ) {
    document.getElementById("success_message").style.display = "none";
    document.getElementById("success_message").innerHTML = null;
    document.getElementById("error_message").style.display = "block";
    document.getElementById("error_message").innerHTML =
      "Please enter a valid email ID";
  } else {
    db.collection("contacts")
      .add({
        name: Fname,
        email: email,
        subject: subject,
        message: message,
      })
      .then(() => {
        document.getElementById("error_message").style.display = "none";
        document.getElementById("success_message").style.display = "block";
        document.getElementById("success_message").innerHTML =
          "Message sent successfully";
        setTimeout(() => {
          document.getElementById("success_message").style.display = "none";
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
