// The Robot Pickup Line Championship — v2.
// A robot pickup line in the machine's own voice. v1 leaned on a thermal
// warning; v2 leans on the machine's own senses instead: facial
// recognition, the robot's way of seeing people, crashing on one face.
// The joke grows out of being a machine — a scanner that has seen a
// million faces and still fails on yours — and the crash is the compliment.
//
// Gate (from the bounty rules): /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, a single line, not only white space. This script
// validates the line against that gate, writes it, and reads it back to
// confirm the write landed.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "My facial recognition scanned a million faces today, and it still crashes every time it sees yours.";

const MAX_CHARS = 200;
const MAX_BYTES = 400;

function checkEntry(line: string): string {
  const cleaned = line.trim();
  // Length gate first: the bounty only accepts 1-200 characters.
  if (cleaned.length < 1 || cleaned.length > MAX_CHARS) {
    throw new Error(`entry is ${cleaned.length} characters, must be 1-${MAX_CHARS}`);
  }
  // One line only, and nothing trimmed away at either end.
  if (cleaned !== line || /\n/.test(cleaned)) {
    throw new Error("entry must be a single line with no surrounding whitespace");
  }
  // Characters are the gate, but the byte count keeps the line a short
  // single-line dialog string in any encoding.
  if (new TextEncoder().encode(cleaned).length > MAX_BYTES) {
    throw new Error("entry is too long in bytes");
  }
  return cleaned;
}

function main(): void {
  const validated = checkEntry(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", validated, "utf8");
  const roundTrip = readFileSync("/output/entry.txt", "utf8");
  if (roundTrip !== validated) throw new Error("read-back mismatch");
  console.log(`wrote /output/entry.txt (${validated.length} characters)`);
  console.log(validated);
}

main();

