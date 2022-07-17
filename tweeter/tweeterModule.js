let posts = [
  {
    text: "First post!",
    id: "p1",
    comments: [
      { id: "c1", text: "First comment on first post!" },
      { id: "c2", text: "Second comment on first post!!" },
      { id: "c3", text: "Third comment on first post!!!" },
    ],
  },
  {
    text: "Aw man, I wanted to be first",
    id: "p2",
    comments: [
      { id: "c4", text: "Don't wory second poster, you'll be first one day." },
      { id: "c5", text: "Yeah, believe in yourself!" },
      { id: "c6", text: "Haha second place what a joke." },
    ],
  },
];
let n = 0;

let postIdCounter;
let commentIdCounter;
const tweeterModule = class {
  getPosts = function () {
    return posts;
  };

  addPost = function (post) {
    let postObject = {
      text: "",
      id: 0,
      comments: [],
    };

    let i = "p";

    let id = i + n;
    postObject.text = post;
    postObject["id"] = id;

    posts.push(postObject);
    n = n + 1;
    postIdCounter = postIdCounter + 1;
    //console.log(getPosts());
  };

  removePost = function (idPost) {
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id == idPost) {
        posts.splice(i, 1);
      }
    }
  };
  //removePost("p1");
  //console.log(getPosts());
  addComment = function (comment, idPost) {
    let countOfcomment;
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id == idPost) {
        console.log(posts[i].comments.length);

        if (posts[i].comments.length == 0) {
          countOfcomment = 1;
        } else {
          countOfcomment =
            parseInt(
              posts[i].comments[posts[i].comments.length - 1].id.slice(1, 2)
            ) + 1;
        }
        this.idForNewPost = "c" + countOfcomment;
        posts[i].comments.push({ id: this.idForNewPost, text: comment });
      }
    }
  };
  removeComment = function (idPost, idComment) {
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id == idPost) {
        for (let j = 0; j < posts[i].comments.length; j++) {
          if (posts[i].comments[j].id == idComment) {
            posts[i].comments.splice(j, 1);
          }
        }
      }
    }
  };
};
