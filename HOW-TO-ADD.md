# Adding "Critical Events" as Project 3 — step by step

You have ONE new file to upload and ONE tiny edit to make on the homepage.
Nothing else on the site is touched.

---

## STEP 1 — Upload the new page

Upload **case-study-critical-events.html** to your repo root, your usual way:
`github.com/gulshanparmar47-gp/Big-Bang/upload/main`
Commit.

That page is self-contained — it reuses your existing style.css and script.js, so it will look
consistent with your other two case studies automatically. No CSS or JS upload needed.

---

## STEP 2 — Make the homepage card live (edit index.html directly on GitHub)

We edit the LIVE index.html on GitHub (not re-upload an old copy), so nothing else changes.

1. In your repo, open **index.html** and click the **pencil (Edit)** icon.
2. Find the third "in progress" placeholder card. It looks similar to this (search for
   `CASE STUDY 03` or the third `project-card` with `aria-disabled`):

   ```html
   <a class="project-card" href="#" aria-disabled="true" onclick="return false;">
     <div class="project-thumb"><span>CASE STUDY 03</span></div>
     <div class="project-body">
       <span class="project-tag">In Progress</span>
       <h3>Project title coming soon</h3>
       <p>...</p>
       <span class="project-status">○ In progress</span>
     </div>
   </a>
   ```

3. Replace that whole block with this:

   ```html
   <a class="project-card is-live" href="case-study-critical-events.html">
     <div class="project-thumb"><span>AUTHORING TOOL · isEAZY</span></div>
     <div class="project-body">
       <span class="project-tag">Case Study 03</span>
       <h3>Critical Events in Human History</h3>
       <p>An interactive module built in isEazy Author — 16 breakthroughs across ~1M years, mapped to
       three forces: survive, share knowledge, shift power.</p>
       <span class="project-status">● Live — 18 slides · 2 knowledge checks</span>
     </div>
   </a>
   ```

4. Scroll down, **Commit changes** directly to main.

> NOTE: your live index.html may not have an exact "CASE STUDY 03" placeholder if the card text
> differs. If you can't find it, just locate the THIRD project card in the "work" section and swap
> its inner content for the block above — the key parts are: class `project-card is-live`, the href
> `case-study-critical-events.html`, and the text.

---

## STEP 3 — Verify (on laptop)

Open the live site in a fresh/incognito tab after Pages redeploys (a few minutes):

1. Homepage → the third card is now solid/clickable and opens the new page.
2. On the new page, the isEazy module loads inside the framed box and plays.
3. Test the "Open module in full screen" button.

### If the embedded module looks cramped or cut off
The frame is set to 16:9. If your module needs a taller box, tell me and I'll change one value
(`aspect-ratio`) — it's a one-line fix.

### The one number to double-check in the copy
The page says **"16 breakthroughs."** If your final isEazy wheel actually has 5 inventions in Part
Two (not 6), the true total is 15. Look at your published wheel; if it's 15, tell me and I'll change
"16" to "15" in two spots. Everything else (18 slides, 2 knowledge checks) is fixed and correct.
