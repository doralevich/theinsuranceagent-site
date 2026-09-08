// The four audience pages. Same shape, different argument.
//
// The split is WHICH CHAIR YOU SIT IN, not which lines you write. Personal auto and commercial
// property are different vocabularies and the same working day, and vocabulary is configured at
// setup. A producer, a CSR, an agency owner and a wholesaler are the same vocabulary and four
// completely different days: the producer is being pulled off selling, the CSR is drowning in
// certificates, the owner is doing both plus payroll, and the wholesaler is running submissions
// through markets rather than servicing a book at all.
//
// One thing is constant across all four, and it is the licensing line. Quoting, binding and
// telling somebody whether a loss is covered are licensed activities in every state. Every page
// below says where the agent stops, because a page that implied otherwise would be selling the
// customer an E&O claim.

export type Audience = {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  problem: { heading: string; body: string[] };
  benefits: { title: string; body: string }[];
  closing: { heading: string; body: string };
};

export const AUDIENCE_PAGES: Audience[] = [
  {
    slug: "for-independent-agencies",
    label: "For Independent Agencies",
    eyebrow: "For Independent Agencies",
    title: "You Own the Agency and You Are Also the Service Department.",
    intro:
      "Nobody built a book to spend Thursday issuing certificates. The Insurance Agent takes the paperwork half of the agency so the half that writes business gets its hours back.",
    metaTitle: "AI for Independent Insurance Agencies | Renewals, Certs and Service",
    metaDescription:
      "A private AI agent for independent agencies. Tracks renewals, assembles submissions, drafts certificates for review, chases claims status and keeps client service moving. It supports a licensed professional, it does not replace one.",
    keywords: [
      "AI for insurance agencies",
      "independent agency automation",
      "insurance agency AI assistant",
      "renewal tracking automation",
      "certificate of insurance automation",
    ],
    problem: {
      heading: "The Book Grows and the Office Does Not",
      body: [
        "Every account you write adds a renewal, a list of certificate holders, an endorsement or two a year, and somebody who calls when their ID card does not arrive. The revenue scales. The Thursday afternoon does not.",
        "So service crowds out production, renewals get worked at sixty days instead of ninety, and the accounts that would round out nicely never get the call. None of that was a decision anybody made. It is just what fits in the day.",
      ],
    },
    benefits: [
      {
        title: "Renewals Start Themselves",
        body: "The list arrives with the account already pulled together, the changes since last term flagged, and a draft going out, instead of a spreadsheet reminding you it exists.",
      },
      {
        title: "Certificates Stop Eating Afternoons",
        body: "Routine certs drafted off the policy in force, ready to check. Anything naming an additional insured or asking for wording goes to a licensed person, because that is where the exposure is.",
      },
      {
        title: "Submissions Arrive Assembled",
        body: "Loss runs, applications and the supplemental questions gathered and packaged, so quoting a new account starts at the markets instead of at the paperwork.",
      },
      {
        title: "Comparisons a Client Can Read",
        body: "Options laid out side by side with the exclusions stated as plainly as the limits. Presented evenly, so you are advising rather than defending a spreadsheet.",
      },
      {
        title: "Claims Get Chased",
        body: "Status followed up on a schedule and the client kept informed, instead of the file going quiet until somebody calls angry.",
      },
      {
        title: "It Stops at the Licensing Line",
        body: "You define what may go out unattended and what a licensed person must always touch. It drafts up to that line and hands over. It does not bind, quote or say what is covered.",
      },
    ],
    closing: {
      heading: "Keep the Book. Hand Over the Paperwork.",
      body: "The agent does not sell insurance and is built not to. It exists so the part of the job that needs your license gets the part of the week currently going to service work.",
    },
  },
  {
    slug: "for-producers",
    label: "For Producers",
    eyebrow: "For Producers",
    title: "You Were Hired to Write Business. You Spend the Day Servicing It.",
    intro:
      "The pipeline is only as long as the hours left over after service, and there are never many. The Insurance Agent takes the follow-up, the prep and the paperwork so the selling hours come back.",
    metaTitle: "AI for Insurance Producers | Quote Follow-Up and Client Prep",
    metaDescription:
      "A private AI agent for insurance producers. Chases quote follow-up, preps you before client meetings, builds comparison materials and surfaces account rounding, so the day goes to writing business.",
    keywords: [
      "AI for insurance producers",
      "insurance sales automation",
      "quote follow-up automation",
      "insurance producer tools",
      "commercial lines producer AI",
    ],
    problem: {
      heading: "The Follow-Up Is Where the Business Goes",
      body: [
        "You quoted it, you sent it, and then the week happened. Two weeks later the prospect bound with somebody who called back. That account was not lost on price and it was not lost on coverage.",
        "The same thing happens inside the book you already have. The cross-sell that was obvious in March is still obvious in November and still has not been mentioned, because the day is full of things with deadlines on them.",
      ],
    },
    benefits: [
      {
        title: "Nothing Sits Unanswered",
        body: "Every open quote has a follow-up drafted and scheduled. You approve and send instead of remembering.",
      },
      {
        title: "You Walk In Prepared",
        body: "Before the meeting: what they carry, what changed since last term, what is missing, and what is worth raising. Five minutes of reading instead of an hour of digging.",
      },
      {
        title: "Proposals Build Themselves",
        body: "The comparison, the summary and the cover note assembled from the quotes you actually have, in your voice, ready for a read-through.",
      },
      {
        title: "Account Rounding Gets Prompted",
        body: "The umbrella that should be there, the workers comp on a client who just hired. Surfaced when it is relevant rather than at renewal.",
      },
      {
        title: "Service Requests Stop Interrupting",
        body: "The cert request that lands mid-appointment gets drafted and queued instead of derailing the afternoon.",
      },
      {
        title: "It Never Speaks for You",
        body: "Nothing reaches a client without your approval, and nothing that quotes, binds or opines on coverage goes anywhere at all. That is your license, not the software's.",
      },
    ],
    closing: {
      heading: "More Hours in Front of People",
      body: "The work that produces revenue is the work only you can do. This is for everything that keeps getting in front of it.",
    },
  },
  {
    slug: "for-service-teams",
    label: "For Service Teams",
    eyebrow: "For Service Teams",
    title: "Certificates, Endorsements, ID Cards, Billing. Repeat.",
    intro:
      "None of it is hard and there is no end to it. The Insurance Agent drafts the routine service work so account managers can handle the accounts instead of the queue.",
    metaTitle: "AI for Insurance Service Teams | CSR and Account Manager Support",
    metaDescription:
      "A private AI agent for insurance CSRs and account managers. Drafts certificates, endorsement requests and client correspondence, chases claims status and keeps the service queue visible.",
    keywords: [
      "insurance CSR automation",
      "account manager insurance AI",
      "certificate of insurance requests",
      "insurance service workflow",
      "endorsement request automation",
    ],
    problem: {
      heading: "Every Task Is Four Minutes and There Are Two Hundred",
      body: [
        "A certificate, an ID card, a billing question, an endorsement, a status check on a claim. Each one is small, each one is somebody waiting, and there are more of them in the inbox than there are gaps in the day.",
        "So they get done between other things, which is where the mistakes come from, and the certificate that needed a careful look at the policy gets the same thirty seconds as the one that did not.",
      ],
    },
    benefits: [
      {
        title: "Routine Certs Come Back Drafted",
        body: "Pulled off the policy already in force, ready to check and release. The volume stops being the problem.",
      },
      {
        title: "The Risky Ones Get Flagged",
        body: "Additional insured wording, waivers of subrogation, anything asserting coverage the policy may not carry. Held for a licensed person by rule rather than by whoever happened to notice.",
      },
      {
        title: "Endorsement Requests Get Written",
        body: "Drafted with the information the carrier is going to ask for already in it, so it goes through the first time.",
      },
      {
        title: "Claims Do Not Go Quiet",
        body: "Status chased on a cadence and the client updated, so nobody finds out the file stalled three weeks ago.",
      },
      {
        title: "The Queue Is Visible",
        body: "What is drafted, what is waiting on a carrier, and what is waiting on a licensed review. Seen rather than remembered.",
      },
      {
        title: "It Sounds Like Your Agency",
        body: "The agent learns how you write to clients, so what it drafts reads like your office and not like a template.",
      },
    ],
    closing: {
      heading: "Take the Account, Not the Queue",
      body: "The part of this job worth doing is the client who needs a real answer. This is for the two hundred things that keep pulling you away from them.",
    },
  },
  {
    slug: "for-brokers-and-mgas",
    label: "For Brokers & MGAs",
    eyebrow: "For Brokers & MGAs",
    title: "A Submission Is Only as Good as What Went Into It.",
    intro:
      "Incomplete submissions get declined, slowly. The Insurance Agent assembles what the market needs before it goes out, and keeps track of what came back.",
    metaTitle: "AI for Insurance Brokers and MGAs | Submissions and Market Tracking",
    metaDescription:
      "A private AI agent for brokers, wholesalers and MGAs. Assembles submissions, tracks what is out to which market, chases quotes and builds the comparison, so the desk moves faster without more people on it.",
    keywords: [
      "AI for insurance brokers",
      "MGA automation",
      "wholesale insurance submissions",
      "excess and surplus lines AI",
      "submission tracking automation",
    ],
    problem: {
      heading: "Volume Is the Job and Volume Is the Problem",
      body: [
        "A desk lives on how many submissions it can get in front of how many markets. Every one needs the same information assembled, and every incomplete one comes back a week later as a question rather than a quote.",
        "Then there is the tracking. What is out where, what is quoted, what was declined and why, and which indication is about to expire. It lives in an inbox and in somebody's head, and both of those go on holiday.",
      ],
    },
    benefits: [
      {
        title: "Submissions Go Out Complete",
        body: "Applications, loss runs, supplementals and the questions this market always asks, gathered before it goes rather than after it comes back.",
      },
      {
        title: "You Know What Is Where",
        body: "Which markets have it, what came back, what is still open and what is aging. One picture instead of a search through sent mail.",
      },
      {
        title: "Quotes Get Chased",
        body: "The underwriter who has had it nine days gets a follow-up, on schedule, without anybody having to notice first.",
      },
      {
        title: "Comparisons Built From What Came Back",
        body: "Terms, limits and exclusions laid side by side, with the differences that actually matter called out instead of buried in the forms.",
      },
      {
        title: "Declines Turn Into Intelligence",
        body: "Why each market passed, kept and summarized, so the next risk like it goes to the right desk first.",
      },
      {
        title: "It Does Not Bind Anything",
        body: "It gathers, tracks, drafts and compares. Underwriting judgment, binding authority and coverage opinions stay with the licensed people who hold them.",
      },
    ],
    closing: {
      heading: "More Submissions, Same Desk",
      body: "Nothing here changes what you can place. It changes how many you can get properly in front of a market before the week runs out.",
    },
  },
];

/** One page by slug. Returns undefined for a slug that is not an audience, which is what lets
 *  each page file assert with `!` and fail loudly at build time rather than rendering blank. */
export function getAudience(slug: string): Audience | undefined {
  return AUDIENCE_PAGES.find((a) => a.slug === slug);
}
