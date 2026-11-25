// One-Line Office Joke 24-Hour Sprint — make.fun entry (v2).
// Writes one office joke (at most 200 characters) to
// /output/entry.txt: The office plant died, so HR sent a
// condolence email, a link to the wellness portal, and a calendar
// invite for its replacement's onboarding.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "The office plant died, so HR sent a condolence email, a link to the wellness portal, and a calendar invite for its replacement's onboarding.";

if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
