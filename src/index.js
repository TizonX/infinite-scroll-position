console.log("hello js");
const scrollableContainer = document.getElementById("scrollable-container");
const content = (document.getElementById("content").style.color = "green");
const loadingIndicator = document.getElementById("loading");
const items = (document.querySelectorAll("item").style.color = "red");
document.getElementById("vishal").textContent = "mishra";
const threshold = 1000; // Adjust this value as needed
let isLoading = false;

scrollableContainer.addEventListener("scroll", () => {
  if (isLoading) return;

  const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;

  if (scrollHeight - scrollTop - clientHeight < threshold) {
    // User has reached the bottom, trigger action to load more content
    loadMoreContent();
  }
});

function loadMoreContent() {
  isLoading = true;
  loadingIndicator.style.display = "block";

  // Simulate loading more content after a short delay
  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      const newItem = document.createElement("div");
      newItem.className = "item";
      newItem.textContent = `Item ${content.children.length + 1}`;
      content.appendChild(newItem);
    }

    isLoading = false;
    loadingIndicator.style.display = "none";
  }, 1000); // Simulated loading time
}
