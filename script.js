const pages = {
  "index.html": {
    title: "Yu Xu | About Me",
    html: `
      <section class="hero page-shell">
        <div class="hero-copy">
          <p class="eyebrow">Psychology · Decision Making · Cognition · Neural Science</p>
          <h1>Yu Xu</h1>
          <div class="hero-about">
            <p>
              Yu Xu (徐煜) is a master's student in Basic Psychology at Shaanxi Normal University. His research focuses on
              the cognitive, computational, and neural mechanisms underlying human decision-making. By combining behavioral
              experiments, neuroimaging techniques, and computational modeling, he aims to understand how humans evaluate
              options, make choices, and adapt their decisions across different contexts.
            </p>
            <p class="question-lead">His current research questions include:</p>
            <ul class="research-questions">
              <li>How does the human brain encode decision-relevant information?</li>
              <li>What latent cognitive processes drive human choice behavior?</li>
              <li>How can computational models and neuroimaging methods be combined to explain individual differences in decision-making?</li>
            </ul>
            <p>
              Beyond academic work, he enjoys travel, photography, vocal music, choral singing, games, and many other
              activities that keep him curious and inspired.
            </p>
          </div>
          <div class="hero-actions">
            <a class="button primary" href="mailto:psy_xuyu@outlook.com">Email Me</a>
            <a class="button secondary" href="https://orcid.org/0009-0001-2274-7506" target="_blank" rel="noreferrer">ORCID</a>
            <a class="button ghost" href="life.html">View Life &amp; Interests</a>
            <a class="button ghost" href="cv.html">View CV</a>
          </div>
        </div>
        <aside class="profile-card" aria-label="Profile summary">
          <img class="portrait-placeholder" src="assets/profile.png" alt="Portrait of Yu Xu" />
          <div class="profile-meta">
            <p class="meta-label">Current Affiliation</p>
            <p>Shaanxi Key Laboratory of Behavior and Cognitive Neuroscience</p>
            <p class="meta-label">Advisor</p>
            <p>Prof. Zhiyuan Liu</p>
            <p class="meta-label">Contact</p>
            <p><a href="mailto:psy_xuyu@outlook.com">psy_xuyu@outlook.com</a></p>
          </div>
        </aside>
      </section>
    `,
  },
  "cv.html": {
    title: "Yu Xu | CV",
    html: `
      <section class="page-hero">
        <p class="eyebrow">Academic CV</p>
        <h1>CV</h1>
        <p class="tagline">Stay curious, keep learning, and move forward.</p>
      </section>
      <section class="download-panel">
        <p class="section-kicker">Download</p>
        <h2>CV PDF coming soon</h2>
        <p>
          The final PDF version of my academic CV will be linked here after revision.
          For now, please contact me by email if you need the latest version.
        </p>
        <div class="hero-actions">
          <a class="button disabled" aria-disabled="true">Download Unavailable</a>
        </div>
      </section>
    `,
  },
  "education.html": {
    title: "Yu Xu | Education",
    html: `
      <section class="page-hero">
        <p class="eyebrow">Education</p>
        <h1>Education</h1>
        <p class="tagline">Lifelong learning and continuous self-improvement.</p>
      </section>
      <section class="timeline large">
        <article class="timeline-item">
          <div class="time">2024 - Present</div>
          <div>
            <h2>Shaanxi Normal University</h2>
            <p class="role">M.S. in Basic Psychology · Xi'an, China</p>
            <p>Advisor: Prof. Zhiyuan Liu</p>
            <ul>
              <li>Outstanding Graduate Student (2024, 2025).</li>
              <li>First-Class Scholarship (2025).</li>
            </ul>
          </div>
        </article>
        <article class="timeline-item">
          <div class="time">2018 - 2022</div>
          <div>
            <h2>Shanghai Normal University</h2>
            <p class="role">B.S. in Applied Psychology; B.A. in English · Shanghai, China</p>
            <p>GPA: 3.77/4.00; Rank: 6/60.</p>
            <ul>
              <li>Professional Scholarship (2018-2021).</li>
              <li>Outstanding Undergraduate (2022).</li>
              <li>Provincial-level National College Student Innovation and Entrepreneurship Project (2019).</li>
              <li>First Prize, Shanghai Division, National College Student Art Exhibition (2020).</li>
              <li>Second Prize, College Academic Vocabulary Competition (2020).</li>
            </ul>
          </div>
        </article>
      </section>
    `,
  },
  "publications.html": {
    title: "Yu Xu | Publications",
    html: `
      <section class="page-hero">
        <p class="eyebrow">Publications</p>
        <h1>Publications</h1>
        <p class="tagline">Pursuing innovative and interesting researches.</p>
      </section>
      <section class="publication-group">
        <div class="group-heading"><h2>Published</h2></div>
        <article class="publication">
          <p>Liu, S., Li, S., Jiang, H., Yin, L., <strong>Xu, Y.</strong>, Liu, Z., &amp; Guo, X. (2025). <span class="paper-title">Subjective value-weights on benefit and risk in human neurocomputation changes between conservative and risky decision-making.</span> <em>NeuroImage, 322</em>, Article 121546. <a href="https://doi.org/10.1016/j.neuroimage.2025.121546" target="_blank" rel="noreferrer">https://doi.org/10.1016/j.neuroimage.2025.121546</a></p>
        </article>
      </section>
      <section class="publication-group">
        <div class="group-heading"><h2>In Progress</h2><p>* Equal contribution</p></div>
        <article class="publication"><p>Shi, S.*, <strong>Xu, Y.*</strong>, Ding, T., Liu, S., Liu, Z., &amp; Guo, X. <span class="paper-title">Altered intrinsic connectivity in default mode and somatomotor networks in adolescents with ADHD: A neuroimaging meta-analysis.</span> Under third-round review of <em>European Child &amp; Adolescent Psychiatry</em>.</p></article>
        <article class="publication"><p>Liu, Z., <strong>Xu, Y.</strong>, Yin, L., Liu, S., &amp; Guo, X. <span class="paper-title">Think Twice: How Deliberation Influences Risk Decision-Making in a Prospect Theory Drift Diffusion Framework.</span> Under first-round review of <em>Cognition</em>.</p></article>
        <article class="publication"><p>Liu, S.*, <strong>Xu, Y.*</strong>, Liu, S., Liu, Z., &amp; Guo, X. <span class="paper-title">Simplified or Distorted Information Processing? A Cognitive Computational Investigation of How Time Pressure Affects Risky Decision-Making.</span> Under first-round review of <em>Acta Psychologica Sinica</em>.</p></article>
      </section>
      <section class="publication-group">
        <div class="group-heading"><h2>Conference Presentations</h2></div>
        <article class="publication"><p><strong>Xu, Y.</strong>, Liu, S., &amp; Liu, Z. (2025). <span class="paper-title">The Mechanisms of Risky Decision-Making Based on Deliberation: Evidence from Behavioral Computational Modeling.</span> Oral presentation at the 26th National Academic Conference of Psychology, Jinan, Shandong, China.</p></article>
      </section>
    `,
  },
  "life.html": {
    title: "Yu Xu | Life & Interests",
    html: `
      <section class="page-hero">
        <p class="eyebrow">Life &amp; Interests</p>
        <h1>Life &amp; Interests</h1>
        <p class="tagline">A future space for music, choir, reading, and life outside research.</p>
      </section>
      <section class="interest-grid">
        <article class="interest-card placeholder">
          <h2>Coming Soon</h2>
          <p>This section is reserved for personal interests once the content is ready. It can include choir, music, reading, travel, or other non-research notes.</p>
        </article>
        <article class="interest-card"><h2>Choir</h2><p>Boyue Choir of SHNU, Ningbo Choir, and Xi'an Zhuque Chamber Choir.</p><p class="muted">Jun 2019 - Present</p></article>
        <article class="interest-card"><h2>Student Organizations</h2><p>Student Union and Campus Press Corps, Shanghai Normal University.</p><p class="muted">Jul 2019 - Jun 2020</p></article>
      </section>
    `,
  },
};

const momentPosts = [
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

const renderMomentPost = (post) => `
  <article class="moment-card">
    <div class="moment-avatar">YX</div>
    <div class="moment-body">
      <div class="moment-header"><time>${post.date}</time></div>
      <p>${post.text}</p>
      <div class="moment-grid">
        ${Array.from({ length: post.imageCount }, (_, index) => {
            const src = imagePath(post.folder, index);
            return `<button data-lightbox-src="${src}"><img src="${src}" alt="${post.city} photo ${index + 1}" /></button>`;
          })
          .join("")}
      </div>
      <p class="moment-location">${post.city}</p>
    </div>
  </article>
`;

pages["life.html"].html = `
  <section class="page-hero">
    <p class="eyebrow">Life &amp; Interests</p>
    <h1>Life &amp; Interests</h1>
    <p class="tagline">A glimpse into the small moments I cherish.</p>
  </section>
  <section class="moments-feed" aria-label="Life and interests photo feed">
    ${momentPosts.map(renderMomentPost).join("")}
  </section>
  <section class="moments-more" aria-label="More moments note">
    <span class="more-line"></span>
    <p>More moments are still unfolding.</p>
    <span class="more-dots" aria-hidden="true"><i></i><i></i><i></i></span>
  </section>
`;

const getPageName = (href = window.location.href) => {
  const url = new URL(href, window.location.href);
  const page = url.pathname.split("/").pop() || "index.html";
  return pages[page] ? page : "index.html";
};

const setActiveNav = (pageName) => {
  document.querySelectorAll(".nav a").forEach((navLink) => {
    navLink.classList.toggle("active", getPageName(navLink.href) === pageName);
  });
};

const renderPage = (pageName, shouldPush = true) => {
  const page = pages[pageName] || pages["index.html"];
  const main = document.querySelector("main");
  if (!main) return;

  main.classList.add("content-leaving");

  window.setTimeout(() => {
    main.className = pageName === "index.html" ? "" : "page-shell";
    main.innerHTML = page.html;
    document.title = page.title;
    setActiveNav(pageName);
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (shouldPush) {
      window.history.pushState({ pageName }, page.title, pageName);
    }

    window.requestAnimationFrame(() => {
      main.classList.add("content-entering");
      window.setTimeout(() => main.classList.remove("content-entering"), 360);
    });
  }, 160);
};

window.addEventListener("DOMContentLoaded", () => {
  const pageName = getPageName();
  setActiveNav(pageName);
  const feed = document.querySelector(".moments-feed");
  if (feed && !feed.children.length) {
    feed.innerHTML = momentPosts.map(renderMomentPost).join("");
  }
  document.documentElement.classList.add("page-ready");
});

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

document.addEventListener("click", (event) => {
  const lightboxTrigger = event.target.closest("[data-lightbox-src]");
  if (lightboxTrigger) {
    event.preventDefault();
    const image = lightboxTrigger.querySelector("img");
    openLightbox(lightboxTrigger.dataset.lightboxSrc, image?.alt || "Photo preview");
    return;
  }

  const closeTrigger = event.target.closest(".lightbox-close");
  if (closeTrigger || event.target.classList.contains("lightbox")) {
    event.preventDefault();
    closeLightbox();
    return;
  }

  const link = event.target.closest("a");
  if (!link) return;

  const url = new URL(link.href, window.location.href);
  const pageName = getPageName(link.href);
  const isInternalPage = url.origin === window.location.origin && pages[pageName];
  const isModifiedClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
  const opensNewContext = link.target && link.target !== "_self";
  const isCurrentPage = pageName === getPageName();

  if (!isInternalPage || isModifiedClick || opensNewContext || isCurrentPage) return;

  event.preventDefault();
  renderPage(pageName, true);
});

window.addEventListener("popstate", () => {
  renderPage(getPageName(), false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});


