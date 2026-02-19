# Frontend Mentor - Password generator app

![Design preview for the Password generator app coding challenge](./preview.jpg)

## Welcome! 👋

========================================
PASSWORD GENERATOR – HTML STRUCTURE SUMMARY
========================================
1) PAGE SETUP
- Uses semantic HTML with <main> as the primary container
- Mobile-first layout (Frontend Mentor standard)
- Google Font: JetBrains Mono for a code-like UI feel
2) MAIN CONTAINER (.container)
- Centers all content vertically and horizontally
- Fixed max-width for mobile and tablet layouts
3) PASSWORD DISPLAY SECTION
- Read-only input field to show generated password
- Copy button with icon for clipboard functionality
- Placeholder text shown before generation
4) PASSWORD SETTINGS (Password-analysis)
- Character length section:
  - Range slider to select password length
  - Live length value displayed using <span>
- Options section:
  - Custom-styled checkboxes for:
    - Uppercase letters
    - Lowercase letters
    - Numbers
    - Symbols
  - Native checkbox hidden and replaced with custom UI
5) STRENGTH INDICATOR
- Strength label on the left
- Right section includes:
  - Dynamic strength text (WEAK / MEDIUM / STRONG / VERY STRONG)
  - Four visual bars indicating strength level
6) GENERATE BUTTON
- Full-width call-to-action button
- Includes arrow icon for better visual feedback
- Triggers password generation via JavaScript
DESIGN PRINCIPLES USED
- Semantic and accessible HTML
- Minimal and clean markup
- UI structured to be easily controlled by JavaScript
========================================
END OF HTML SUMMARY
========================================
-->
/*
========================================
PASSWORD GENERATOR – CSS SUMMARY
========================================
1) GLOBAL RESET
- Applies box-sizing: border-box
- Removes default margin and padding
- Ensures consistent layout across browsers
2) CSS VARIABLES (:root)
- Defines color palette:
  - Greys for background and text
  - Accent colors for strength levels
- Makes theme reusable and maintainable
3) BODY STYLING
- Full viewport height
- Centered layout using Flexbox
- Dark background for contrast
- Mobile-first padding
4) CONTAINER
- Fixed max-width for mobile (343px)
- Expands on tablet/desktop using media queries
- Centers content visually
5) PASSWORD DISPLAY
- Flex layout for input + copy button
- Transparent input with no borders
- Copy button styled as icon-only action
6) PASSWORD SETTINGS PANEL
- Separate background card for clarity
- Length slider styled using accent-color
- Custom checkbox system:
  - Native checkbox hidden
  - Custom square box with checkmark
  - Green highlight when checked
7) STRENGTH INDICATOR
- Darker background section for contrast
- Strength text + bars aligned horizontally
- Bars styled with borders and dynamic fill via JS
8) GENERATE BUTTON
- Full-width primary button
- Accent green background
- Hover effect for better UX
- Uppercase text for emphasis
9) RESPONSIVE DESIGN
- Mobile-first approach
- Tablet/Desktop styles applied at 768px+
- Increased spacing, font sizes, and container width
DESIGN PRINCIPLES USED
- Mobile-first CSS
- Reusable variables
- Clean visual hierarchy
- JS-driven dynamic styling
========================================
END OF CSS SUMMARY
========================================
*/



/*
========================================
PASSWORD GENERATOR – LOGIC SUMMARY
========================================
1) DOM SELECTION
- Select all required HTML elements (input, buttons, sliders, checkboxes, strength bars)
- These elements allow JS to read user choices and update the UI dynamically
2) PASSWORD LENGTH HANDLING
- Slider controls the password length
- The selected length value is displayed in real time
- Any change in length triggers strength recalculation
3) CHARACTER SETS
- Uppercase letters (A–Z)
- Lowercase letters (a–z)
- Numbers (0–9)
- Symbols (!@#$%^&*)
- These sets act as sources for generating random characters
4) PASSWORD STRENGTH LOGIC
- Strength depends on:
  a) Password length
  b) Number of selected character types
- Strength levels:
  - WEAK        → very short or only 1 character type
  - MEDIUM      → 2 types with sufficient length
  - STRONG      → 3 types with longer length
  - VERY STRONG → all 4 types with long length
- Strength is shown using colored bars and text
5) RANDOM HELPER FUNCTIONS
- getRandomChar(): returns a random character from a given string
- shuffleString(): shuffles characters to avoid predictable patterns
6) PASSWORD GENERATION FLOW
- Step 1: Add at least ONE character from each selected type (guarantees rules)
- Step 2: Store selected character sets in an array
- Step 3: Fill remaining length by randomly choosing from selected sets
- Step 4: Shuffle final password for better security
- Step 5: Display password and recalculate strength
7) VALIDATION
- If no checkbox is selected, show alert and stop password generation
8) COPY FUNCTIONALITY
- Copy button copies password to clipboard
- Shows "Copied!" feedback temporarily for better UX
9) EVENT LISTENERS
- Generate button → creates password
- Length slider → updates length and strength
- Checkboxes → update strength in real time
DESIGN PRINCIPLES USED
- Modular functions for clean code
- Security-first approach (guaranteed characters + shuffle)
- Real-time UI updates for better user experience
========================================
END OF SUMMARY
========================================
*/![Uploading image.png…]()

