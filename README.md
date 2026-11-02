# NEON NEXUS Entertainment Hub

## Student Information

**Student Name:** Hailey Bruintjies

**Student Number:** ST10524381

**Module Name:** Web Development

**Module Code:** WEDE5020

**Live Website:** https://hay-67.github.io/Website/

---

# Project Overview

NEON NEXUS is a hypothetical entertainment and creative hub in Gqeberha, South Africa. It was designed to provide young people with a safe and engaging environment for entertainment, creativity, social interaction, and community development.

The purpose of this website is to provide visitors with information about the facilities, services, events, membership opportunities, and entertainment experiences available at NEON NEXUS. The website was built in three parts:

- **Part 1:** the HTML structure, content, navigation, and planning of the project.
- **Part 2:** the external CSS stylesheet, the neon-inspired design and the responsive layouts.
- **Part 3:** JavaScript interactivity, working forms with validation, SEO (search engine optimisation), and deployment.

---

## Website Goals and Objectives

**Goals**

1. Give visitors clear information about NEON NEXUS, its facilities, and its purpose.
2. Encourage visitors to become members.
3. Promote events and tournaments.
4. Make it easy to ask questions, make enquiries, contact the team.
5. Show the atmosphere of NEON NEXUS through a photo gallery.

**Objectives**
- Provide pages with consistent navigation
- Show membership prices and benefits clearly so that visitors can compare plans.
- Provide an enquiry form that returns costs, opening hours, and availability based on the selected enquiry type.
- Provide a contact form that turns validated message into ready-to-send emails.
- Show where NEON NEXUS is on an interactive map.
- Make the site usable for users on all devices.
- Make the site easier to find in search engines through on-page SEO.

---

## Purpose of the Website

The website allows users to:
- Learn more about NEON NEXUS.
- Explore the entertainment experiences.
- Search and filter upcoming events.
- Compare membership plans and apply for memberships.
- Explore the NEXUS Cafe.
- View images through the gallery.
- Enquire about prices, bookings, volunteering and sponsorships.
- Find contact information, opening hours, and the NEON NEXUS locations on the map.
- Navigate between the different pages of the website.

---

## Key Features and Functionality

| Feature | Page | Files |
|---|---|---|
| Consistent navigation menu and footer on every page | All pages | HTML |
| Responsive layouts for desktop, tablet and mobile | All pages | `Assets/css/styles.css` |
| Dynamic events list with search, category filter, sort and a past-events switch | `events.html` | `Assets/js/events.js`, `Assets/data/events.json` |
| Gallery lightbox with keyboard, swipe and focus handling | `gallery.html` | `Assets/js/lightbox.js` |
| Interactive map with two locations, popups and directions links | `contact.html` | `Assets/js/contact-map.js` |
| FAQ accordion | `contact.html` | `Assets/js/faq-accordion.js` |
| Enquiry form with validation and a tailored cost or availability response | `enquiry.html` | Inline script |
| Contact form with validation and a compiled email preview | `contact.html` | Inline script |
| Membership application with validation and a confirmation card | `membership.html` | `Assets/js/membership-form.js` |
| SEO: title tags, meta descriptions, keywords and Open Graph tags | All pages | Each page `<head>` |
| `robots.txt` and `sitemap.xml` | Repository root | `robots.txt`, `sitemap.xml` |

---

# Website Pages

The website includes the following pages:

| Page | Description |
|---|---|
| `index.html` | Homepage containing an introduction to NEON NEXUS, featured experiences and an upcoming event. |
| `about-us.html` | Information about NEON NEXUS, its mission, vision and values. |
| `entertainment.html` | The entertainment spaces available at NEON NEXUS. |
| `events.html` | Searchable list of upcoming events and activities. |
| `NEXUSCafe.html` | Information about the NEXUS Café, menu and opening hours. |
| `gallery.html` | Image gallery with a lightbox. |
| `membership.html` | Membership plans, benefits and an application form. |
| `enquiry.html` | Enquiry form that returns costs, opening hours and availability for the chosen enquiry type. |
| `contact.html` | Contact details, map, opening hours, message form and FAQ. |

---

## Sitemap

```text
index.html (Home)
├── Pages/about-us.html (About Us)
├── Pages/entertainment.html (Entertainment)
├── Pages/events.html (Events)
├── Pages/NEXUSCafe.html (NEXUS Cafe)
├── Pages/gallery.html (Gallery)
├── Pages/membership.html (Membership)
├── Pages/enquiry.html (Enquiries)
└── Pages/contact.html (Contact)
```

---

# Technologies Used

- HTML5
- CSS3
- JavaScript (vanilla)
- Leaflet 1.9.4 for the interactive map (Agafonkin, 2023)
- GitHub and GitHub Pages
- Visual Studio Code with Live Server
- Google Chrome Developer Tools

---

# Folder Structure

```text
POE/
└── Website/
    ├── Assets/
    │   ├── css/
    │   │   └── styles.css
    │   ├── data/
    │   │   └── events.json
    │   ├── Images/
    │   └── js/
    │       ├── contact-map.js
    │       ├── events.js
    │       ├── faq-accordion.js
    │       ├── lightbox.js
    │       └── membership-form.js
    │
    ├── Miscellaneous/
    │
    ├── Pages/
    │   ├── about-us.html
    │   ├── contact.html
    │   ├── enquiry.html
    │   ├── entertainment.html
    │   ├── events.html
    │   ├── gallery.html
    │   ├── membership.html
    │   └── NEXUSCafe.html
    │
    ├── .gitattributes
    ├── index.html
    ├── README.md
    ├── robots.txt
    └── sitemap.xml
```

---

## Timeline and Milestones

| Milestone | Date |
|---|---|
| Part 1: proposals approved, HTML pages and README submitted | [14/08/2026] |
| Part 2: external CSS, responsive design and README submitted | [18/09/2026] |
| Part 3: JavaScript, forms, SEO and deployment | [02/11/2026] |

---

# Part 1: Building the Foundation

Part 1 delivered the project structure and content:

- Project proposals and approval of the NEON NEXUS concept.
- Content research and sourcing for each page.
- Nine linked HTML pages with semantic elements (`header`, `nav`, `main`, `footer`).
- A consistent navigation menu and file and folder structure.
- Comments in the code and commits to GitHub.

---

# Part 2: Designing the Visuals

## Design and Styling

NEON NEXUS uses a modern neon-inspired visual style. The design includes:

- Dark backgrounds with neon-inspired colours.
- Large headings and typography.
- Card-based content sections.
- Image-based experiences.
- Hover and visual effects, CSS transitions.
- Consistent navigation.

The styling is managed through an external CSS stylesheet located at:

```text
Assets/css/styles.css
```

## CSS and Layout

The stylesheet controls page layouts, navigation, typography, spacing, colours, backgrounds, borders, buttons, content cards, images, hover effects, and responsive behaviour. A CSS reset sets a consistent base. CSS custom properties hold the colour scheme.

## Responsive Design

CSS media queries adapt the layout, typography, navigation, spacing, images, and cards to different sizes. Multi-column layouts switch to a single column on smaller screens. The website was tested with Google Chrome Developer Tools at desktop, tablet, and mobile viewport sizes.

## Responsive Images

Images are resized with CSS so that they stay inside their containers and do not break the layout.

## Interactive Elements (CSS)

CSS pseudo-classes (`:hover`, `:focus`, `:active`) give visual feedback on navigation links, buttons, and cards.

---

# Part 3: Enhancing Functionality with SEO

- **Interactive Map:** `contact.html` shows two NEON NEXUS locations, the main hub and the NEXUS Arena. It is built with Leaflet (Agafonkin, 2023) and Esri map tiles. The location list zooms the map to each place, the pins open popups with directions links, and a "Show all locations" button resets the view. Mouse-wheel zoom switches on only after the map is clicked, so it does not interfere with the scrolling.
- **Gallery Lightbox:** Every gallery image opens in a larger view. It closes with the X button, the Esc key, or a click outside the image. Users can move between images with the arrow buttons, the arrow keys, or swiping. The dialog follows the modal dialog pattern (W3C, n.d.b).
- **Events search and filter:** Events are stored in `Assets/data/events.json` and loaded with the Fetch API (MDN Web Docs, n.d.). Visitors can search, filter by category, sort and show past events. The status (UPCOMING, TODAY or PAST) is worked out from the visitor's date. To add an event, only the JSON file needs editing.
- **FAQ accordion:** One answer is open at a time, with ARIA attributes and arrow-key navigation between questions, following the accordion pattern (W3C, n.d.a).
- **Animations and transitions:** A page-load entrance on the hero text, and transitions on the lightbox, accordion and event cards. Animations are turned off for visitors whose device is set to reduced motion.


## Forms and Validation

- **Enquiry form:** the visitor chooses an enquiry type, and a follow-up question appears for that type. After validation the page shows a tailored response. Membership enquiries show the monthly cost plus 6 and 12 month totals. Gaming, events and creative enquiries show the opening hours for the chosen day and whether NEON NEXUS is open right now. Volunteering and sponsorship enquiries show how to get involved.
- **Contact form:** after validation the details are compiled into an email addressed to `info@neonnexus.co.za`. The visitor checks the preview and presses Send Email, which opens their email app. They can also open it in Gmail or copy it.
- **Membership form:** after validation the application is summarised with the plan cost and a Send Email button. The "Choose membership" buttons on the plan cards pre-select that plan in the form.
- **Validation on all three forms:** required fields, a name pattern, email format, South African phone number format, length limits, a live character counter on the longer fields, and an error message beside each field. Errors clear as the visitor fixes them.
- **Security:** typed text is written to the page with `textContent` and never with `innerHTML`, so it cannot inject HTML. External links use `rel="noopener noreferrer"`.

## SEO

- Every page has a unique title tag (under 60 characters) and meta description (under 160 characters).
- Meta keywords were chosen for Gqeberha, gaming, music, art and events.
- Open Graph tags were added for sharing on social media.
- Each page has one `h1`, with `h2` and `h3` headings in order.
- Images use descriptive file names and alt text.
- Internal linking is through the navigation and footer.
- The site is mobile friendly through the responsive design.
- `robots.txt` allows all crawlers and points to `sitemap.xml` (Google, n.d.a; Sitemaps.org, n.d.).
- Page speed: gallery images use lazy loading, scripts are small and load only on the pages that need them, and Leaflet loads only on the contact page.
- The SEO approach follows Google's starter guide (Google, n.d.b).

## Deployment

The site is deployed from the `main` branch with GitHub Pages at https://hay-67.github.io/Website/. All nine pages were tested on the live link.

---

## Testing

- **Navigation:** Every navigation link was checked to make sure it opens the correct page.
- **Layout:** Pages were checked at different viewport sizes for overlapping elements, overflow, spacing, and text problems.
- **Responsive:** Google Chrome Developer Tools were used to test desktop, tablet and mobile widths.
- **Forms:** Each form was tested with empty input, invalid input and valid input to check the error messages and the response.
- **Interactive features:** The map pins and location list, the lightbox (mouse and keyboard), the events search and filters, and the FAQ accordion were tested.
- **Deployment:** Each page was opened on the live GitHub Pages link and checked for broken links and images.

---

## Feedback Addressed

### Part 1 Feedback Addressed

The following feedback was received from Part 1:

1. References must be clearly provided on the README file.
2. Avoid repeating the same reference list.
3. The README file must provide all required information.
4. Correct naming should be used for files and folders and unnecessary capitalisation should be avoided.

The Part 2 README has been expanded to provide project information, website structure, technologies, design information, testing information, version control information, a changelog and references.

The file and folder naming feedback will also be considered when finalising the project structure.

---

## GitHub and Version Control

GitHub stores the project files and development history. Changes were committed during development to track updates during Part 1 and 2. Part 3 was developed locally in Visual Studio Code and then commited to GitHub in stages, with one commit per feature added. Early commits had shorter descriptions, and later commits use more descriptive messages.

---

## Changelog

### Part 2

**September 2026**

- Updated the website from the Part 1 version based on lecturer feedback.
- Added and refined the external CSS stylesheet.
- Improved the overall website layout and structure.
- Added typography styling and responsive typography.
- Added colour schemes, backgrounds, borders and decorative styling.
- Added CSS hover effects and pseudo-classes.
- Added responsive layouts using CSS media queries.
- Improved responsive navigation for smaller screen sizes.
- Tested website responsiveness using different viewport sizes.
- Tested navigation links between website pages.
- Fixed identified HTML and CSS errors.
- Updated website content and visual presentation.
- Added project documentation to the README file.
- Added references used during the development of the website.

### Part 3

**October to November 2026**

- Added JavaScript functionality to improve website interactivity.
- Created a dynamic events system using an external JSON file.
- Added event search, category filtering, sorting, and past-event controls.
- Implemented a gallery lightbox with keyboard navigation and touch swipe support.
- Added an interactive leaflet map with location markers, popups, and directions links.
- Implemented an FAQ accordion with keyboard navigation and accessibility attributes.
- Developed an enquiry form with input validation and responses based on the selected enquiry type.
- Developed a contact form with validation and a compiled email preview.
- Added a membership application form with validation, plan selection, and confirmation.
- Added SEO title tags, meta descriptions, meta keywords, and Open Graph metadata.
- Created and configured robots.txt and sitemap.xml.
- Improved accessibility through form error messages, keyboard controls, and reduced-motion support.
- Tested interactive features, form validation, responsive layouts, and navigation.
- Updated README documentation and references.
- Deployed and tested the completed website using GitHub Pages.
---

## References

### Websites

Agafonkin, V. (2023) Leaflet Quick Start Guide. Accessed: 25 October 2026. [Online.] Available at: https://leafletjs.com/examples/quick-start/

Agafonkin, V. (2023) Leaflet: an open-source JavaScript library for interactive maps, version 1.9.4. Accessed: 25 October 2026. [Online.] Available at: https://leafletjs.com/

Esri (n.d.) World Street Map. Accessed: 28 October 2026. [Online.] Available at: https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer

Google (n.d.a) Robots.txt introduction. Accessed: 25 October 2026. [Online.] Available at: https://developers.google.com/search/docs/crawling-indexing/robots/intro

Google (n.d.b) Search engine optimization (SEO) starter guide. Accessed: 25 October 2026. [Online.] Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

MDN Web Docs (n.d.) Using the Fetch API. Accessed: 28 October 2026. [Online.] Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

Sitemaps.org (n.d.) Sitemaps XML format. Accessed: 28 October 2026. [Online.] Available at: https://www.sitemaps.org/protocol.html

W3C (n.d.a) Accordion pattern. Accessed: 28 October 2026. [Online.] Available at: https://www.w3.org/WAI/ARIA/apg/patterns/accordion/

W3C (n.d.b) Dialog (modal) pattern. Accessed: 29 October 2026. [Online.] Available at: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/

W3Schools (n.d.) CSS Tutorial. Accessed: 8 September 2026. [Online.] Available at: https://www.w3schools.com/css/

### YouTube

YouTube (14 March, 2022) Create this trendy blurry glass effect with CSS. Accessed: 18 September 2026. [Online video]. Available at: https://youtu.be/dsZ7RN9ItR4?si=5GQfWxBF1WxV85Qa

YouTube (11 June, 2025) CSS Glowing Button - How to Design Glowing Button with Hover Effects [Pure CSS]. Accessed: 18 September 2026. [Online video]. Available at: https://youtu.be/b_8fHNIHFk4?si=dqtU8IY-TLPM3Cxn

YouTube (8 September 2021) HTML & CSS Full Course - Beginner to Pro. Accessed: 18 September 2026. [Online video]. Available at: https://www.youtube.com/watch?v=wRNinF7YQqQ

YouTube (30 August, 2022) CSS Tutorial - Full Course for Beginners. Accessed: 18 September 2026. [Online video]. Available at: https://youtu.be/OXGznpKZ_sA?si=d4L3tBFnHljmr_fg

YouTube (17 October 2024) Responsive Web Design Tutorial. Accessed: 18 September 2026. [Online video]. Available at: https://youtu.be/-G-zic_L50A?si=slm2BjnW2o9-KiLh

YouTube (5 July 2022) Fetch API in 4 Minutes (GET, POST, PUT, DELETE | JSON). Accessed:  28 October 2026. [Online video]. Available at: https://youtu.be/XHokFQeQ6Lk

YouTube (14 December 2018)  Leaflet Tutorial 1: Create a map with a marker using JavaScript. Accessed: 28 October 2026. [Online video]. Available at: https://youtu.be/wVnimcQsuwk

YouTube (16 April 2026)  The Complete SEO & AI SEO Course for 2026 (Full Beginner’s Guide). Accessed: 28 October 2026. [Online video]. Available at: https://youtu.be/7DRO4rEIHDk

YouTube (16 September 2018)  How To Create Image Gallery Using HTML, CSS and Javascript | Lightbox Gallery. Accessed: 28 October 2026. [Online video]. Available at: https://youtu.be/TSRtBISvsh4

---
