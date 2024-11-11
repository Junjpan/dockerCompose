const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "001",
      title: "Book Review: The Bear & The Nightingale.--",
    },
    {
      id: "002",
      title: "Game Review: Pokemon Brillian Diamond.",
    },
    {
      id: "003",
      title: "Show Review: Alice in Borderland",
    },
    {
      id: "004",
      title: "Show Review: Alice in Borderland",
    },
    {
      id: "005",
      title: "show review: Good product!",
    },
  ]);
});

app.listen(4000, () => {
  console.log("listening for requests on port 4000");
});
