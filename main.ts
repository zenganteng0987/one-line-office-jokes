import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Entry: one single line, 96 characters, no newline inside the joke itself.
const entry =
  "The office printer only jams when the document is urgent, confidential, and due in five minutes.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
process.stdout.write(entry + "\n");
