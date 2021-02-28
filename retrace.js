var retrace = require("retrace");

retrace
  .map("stack")
  .then(function (stack) {
    console.log(stack); // Log the re-mapped stack trace
    res.end(stack); // ... and send it back to the client
  })
  .catch(function (err) {
    console.log("Something went wrong", err);
    res.status(500).end();
  });
