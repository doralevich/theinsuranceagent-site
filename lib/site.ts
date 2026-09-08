// One place for the things that appear on every page and change rarely.

export const SITE_URL = "https://theinsuranceagent.com";
export const SITE_NAME = "The Insurance Agent";

/** Self-serve. The questionnaire and the checkout both run on ApolloClaw, so every
 *  "Build Your Agent" CTA points there. The slug is `insurance` - BUILD_SLUGS in apolloclaw2
 *  maps it to the `insurance` agent type. */
export const BUILD_LINK = "https://www.apolloclaw.ai/build/insurance";

/** Consultation. cal.com is canonical - the old calendly link is stale. */
export const DEMO_LINK = "https://cal.com/therealdaveo/apollo-claw";

export const PARENT_SITE = "https://apolloclaw.ai";
export const CONTACT_EMAIL = "david@apolloclaw.ai";
export const CONTACT_PHONE = "(917) 363-5487";

export const NAV_LINKS = [
  { label: "What It Does", href: "/how-it-works" },
  { label: "Who It's For", href: "/for-independent-agencies" },
  { label: "Results", href: "/#results" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
];

/**
 * The audience pages, used by the nav, the footer, and the sitemap.
 *
 * Split by SEAT, not by line of business. Personal auto and commercial property are different
 * vocabularies and the same working day; a producer and a CSR are the same vocabulary and
 * completely different days. Which lines you write is configured at setup. Which chair you sit
 * in is what changes the sale, and it is a different person in each of these four.
 */
export const AUDIENCES = [
  { slug: "for-independent-agencies", label: "For Independent Agencies" },
  { slug: "for-producers", label: "For Producers" },
  { slug: "for-service-teams", label: "For Service Teams" },
  { slug: "for-brokers-and-mgas", label: "For Brokers & MGAs" },
];

/** Breadcrumb JSON-LD for an interior page. */
export function breadcrumb(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

/** The metadata every interior page repeats, minus the words. */
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}) {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    ...(opts.keywords ? { keywords: opts.keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: "website" as const,
      title: opts.title,
      description: opts.description,
      url,
      images: [
        { url: `${SITE_URL}/images/og-image.jpg`, width: 1200, height: 630, alt: SITE_NAME },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: opts.title,
      description: opts.description,
      images: [`${SITE_URL}/images/og-image.jpg`],
    },
  };
}
