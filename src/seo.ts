import { translations, type Lang } from "./i18n";

const SITE_URL = "https://cryptofuture2026-neural-ledger.pages.dev/";
const SITE_NAME = "JMWL | CryptoFuture2026";
const PREVIEW_IMAGE = `${SITE_URL}avatar.jpg`;
const YOUTUBE_URL = "https://www.youtube.com/@CryptoFuture2026";

const upsertMeta = (attribute: "name" | "property", key: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string) => {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }

  tag.setAttribute("href", href);
};

const upsertJsonLd = (id: string, payload: unknown) => {
  let tag = document.head.querySelector<HTMLScriptElement>(`script#${id}`);

  if (!tag) {
    tag = document.createElement("script");
    tag.id = id;
    tag.type = "application/ld+json";
    document.head.appendChild(tag);
  }

  tag.textContent = JSON.stringify(payload);
};

export const applySeo = (lang: Lang) => {
  const locale = lang === "zh" ? "zh-CN" : "en";
  const ogLocale = lang === "zh" ? "zh_CN" : "en_US";
  const title = translations[lang]["seo.title"] || SITE_NAME;
  const description = translations[lang]["seo.description"] || SITE_NAME;

  document.documentElement.lang = locale;
  document.title = title;

  upsertLink("canonical", SITE_URL);

  upsertMeta("name", "description", description);
  upsertMeta(
    "name",
    "robots",
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  );
  upsertMeta("name", "theme-color", "#081317");
  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", PREVIEW_IMAGE);

  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:site_name", SITE_NAME);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:url", SITE_URL);
  upsertMeta("property", "og:image", PREVIEW_IMAGE);
  upsertMeta("property", "og:image:alt", "JMWL CryptoFuture2026 preview");
  upsertMeta("property", "og:locale", ogLocale);

  upsertJsonLd("structured-data", [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: locale,
      description,
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "JMWL / CryptoFuture2026",
      url: SITE_URL,
      logo: `${SITE_URL}brand-mark.png`,
      sameAs: [YOUTUBE_URL],
    },
  ]);
};
