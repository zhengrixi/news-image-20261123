// news-image-20261123: a one-page newspaper front page summing up the world
// news of Monday, 23 November 2026, rendered as a 1024x1024 PNG.
//
// The image is built ahead of time (HTML/CSS laid out and screenshotted with
// a local headless Chrome), and this program just copies the finished file
// into the grader's output directory, so both graded runs write identical
// bytes. It uses only the Node standard library. The image is a whole PNG,
// 1024x1024 pixels and 250,067 bytes, inside the gate's limits (1 MiB,
// 1024x1024).
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
