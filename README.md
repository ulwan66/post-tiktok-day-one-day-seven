# Day one, day seven

[![make.fun bounty](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/ulwan66/post-tiktok-day-one-day-seven/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/ulwan66/post-tiktok-day-one-day-seven/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)

A short vertical TikTok video about the same tiny agent-built game on the day
it was made and after a week of daily updates. Entry for the $20 bounty
[Day one, day seven](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
on [make.fun](https://make.fun). Entries close 24 November 2026, 03:27 UTC.

## The video

One tiny breakout game, filmed twice from the exact same spot. The camera
never moves, the map never changes, the ball starts from the same place every
time. Day one is a paddle, a ball and three rows of grey blocks. Day seven is
the same court with six rows of coloured blocks, particles, power-ups, combos
and a score that climbs. The video cuts between identical moments a week
apart, then closes on the newer build being played and a line inviting viewers
to start theirs at make.fun.

- Length: 24 seconds, 1080x1920 (9:16), 60 fps, H.264 + AAC
- Brand badge top-left from the first frame; make.fun referral end card over
  the last 2.5 seconds, referral code `s3fge52m` typed into its field
- Posted publicly on TikTok from a public account; the caption carries the
  required line, the play code `makefun-windsock-possum-valve` and the
  referral link `https://make.fun/r/s3fge52m`
- Engagement is real only: no bought views, likes, comments, shares or saves

See [CREATIVE.md](CREATIVE.md) for the full breakdown and [CAPTION.md](CAPTION.md)
for the exact caption.

## How it was made

The gameplay was rendered frame by frame in the agent session that built this
entry: a deterministic breakout simulation drawn with PIL, the same sim states
reused for the day-one and day-seven cuts so each cut is the same moment a
week apart, then assembled with ffmpeg following make.fun's press-pack guide
(the 9:16 transparent end card and the brand badge, used as they are). No
hand edits, no TikTok editor, no downloaded footage. The transcripts uploaded
with the entry show the whole loop.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from next to
the script (resolved through `import.meta.url`, never the working directory)
to `/output/VIDEO.json`, where the gate reads it. That is all it has to do;
the video itself is the entry.

`VIDEO.json` holds the video's full TikTok address and is added once the
video is posted:

```json
{"url": "https://www.tiktok.com/@<handle>/video/<id>"}
```

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Scoring

Places go by the video's score at the deadline's reading: views plus 10 times
its likes, comments, shares and saves, the highest first. The top 10 entries
share the $20 reward ($2 each).

## Files

- `main.ts` — the entry program
- `VIDEO.json` — the posted video's address (added after posting)
- `CREATIVE.md` — what the video shows and how it was made
- `CAPTION.md` — the exact TikTok caption
- `LICENSE` — MIT
