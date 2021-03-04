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
  // if Enter key is pressed
  if (e.key === "Enter") {
    // wait 10ms and then clear e.target.value (textarea)
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    // call randomSelect function
    randomSelect();
  }
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
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  // number of times interval will run
  const times = 30;

  // HIGHLIGHT RANDOM TAG EVERY 100 ms

  // every 100ms run code block
  const interval = setInterval(() => {
    // call pickRandomTag function
    const randomTag = pickRandomTag();
    // apply highlight to randomTag
    highlightTag(randomTag);
    // after 100ms unhighlight randomTag
    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  // HIGHLIGHT RANDOM TAG FINAL TIME

  // after times * 100ms
  setTimeout(() => {
    // stop interval function
    clearInterval(interval);
    // after 100ms
    setTimeout(() => {
      // call pickRandomTag function
      const randomTag = pickRandomTag();
      // apply highlight to randomTag
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  // all elements with class of tag
  const tags = document.querySelectorAll(".tag");
  // return random tag from tags nodeList
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  // add highlight class to tag
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  // remove highlight class from tag
  tag.classList.remove("highlight");
}
