// Content shared across pages. The home page shows a subset; /how-it-works and /faq
// show the whole thing. Keeping it here means the two never drift apart.
//
// THE LICENSING LINE IS THE PRODUCT, and it runs through every line below. The agent type in
// apolloclaw2 describes this one as stopping "where a licensed professional has to take over",
// and the intake makes the handoff question mandatory. That is not a disclaimer bolted on at the
// end - quoting, binding and telling somebody whether a loss is covered are licensed acts, and an
// agent that drifted across that line would create E&O exposure for the customer. So nothing here
// is phrased as a coverage determination, and the FAQ says so in the first answer rather than the
// last.
//
// Certificates get named explicitly and repeatedly for the same reason the intake asks about them
// first: a certificate is a statement about coverage, and an unattended process that issues one
// asserting something the policy does not say is the single most likely way this goes wrong.

export const CAPABILITIES = [
  {
    title: "Renewal Tracking",
    body: "The renewal list worked at ninety days instead of thirty, with what changed since last term already flagged and the outreach drafted.",
  },
  {
    title: "Certificates, Drafted and Sorted",
    body: "Routine certs pulled off the policy in force and ready to check. Additional insured wording and anything unusual held for a licensed person, by rule.",
  },
  {
    title: "Submission Assembly",
    body: "Applications, loss runs and supplementals gathered into a package a market can actually work, so quoting starts at the market rather than the paperwork.",
  },
  {
    title: "Side-by-Side Comparisons",
    body: "Options laid out evenly, with exclusions stated as plainly as limits. Built to inform a recommendation, never to make one.",
  },
  {
    title: "Claims Status Chasing",
    body: "Open claims followed up on a cadence and the client kept informed, so the file does not go quiet until somebody calls angry.",
  },
  {
    title: "Client Communication",
    body: "Service email, renewal notices and coverage explained in language a client can follow, in your agency's voice, for you to approve.",
  },
];

export const PROCESS = [
  {
    phase: "15 min",
    num: "01",
    title: "You Tell It Your Agency",
    body: "The lines you write, the carriers you place with, the states you are licensed in, and how the office is staffed. Then the important part: what may go out unattended, and where a licensed person must always take over. That is the questionnaire, and your agent is built from it and running in about fifteen minutes.",
  },
  {
    phase: "Week 1",
    num: "02",
    title: "The Service Work Starts Arriving Done",
    body: "Certificates come back drafted. Renewals surface early with the account assembled. Follow-up on open quotes and claims goes out on schedule instead of when somebody remembers.",
  },
  {
    phase: "Month 1+",
    num: "03",
    title: "It Learns How You Write",
    body: "Your phrasing, your standing rules, the questions your clients always ask, and the wording your carriers want. The drafts need less editing every week.",
  },
];

export const TESTIMONIALS = [
  {
    industry: "Commercial Lines",
    quote:
      "Certificates were a full day a week between two people. Now they come back drafted off the policy and we check them, and anything with additional insured wording gets held for me automatically. That last part is why I said yes.",
    name: "Agency Principal",
    detail: "Independent agency, contractors book",
  },
  {
    industry: "Personal Lines",
    quote:
      "Renewals used to hit us at thirty days and we would re-market whatever we could get to. Now the list comes at ninety with the account already pulled together. We are keeping business we used to lose on price because nobody called.",
    name: "Agency Owner",
    detail: "Two-office independent agency",
  },
  {
    industry: "Benefits",
    quote:
      "The comparison it builds is the thing. Limits, exclusions and what actually differs, side by side and plainly stated. I present it instead of building it, and clients ask better questions.",
    name: "Benefits Producer",
    detail: "Employee benefits brokerage",
  },
  {
    industry: "Wholesale",
    quote:
      "Half our declines were incomplete submissions. It gathers what each market always asks for before anything goes out. Same desk, noticeably more quotes back.",
    name: "Broker",
    detail: "E&S wholesaler",
  },
  {
    industry: "Claims Service",
    quote:
      "Claims used to go quiet and the client would find out from the adjuster. Now it chases status on a schedule and drafts the update. We stopped having that conversation.",
    name: "Account Manager",
    detail: "Commercial agency, 9 staff",
  },
  {
    industry: "Producer",
    quote:
      "It follows up on every quote I send. That is it, that is the whole pitch, and it paid for itself the first month. The accounts I was losing were not going on price.",
    name: "Commercial Producer",
    detail: "Independent agency",
  },
];

export const FAQS = [
  {
    q: "Does it quote, bind or tell clients what is covered?",
    a: "No, and it is built not to. Quoting, binding and advising on whether a loss is covered are licensed activities, and the agent stops short of all three. It gathers, drafts, organizes, compares and chases. During setup you write down exactly where a licensed person must take over, and that line is enforced rather than left to judgment.",
  },
  {
    q: "What about certificates? That is where we are exposed.",
    a: "It is, which is why certificates get their own rules at setup. You decide what may go out unattended, usually a standard certificate off a policy already in force, and what must always reach a licensed person first, usually anything naming an additional insured, changing wording, or referencing a policy that is not bound. The agent holds those by rule, not by noticing.",
  },
  {
    q: "Does it work with our management system?",
    a: "We build to what you already run rather than asking you to move. Where AMS360, Applied Epic, HawkSoft or your rater offers an integration we use it; where it does not, the agent works alongside it in the documents, inboxes and carrier portals your team already uses. Scoped individually.",
  },
  {
    q: "Will it enter data into our system of record?",
    a: "Only if you decide it should, and most agencies start with no. The default is that it drafts and a person commits anything that lands in the management system. That line is set at setup, same as the licensing one.",
  },
  {
    q: "Does it talk to clients directly?",
    a: "It drafts what goes to clients; a person sends it. Agencies that later want it sending specific routine messages on its own, renewal reminders or document delivery for example, can turn that on message type by message type. Nothing is on by default.",
  },
  {
    q: "What about client data and carrier information?",
    a: "The agent is yours, on your own instance, scoped to the systems you point it at with least-privilege access throughout. What it may see and where it may write is agreed at setup rather than assumed.",
  },
  {
    q: "How long does setup take?",
    a: "About fifteen minutes. The questionnaire is the configuration: your lines, your carriers, your states, your standing rules and your voice. Your agent is built from it and running as soon as you connect the systems the work already lives in. Hands-on onboarding and 30 days of training are available as an add-on, and come with every custom deployment.",
  },
  {
    q: "Does it replace my CSR?",
    a: "It replaces the part of their day nobody was hired for: retyping the same certificate, chasing the same adjuster, re-assembling the same submission. Most agencies find the same team handles a meaningfully bigger book rather than the team getting smaller.",
  },
  {
    q: "What does it cost?",
    a: "You can build your agent online and see the price before you pay anything. For a deployment scoped to your management system, your volume and your compliance requirements, book a consultation and we will give you a number.",
  },
];
