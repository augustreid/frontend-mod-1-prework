/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, time, likes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = time;
    this.numberOfLikes = likes;
    this.comments = comments;
  }
addLike() {
  this.numberOfLikes = ++this.numberOfLikes;
}
addComment(newComment) {
  this.comments.push(newComment);
}
};

var dave = new Tweet("@dave", "They got my burrito bowl wrong, again!", "1:37pm", 3, ["bummer dude", "stop whining dave"]);
console.log(dave);

var sam = new Tweet("@sam", "I should have paid the extra fifty cents for guac.", "1:44pm", 8, ["Yep, always worth it!", "if you're cute they give it to you free"]);
console.log(sam);

var sally = new Tweet ("@sally", "I'm still hungry.", "2:05pm", 2, ["that's what you get for ordering a salad", "lettuce is for losers"]);
console.log(sally);

dave.addLike();
console.log(dave);
dave.addLike();
dave.addLike();
console.log(dave);

sally.addComment("way to make healthy choices, you go girl wooo!");
console.log(sally);
