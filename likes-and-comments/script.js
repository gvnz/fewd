
// LIKE FEATURE
// creating variables
var likeLink = document.querySelector(".like-link");
var likeCount = document.querySelector(".like-count");
// the var likeLink will be needed to create the event "click", linking it to the function like
// the var likeCount will be used in the function like, to add +1

// creating the event for the var likeLink and opening up the way for the function like
likeLink.addEventListener("click", like);

// creating the function for the counter -> adding +1
function like(event) {
  event.preventDefault();
// event.preventDefault() is a default line in functions
likeCount.textContent = parseInt(likeCount.textContent) + 1;
// this line gets the current content of likeCount and adds 1 to it everytime the function is called (click)
// parseInt is basically for transforming the content into whole numbers
}

// COMMENT FEATURE
// variables
var newComment = document.querySelector("#new-comment");
var commentBody = document.querySelector("#new-comment-body");
var commentBlock = document.querySelector("#comments");
// var newComment will used to create the "submit" event and open the way for the function comment
// var commentBody will be used in the function to get the typed content and add to the new div
// var commentBlock is responsible for grabbing the content of var commentBody


// creating the event
newComment.addEventListener("submit", comment);
// this will submit the new text into the new div thru the function comment, bellow

// Creating a comment
function comment(event) {
  event.preventDefault();
// event.preventDefault is a default line in functions
var newText = document.createElement("div");
// this is where I got lost
newText.classList.add("comment");
newText.textContent = commentBody.value;
commentBlock.appendChild(newText);

}
