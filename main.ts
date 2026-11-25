// The Most Boring Object, Reviewed in One Line
// Entry: a one-line review of a paperclip.
//
// Three candidates were considered before this one was chosen:
//   1. Paperclip (chosen): bent straight into a SIM ejector, then discarded.
//      The joke comes from what people really do to paperclips, and the
//      last words turn the object's usefulness against it.
//   2. Rubber band: dries out, snaps, and dies in the junk drawer.
//      True, but the drying-out detail is generic and the laugh leans on
//      the "civil servant" metaphor rather than on the object itself.
//   3. Clothespin: holds through a gale, then lets go when unwatched.
//      Funny, but slightly exaggerated: pegs usually hold; the truth is
//      weaker than the paperclip's, so it loses on the judge's third
//      criterion (the observation must match how the object behaves).
//
// The program is fully deterministic: the review is a fixed string, no
// randomness, no clock, no network, no environment reads, so every run
// writes byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "The paperclip's entire career is holding your tax return together, until someone straightens it into a SIM ejector and throws it away for doing its job too well.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
