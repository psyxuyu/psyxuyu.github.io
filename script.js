const momentPosts = [
  {
    city: "Suzhou City",
    text: "Behind the concert, for the first time.",
    date: "2026.06.06",
    folder: "10",
    imageCount: 4,
  },
  {
    city: "Ningbo City",
    text: "Labour Day!",
    date: "2026.05.05",
    folder: "1",
    imageCount: 4,
  },
  {
    city: "Xiamen City",
    text: "Back and forth",
    date: "2026.03.01",
    folder: "2",
    imageCount: 4,
  },
  {
    city: "Quanzhou City",
    text: "I love, therefore I am.",
    date: "2026.02.27",
    folder: "3",
    imageCount: 4,
  },
  {
    city: "Pingxiang City",
    text: "When you buy an instant camera in Spring Festival",
    date: "2026.02.15",
    folder: "4",
    imageCount: 4,
  },
  {
    city: "Yan'an City",
    text: "By our own hands",
    date: "2026.01.21",
    folder: "5",
    imageCount: 4,
  },
  {
    city: "Yulin City",
    text: "The loess plateau",
    date: "2026.01.19",
    folder: "6",
    imageCount: 4,
  },
  {
    city: "Xi'an City",
    text: "Happy New Year!!!",
    date: "2025.12.31",
    folder: "7",
    imageCount: 4,
  },
  {
    city: "Beijing City",
    text: "Concert at National Center for the Performing Arts",
    date: "2025.12.01",
    folder: "8",
    imageCount: 4,
  },
  {
    city: "Jinan City",
    text: "Conference & Travel",
    date: "2025.11.02",
    folder: "9",
    imageCount: 4,
  },
];

const imagePath = (folder, index) => `assets/moments/${String(folder).padStart(2, "0")}-${String(index + 1).padStart(2, "0")}.jpg`;
const resolveAssetPath = (path) => new URL(path, document.baseURI).href;

const renderMomentImages = (post) =>
  Array.from({ length: post.imageCount }, (_, index) => {
    const src = imagePath(post.folder, index);
    const resolvedSrc = resolveAssetPath(src);
    return `<button type="button" data-lightbox-src="${resolvedSrc}"><img src="${resolvedSrc}" alt="${post.city} photo ${index + 1}" /></button>`;
  }).join("");

const renderMomentPost = (post) => `
  <article class="moment-preview-card">
    <p class="moment-preview-caption">${post.text}</p>
    <div class="moment-grid moment-preview-grid">
      ${renderMomentImages(post)}
    </div>
    <div class="moment-preview-meta">
      <p class="moment-location">${post.city}</p>
      <time>${post.date}</time>
    </div>
  </article>
`;

const ensureLightbox = () => {
  let lightbox = document.querySelector(".lightbox");
  if (lightbox) return lightbox;

  lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Close image preview">Close</button>
    <img src="" alt="" />
  `;
  document.body.appendChild(lightbox);
  return lightbox;
};

const openLightbox = (src, alt = "Photo preview") => {
  const lightbox = ensureLightbox();
  const image = lightbox.querySelector("img");
  image.src = src;
  image.alt = alt;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
};

const closeLightbox = () => {
  const lightbox = document.querySelector(".lightbox");
  if (!lightbox) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
};

const openLightboxFromTrigger = (trigger) => {
  const image = trigger.querySelector("img");
  openLightbox(trigger.dataset.lightboxSrc, image ? image.alt : "Photo preview");
};

const bindLightboxTriggers = (root = document) => {
  root.querySelectorAll("[data-lightbox-src]").forEach((trigger) => {
    if (trigger.dataset.lightboxBound === "true") return;
    trigger.dataset.lightboxBound = "true";
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openLightboxFromTrigger(trigger);
    });
  });
};

const setActiveNav = () => {
  const sections = Array.from(document.querySelectorAll(".snap-section[id]"));
  const navLinks = Array.from(document.querySelectorAll(".nav a[href^='#']"));
  if (!sections.length || !navLinks.length) return;

  const current = sections.reduce((activeSection, section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop <= 130) return section;
    return activeSection;
  }, sections[0]);

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
  });
};

window.addEventListener("DOMContentLoaded", () => {
  const feed = document.querySelector(".moments-feed");
  if (feed && !feed.children.length) {
    feed.innerHTML = momentPosts.map(renderMomentPost).join("");
    bindLightboxTriggers(feed);
  }

  const previewFeed = document.querySelector("[data-moment-preview]");
  if (previewFeed && !previewFeed.children.length) {
    previewFeed.innerHTML = momentPosts.slice(0, 2).map(renderMomentPost).join("");
    bindLightboxTriggers(previewFeed);
  }

  setActiveNav();
  document.documentElement.classList.add("page-ready");
});

window.addEventListener("scroll", setActiveNav, { passive: true });
window.addEventListener("hashchange", setActiveNav);

document.addEventListener("click", (event) => {
  const lightboxTrigger = event.target.closest("[data-lightbox-src]");
  if (lightboxTrigger) {
    event.preventDefault();
    openLightboxFromTrigger(lightboxTrigger);
    return;
  }

  const closeTrigger = event.target.closest(".lightbox-close");
  if (closeTrigger || event.target.classList.contains("lightbox")) {
    event.preventDefault();
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});
