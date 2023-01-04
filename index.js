const { exec } = require("child_process");
const port = process.env.PORT || 3000;

const command = `json-server --watch db.json --port ${port}`;

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.log("Error running exec", err);
    return;
  }
  console.log("stdout:", stdout);
  console.log("stderr:", stderr);
});
