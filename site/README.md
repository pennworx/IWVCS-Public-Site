# IWVCS public-site concept

This folder is a self-contained static prototype for the public `IWVCS.org` experience. Open `index.html` in a browser to review it.

## Proposed public information architecture

- `index.html` — public landing page and the clear entry point to secure IWVCS sign-in.
- `how-it-works.html` — plain-language explanation of citation, reporting, home-state, reciprocity, and due-process concepts.
- `member-states.html` — searchable list of 49 participating states plus Hawaii's reported joining status.
- `governance.html` — a public overview of the Compact, its history, state responsibility, and where to get help.
- `faq.html` — questions from hunters, anglers, trappers, citation recipients, and people checking their privileges.

All public pages are written from the visitor's perspective. Agency administration appears only where needed to explain who can decide eligibility, where to resolve a citation, or why the IWVCS sign-in is not a public account feature.

## Theme direction

The visual system uses deep forest green, restrained gold, warm white, serif display typography, clean sans-serif body typography, modest line art, and the existing IWVC logo. The CSS is dependency-free, responsive, keyboard accessible, print aware, and suitable as a foundation for the authenticated application.

## Production decisions still needed

1. Confirm the canonical production sign-in route. The prototype uses `/login.aspx` to match the existing application.
2. Obtain Board confirmation of the current member count and Hawaii status. Current state sources conflict; this prototype follows North Carolina DEQ's 2026 statement of 49 members with Hawaii joining.
3. Approve the public contact model. The prototype intentionally routes case and eligibility questions to the relevant state agency and does not invent a Compact email address.
4. Decide whether any additional high-level public history or participating-state information should be published.

Internal Compact governing documents, operating materials, procedures, and protected records are intentionally excluded from the public site and must remain restricted to authorized Compact use.

## Recommended next content increment

After Board validation, add a governed public data set for member-state agency contacts, enabling statutes, implementation rules, and joining dates. Each record should include a source URL, source owner, effective date, last-verified date, and review cadence.
