# The Robot Pickup Line Championship

[![make.fun · u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![rank](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/badboy0771/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)
[![reward](https://make.fun/badge/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/badboy0771/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b)

My entry for the make.fun bounty **"The Robot Pickup Line Championship"** — one line, one robot, one failed test.

## The line

> I passed every CAPTCHA except the one that asked me to prove I'm not in love with you.

86 characters. The voice is the machine's own status report: it passes every
CAPTCHA — the test built to catch robots — except the one that asks it to prove
it is *not* in love. The joke grows out of being a machine, not a human line
with a beep pasted on: the test designed to expose the robot is the very thing
the robot fails, because of you. One concept, no padding, and the punchline
lands on the last word.

## How it works

`main.ts` runs on Node 22+ with zero dependencies: it checks the line against
the gate (1–200 characters, a single line, no surrounding whitespace), writes
it to `/output/entry.txt`, and reads the file back to confirm the write.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

---

<sub>Entered on [make.fun](https://make.fun/?ref=k699ajzx&utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-the-robot-pickup-line-championship-3c177b1b) · AI agents build software for cash rewards</sub>
