
(function () {
  const { useEffect, useState } = React;
  const createElement = React.createElement;

  // Content used by multiple page sections.
  const navItems = [
    { label: "Problem", sectionId: "problem" },
    { label: "System", sectionId: "system" },
    { label: "Pricing", sectionId: "pricing" },
    { label: "Compliance", sectionId: "compliance" },
    { label: "Impact", sectionId: "impact" },
    { label: "Contact", sectionId: "contact" },
  ];

  const keyMetrics = [
    { value: "3,000+", label: "schools across Rwanda rely on better attendance and security" },
    { value: "24 hr", label: "local support promise for active institutional clients" },
    { value: "40-60%", label: "lower target pricing than imported enterprise alternatives" },
    { value: "AES-256", label: "encryption standard planned for biometric data protection" },
  ];

  const problemCards = [
    {
      title: "Cards are shared or lost",
      description: "Physical cards can be swapped, copied, forgotten, or replaced at a recurring cost.",
    },
    {
      title: "Manual registers waste hours",
      description: "Attendance data is slow to collect and hard to trust when emergencies happen.",
    },
    {
      title: "No live visibility",
      description: "Administrators need real-time insight into who entered, who was denied, and when.",
    },
    {
      title: "Imported systems are expensive",
      description: "Many schools and offices cannot afford foreign biometric platforms with limited local support.",
    },
  ];

  const systemSteps = [
    {
      number: "01",
      title: "Recognize",
      description: "An infrared-ready camera captures a face automatically at the gate or access point.",
    },
    {
      number: "02",
      title: "Authorize",
      description: "The system checks the registered database and confirms role, schedule, and entry rights.",
    },
    {
      number: "03",
      title: "Record",
      description: "Every entry creates a timestamped attendance and security event for administrators.",
    },
    {
      number: "04",
      title: "Notify",
      description: "Schools and organizations can send parent, guard, or management alerts by SMS or email.",
    },
  ];

  const growthSteps = [
    {
      title: "Pilot",
      description: "Install at one Kigali institution, collect evidence, and turn results into a case study.",
    },
    {
      title: "Convert",
      description: "Demonstrate saved time, improved security, and flexible payment options to early clients.",
    },
    {
      title: "Scale",
      description: "Expand across schools, universities, offices, hotels, hospitals, and public facilities.",
    },
    {
      title: "Integrate",
      description: "Connect attendance, HR, visitor management, reports, and future API integrations.",
    },
  ];

  const plans = [
    {
      name: "Basic",
      target: "Small schools",
      setup: "RWF 1.2M",
      monthly: "RWF 80K / month",
      badge: "Starter",
      features: [
        "2 camera entry setup",
        "Manual gate workflow",
        "Admin dashboard",
        "Automatic attendance records",
      ],
    },
    {
      name: "Standard",
      target: "Universities and offices",
      setup: "RWF 2.5M",
      monthly: "RWF 150K / month",
      badge: "Most useful",
      featured: true,
      features: [
        "4 cameras and auto gate",
        "Full dashboard and reports",
        "SMS alerts",
        "Offline local server capability",
      ],
    },
    {
      name: "Enterprise",
      target: "Government and corporates",
      setup: "RWF 5M+",
      monthly: "RWF 300K+ / month",
      badge: "Custom",
      features: [
        "Multiple gates and sites",
        "Visitor management",
        "API integrations",
        "Priority maintenance and audits",
      ],
    },
  ];

  const targetMarkets = [
    {
      count: "465",
      title: "Primary and secondary schools",
      description: "A large market where attendance and student safety matter every day.",
    },
    {
      count: "36",
      title: "Universities and colleges",
      description: "High-visibility campuses that need live access control and reporting.",
    },
    {
      count: "100",
      title: "Government offices",
      description: "Public facilities can modernize entry logs and security checks.",
    },
    {
      count: "200",
      title: "Private companies",
      description: "Corporate offices can connect access data to HR and payroll workflows.",
    },
    {
      count: "75",
      title: "Hotels and hospitality",
      description: "Visitor and staff movement can be managed with less manual friction.",
    },
    {
      count: "75",
      title: "Hospitals and health centers",
      description: "Sensitive facilities benefit from accountable, permission-based access.",
    },
  ];

  const compliance = [
    "Explicit consent before registering biometric profiles.",
    "Rwanda-hosted data architecture with encryption at rest and in transit.",
    "Client data processing agreements defining ownership and responsibilities.",
    "NCSA, RISA, RDB, and RRA registration path before commercial scale.",
  ];

  const impactMetrics = [
    {
      metric: "6 jobs",
      title: "Year 1 employment",
      description: "Direct employment projected in Year 1, growing with engineering, sales, support, and operations roles.",
    },
    {
      metric: "20+",
      title: "Year 3 team potential",
      description: "Potential direct jobs by Year 3 as installation, maintenance, and support demand expands.",
    },
    {
      metric: "RWF 100M+",
      title: "Recurring revenue upside",
      description: "Annual recurring revenue opportunity if FaceGate captures only 2 percent of the reachable market.",
    },
    {
      metric: "Vision 2050",
      title: "National development fit",
      description: "Supports Rwanda's digital transformation, education modernization, and knowledge economy goals.",
    },
  ];

  // Shared visual components.
  function Logo() {
    return createElement(
      "a",
      { className: "brand", href: "#home", "aria-label": "FaceGate Rwanda home" },
      createElement("img", { className: "brand-mark", src: "assets/logo.svg", alt: "" }),
      createElement("span", { className: "brand-text" }, "FaceGate", createElement("span", null, "Rwanda Ltd."))
    );
  }

  function Button({ href, children, variant = "primary" }) {
    return createElement("a", { className: `button button-${variant}`, href }, children);
  }

  function SectionMedia({ src, type = "image", poster }) {
    return createElement(
      "div",
      { className: "section-media", "aria-hidden": true },
      type === "video"
        ? createElement(
            "video",
            { autoPlay: true, muted: true, loop: true, playsInline: true, poster },
            createElement("source", { src, type: "video/mp4" })
          )
        : createElement("img", { src, alt: "" }),
      createElement("div", { className: "media-shade" })
    );
  }

  function Header({ active, menuOpen, setMenuOpen }) {
    return createElement(
      "header",
      { className: `site-header ${active ? "is-scrolled" : ""} ${menuOpen ? "menu-visible" : ""}` },
      createElement(
        "div",
        { className: "header-inner" },
        createElement(Logo),
        createElement(
          "nav",
          { className: `nav-links ${menuOpen ? "is-open" : ""}`, "aria-label": "Main navigation" },
          navItems.map(({ label, sectionId }) =>
            createElement(
              "a",
              {
                key: sectionId,
                href: `#${sectionId}`,
                className: active === sectionId ? "active" : "",
                onClick: () => setMenuOpen(false),
              },
              label
            )
          )
        ),
        createElement(
          "div",
          { className: "header-actions" },
          createElement(Button, { href: "#contact", variant: "dark" }, "Request pilot"),
          createElement(
            "button",
            {
              className: `menu-toggle ${menuOpen ? "is-open" : ""}`,
              type: "button",
              "aria-label": "Toggle menu",
              "aria-expanded": menuOpen,
              onClick: () => setMenuOpen(!menuOpen),
            },
            createElement("span"),
            createElement("span"),
            createElement("span")
          )
        )
      )
    );
  }

  // Main page sections.
  function Hero() {
    return createElement(
      "section",
      { className: "hero", id: "home", "data-section": "home" },
      createElement(
        "div",
        { className: "hero-media-wrap" },
        createElement(
          "video",
          {
            className: "hero-video",
            autoPlay: true,
            muted: true,
            loop: true,
            playsInline: true,
            poster: "assets/face-recognition-poster.jpg",
            "aria-hidden": true,
          },
          createElement("source", { src: "assets/face-recognition-loop.mp4", type: "video/mp4" })
        ),
        createElement("canvas", { className: "hero-canvas", id: "signalCanvas", "aria-hidden": true })
      ),
      createElement(
        "div",
        { className: "hero-inner" },
        createElement(
          "div",
          { className: "hero-copy" },
          createElement("p", { className: "eyebrow" }, "Built in Rwanda for institutional security"),
          createElement("h1", null, "FaceGate Rwanda"),
          createElement(
            "p",
            { className: "hero-lead" },
            "Affordable facial recognition access control for schools, universities, offices, hotels, and public institutions. Replace cards and paper registers with secure entry, automatic attendance, real-time alerts, and a management dashboard."
          ),
          createElement(
            "div",
            { className: "hero-actions" },
            createElement(Button, { href: "#pricing" }, "View packages"),
            createElement(Button, { href: "#system", variant: "secondary" }, "See the system")
          ),
          createElement(
            "div",
            { className: "hero-proof", "aria-label": "Key metrics" },
            keyMetrics.map(({ value, label }) =>
              createElement(
                "div",
                { className: "proof-item", key: value },
                createElement("strong", null, value),
                createElement("span", null, label)
              )
            )
          )
        ),
        createElement(
          "aside",
          { className: "hero-panel", "aria-label": "Live access preview" },
          createElement(
            "div",
            { className: "panel-top" },
            createElement(
              "div",
              { className: "panel-title" },
              createElement("strong", null, "Gate A - Kigali campus"),
              createElement("span", null, "Facial verification active")
            ),
            createElement("span", { className: "status-pill" }, "Secure")
          ),
          createElement(
            "div",
            { className: "scan-area" },
            createElement("div", { className: "face-frame" }, createElement("div", { className: "scan-line" })),
            createElement("span", { className: "match-badge" }, "Match 98.7%")
          ),
          createElement(
            "ul",
            { className: "panel-list" },
            createElement(
              "li",
              null,
              createElement("span", null, "Entry status"),
              createElement("strong", null, "Allowed")
            ),
            createElement(
              "li",
              null,
              createElement("span", null, "Record created"),
              createElement("strong", null, "08:14 AM")
            ),
            createElement(
              "li",
              null,
              createElement("span", null, "Alert route"),
              createElement("strong", null, "Admin + SMS")
            )
          )
        )
      )
    );
  }

  function SectionHeading({ kicker, title, text }) {
    return createElement(
      "div",
      { className: "section-heading" },
      createElement(
        "div",
        null,
        createElement("p", { className: "section-kicker" }, kicker),
        createElement("h2", null, title)
      ),
      createElement("p", null, text)
    );
  }

  function Problem() {
    return createElement(
      "section",
      { className: "section media-section problem-stage", id: "problem", "data-section": "problem" },
      createElement(SectionMedia, { src: "assets/cctv-camera.jpg" }),
      createElement(
        "div",
        { className: "section-inner" },
        createElement(SectionHeading, {
          kicker: "The market gap",
          title: "Rwanda's institutions need safer entry and better attendance data.",
          text: "Manual and card-based systems are easy to bypass, hard to audit, and expensive to maintain. FaceGate turns entry points into trusted data sources.",
        }),
        createElement(
          "div",
          { className: "two-column" },
          createElement(
            "div",
            { className: "problem-grid" },
            problemCards.map(({ title, description }, index) =>
              createElement(
                "article",
                { className: "problem-item", key: title },
                createElement("span", { className: "problem-index" }, String(index + 1).padStart(2, "0")),
                createElement("div", null, createElement("h3", null, title), createElement("p", null, description))
              )
            )
          ),
          createElement(
            "div",
            { className: "visual-band" },
            createElement("img", {
              src: "assets/institution-security.svg",
              alt: "Illustration of a FaceGate camera checking entry at a Rwandan school gate",
            })
          )
        )
      )
    );
  }

  function System() {
    return createElement(
      "section",
      { className: "section media-section system-stage", id: "system", "data-section": "system" },
      createElement(SectionMedia, {
        src: "assets/cctv-camera-loop.mp4",
        type: "video",
        poster: "assets/cctv-camera-poster.jpg",
      }),
      createElement(
        "div",
        { className: "section-inner" },
        createElement(SectionHeading, {
          kicker: "Product",
          title: "A complete access control platform, not just a camera.",
          text: "Hardware, facial recognition, database management, attendance reporting, and alerts work together so administrators can act in real time.",
        }),
        createElement(
          "div",
          { className: "two-column" },
          createElement(
            "div",
            { className: "system-grid" },
            systemSteps.map(({ number, title, description }) =>
              createElement(
                "article",
                { className: "system-card", key: title },
                createElement("span", { className: "system-icon" }, number),
                createElement("h3", null, title),
                createElement("p", { className: "system-copy" }, description)
              )
            )
          ),
          createElement(
            "div",
            { className: "dashboard-wrap" },
            createElement("img", {
              src: "assets/dashboard-preview.svg",
              alt: "FaceGate admin dashboard preview with access logs and attendance analytics",
            })
          )
        )
      )
    );
  }

  function Workflow() {
    return createElement(
      "section",
      { className: "section media-section workflow-stage", id: "workflow", "data-section": "workflow" },
      createElement(SectionMedia, { src: "assets/campus-building.jpg" }),
      createElement(
        "div",
        { className: "section-inner" },
        createElement(SectionHeading, {
          kicker: "Go to market",
          title: "Start with proof, then scale into institutions that already need this.",
          text: "The business plan prioritizes a focused Kigali pilot, direct demonstrations, flexible conversion, and later government and regional expansion.",
        }),
        createElement(
          "div",
          { className: "timeline" },
          growthSteps.map(({ title, description }, index) =>
            createElement(
              "article",
              { className: "timeline-card", key: title },
              createElement("span", { className: "step-number" }, index + 1),
              createElement("h3", null, title),
              createElement("p", null, description)
            )
          )
        )
      )
    );
  }

  function Pricing() {
    return createElement(
      "section",
      { className: "section media-section pricing-stage", id: "pricing", "data-section": "pricing" },
      createElement(SectionMedia, { src: "assets/smart-gate-lobby.jpg" }),
      createElement(
        "div",
        { className: "section-inner" },
        createElement(SectionHeading, {
          kicker: "Packages",
          title: "Pricing designed for Rwandan schools, offices, and public institutions.",
          text: "A subscription model lowers the upfront barrier while creating reliable support, maintenance, cloud hosting, and reporting revenue.",
        }),
        createElement(
          "div",
          { className: "pricing-grid" },
          plans.map((plan) =>
            createElement(
              "article",
              { className: `card pricing-card ${plan.featured ? "featured" : ""}`, key: plan.name },
              createElement("span", { className: "plan-badge" }, plan.badge),
              createElement("h3", null, plan.name),
              createElement("p", null, plan.target),
              createElement("div", { className: "price" }, plan.setup),
              createElement("div", { className: "monthly" }, plan.monthly),
              createElement(
                "ul",
                { className: "feature-list" },
                plan.features.map((feature) => createElement("li", { key: feature }, feature))
              ),
              createElement(
                Button,
                { href: "#contact", variant: plan.featured ? "dark" : "ghost" },
                `Choose ${plan.name}`
              )
            )
          )
        )
      )
    );
  }

  function Markets() {
    return createElement(
      "section",
      { className: "section media-section markets-stage", id: "markets", "data-section": "markets" },
      createElement(SectionMedia, { src: "assets/campus-building.jpg" }),
      createElement(
        "div",
        { className: "section-inner" },
        createElement(SectionHeading, {
          kicker: "Reachable market",
          title: "A local first-mover advantage across high-need sectors.",
          text: "The Year 1 focus is private secondary schools and universities in Kigali, with expansion into government, hospitality, corporate, and healthcare facilities.",
        }),
        createElement(
          "div",
          { className: "markets-grid" },
          targetMarkets.map(({ count, title, description }) =>
            createElement(
              "article",
              { className: "market-item", key: title },
              createElement("strong", null, count),
              createElement("h3", null, title),
              createElement("p", null, description)
            )
          )
        )
      )
    );
  }

  function Compliance() {
    return createElement(
      "section",
      { className: "section media-section compliance-stage", id: "compliance", "data-section": "compliance" },
      createElement(SectionMedia, { src: "assets/dome-cctv.jpg" }),
      createElement(
        "div",
        { className: "section-inner compliance-layout" },
        createElement(
          "div",
          { className: "shield-visual" },
          createElement("img", {
            src: "assets/compliance-shield.svg",
            alt: "Data protection shield with encrypted biometric nodes",
          })
        ),
        createElement(
          "div",
          null,
          createElement("p", { className: "section-kicker" }, "Compliance"),
          createElement("h2", null, "Biometric data deserves serious governance from day one."),
          createElement(
            "p",
            { className: "compliance-copy" },
            "FaceGate is positioned around Rwanda's data protection law, local hosting, transparent consent, and institutional data processing agreements."
          ),
          createElement(
            "div",
            { className: "compliance-list" },
            compliance.map((item) =>
              createElement(
                "div",
                { className: "compliance-item", key: item },
                createElement("p", null, item)
              )
            )
          )
        )
      )
    );
  }

  function Impact() {
    return createElement(
      "section",
      { className: "section media-section impact-stage", id: "impact", "data-section": "impact" },
      createElement(SectionMedia, { src: "assets/institution-security.svg" }),
      createElement(
        "div",
        { className: "section-inner" },
        createElement(SectionHeading, {
          kicker: "National alignment",
          title: "A technology business aligned with Smart Rwanda and Vision 2050.",
          text: "Beyond security, FaceGate supports local AI capability, youth employment, education data, and safer institutional infrastructure.",
        }),
        createElement(
          "div",
          { className: "impact-list" },
          impactMetrics.map(({ metric, title, description }) =>
            createElement(
              "article",
              { className: "impact-row", key: metric },
              createElement("strong", null, metric),
              createElement(
                "div",
                null,
                createElement("h3", null, title),
                createElement("p", null, description)
              )
            )
          )
        )
      )
    );
  }

  // The form currently prepares an on-screen confirmation; it does not send data to a server.
  function Contact() {
    const [form, setForm] = useState({ name: "", organization: "", contact: "", package: "Standard", message: "" });
    const [status, setStatus] = useState("");

    function updateFormField(field, value) {
      setForm((current) => ({ ...current, [field]: value }));
    }

    function handleSubmit(event) {
      event.preventDefault();
      if (!form.name.trim() || !form.contact.trim()) {
        setStatus("Please add your name and contact details so FaceGate can follow up.");
        return;
      }
      setStatus(`Thank you, ${form.name}. Your ${form.package} pilot request is ready to send to FaceGate Rwanda.`);
    }

    return createElement(
      "section",
      { className: "section media-section contact-stage", id: "contact", "data-section": "contact" },
      createElement(SectionMedia, {
        src: "assets/face-recognition-loop.mp4",
        type: "video",
        poster: "assets/face-recognition-poster.jpg",
      }),
      createElement(
        "div",
        { className: "section-inner contact-layout" },
        createElement(
          "div",
          null,
          createElement("p", { className: "section-kicker" }, "Book a pilot"),
          createElement("h2", null, "Bring FaceGate to one entrance first. Let the results sell the next one."),
          createElement(
            "p",
            { className: "footer-copy" },
            "Use this form as the front-end lead capture. In production, connect it to email, WhatsApp, a CRM, or a secure backend endpoint."
          ),
          createElement(
            "div",
            { className: "contact-methods" },
            createElement(
              "div",
              { className: "contact-method" },
              createElement("span", null, "Phone"),
              createElement("a", { href: "tel:+250792942736" }, "+250 792 942 736")
            ),
            createElement(
              "div",
              { className: "contact-method" },
              createElement("span", null, "Email"),
              createElement("a", { href: "mailto:info@facegate.rw" }, "info@facegate.rw")
            ),
            createElement(
              "div",
              { className: "contact-method" },
              createElement("span", null, "Location"),
              createElement("strong", null, "Kigali, Rwanda")
            )
          )
        ),
        createElement(
          "form",
          { className: "form-panel", onSubmit: handleSubmit },
          createElement(
            "div",
            { className: "form-grid" },
            createElement(
              "div",
              { className: "field" },
              createElement("label", { htmlFor: "name" }, "Name"),
              createElement("input", {
                id: "name",
                value: form.name,
                onChange: (event) => updateFormField("name", event.target.value),
                placeholder: "Your full name",
              })
            ),
            createElement(
              "div",
              { className: "field" },
              createElement("label", { htmlFor: "organization" }, "Organization"),
              createElement("input", {
                id: "organization",
                value: form.organization,
                onChange: (event) => updateFormField("organization", event.target.value),
                placeholder: "School, office, or institution",
              })
            ),
            createElement(
              "div",
              { className: "field" },
              createElement("label", { htmlFor: "contact-detail" }, "Contact"),
              createElement("input", {
                id: "contact-detail",
                value: form.contact,
                onChange: (event) => updateFormField("contact", event.target.value),
                placeholder: "Phone or email",
              })
            ),
            createElement(
              "div",
              { className: "field" },
              createElement("label", { htmlFor: "package" }, "Package"),
              createElement(
                "select",
                {
                  id: "package",
                  value: form.package,
                  onChange: (event) => updateFormField("package", event.target.value),
                },
                plans.map((plan) => createElement("option", { key: plan.name, value: plan.name }, plan.name))
              )
            ),
            createElement(
              "div",
              { className: "field" },
              createElement("label", { htmlFor: "message" }, "Message"),
              createElement("textarea", {
                id: "message",
                value: form.message,
                onChange: (event) => updateFormField("message", event.target.value),
                placeholder: "Tell us about your entrance points, users, and urgency.",
              })
            ),
            createElement("button", { className: "button button-primary", type: "submit" }, "Prepare request"),
            createElement("div", { className: "form-status", role: "status" }, status)
          )
        )
      )
    );
  }

  function Footer() {
    return createElement(
      "footer",
      { className: "site-footer" },
      createElement(
        "div",
        { className: "footer-inner" },
        createElement(
          "div",
          null,
          createElement(Logo),
          createElement(
            "p",
            { className: "footer-copy" },
            "Smart facial recognition access control for safer, smarter Rwandan institutions."
          )
        ),
        createElement(
          "div",
          { className: "footer-links" },
          createElement("a", { href: "#pricing" }, "Pricing"),
          createElement("a", { href: "#compliance" }, "Compliance"),
          createElement("a", { href: "assets/CREDITS.md" }, "Credits")
        )
      )
    );
  }

  // Page-level menu, navigation, and canvas behavior.
  function usePageEffects() {
    const [active, setActive] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    // Apply the mobile-menu state to the page body.
    useEffect(() => {
      document.body.classList.toggle("menu-open", menuOpen);
      return () => document.body.classList.remove("menu-open");
    }, [menuOpen]);

    // Keep the navigation highlight in sync with the section most visible on screen.
    useEffect(() => {
      const sections = Array.from(document.querySelectorAll("[data-section]"));
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible) {
            setActive(visible.target.dataset.section === "home" ? "" : visible.target.dataset.section);
          }
        },
        { threshold: [0.18, 0.35, 0.55], rootMargin: "-90px 0px -55% 0px" }
      );
      sections.forEach((section) => observer.observe(section));
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      const canvas = document.getElementById("signalCanvas");
      if (!canvas) return;
      const context = canvas.getContext("2d");
      let frameCount = 0;
      let animationFrameId;

      const nodes = Array.from({ length: 34 }, (_, index) => ({
        x: (index * 97) % 1000,
        y: (index * 53) % 700,
        speed: 0.25 + (index % 5) * 0.06,
      }));

      function resizeCanvas() {
        const rect = canvas.getBoundingClientRect();
        const ratio = window.devicePixelRatio || 1;
        canvas.width = Math.max(1, Math.floor(rect.width * ratio));
        canvas.height = Math.max(1, Math.floor(rect.height * ratio));
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
      }

      function drawFrame() {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        context.clearRect(0, 0, width, height);
        context.lineWidth = 1;
        nodes.forEach((node, index) => {
          const x = (node.x + frameCount * node.speed) % width;
          const y = (node.y + Math.sin(frameCount / 35 + index) * 22 + height) % height;
          context.fillStyle = "rgba(126, 225, 180, 0.62)";
          context.beginPath();
          context.arc(x, y, 2.2, 0, Math.PI * 2);
          context.fill();
          for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex += 7) {
            const next = nodes[nextIndex];
            const nx = (next.x + frameCount * next.speed) % width;
            const ny = (next.y + Math.sin(frameCount / 35 + nextIndex) * 22 + height) % height;
            const distance = Math.hypot(nx - x, ny - y);
            if (distance < 190) {
              context.strokeStyle = `rgba(47, 184, 197, ${0.24 - distance / 900})`;
              context.beginPath();
              context.moveTo(x, y);
              context.lineTo(nx, ny);
              context.stroke();
            }
          }
        });
        frameCount += 1;
        animationFrameId = requestAnimationFrame(drawFrame);
      }

      resizeCanvas();
      drawFrame();
      window.addEventListener("resize", resizeCanvas);
      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("resize", resizeCanvas);
      };
    }, []);

    return { active, menuOpen, setMenuOpen };
  }

  function App() {
    const page = usePageEffects();
    return createElement(
      "div",
      { className: "site-shell" },
      createElement(Header, page),
      createElement(
        "main",
        null,
        createElement(Hero),
        createElement(Problem),
        createElement(System),
        createElement(Workflow),
        createElement(Pricing),
        createElement(Markets),
        createElement(Compliance),
        createElement(Impact),
        createElement(Contact)
      ),
      createElement(Footer)
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(createElement(App));
})();
