const express = require("express");
const path = require("path");

const app = express();
const PORT = 4000;

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + '/public/images/'));

// Routes
app.get("/", (req, res) => {

  const page = req.query.page ?? null;

  console.log(page);

  if (page === "privacy") {
    return res.render("pages/privacy", { title: "Privacy Policy" });
  }

  if (page === "contact") {
    return res.render("pages/contact", { title: "Contact Us" });
  }

  if (page === "terms") {
    return res.render("pages/terms", { title: "Terms & Conditions" });
  }

  if (page === "feature") {
    return res.render("pages/feature", { title: "Feature" });
  }

  if (page === "about") {
    return res.render("pages/about", { title: "About" });
  }

    if (page === "proposal") {
    return res.render("pages/proposal", { title: "Proposal" });
  }

  // default homepage
  return res.render("pages/index", { title: "Home" });

});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
