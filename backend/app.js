const express = require('express');
const app = express();
const path = require('path');







// Set view engine to EJS
app.set("view-engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));
//app.use(express.static("js_files", express.static(__dirname + "js_files")));
app.use(
  express.static(
    "/backend",
    express.static(__dirname + "/backend")
  )
);



app.use("/stylesheet", express.static(__dirname + "/public/stylesheet"));
app.use("/images", express.static(__dirname + "/public/images"));
app.use("/js_files", express.static(__dirname + "/public/js_files"));



// Render the home page
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
