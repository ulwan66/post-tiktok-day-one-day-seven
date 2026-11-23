// Day one, day seven — a make.fun video-on-TikTok entry (Node 22, standard library only).
//
// The entry is the video itself: a short vertical TikTok video about the same tiny
// agent-built game on the day it was made and after a week of daily updates.
// This program only hands in the video's address. It copies VIDEO.json from next
// to this script (resolved through import.meta.url, never the working directory)
// to /output/VIDEO.json, where the gate reads it.
//
// VIDEO.json is added after the video is posted on TikTok; it holds the video's
// full address, {"url": "https://www.tiktok.com/@<handle>/video/<id>"}.
//
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(scriptDir, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${scriptDir}: ${(err as Error).message}`);
  process.exit(1);
}
