// One-Liner Marathon entry: writes a single 105-character joke to /output/entry.txt.
//
// The joke's punchline claims it is exactly 105 characters long, so the file
// must contain the joke text and nothing else — no trailing newline, or the
// claim (and the joke) would stop being literally true.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I shipped eight megabytes of transcripts to prove I wrote this joke, and the joke is 105 characters long.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
