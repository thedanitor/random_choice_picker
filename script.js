// div w/ id tags
const tagsEl = document.getElementById("tags");
// textarea
const textarea = document.getElementById("textarea");

// auto focus on textarea when page loads
textarea.focus();

// listen for whenever key is released in textarea
textarea.addEventListener("keyup", e => {
  // run createTags function with value as input
  createTags(e.target.value);
});

function createTags(input) {
  // split input at comma to create tags array
  const tags = input
    .split(",")
    // filter each tag to trim extra spaces at beginning/end and don't count empty strings
    .filter(tag => tag.trim() !== "")
    // map each tag and trim it
    .map(tag => tag.trim());
    // clear tags element
  tagsEl.innerHTML = "";
    //iterate through tags
  tags.forEach(tag => {
    // create span for each tag
    const tagEl = document.createElement("span");
    // give each class of tag
    tagEl.classList.add("tag");
    // give it the inner text from tag
    tagEl.innerText = tag;
    // add each tagEl to tagsEl div
    tagsEl. appendChild(tagEl);
  });
}
