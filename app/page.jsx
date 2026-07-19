import Image from "next/image";

const signals = [
  {
    type: "good",
    icon: "✓",
    title: "Good Signal",
    subtitle: "This SaaS looks safe to use.",
    items: ["Trusted company", "Positive reviews", "Secure platform", "Transparent pricing"],
    button: "Good Signal"
  },
  {
    type: "attention",
    icon: "!",
    title: "Attention",
    subtitle: "Proceed with caution.",
    items: ["Mixed reviews", "Limited info", "Some concerns", "Verify details"],
    button: "Attention"
  },
  {
    type: "careful",
    icon: "⚠",
    title: "Be Careful",
    subtitle: "This SaaS may not be safe.",
    items: ["Negative reviews", "Poor transparency", "Security concerns", "High cancellation risk"],
    button: "Be Careful"
  }
];

const pricing = [
  {
    name: "Free",
    price: "$0",
    note: "Essential signal preview",
    items: [
      "Signal lights (Good, Attention, Be Careful)",
      "Basic trust overview",
      "Limited daily checks"
    ],
    button: "Get Started Free"
  },
  {
    name: "Premium",
    price: "$6.99",
    note: "For individuals",
    items: [
      "Full SaaS trust analysis",
      "Unlimited checks",
      "Detailed risk reports",
      "Save & track your history"
    ],
    button: "Go Premium"
  }
];

export default function Home() {
  return (
    <main className="page">
      <div className="backgroundGlow backgroundGlowOne" />
      <div className="backgroundGlow backgroundGlowTwo" />

      <header className="siteHeader">
        <div className="adamBrand">
          <Image
            className="arLogo"
            src="/AR_Logo.png"
            width={614}
            height={542}
            alt="AdamRemix™"
            priority
          />
          <div className="adamText">
            <strong>SOFTWARE,</strong>
            <span>Beyond the Limits</span>
          </div>
        </div>

        <div className="centerHeader">
          <div className="confidentBuyLogo">
            <span className="confidentPart">Confident</span>
            <span className="buyPart">Buy</span>
          </div>

          <nav className="navLinks" aria-label="Main navigation">
            <a href="#features">Features</a>
            <a href="#how">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#extension">Extension</a>
          </nav>
        </div>

        <div className="developmentBadge">
          <span>UNDER</span>
          <span>DEVELOPMENT</span>
        </div>
      </header>

      <section className="heroSection">
        <div className="heroCopy">
          <div className="tinyPill">Know before you commit.</div>

          <h1>
            Know the signal
            <br />
            before you <span>subscribe</span>
          </h1>

          <p className="lead">
            ConfidentBuy analyzes merchant trust, product quality signals,
            reviews, and scam risk — so you can choose the right SaaS with
            clarity and confidence.
          </p>

          <p className="bodyText">
            SaaS (Software as a Service) is software you use online. You subscribe, access it from anywhere, and we
            help you know if it’s safe and worth it.
          </p>

          <div className="heroActions">
            <button className="primaryButton">
              <span className="chromeDot">●</span>
              <span>
                Add to Chrome
                <small>It’s free to get started</small>
              </span>
            </button>

            <button className="videoButton">
              <span className="playIcon">▶</span>
              <span>
                See How It Works
                <small>Watch 60-second demo</small>
              </span>
            </button>
          </div>

          <div className="featureStrip" id="features">
            <div>
              <span className="featureIcon">⬡</span>
              <strong>Privacy First</strong>
              <small>Your data stays private</small>
            </div>
            <div>
              <span className="featureIcon muted">◈</span>
              <strong>Works Everywhere</strong>
              <small>On any SaaS website</small>
            </div>
            <div>
              <span className="featureIcon">ϟ</span>
              <strong>Real-Time Analysis</strong>
              <small>Instant trust insights</small>
            </div>
          </div>
        </div>

        <div className="dashboardPreview" id="how">
          <div className="windowChrome">
            <div className="trafficDots">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>

            <div className="searchBox">Search SaaS...</div>

            <div className="commentIcon">
              ▱<sup>2</sup>
            </div>
          </div>

          <h2>SaaS Signal Overview</h2>

          <div className="signalGrid">
            {signals.map((signal) => (
              <article className={`signalCard ${signal.type}`} key={signal.title}>
                <div className="signalIcon">{signal.icon}</div>
                <h3>{signal.title}</h3>
                <p>{signal.subtitle}</p>

                <ul>
                  {signal.items.map((item) => (
                    <li key={item}>
                      <span>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <button>{signal.button}</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pricingSection" id="pricing">
        <h2>Simple, transparent pricing.</h2>
        <p>Choose the plan that fits you best.</p>

        <div className="pricingGrid">
          {pricing.map((plan) => (
            <article className="priceCard" key={plan.name}>
              <h3>{plan.name}</h3>
              <div className="priceLine">
                <strong>{plan.price}</strong>
                <span>/ month</span>
              </div>

              <p className="priceNote">{plan.note}</p>

              <ul>
                {plan.items.map((item) => (
                  <li key={item}>
                    <span>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <button>{plan.button}</button>
            </article>
          ))}
        </div>

        <div className="cancelNote">▣ Cancel anytime. No hidden fees.</div>
      </section>

      <footer className="siteFooter">
        <address>
          <strong>ELAMBROS LLC</strong>
          <span>
            234 5<sup>th</sup> Avenue, 2<sup>nd</sup> Floor
          </span>
          <span>New York, NY 10001</span>
          <span>
              <a href="mailto:confidentbuy@adamremix.com?subject=ConfidentBuy%20Inquiry">confidentbuy@adamremix.com</a>
          </span>
        </address>
      </footer>
    </main>
  );
}
