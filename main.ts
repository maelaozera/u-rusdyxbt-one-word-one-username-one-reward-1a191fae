// One Word, One Username, One Reward — entry for make.fun.
// The entry is the entrant's own make.fun username, one word and nothing else.
// The judge compares usernames two at a time and picks the funnier or more
// interesting one, so the text must be exactly the handle: no explanation,
// no links, no pitch, no padding, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const USERNAME = "maelaozera";
const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // Enforce the gate before writing: 1-30 characters, a single word,
  // nothing but the username. A trailing newline would count as padding
  // under the judge's fourth criterion, so the file holds exactly the word.
  const entry = USERNAME;
  if (entry.length < 1 || entry.length > 30) {
    throw new Error(`entry must be 1-30 characters, got ${entry.length}`);
  }
  if (/\s/.test(entry)) {
    throw new Error("entry must be a single word with no whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, entry, "utf8");
}

main();
