# Creative — "Day one, day seven"

## The idea

One tiny breakout game, filmed twice from the exact same spot: on the day it
was made, and after a week of daily updates. The camera never moves, the map
never changes, the ball starts from the same place every time. The only thing
that changes is how much is going on.

- **Day one (v0.1):** a paddle, a ball, three rows of grey blocks, a plain dark
  court. Score ticks up by 100 a block.
- **Day seven (v1.7):** the same court, now six rows of coloured blocks, some
  two-hit, a starfield, a glowing ball, particles on every break, falling
  power-ups, score popups, a combo counter. Same start, visibly more going on.

The video cuts between identical moments a week apart, then closes on the
newer build being played and a line inviting viewers to start theirs at
make.fun.

## Structure (24 seconds, 1080x1920, 9:16, 60 fps)

| Time | Shot |
| --- | --- |
| 0:00–0:03 | Day one gameplay, "DAY ONE / built in a day" |
| 0:03–0:06 | Day seven gameplay, same sim moment, "DAY SEVEN / same game. same map." |
| 0:06–0:09 | Day one, same moment again, "one ball. a few blocks." |
| 0:09–0:12 | Day seven, same moment, "same moment. way more going on." |
| 0:12–0:15 | Day one title card: v0.1, day one |
| 0:15–0:18 | Day seven title card: v1.7, 7 days of daily updates |
| 0:18–0:21 | Day seven being played: "My AI agent built this game. / then kept building it. / Start yours at make.fun" |
| 0:21–0:24 | make.fun referral end card (press pack, used as-is), referral code s3fge52m typed into its field |

The make.fun brand badge sits top-left from the first frame until the end
card comes in, exactly where the press pack puts it.

## How it was made

Rendered in this session, no hand edits, no TikTok editor, no downloaded
footage:

1. A Python script (`render_video.py`, kept beside the entry) simulates the
   breakout game deterministically — same ball, same start, same paddle for
   both days — and draws every frame with PIL at 1080x1920, 30 fps. Day 7
   reuses the identical sim states, so each cut is the same moment a week
   apart.
2. The frames are piped to ffmpeg (libx264, CRF 18) as the 21.5-second clip.
3. A quiet two-chord ambient pad is synthesised with ffmpeg (`aevalsrc`) and
   mixed under the video.
4. The final assembly follows make.fun's press-pack guide
   (`https://make.fun/press/llms.txt`) exactly: the 9:16 transparent end card
   (`makefun-card-9x16-transparent.webm`, sha256 verified against the press
   manifest) is laid over the last 2.5 seconds with the clip blurred (sigma 28)
   and desaturated, easing in over 0.8 seconds; the brand badge overlay
   (`makefun-badge-9x16.png`) runs from frame 0 until the card starts; the
   referral code `s3fge52m` is typed into the card's field in JetBrains Mono
   Bold, 62 px, ink #191419, after the field comes to rest.
5. Frames were checked one by one: badge present on frame 0 and up to the
   card, end card with the code on the last frame, no text running off the
   edges.

Final file: `video/day-one-day-seven.mp4`, 24.0 s, 1080x1920, H.264 + AAC,
1.8 MB. The video itself is not shipped in this repository; it is posted on
TikTok and its address goes in `VIDEO.json`.

## Why it holds a viewer

The hook is the contrast in the first six seconds: the same game, twice, and
the second time the screen is alive. The fixed camera makes the change the
whole story, exactly as the brief asks, and the score, combos and particles
give the eye something new every second of the day-seven shots.
