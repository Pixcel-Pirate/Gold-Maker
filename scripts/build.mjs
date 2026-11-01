// Builds dist/: the page with its release version stamped in, plus the icons.
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";

const version = process.env.VITE_VERSION || "__VERSION__"; // unstamped builds never check for updates
rmSync("dist", { recursive: true, force: true });
mkdirSync("dist");
cpSync("public", "dist", { recursive: true });
writeFileSync("dist/index.html", readFileSync("src/index.html", "utf8").replace('"__VERSION__"', JSON.stringify(version)));
console.log(`built dist/ (${version})`);
