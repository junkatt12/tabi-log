# Project Overview
Tabi-log is a travel album mobile app built with Expo (React Native).

Users can:
- Create travel albums
- Add photos and notes
- Publish albums to timeline
- Explore others' travel ideas (Quest)

This is an MVP project for iOS and Android.

---

# Tech Stack
- Expo (React Native)
- TypeScript
- Expo Router (tabs)
- Supabase (Auth / Database / Storage)

---

# Folder Structure
app/
  (tabs)/
    index.tsx      # Home
    explore.tsx    # Explore/Quest (MVP: placeholder or simple list)
    album.tsx      # Album (list/create/add)
components/
lib/
  supabase.ts
services/
types/

---

# Coding Rules
- TypeScript strict mode
- Functional components only
- No class components
- No `any`
- Keep components small and simple

---

# Navigation Rules
Tabs only:
- Home
- Explore
- Album

Do not change navigation structure unless explicitly instructed.

---

# Supabase Rule
Always import from:
lib/supabase.ts

Do not create new Supabase clients.

---

# MVP Scope (Strict)
The MVP includes ONLY:
- Email login
- Create album
- Add photo + text memo to album
- View own albums
- Publish album (public / private)
- Timeline (simple list of public albums)

---

# NOT included in MVP
- Social features (likes, comments, follow)
- Notifications
- Search
- Map
- Chat
- Video
- Advanced UI design
- Performance optimization
- Offline support
- Pagination / Infinite scroll
- Analytics
- Push notifications

---

# Database Schema (Fixed)
Do NOT change table structure unless explicitly instructed.

users
- id (uuid)
- email (text)
- created_at (timestamp)

albums
- id (uuid)
- user_id (uuid)
- title (text)
- is_public (boolean)
- created_at (timestamp)

photos
- id (uuid)
- album_id (uuid)
- image_url (text)
- memo (text)
- created_at (timestamp)

---

# Screens (Fixed)
Tabs:
- Home: Timeline (public albums list)
- Explore: Quest list (MVP: simple placeholder)
- Album:
  - Album list
  - Create album
  - Add photo to album

---

# User Flow (Fixed)
Login
→ Album list
→ Create album
→ Add photo
→ Publish
→ Home timeline shows public albums

Do NOT redesign user flow.

---

# Library Policy
Do NOT install new libraries unless explicitly instructed.
Use Expo built-in features only.

---

# UI Policy
Use default Expo components.
Use default styles.
No custom theming.
No animations.

---

# What NOT to touch
- node_modules/
- .expo/
- dist/
- build/
- package-lock.json
- configuration files unless requested

---

# Decision Policy
Do NOT make architectural decisions.
If something is unclear, implement the simplest possible solution.
