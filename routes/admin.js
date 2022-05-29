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
  const register = await User.find();
  res.status(200).json(register);
});

module.exports = router;
