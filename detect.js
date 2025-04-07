function isMobileDevice() {
  return window.innerWidth <= 767;
}

function getCurrentFile() {
  const path = window.location.pathname;
  return path.substring(path.lastIndexOf("/") + 1);
}

function redirectIfNeeded() {
  const isMobile = isMobileDevice();
  const currentFile = getCurrentFile();

  const redirects = {
    "home.html": "homephone.html",
    "homephone.html": "home.html",
    "portfolio.html": "portfoliophone.html",
    "portfoliophone.html": "portfolio.html"
  };

  if (isMobile) {
    // On mobile, but viewing desktop version?
    if (currentFile === "home.html") {
      window.location.href = "homephone.html";
    } else if (currentFile === "portfolio.html") {
      window.location.href = "portfoliophone.html";
    }
  } else {
    // On desktop, but viewing mobile version?
    if (currentFile === "homephone.html") {
      window.location.href = "home.html";
    } else if (currentFile === "portfoliophone.html") {
      window.location.href = "portfolio.html";
    }
  }
}

window.addEventListener("load", redirectIfNeeded);
window.addEventListener("resize", () => {
  clearTimeout(window.__resizeTimer);
  window.__resizeTimer = setTimeout(redirectIfNeeded, 200);
});
