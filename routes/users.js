const express = require("express");
const router = express.Router();
const User = require("../models/SignUpModels");

// router.post("register", (req, res) => {
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;
//   const email = req.body.email;
//   const password = req.body.password;
//   const newsletter = req.body.newsletter;

//   const newuser = new User();
//   newuser.firstName = firstName;
//   newuser.lastName = lastName;
//   newuser.email = email;
//   newuser.password = password;
//   newuser.newsletter = newsletter;
//   newuser.save((err, savedUser) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).send();
//     }

//     return res.status(200).send();
//   });
// });

//Register Route
router.post("/register", (req, res) => {
  const signedUpUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    newsletter: req.body.newsletter,
  });
  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

//Change newsletter to true or false
router.put("/register", async (req, res) => {
  const { _id, newsletter } = req.body;
  const nl = await User.findById({ _id });

  nl.newsletter = newsletter;
  await nl.save();
  res.status(200).json(nl);
});

//Login user
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email, password: password }, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }

    if (!user) {
      return res.status(404).send();
    }

    return res.status(200).send(user);
  });
});

module.exports = router;
