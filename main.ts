// One Word for Your Wi-Fi — entry program.
//
// Writes a single word describing home Wi-Fi to /output/entry.txt.
// The word: "ghosting" — home Wi-Fi that vanishes mid-call, mid-show,
// mid-sentence, exactly when you need it most, then drifts back
// pretending nothing happened. Funny at once, true to how home Wi-Fi
// actually behaves, and a fresh angle on the familiar annoyance.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "ghosting";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
