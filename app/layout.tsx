import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import CookieConsent from "./components/CookieConsent";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Insurance AI Agent | Renewals, Certificates and Service",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "The Insurance Agent works your renewals, drafts certificates for review, assembles submissions, compares policies side by side and chases claims status. It supports a licensed professional, it does not replace one.",
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  openGraph: { siteName: SITE_NAME, type: "website", locale: "en_US" },
  other: {
    "geo.region": "US-NY",
    "geo.placename": "Roslyn Heights, NY",
    "geo.position": "40.7998;-73.651",
    ICBM: "40.7998, -73.651",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "AI administrative support for independent agencies, producers, service teams and wholesale desks. Renewal tracking, certificate drafting, submission assembly, side-by-side policy comparisons and claims status chasing.",
      telephone: "(917) 363-5487",
      address: {
        "@type": "PostalAddress",
        streetAddress: "69 Roslyn Road",
        addressLocality: "Roslyn Heights",
        addressRegion: "NY",
        postalCode: "11577",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 40.7998, longitude: -73.651 },
      areaServed: ["Long Island", "Nassau County", "New York City Metro", "United States"],
      founder: { "@type": "Person", name: "David Oralevich" },
      parentOrganization: {
        "@type": "Organization",
        name: "Apollo Claw",
        url: "https://apolloclaw.ai",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: SITE_NAME,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "AI assistant for insurance agencies that tracks renewals, drafts certificates for licensed review, assembles submissions, builds side-by-side policy comparisons and chases claims status.",
      url: SITE_URL,
      publisher: { "@type": "Organization", name: "Apollo Claw", url: "https://apolloclaw.ai" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans">
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZRNVT503T8" strategy="afterInteractive" />
        {/* Google Consent Mode v2, matching the pattern established on theceoagent.ai and
            apolloclaw.ai. analytics_storage starts DENIED, so GA writes no cookie and no
            identifier until the visitor accepts and CookieConsent calls
            gtag('consent','update',...). A returning visitor's stored choice is replayed
            synchronously here, before the config call, so acceptance from a prior visit is
            honored on first paint instead of flashing denied for the first 500ms.
            wait_for_update holds the first hit that long to give this a chance to run at all. */}
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });
          try {
            if (localStorage.getItem('insurance-cookie-consent') === 'accepted') {
              gtag('consent', 'update', { analytics_storage: 'granted' });
            }
          } catch (e) {}
          gtag('js', new Date());
          gtag('config', 'G-ZRNVT503T8');
        `}</Script>
        <CookieConsent />
      </body>
    </html>
  );
}
