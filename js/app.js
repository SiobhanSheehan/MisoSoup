// jss for contact form

$(function() {
  console.log("Hello!")

  $("#submit").click(function () {
    submit();
  });
});
// on submit - browser will respond with below message
function submit() {
  alert("thanks for your contact information");
}
