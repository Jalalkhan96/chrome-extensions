const blockedDomains = [
  "tiktok.com",
  "reddit.com",
  "pornhub.com",
  "xvideos.com",
  "xnxx.com",
  "xhamster.com",
  "redtube.com",
  "youporn.com",
  "cam4.com",
  "badoinkvr.com",
  "chaturbate.com",
  "livejasmin.com",
  "onlyfans.com",
  "rule34.xxx",
  "erome.com",
  "nudostar.com",
  "motherless.com",
  "tnaflix.com",
  "beeg.com",
  "spankbang.com",
  "hqporner.com",
  "fantasti.cc",
  "shesfreaky.com",
  "theporndude.com",
  "javlibrary.com",
  "mydirtyhobby.com",
  "faphouse.com",
  "egirls.com"
];

function blurBlockedResults() {
  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    const href = link.href.toLowerCase();
    blockedDomains.forEach(domain => {
      if (href.includes(domain)) {
        const result = link.closest("div");
        if (result) {
          result.style.filter = "blur(8px)";
          result.style.pointerEvents = "none";
          result.style.opacity = "0.3";
        }
      }
    });
  });
}

setTimeout(blurBlockedResults, 500);
