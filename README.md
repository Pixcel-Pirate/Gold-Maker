# The Goldsmith's Ledger

Gold-making guide for WoW Forever, packaged as a Windows desktop app the same way as StanceBook (Neutralino + NSIS installer).

- Build: `VITE_VERSION=v2026.11.01 npm run build` writes `dist/`.
- Release: push a tag `vYYYY.MM.DD` (or run the Release workflow). It builds `Goldsmiths-Ledger-Setup.exe`, publishes it to Releases, and deploys `dist/` plus `desktop/resources.neu` to GitHub Pages.
- Updating: the app checks the latest release on launch. Clicking **Update** downloads that release's `resources.neu` (about 150 KB), swaps it in next to the .exe and restarts. No installer. If the download fails it opens the installer instead.
