let rand = new rander();
let tweeter = new tweeterModule();
rand.renderPost(tweeter.getPosts());

savePost = function () {
  let text = document.getElementById("TwitInput").value;
  tweeter.addPost(text);
  rand.renderPost(tweeter.getPosts());
};

$("body").on("click", "#addCommentButton", function () {
  let posttext = $(this).closest("#comments").find("p").text();
  console.log(posttext);

  const posts = tweeter.getPosts();

  //const comm = $("#commentInput").val();
  let comm = $(this).closest("div").find("input").val();
  console.log(comm);

  for (let post of posts) {
    if (post.text == posttext) {
      console.log("aaaaaaaaaaaa");
      tweeter.addComment(comm, post.id);
      rand.renderPost(tweeter.getPosts());
    }
  }
});
