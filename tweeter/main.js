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
function delete_click(clicked_id) {
  //alert(clicked_id);
  but = document.getElementById(clicked_id);
  let postdiv = $(but).closest("#comments");
  let postText = postdiv.find("p").text();
  const posts = tweeter.getPosts();

  for (let post of posts) {
    if (post.text == postText) {
      console.log(post.id);
      tweeter.removeComment(post.id, clicked_id);
      rand.renderPost(tweeter.getPosts());
    }
  }
}
