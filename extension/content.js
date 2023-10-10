const replacementImageUrl = "https://github.com/EricPanDev/we-live-we-love-we-lie/blob/main/download.jpeg?raw=true";

function replaceImageSrcCursorAndBackground(element) {
  if (element instanceof HTMLImageElement) {
    element.src = replacementImageUrl;
    element.style.cursor = `url("${replacementImageUrl}"), auto`;
  }
  else {
    element.style.cursor = `url("${replacementImageUrl}"), auto`;
  }
}

function handleMutations(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof HTMLElement) {
          const elements = Array.from(node.querySelectorAll("*"));
          elements.forEach(replaceImageSrcCursorAndBackground);
        }
      });
    }
  }
}
const observer = new MutationObserver(handleMutations);

// Start observing the body for changes
observer.observe(document.body, {
  childList: true,
  subtree: true,
});
const elements = Array.from(document.querySelectorAll("*"));
elements.forEach(replaceImageSrcCursorAndBackground)