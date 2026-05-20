window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 400);
});

document.addEventListener("DOMContentLoaded", () => {
  const htmlEl = document.documentElement;
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const langTR = document.getElementById("lang-tr");
  const langEN = document.getElementById("lang-en");
  const translations = {
    en: {
      navAbout: "About Us",
      navDet: "DET",
      navProjects: "Projects",
      navLicense: "License",
      navContact: "Contact",
      heroBrand: "XmerOriginals",
      heroSubtitle:
        "We believe in a future where technology empowers individuals, not corporations. Building open-source tools for digital freedom.",
      heroButton: "Our Mission",
      heroProjectButton: "Explore Projects",
      aboutTag: "Who We Are",
      aboutTitle: "Crafting Ethical Technology",
      aboutText:
        "We don't just build apps; we build alternatives to the surveillance economy. Our mission is to return data ownership to where it belongs: the people.",
      valPrivacy: "Privacy First",
      valOpen: "Open Source",
      aboutFundingTitle: "Powered by People",
      aboutFundingText:
        "We are 100% independent. No ads, no data selling, no investors calling the shots. We rely on donations and community support to keep the internet honest.",
      detDesc:
        "DET (Digital Freedom and Ethical Technology) is our flagship initiative. It is a manifesto and a set of tools designed to reclaim the digital space, offering ethical licenses and guides.",
      btnLicense: "Get License",
      btnGuide: "Read the Guide",
      projectsTitle: "Our Projects",
      projectsSubtitle:
        "Ethical and Free projects we develop as XmerOriginals.",
      projectButtonText: "View Project",
      contactTitle: "Join the Movement",
      footerRights:
        "© 2026 XmerOriginals. Digital Freedom and Ethical Technology Community.",
      metaTitle: "XmerOriginals | Future of Digital Freedom",
      metaDescription:
        "XmerOriginals is building a privacy-respecting internet through open-source innovation and ethical technology.",
      juriesTitle: "Distinguished Jury",
      juriesSubtitle: "Evaluated by industry leaders and privacy advocates.",
      contactFormTitle: "Send us a message",
      contactContact: "Contact",
      contactSupport: "General Questions",
      contactPress: "Press & Media",
      contactIdea: "I Have an Idea",
      contactReport: "Report an Issue",
      contactFootnote:
        'Please specify your social media username in your email (e.g. "Instagram @xmerofficial").',
      emailCopied: "Email copied to clipboard!",
      guideMetaTitle: "DET Guide | XmerOriginals",
      guideMetaDescription:
        "A short guide on how to use technology more consciously.",
      licenseGenTitle: "DET License Generator",
      licenseGenSubtitle:
        "Quickly create a Digital Freedom and Ethical Technology (DET) license for your project.",
      licenseAuthorLabel: "Author / Organization Name",
      licenseAuthorPlaceholder: "e.g., Melek or Xmer™",
      licenseCommercialLabel: "Allow Commercial Use?",
      licenseCommercialDesc:
        "If checked, generates DET-C (Allows commercial use) License. If unchecked, generates DET-P (Personal/Commercial not allowed) License.",
      licenseGenerateBtn: "Generate License",
      licenseResultTitle: "Your License",
      licenseCopyBtn: "Copy to Clipboard",
      licenseDownloadBtn: "Download as LICENSE file",
      valNoTracking: "No tracking, no ads. Ever.",
      valTransparent: "Transparent code, auditable by anyone.",
      btnSupport: "Support Us",
      detTag: "Flagship Initiative",
      detTitle: "Digital Freedom & Ethical Technology (DET)",
      detEthicalLicensing: "Ethical Licensing",
      detEthicalLicensingDesc:
        "Legal frameworks to prevent unethical usage of software.",
      detAwareness: "Awareness",
      detAwarenessDesc: "Guides and documentation to educate users.",
      sponsorsTitle: "Supported By Visionaries",
      donateTitle: "Donate",
      donateDesc: "Would you like to support our work?",
      followTitle: "Follow Us",
      GuideTitle: "DET Guide",
      GuideSubtitle: "A short guide on how to use technology more consciously.",
      GuideHeroTitle:
        "This guide, while not overly exhaustive, aims to provide an easily digestible and mid-level understanding of digital freedom and ethical technology for the general user, focusing on practical steps without overwhelming the reader.",
      GuideHeroDesc:
        "You can choose the PDF that suits your theme, if you are using Dark mode, you can choose DET Dark, if you want Light, you can choose DET Light.",
      guideLightBtn: "DET Light Guide PDF",
      guideDarkBtn: "DET Dark Guide PDF",
      GuideContentsTitle: "What's in This Guide?",
      GuideContents:
        "Introduction: Why Digital Security?<br> The Gates of Your Digital Castle: The Art of Managing App Permissions<br> The Window to Your Digital World: Browser Privacy<br> Breaking the Default Chains: Embracing Ethical Alternatives<br> Conclusion: Perfect Privacy is a Myth, But a Better Future is Possible",
    },
    tr: {
      navAbout: "Hakkımızda",
      navDet: "DET",
      navProjects: "Projeler",
      navLicense: "Lisans",
      navContact: "İletişim",
      heroBrand: "XmerOriginals",
      heroSubtitle:
        "Teknolojinin şirketleri değil, bireyleri güçlendirdiği bir geleceğe inanıyoruz. Dijital özgürlük için açık kaynaklı araçlar inşa ediyoruz.",
      heroButton: "Misyonumuz",
      heroProjectButton: "Projeleri Keşfet",
      aboutTag: "Biz Kimiz",
      aboutTitle: "Etik Teknoloji İnşa Ediyoruz",
      aboutText:
        "Sadece uygulamalar geliştirmiyoruz; gözetleme ekonomisine alternatifler de geliştiriyoruz. Misyonumuz, veri mülkiyetini ait olduğu yere, yani insanlara geri vermek.",
      valPrivacy: "Önce Gizlilik",
      valOpen: "Açık Kaynak",
      aboutFundingTitle: "Gücümüz İnsanlardan",
      aboutFundingText:
        "Tamamen bağımsızız. Reklam yok, veri satışı yok, kararlarımızı yöneten yatırımcılar yok. İnterneti dürüst tutmak için bağışlara ve topluluk desteğine güveniyoruz.",
      detDesc:
        "DET (Dijital Özgürlük ve Etik Teknoloji), amiral gemisi girişimimizdir. Dijital alanı geri kazanmak için tasarlanmış bir manifesto, etik lisanslar ve rehberler bütünüdür.",
      btnLicense: "Lisans Al",
      btnGuide: "Rehberi Oku",
      projectsTitle: "Projelerimiz",
      projectsSubtitle:
        "XmerOriginals olarak geliştirdiğimiz etik ve özgür projeler",
      projectButtonText: "Projeyi Gör",
      contactTitle: "Harekete Katıl",
      footerRights:
        "© 2026 XmerOriginals. Dijital Özgürlük ve Etik Teknoloji Topluluğu.",
      metaTitle: "XmerOriginals | Dijital Özgürlüğün Geleceği",
      metaDescription:
        "XmerOriginals, açık kaynak inovasyon ve etik teknoloji ile gizliliğe saygılı bir internet inşa ediyor.",
      juriesTitle: "Seçkin Jürilerimiz",
      juriesSubtitle:
        "Sektör liderleri ve gizlilik savunucuları tarafından değerlendirildi.",
      contactFormTitle: "Bize Mesaj Gönderin",
      contactContact: "İletişim",
      contactSupport: "Genel Sorular",
      contactPress: "Basın & Medya",
      contactIdea: "Bir Fikrim Var",
      contactReport: "Hata veya herhangi bir sorunu bildirin",
      contactFootnote:
        'Lütfen e-postanızda sosyal medya kullanıcı adınızı belirtin (örn. "Instagram @xmerofficial").',
      emailCopied: "E-posta panoya kopyalandı!",
      guideMetaTitle: "DET Rehberi | XmerOriginals",
      guideMetaDescription:
        "Teknolojiyi nasıl daha bilinçli kullanacağınıza dair kısa bir rehber.",
      licenseGenTitle: "DET Lisans Oluşturucu",
      licenseGenSubtitle:
        "Projeniz için hızlıca Dijital Özgürlük ve Etik Teknoloji (DET) lisansı oluşturun.",
      licenseAuthorLabel: "Yazar / Organizasyon Adı",
      licenseAuthorPlaceholder: "ör. Melek veya Xmer™",
      licenseCommercialLabel: "Ticari Kullanıma İzin Ver?",
      licenseCommercialDesc:
        "İşaretlenirse, DET-C (Ticari kullanıma izin verir) Lisansı oluşturulur. İşaretlenmezse, DET-P (Kişisel/Ticari olmayan) Lisansı oluşturulur.",
      licenseGenerateBtn: "Lisans Oluştur",
      licenseResultTitle: "Lisansınız",
      licenseCopyBtn: "Panoya Kopyala",
      licenseDownloadBtn: "LICENSE dosyası olarak indir",
      valNoTracking: "Asla takip yok, reklam yok.",
      valTransparent: "Şeffaf kod, herkes tarafından denetlenebilir.",
      btnSupport: "Bizi Destekle",
      detTag: "Amiral Gemisi Girişimi",
      detTitle: "Dijital Özgürlük & Etik Teknoloji (DET)",
      detEthicalLicensing: "Etik Lisanslama",
      detEthicalLicensingDesc:
        "Yazılımın etik dışı kullanımını önlemek için yasal çerçeveler.",
      detAwareness: "Farkındalık",
      detAwarenessDesc: "Kullanıcıları eğitmek için rehberler ve belgeler.",
      sponsorsTitle: "Vizyonerler Tarafından Destekleniyor",
      donateTitle: "Bağış Yap",
      donateDesc: "Çalışmalarımızı desteklemek ister misiniz?",
      followTitle: "Bizi Takip Et",
      GuideTitle: "DET Rehberi",
      GuideSubtitle:
        "Teknolojiyi nasıl daha bilinçli kullanacağınıza dair kısa bir rehber.",
      GuideHeroTitle:
        "Bu rehber, aşırı kapsamlı olmamakla birlikte, genel kullanıcı için dijital özgürlük ve etik teknoloji konusunda kolay anlaşılır ve orta seviyeli bir anlayış sağlamayı, okuyucuyu bunaltmadan pratik adımlara odaklanmayı amaçlamaktadır.",
      GuideHeroDesc:
        "Temanıza uygun PDF'i seçebilirsiniz; Karanlık mod kullanıyorsanız DET Dark'ı, Açık mod istiyorsanız DET Light'ı seçebilirsiniz.",
      guideLightBtn: "DET Light Rehber PDF",
      guideDarkBtn: "DET Dark Rehber PDF",
      GuideContentsTitle: "Bu Rehberde Ne Var?",
      GuideContents:
        "Giriş: Neden Dijital Güvenlik?<br> Dijital Kalenizin Kapıları: Uygulama İzinlerini Yönetme Sanatı<br> Dijital Dünyaya Açılan Pencere: Tarayıcı Gizliliği<br> Varsayılan Zincirleri Kırmak: Etik Alternatifleri Kucaklamak<br> Sonuç: Mükemmel Gizlilik Bir Mittir, Ama Daha İyi Bir Gelecek Mümkündür",
    },
  };

  let cachedProjects = [];

  const setLanguage = (lang) => {
    document.querySelectorAll("[data-translate-key]").forEach((el) => {
      const key = el.getAttribute("data-translate-key");
      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
          el.placeholder = translations[lang][key];
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });

    htmlEl.setAttribute("lang", lang);
    localStorage.setItem("language", lang);
    const activeClass =
      "bg-primary text-white dark:bg-white dark:text-black shadow-sm";
    const inactiveClass =
      "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white";

    if (lang === "tr") {
      langTR.className = `px-3 py-1 text-xs font-bold rounded-full transition-all ${activeClass}`;
      langEN.className = `px-3 py-1 text-xs font-bold rounded-full transition-all ${inactiveClass}`;
    } else {
      langEN.className = `px-3 py-1 text-xs font-bold rounded-full transition-all ${activeClass}`;
      langTR.className = `px-3 py-1 text-xs font-bold rounded-full transition-all ${inactiveClass}`;
    }

    const metaDesc = document.querySelector('meta[name="description"]');

    if (document.getElementById("GuideDET")) {
      if (translations[lang].guideMetaTitle)
        document.title = translations[lang].guideMetaTitle;
      if (metaDesc && translations[lang].guideMetaDescription)
        metaDesc.setAttribute(
          "content",
          translations[lang].guideMetaDescription,
        );
    } else {
      document.title = translations[lang].metaTitle;
      if (metaDesc)
        metaDesc.setAttribute("content", translations[lang].metaDescription);
    }
  };

  const closeMenuButton = document.getElementById("close-menu-button");

  const toggleMenu = (opening) => {
    if (opening) {
      mobileMenu.classList.remove("translate-x-full");
      document.body.style.overflow = "hidden";
    } else {
      mobileMenu.classList.add("translate-x-full");
      document.body.style.overflow = "";
    }
  };

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", () => toggleMenu(true));
  }

  if (closeMenuButton) {
    closeMenuButton.addEventListener("click", () => toggleMenu(false));
  }

  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  const applyTheme = (theme) => {
    if (theme === "dark") htmlEl.classList.add("dark");
    else htmlEl.classList.remove("dark");
  };
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  applyTheme(mediaQuery.matches ? "dark" : "light");
  mediaQuery.addEventListener("change", (e) =>
    applyTheme(e.matches ? "dark" : "light"),
  );

  let scrollObserver;
  const initializeAnimations = () => {
    if (scrollObserver) scrollObserver.disconnect();

    scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            entry.target.classList.remove("opacity-0", "translate-y-8");

            if (entry.target.id === "projects-container") {
              const cards = entry.target.querySelectorAll(".animate-on-scroll");
              cards.forEach((card, i) => {
                setTimeout(() => {
                  card.classList.add("is-visible");
                  card.classList.remove("opacity-0", "translate-y-8");
                }, i * 100);
              });
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      if (!element.classList.contains("is-visible")) {
        element.classList.add(
          "transition-all",
          "duration-700",
          "opacity-0",
          "translate-y-8",
        );
      }
      scrollObserver.observe(element);
    });

    const projectsContainer = document.getElementById("projects-container");
    if (projectsContainer) {
      scrollObserver.observe(projectsContainer);
    }
  };

  const loadProjects = (projects, currentLang) => {
    const container = document.getElementById("projects-container");
    if (!container) return;

    container.innerHTML = "";
    let projectsHTML = "";

    projects.forEach((project, index) => {
      translations.en[`p${project.id}T`] = project.title_en;
      translations.en[`p${project.id}D`] = project.desc_en;
      translations.tr[`p${project.id}T`] = project.title_tr;
      translations.tr[`p${project.id}D`] = project.desc_tr;

      projectsHTML += `
            <div class="snap-center shrink-0 w-[80vw] sm:w-[400px]" data-project-index="${index}" style="transition-delay: ${
              index * 100
            }ms">
                <div class="h-full bg-white dark:bg-gray-800/50 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group">
                    <div class="h-56 bg-gray-100 dark:bg-gray-900/50 relative overflow-hidden">
                        <div class="absolute inset-0 bg-center bg-contain bg-no-repeat transition-transform duration-500" 
                             style="background-image: url('${
                               project.image
                             }');"></div>
                    </div>
                    <div class="p-8 flex flex-col flex-grow">
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3" data-translate-key="p${
                          project.id
                        }T">
                            ${
                              currentLang === "tr"
                                ? project.title_tr
                                : project.title_en
                            }
                        </h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow" data-translate-key="p${
                          project.id
                        }D">
                            ${
                              currentLang === "tr"
                                ? project.desc_tr
                                : project.desc_en
                            }
                        </p>
                        ${
                          project.link
                            ? `
                        <a href="${
                          project.link
                        }" target="_blank" class="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors" data-translate-key="projectButtonText">
                            ${
                              currentLang === "tr"
                                ? translations.tr.projectButtonText
                                : translations.en.projectButtonText
                            }
                        </a>`
                            : ""
                        }
                    </div>
                </div>
            </div>`;
    });
    container.innerHTML = projectsHTML;

    setTimeout(() => {
      initializeAnimations();

      const pagination = document.getElementById("projects-pagination");
      if (pagination) {
        pagination.innerHTML = projects
          .map(
            (_, i) => `
                <div class="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 transition-all duration-300 ${i === 0 ? "w-6 bg-primary dark:bg-white" : ""}" data-dot-index="${i}"></div>
            `,
          )
          .join("");

        container.addEventListener("scroll", () => {
          const index = Math.round(
            container.scrollLeft / (container.clientWidth * 0.8),
          );
          document.querySelectorAll("[data-dot-index]").forEach((dot, i) => {
            if (i === index) {
              dot.classList.add("w-6", "bg-primary", "dark:bg-white");
              dot.classList.remove("w-2", "bg-gray-300", "dark:bg-gray-600");
            } else {
              dot.classList.remove("w-6", "bg-primary", "dark:bg-white");
              dot.classList.add("w-2", "bg-gray-300", "dark:bg-gray-600");
            }
          });
        });
      }
    }, 100);
  };

  const loadSponsors = () => {
    const sponsorsSection = document.getElementById("sponsors-section");
    const sponsorsContainer = document.getElementById("sponsors-container");
    const sponsors = [];

    if (sponsors.length === 0) return;
    if (sponsorsSection) sponsorsSection.classList.remove("hidden");
    let html = "";
    sponsors.forEach((sponsor) => {
      html += `
        <a href="${sponsor.url}" target="_blank" rel="nofollow noopener" 
           class="group relative flex items-center justify-center p-8 h-32 rounded-3xl bg-white/40 dark:bg-white/5 border border-white/20 dark:border-white/10 hover:border-accent/40 dark:hover:border-accent/40 text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 overflow-hidden backdrop-blur-sm">
            <div class="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 dark:from-white/10 transition-opacity duration-500"></div>
            <div class="relative z-10 transition-all duration-300 group-hover:scale-110">
                 <img src="${sponsor.logo}" alt="${sponsor.name}" 
                      class="h-12 w-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 dark:brightness-0 dark:invert dark:group-hover:filter-none dark:group-hover:brightness-100 dark:group-hover:invert-0">
            </div>
        </a>
      `;
    });
    if (sponsorsContainer) sponsorsContainer.innerHTML = html;
  };

  const initGuideLinks = () => {
    const btn = document.getElementById("det-guide-trigger");
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const isDark = htmlEl.classList.contains("dark");
        const url = isDark
          ? "https://xmeroriginals.com/mid-guide/DET-Dark.pdf"
          : "https://xmeroriginals.com/mid-guide/DET-Light.pdf";
        window.open(url, "_blank");
      });
    }
  };

  const showToast = (message) => {
    const toast = document.getElementById("toast-container");
    const msgEl = document.getElementById("toast-message");
    if (!toast || !msgEl) return;

    msgEl.innerText = message;
    toast.classList.remove("opacity-0", "translate-y-4");

    setTimeout(() => {
      toast.classList.add("opacity-0", "translate-y-4");
    }, 3000);
  };

  const initContactButtons = () => {
    document.querySelectorAll(".contact-email-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const email = btn.getAttribute("data-email");
        if (!email) return;
        try {
          await navigator.clipboard.writeText(email);
          const lang = document.documentElement.lang || "en";
          showToast(translations[lang].emailCopied);
        } catch (err) {
          console.error("Failed to copy:", err);
        }
        window.location.href = `mailto:${email}`;
      });
    });
  };

  const initLicenseGenerator = () => {
    const generateBtn = document.getElementById("generateButton");
    const resultContainer = document.getElementById("resultContainer");
    const licenseText = document.getElementById("licenseText");
    const copyBtn = document.getElementById("copyButton");
    const downloadBtn = document.getElementById("downloadButton");
    const authorInput = document.getElementById("authorName");
    const commercialInput = document.getElementById("allowCommercial");

    if (!generateBtn || !resultContainer) return;

    generateBtn.addEventListener("click", () => {
      const author = authorInput.value.trim() || "[Author Name]";
      const year = new Date().getFullYear();
      const isCommercial = commercialInput.checked;
      const type = isCommercial ? "DET-C" : "DET-P";
      const commercialClause = isCommercial
        ? `4. Commercial Use: The Software may be used for commercial purposes.`
        : `4. Commercial Use: The Software may NOT be used for commercial purposes. Any commercial use requires a separate agreement with the Author.`;

      const text = `
Digital Freedom and Ethical Technology License (${type}) - v1.0

Copyright (c) ${year} ${author}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

1. The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

2. Ethical Use: The Software shall not be used for any purpose that is unethical,
including but not limited to: violating human rights, promoting discrimination,
engaging in hate speech, spreading misinformation with malicious intent,
or developing weapons or technologies that cause harm.

3. Data Privacy: If the Software collects or processes user data, it must do so
transparently, with user consent, and in a manner that respects user privacy.
Data collected should be minimized and protected from unauthorized access.

${commercialClause}

5. Openness: Modifications to the Software should, where possible, be shared
back with the community under the same or a compatible license.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
      `;
      licenseText.value = text.trim();
      resultContainer.classList.remove("hidden");
      resultContainer.scrollIntoView({ behavior: "smooth" });
    });

    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(licenseText.value);
        const lang = document.documentElement.lang || "en";
        showToast(translations[lang].emailCopied);
      } catch (err) {
        console.error("Failed to copy license:", err);
      }
    });

    downloadBtn.addEventListener("click", () => {
      const blob = new Blob([licenseText.value], { type: "text/plain" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "LICENSE";
      link.click();
    });
  };

  const initializePage = async () => {
    const savedLang = localStorage.getItem("language");
    const browserLang = navigator.language.slice(0, 2);
    const currentLang = savedLang || (browserLang === "tr" ? "tr" : "en");

    setLanguage(currentLang);
    loadSponsors();
    initContactButtons();
    initLicenseGenerator();

    if (document.getElementById("projects-container")) {
      try {
        const response = await fetch("./projects/projects.json");
        if (response.ok) {
          let projects = await response.json();
          for (let i = projects.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [projects[i], projects[j]] = [projects[j], projects[i]];
          }
          loadProjects(projects, currentLang);
        }
      } catch (error) {
        console.log("Local development or projects not found, skipping.");
      }
    }

    initGuideLinks();
    initializeAnimations();
  };

  langTR.addEventListener("click", () => {
    setLanguage("tr");
  });
  langEN.addEventListener("click", () => {
    setLanguage("en");
  });

  initializePage();
});
