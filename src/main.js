window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 333);
});

document.addEventListener("DOMContentLoaded", () => {
  const htmlEl = document.documentElement;
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const langTR = document.getElementById("lang-tr");
  const langEN = document.getElementById("lang-en");

  const translations = {
    en: {
      navHome: "Home",
      navAbout: "About Us",
      navProjects: "Projects",
      navContact: "Contact & Donate",
      heroTitle: "Digital Freedom and Ethical Technology",
      heroSubtitle:
        "We believe in a more freely accessible future where technology empowers individuals and respects their rights. Not for money, but for a more reliable internet.",
      heroButton: "Learn More",
      aboutTitle: "About Us",
      aboutText:
        "At Xmer™ DET, we are committed to developing innovative solutions that promote digital freedom and uphold ethical standards in technology. Our vision and mission are to create a new world where personal data belongs to its rightful owners.",
      aboutVisionTitle: "Our Vision",
      aboutVisionText:
        "We envision a digital ecosystem where technology serves humanity, protects individual freedoms, and operates transparently and ethically. We dream of a digital world where every user has full control over their own data.",
      aboutMissionTitle: "Our Mission",
      aboutMissionText:
        "We develop open-source, decentralized, and privacy-respecting tools. Our goal is to simplify, liberate, and make technology accessible for everyone, always in favor of people.",
      aboutValuesTitle: "Our Values",
      aboutValuesText:
        "Ethics — Technologies that never track users and are free of advertisements. Transparency — Open code and auditable processes. Simplicity — Lightweight and easy-to-understand tools for every device and every user.",
      aboutFundingTitle: "Funding Model",
      aboutFundingText:
        "Our projects are fully independent and run without advertisements; no ads are placed in order to protect user privacy. For sustainability, we rely on a donation and volunteer support model. We never generate revenue through data sales or privacy violations.",
      projectsTitle: "Our Projects",
      projectsSubtitle:
        "Explore the innovative projects we've developed, showcasing our commitment to digital freedom and ethical technology.",
      projectButtonText: "Start Using",
      contactTitle: "Contact Us",
      contactSubtitle:
        "We're here to help. Reach out to us via email or connect with us on social media.",
      contactEmailTitle: "Email Us",
      contactEmailDesc: "Our team is ready to answer your questions.",
      contactInquiries: "General Inquiries",
      contactPress: "Press & Media",
      contactFollowTitle: "Follow Us",
      contactFollowDesc:
        "Ask us your questions on social media or participate in our surveys.",
      footerRights: "Xmer™ Digital Freedom and Ethical Technology Community",
      supportUsTitle: "Would you like to support our projects?",
      supportUsDesc:
        "You can donate or tell us if you have an idea for a Freedom-bringing and Ethical app.",
      donateUs: "Donate Us",
      contactIdea: "I have an Idea",
      metaTitle: "XmerOriginals | Digital Freedom and Ethical Technology",
      metaDescription:
        "Open-source projects and tools that promote digital freedom, privacy and ethical technology. Join, donate or contribute to build a privacy-respecting internet.",
      contactMailWarn:
        'Please include your social media tag in your email e.g. "Instagram @xmerdet"',
    },
    tr: {
      navHome: "Ana Sayfa",
      navAbout: "Hakkımızda",
      navProjects: "Projeler",
      navContact: "İletişim & Bağış",
      heroTitle: "Dijital Özgürlük ve Etik Teknoloji",
      heroSubtitle:
        "Teknolojinin bireyleri güçlendirdiği ve haklarına saygı duyduğu, daha özgürce erişilebilir bir geleceğe inanıyoruz. Para için değil, daha güvenilir bir internet için.",
      heroButton: "Daha Fazla Bilgi",
      aboutTitle: "Hakkımızda",
      aboutText:
        "Xmer™ DET olarak, dijital özgürlüğü teşvik eden ve teknolojide etik standartları koruyan yenilikçi çözümler geliştirmeye kararlıyız. Hayalimiz ve amacımız birlikte kişisel verilerin sahiplerine ait olduğu yeni bir dünya kurmak.",
      aboutVisionTitle: "Vizyonumuz",
      aboutVisionText:
        "Teknolojinin insanlığa hizmet ettiği, bireysel özgürlükleri koruduğu, şeffaf ve etik bir dijital ekosistem inşa etmek. Her kullanıcının kendi verisi üzerinde tam kontrol sahibi olduğu bir dijital dünya hayal ediyoruz.",
      aboutMissionTitle: "Misyonumuz",
      aboutMissionText:
        "Açık kaynaklı, merkeziyetsiz ve gizliliğe saygılı araçlar geliştiriyoruz. Amacımız, teknolojiyi insanların lehine basitleştirmek, özgürleştirmek ve erişilebilir kılmak.",
      aboutValuesTitle: "Değerlerimiz",
      aboutValuesText:
        "Etik — Kullanıcıyı asla izlemeyen, reklam içermeyen teknolojiler. Şeffaflık — Kodlarımız açık, süreçlerimiz denetlenebilir. Basitlik — Her cihazda, herkes için hafif ve anlaşılır araçlar.",
      aboutFundingTitle: "Finansman Modelimiz",
      aboutFundingText:
        "Projelerimiz tamamen bağımsız ve reklamsız kalacak şekilde yürütülür; kullanıcı gizliliğini korumak için hiçbir reklam yerleştirilmez. Sürdürülebilirlik için bağış ve gönüllü destek modeli benimsenir. Hiçbir zaman veri satışı veya gizlilik ihlaliyle gelir elde edilmez.",
      projectsTitle: "Projelerimiz",
      projectsSubtitle:
        "Dijital Özgürlük ve Etik Teknolojiye olan bağlılığımızı sergileyen projelerimizi keşfedin.",
      projectButtonText: "Kullanmaya Başla",
      contactTitle: "Bize Ulaşın",
      contactSubtitle:
        "Yardım etmek için buradayız. Bize e-posta yoluyla ulaşın veya sosyal medyada bizimle bağlantı kurun.",
      contactEmailTitle: "E-posta Gönderin",
      contactEmailDesc: "Ekibimiz sorularınızı yanıtlamaya hazır.",
      contactInquiries: "Genel Sorular",
      contactPress: "Basın & Medya",
      contactFollowTitle: "Bizi Takip Edin",
      contactFollowDesc:
        "Sosyal medyada bize sorularınızı sorun veya anketlerimize katılın.",
      footerRights: "Xmer™ Dijital Özgürlük ve Etik Teknoloji Topluluğu",
      supportUsTitle: "Projelerimizi desteklemek ister misiniz?",
      supportUsDesc:
        "Bağışta bulunabilir veya Özgürlük getiren ve Etik bir uygulama fikriniz varsa bize iletebilirsiniz.",
      donateUs: "Bize Bağış Yapın",
      contactIdea: "Bir Fikrim Var",
      metaTitle: "XmerOriginals | Dijital Özgürlük ve Etik Teknoloji",
      metaDescription:
        "Dijital özgürlüğü, gizliliği ve etik teknolojiyi destekleyen açık kaynaklı projeler ve araçlar. Katılın, bağış yapın veya katkıda bulunun.",
      contactMailWarn:
        'Lütfen e-postanızda sosyal medya kullanıcı adınızı belirtin örn. "Instagram @xmerdet"',
    },
  };

  let cachedProjects = [];

  const setLanguage = (lang) => {
    document.querySelectorAll("[data-translate-key]").forEach((el) => {
      const key = el.getAttribute("data-translate-key");
      if (translations[lang] && translations[lang][key]) {
        el.innerText = translations[lang][key];
      }
    });

    htmlEl.setAttribute("lang", lang);

    if (lang === "tr") {
      langTR.className =
        "px-3 py-1 rounded-full bg-primary text-white dark:bg-primary-dark dark:text-black transition-colors";
      langEN.className =
        "px-3 py-1 rounded-full text-slate-500 dark:text-slate-400 transition-colors";
    } else {
      langEN.className =
        "px-3 py-1 rounded-full bg-primary text-white dark:bg-primary-dark dark:text-black transition-colors";
      langTR.className =
        "px-3 py-1 rounded-full text-slate-500 dark:text-slate-400 transition-colors";
    }
    localStorage.setItem("language", lang);

    const metaDesc = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const canonical = document.querySelector('link[rel="canonical"]');

    if (translations[lang].metaTitle) {
      document.title = translations[lang].metaTitle;
      if (ogTitle)
        ogTitle.setAttribute("content", translations[lang].metaTitle);
    }
    if (translations[lang].metaDescription) {
      if (metaDesc)
        metaDesc.setAttribute("content", translations[lang].metaDescription);
      if (ogDesc)
        ogDesc.setAttribute("content", translations[lang].metaDescription);
    }
    if (ogUrl)
      ogUrl.setAttribute(
        "content",
        canonical ? canonical.href : window.location.href
      );
  };

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    const expanded = mobileMenu.classList.contains("hidden") ? "false" : "true";
    mobileMenuButton.setAttribute("aria-expanded", expanded);
  });

  const applyTheme = (theme) => {
    if (theme === "dark") {
      htmlEl.classList.add("dark");
    } else {
      htmlEl.classList.remove("dark");
    }
  };
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  applyTheme(mediaQuery.matches ? "dark" : "light");
  mediaQuery.addEventListener("change", (e) => {
    applyTheme(e.matches ? "dark" : "light");
  });

  const initializeAnimations = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });
  };

  const loadProjects = (projects, currentLang) => {
    const container = document.getElementById("projects-container");
    if (!container) return;

    container.innerHTML = "";
    let projectsHTML = "";

    projects.forEach((project, index) => {
      translations.en[`project${project.id}Title`] = project.title_en;
      translations.en[`project${project.id}Desc`] = project.desc_en;
      translations.tr[`project${project.id}Title`] = project.title_tr;
      translations.tr[`project${project.id}Desc`] = project.desc_tr;
      const buttonHTML = project.link
        ? `
            <div class="mt-auto pt-4">
                <a href="${project.link}" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="inline-block px-4 py-2 bg-primary text-white dark:bg-primary-dark dark:text-black rounded-lg hover:bg-opacity-80 transition-colors"
                   data-translate-key="projectButtonText">
                    ${
                      currentLang === "tr"
                        ? translations.tr.projectButtonText
                        : translations.en.projectButtonText
                    }
                </a>
            </div>
            `
        : "";

      projectsHTML += `
            <div class="snap-center flex-shrink-0 w-10/12 sm:w-1/2 md:w-1/3 lg:w-1/4 animate-on-scroll delay-${
              index * 100
            }">
                <div class="flex flex-col h-full bg-white/50 dark:bg-gray-900/50 border border-white/50 rounded-2xl overflow-hidden transition-all duration-300">
                    <div class="w-full h-48 bg-center bg-no-repeat bg-contain"
                        style='background-image: url("${project.image}");'>
                    </div>
                    <div class="p-6 flex flex-col flex-grow text-center">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white"
                            data-translate-key="project${project.id}Title">
                            ${
                              currentLang === "tr"
                                ? project.title_tr
                                : project.title_en
                            }
                        </h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mt-2 flex-grow"
                            data-translate-key="project${project.id}Desc">
                            ${
                              currentLang === "tr"
                                ? project.desc_tr
                                : project.desc_en
                            }
                        </p>
                        ${buttonHTML}
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = projectsHTML;
    initializeAnimations();
  };

  const initializePage = async () => {
    const savedLang = localStorage.getItem("language");
    const browserLang = navigator.language || navigator.userLanguage;
    const currentLang =
      savedLang || (browserLang.startsWith("tr") ? "tr" : "en");

    try {
      const response = await fetch("./projects/projects.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const projects = await response.json();
      cachedProjects = projects;
      loadProjects(projects, currentLang);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      const container = document.getElementById("projects-container");
      if (container)
        container.innerHTML =
          '<p class="text-center text-red-500">Could not load projects.</p>';
    }
    setLanguage(currentLang);
    initializeAnimations();
  };

  langTR.addEventListener("click", () => {
    const newLang = "tr";
    setLanguage(newLang);
    if (cachedProjects.length) loadProjects(cachedProjects, newLang);
  });
  langEN.addEventListener("click", () => {
    const newLang = "en";
    setLanguage(newLang);
    if (cachedProjects.length) loadProjects(cachedProjects, newLang);
  });

  initializePage();
});
