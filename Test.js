var fs = require("fs");
var https = require("https");
fs.writeFile(__dirname + "/index.html", "<h1>html is great</h1>", function(
  error
) {
  if (error) {
    return console.log(error);
  } else {
    return console.log("congrats");
  }
});

// saves photo from internet from web
var myPhotoLocation =
  "https://media4.s-nbcnews.com/j/newscms/2019_29/2940241/ss-190719-twip-1x2_8c41dcb943f3bea7353c7b245b6c2cc2.nbcnews-fp-760-360.gif";

https.get(myPhotoLocation, function(response) {
  response.pipe(fs.createWriteStream(__dirname + "/MyPhoto.jpg"));
});
