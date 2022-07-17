source = $("#first-template").html();
template = Handlebars.compile(source);
const rander = class {
  renderPost = function (data) {
    $("#container").empty();
    const newHTML = template({ posts: data });
    $("#container").append(newHTML);
  };
};
