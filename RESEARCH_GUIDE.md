# Maerich Consultant Database - Research Guide

## Overview
This database tracks global lighting consultants and major property developments. The initial version includes 10 top consultants and 10 major projects. This guide helps you expand it to 100+ entries.

## Current Data (Seed)
- **10 top lighting consultants** across 5 regions
- **10 major developments** ($500M+ value)
- **5 developer-consultant relationships**

---

## How to Expand the Database

### Step 1: Research Top Lighting Consultants

**Target:** 100 consultants globally

**Research Sources:**

1. **Industry Awards Winners**
   - IALD Awards (International Association of Lighting Designers): https://www.iald.org/awards
   - LIT Design Awards: https://www.litawards.com
   - Darc Awards: https://darcawards.com
   - IES Illumination Awards: https://www.ies.org/awards

2. **Trade Publications**
   - Lighting Design + Application (LD+A)
   - Architectural Lighting Magazine
   - darc magazine
   - Mondo Arc

3. **Project Databases**
   - Architizer: Search by lighting designer
   - World Architecture News
   - Dezeen lighting projects

4. **Professional Associations**
   - IALD Member Directory: https://www.iald.org/Find-a-Designer
   - IES Member List
   - PLDA (Professional Lighting Designers' Association)

5. **LinkedIn Search**
   - Search: "Lighting Designer" + "Hospitality" or "Luxury"
   - Look for consultants at firms working on 4-5 star hotels

**Data to Collect:**
- Name
- Company
- Email (usually firstname@company.com)
- Phone (company main line)
- LinkedIn profile
- Notable projects (3-5)
- Region
- Priority (High = works on luxury hospitality, Medium = commercial, Low = residential only)

---

### Step 2: Research Major Developments

**Target:** 100 projects ($100M+ value)

**Research Sources:**

1. **Construction News Sites**
   - Construction Week (Middle East focus): https://www.constructionweekonline.com
   - Building Design + Construction: https://www.bdcnetwork.com
   - The Moodie Davitt Report (hospitality): https://www.moodiedavittreport.com

2. **Developer Websites**
   - Check "Projects" or "Portfolio" pages
   - Look for: Four Seasons, Ritz-Carlton, Mandarin Oriental, Aman, Rosewood, etc.

3. **Hotel News**
   - Hotel Management Magazine
   - Lodging Magazine
   - Skift (hotel industry news)

4. **Real Estate Databases**
   - CBRE Global Research
   - JLL Hotel & Hospitality
   - Knight Frank Luxury Property Reports

5. **Regional Focus**
   - **Middle East:** Most active luxury development region
   - **Asia:** Singapore, Hong Kong, Bangkok, Bali
   - **North America:** Miami, NYC, LA, Las Vegas
   - **Europe:** London, Paris, Monaco

**Data to Collect:**
- Project name
- Developer
- Location (city, country)
- Type (hotel, mixed-use, residential, resort)
- Lighting consultant (if announced)
- Stage (Planning / Under Construction / Opening 2026, etc.)
- Estimated value
- Estimated completion date

---

### Step 3: Map Developer-Consultant Relationships

**Why It Matters:**
If a developer uses the same consultant repeatedly, targeting that consultant = access to future projects.

**How to Find:**
1. Look at a developer's last 3-5 projects
2. Check project credits (usually in press releases or award submissions)
3. Note patterns: "XYZ Lighting has designed for ABC Developer 4 times"

**Data to Collect:**
- Developer name
- List of projects
- Consultant(s) used
- Relationship type: "Preferred Partner" (3+ projects), "Long-term" (2 projects), "Project-based" (1 project)
- Last project year

---

## Priority Ranking System

### For Consultants:

**High Priority:**
- Works exclusively on luxury hospitality (4-5 star hotels, ultra-luxury resorts)
- 5+ years experience
- Portfolio includes recognizable brands (Four Seasons, Ritz, Mandarin Oriental, etc.)
- Award-winning
- Located in key markets (Singapore, Dubai, London, NYC)

**Medium Priority:**
- Mix of hospitality and commercial
- 3-5 years experience
- Some luxury projects
- Regional focus

**Low Priority:**
- Primarily residential or retail
- <3 years experience
- No luxury hospitality in portfolio

### For Projects:

**High Priority:**
- Ultra-luxury segment (Aman, Six Senses, Rosewood, etc.)
- Value >$500M
- Consultant not yet announced
- Opening 2026-2028 (prime timing for Maerich)

**Medium Priority:**
- Luxury segment (Four Seasons, Ritz, Mandarin Oriental)
- Value $100M-$500M
- Consultant may be announced
- Opening 2025-2027

**Low Priority:**
- Mid-market
- Value <$100M
- Consultant already locked in
- Opening <2025 (too soon)

---

## How to Update the Database

### Option 1: Direct Edit (Simple)
Edit `server.js` file directly:
1. Add new entries to `consultantsData`, `projectsData`, or `connectionsData` arrays
2. Save file
3. Restart server or re-deploy

### Option 2: CSV Import (Scalable)
If you gather data in Excel/Google Sheets:
1. Export as CSV
2. Use a script to convert CSV → JSON
3. Replace data arrays in server.js

### Option 3: Database (Long-term)
For 100+ entries, consider moving to a real database:
- SQLite (simplest, file-based)
- PostgreSQL (if deploying on Heroku/Railway)
- Airtable (no-code option with API)

---

## Research Workflow (Recommended)

**Week 1-2: Consultants**
- Day 1-3: Research IALD + Darc award winners (last 5 years) → 30 consultants
- Day 4-6: Search Architizer for projects with "lighting design by..." → 20 consultants
- Day 7-10: LinkedIn search + trade publication mentions → 30 consultants
- Day 11-14: Fill in contact details, verify emails, assign priorities

**Week 3-4: Projects**
- Day 1-5: Middle East projects (Construction Week, developer sites) → 30 projects
- Day 6-10: Asia projects (Singapore/HK/Bangkok focus) → 30 projects
- Day 11-14: North America + Europe projects → 30 projects
- Day 15-16: Fill in consultant names where known

**Week 5: Connections**
- Cross-reference projects and consultants
- Identify repeat relationships
- Build developer-consultant map

**Total Time Estimate:** 4-5 weeks of research (2-3 hours/day)

---

## Quick Wins (Top 20 to Target First)

Based on current luxury hospitality pipeline, these consultants are most active:

### Asia-Pacific
1. **Lighting Design Partnership** (Arnold Chan) - Singapore/Hong Kong
2. **Lighting Planners Associates** (Kaoru Mende) - Japan
3. **Inhabit Group** - Melbourne/Sydney
4. **Lighting Design International** - Hong Kong

### Middle East
5. **Lightworks** (Imaad Rahmouni) - Dubai (Atlantis Royal, Burj Khalifa)
6. **DPA Lighting Consultants** - Dubai
7. **Light Bureau** - UAE/Saudi

### Europe
8. **Nulty Lighting** (Paul Nulty) - London
9. **Speirs Major** - Edinburgh/London
10. **Ulrike Brandi Licht** - Germany
11. **Studio ZNA** - Italy/Switzerland

### North America
12. **L'Observatoire International** (Hervé Descottes) - New York
13. **Lightswitch** (Michael Grubb) - New York
14. **Focus Lighting** - New York
15. **Studio Other Spaces** (Olafur Eliasson) - LA/NYC

### Global/Multi-region
16. **Arup Lighting** - Global offices
17. **BuroHappold** - Global offices
18. **Stoane Lighting** - London/Dubai/Hong Kong
19. **Light Collective** - London/Singapore
20. **MBLD** (Maurice Brill Lighting Design) - London/UAE

---

## Contact Strategy

Once database is populated:

1. **Tier 1 (High Priority, 30 contacts)**
   - Personal email from Marisa
   - Reference specific project they did
   - Offer site visit or sample

2. **Tier 2 (Medium Priority, 50 contacts)**
   - Personalized template email
   - Highlight relevant case study
   - Invite to webinar or workshop

3. **Tier 3 (All others)**
   - Newsletter signup
   - Quarterly product updates

---

## Tools & Resources

**Email Finder Tools:**
- Hunter.io (find email patterns for companies)
- RocketReach (professional contact database)
- LinkedIn Sales Navigator (direct messaging)

**CRM Integration:**
Once database grows, consider:
- HubSpot (free CRM)
- Airtable (visual database)
- Notion (collaborative database)

**Automation:**
- Zapier: Auto-add new consultants from LinkedIn searches
- IFTTT: Monitor construction news RSS feeds for new projects

---

## Next Steps

1. **Deploy database as-is** so Marisa can start tracking
2. **Assign research** to team member or VA
3. **Set up weekly sync** to review new entries
4. **Track outreach** in "Status" column (Not Contacted → Reached Out → Meeting Set → Proposal Sent → Won/Lost)

---

**Questions?** This is a living document - update as you refine the research process.
