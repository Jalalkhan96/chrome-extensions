function removeShorts() {
  // Remove Shorts shelf from homepage
  const shortsShelf = [...document.querySelectorAll('ytd-rich-section-renderer')].find(el => {
    return el.innerText.includes('Shorts');
  });
  if (shortsShelf) shortsShelf.remove();

  // Remove Shorts from sidebar or other elements
  document.querySelectorAll('a').forEach(link => {
    if (link.href.includes('shorts')) {
      const container = link.closest('ytd-grid-video-renderer, ytd-rich-item-renderer, ytd-video-renderer');
      if (container) container.remove();
    }
  });

  // Remove Shorts tabs from channel pages
  const shortsTab = [...document.querySelectorAll('tp-yt-paper-tab')]
    .find(tab => tab.innerText.toLowerCase().includes('shorts'));
  if (shortsTab) shortsTab.style.display = 'none';
}

// Run initially and whenever DOM updates
setInterval(removeShorts, 1000);
