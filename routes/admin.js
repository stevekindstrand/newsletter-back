const express = require("express");
const router = express.Router();
const User = require("../models/SignUpModels");

router.get("/", (req, res) => {
  const loginAdmin = `
  <form>
    <input id="user" type="text" placeholder="User Name" />
    <input id="password" type="password" placeholder="Password" />
    <input id="submitBtn" type="submit" value="login" />
  </form>

  <script>
  document.getElementById("submitBtn").addEventListener("click", (e) => {
    e.preventDefault()

    if (user.value === "admin" && password.value ===  "admin") {
      alert("Login successful");
      location.href = "/admin";
    } else {
      alert("Something went wrong")
      }
  })
</script>
  `;

  res.send(loginAdmin);
});

router.get("/admin", async (req, res) => {
  const users = await User.find();

  let userInfo = `<div>`;

  users.forEach((user) => {
    userInfo += `
      <p><b>ID:</b> ${user._id}</p>
      <p><b>Name:</b> ${user.firstName} ${user.lastName}</p>
      <p><b>Email:</b> ${user.email}</p>
      <p><b>Signed up to newsletter:</b> ${user.newsletter}</p>
    </div><br />`;
  });
  res.send(userInfo);
});

module.exports = router;
