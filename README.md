# Society for Cyberabad Security Council (SCSC) – Women Safety Wing

A clean, responsive, interlinked static web portal dedicated to the Women Safety Wing of the Society for Cyberabad Security Council (SCSC), covering three flagship initiatives:
1. **She Shuttle** (Safe Transit)
2. **Safe Stay** (Verified Accommodation & Hostels)
3. **Margadarshak** (Workplace & Community Mentorship)

Built with pure semantic HTML5, modern CSS (with CSS Custom Properties/BEM architecture), and vanilla JavaScript. Zero frameworks, zero external image dependencies, and 100% offline-ready.

---

## Project Structure

```
scsc-women-safety/
├── index.html          # Hub & Connected Safety Journey (Travel → Stay → Guidance)
├── she-shuttle.html    # She Shuttle initiative page
├── safe-stay.html      # Safe Stay verified hostels initiative page
├── margadarshak.html   # Margadarshak mentorship program initiative page
├── styles.css          # Shared styles, color tokens, responsive BEM components
├── script.js           # Shared behavior: mobile menu, active link, accordions, back-to-top
└── README.md           # Documentation, deployment guide, and placeholder tracker
```

---

## How to Run Locally

Because the project uses relative links and inline SVGs exclusively, there are no build steps:

### Option A: Open directly in your browser
Double-click `index.html` or drag it into any web browser (Chrome, Edge, Firefox, Safari). It works completely offline with the `file://` protocol.

### Option B: Local development server
If you prefer running a lightweight local server:
- **Python 3:**
  ```bash
  python -m http.server 8000
  ```
  Then visit `http://localhost:8000` in your browser.
- **Node.js (npx serve):**
  ```bash
  npx serve .
  ```
- **VS Code:** Install the *Live Server* extension and click "Go Live" at the bottom right.

---

## How to Deploy on GitHub Pages

1. **Initialize Git & Commit:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit of SCSC Women Safety Wing website"
   ```
2. **Push to GitHub:**
   - Create a new public repository on GitHub (e.g. `scsc-women-safety`).
   - Link your local repo and push:
     ```bash
     git remote add origin https://github.com/<your-username>/scsc-women-safety.git
     git branch -M main
     git push -u origin main
     ```
3. **Enable GitHub Pages:**
   - In your GitHub repository, go to **Settings** > **Pages** (under "Code and automation").
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and `/ (root)`, then click **Save**.
   - Within 1–2 minutes, your website will be live at:
     `https://<your-username>.github.io/scsc-women-safety/`

Because all stylesheet, script, and page links use relative paths, the site functions seamlessly on custom domains or GitHub Pages subdirectories.

---

## List of `TODO:` Placeholders to Fill In

All placeholders are marked with `<!-- TODO: ... -->` comments in the HTML files and highlighted with `<span class="placeholder-badge">[TBD: ...]</span>` badges in the UI:

### 1. General & Helplines (`index.html`, shared footers)
- [ ] **SHE Teams WhatsApp / Contact Number:** Official contact number for Cyberabad SHE Teams.
- [ ] **SCSC Women Safety Wing Secretariat Email:** Confirm `womensafety@scsc.in` or official address.
- [ ] **SCSC Helpdesk Landline:** Official landline/hotline numbers for Cyberabad Security Council.

### 2. She Shuttle (`she-shuttle.html`)
- [ ] **Official Description & Inception Details:** Any specific launch history or milestone statistics.
- [ ] **Transit Routes & Timetable:** Detailed list of bus stops, route numbers, and morning/evening frequency.
- [ ] **Fare & ID Policy:** Confirmation of corporate/student ID card verification requirements.
- [ ] **Live Tracking / Mobile App Link:** Link to live GPS tracking portal or mobile application if active.
- [ ] **Transport Operations Desk Helpline:** Phone number and email for route inquiries and feedback.

### 3. Safe Stay (`safe-stay.html`)
- [ ] **Hostel Safety Checklist:** Official 25-point SCSC / Police hostel audit checklist.
- [ ] **Hostel Online Registry Portal:** URL or portal where residents can look up verified PGs.
- [ ] **Hostel Onboarding / Registration Form:** Application link for hostel owners to request audits.
- [ ] **Grievance Desk Helpline:** Direct line or email for reporting unverified PGs and hostel issues.

### 4. Margadarshak (`margadarshak.html`)
- [ ] **Program Statistics:** Number of certified Margadarshaks active in Cyberabad and partner firms.
- [ ] **Directory / Sector Lookup:** Portal or intranet contact directory for employees to find their local mentor.
- [ ] **Training Cohort Nomination Form:** Application process for corporate HR/management to nominate new mentors.
- [ ] **Margadarshak Central Helpdesk:** Central telephone line and confidential email address.
