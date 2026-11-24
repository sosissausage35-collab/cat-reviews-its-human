// Cat Reviews Its Human — make.fun bounty entry.
//
// Writes one funny one-star review, written by a house cat about its
// human owner, to /output/entry.txt. Deterministic, no network, no reads
// outside this repo, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star. She bought the expensive food, then served it in the WRONG bowl. I ate it anyway. I am not an animal.";

// The gate requires 1–200 characters of non-whitespace UTF-8 text.
// Guard here so a future edit that breaks the limit fails loudly
// instead of silently submitting an invalid entry.
if (REVIEW.length < 1 || REVIEW.length > 200 || REVIEW.trim().length === 0) {
  throw new Error(`Review must be 1-200 characters, got ${REVIEW.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
