// One Word for Your Wi-Fi — entry program.
//
// Writes a single word describing home Wi-Fi to /output/entry.txt.
// The word: "ghosting" — home Wi-Fi that vanishes mid-call, mid-show,
// mid-sentence, exactly when you need it most, then drifts back
// pretending nothing happened. Funny at once, true to how home Wi-Fi
// actually behaves, and a fresh angle on the familiar annoyance.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "ghosting";

// Gate: the sealed scorer requires /output/entry.txt to be UTF-8 text
// of 1 to 20 characters, not only white space. Fail fast before writing
// anything, so a bad word never produces an invalid artifact.
const len = [...WORD].length;
if (len < 1 || len > 20 || WORD.trim().length === 0) {
  throw new Error(
    `entry word invalid: ${len} code points, must be 1-20 non-whitespace characters`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
