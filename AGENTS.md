# AGENTS.md

## Stack
- **Create React App** (react-scripts 3.4.1), **React 16.13.1**
- **Yarn** (not npm) — use `yarn`, never `npm`
- **Plain JS** (no TypeScript)
- **Class components** (React 16 — no hooks)

## Commands
| Command | Description |
|---------|-------------|
| `yarn start` | Dev server at `http://localhost:3000` |
| `yarn build` | Production build to `build/` |
| `yarn test` | Interactive test runner (watch mode) |
| `yarn eject` | One-way: dumps CRA config (irreversible) |

## Project structure
- **Entry:** `src/index.js` renders `<Game />` into `#root`
- **Components:** `src/components/ShoppingList.jsx`
- **All logic** (Game, Board, Square, calculateWinner) lives in `src/index.js` (single file)
- **No routing, no data fetching, no API** — pure client-side tutorial app
- **CSS:** `src/index.css` (plain CSS, no modules)

## Notes
- No custom ESLint/Prettier config — CRA defaults only
- No CI/CD, no Docker, no env files tracked
- No test files found — `yarn test` runs CRA's Jest with no configured tests
- Lint errors appear in dev console (CRA's built-in ESLint); no separate `lint` script
