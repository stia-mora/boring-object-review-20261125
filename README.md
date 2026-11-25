# The Most Boring Object, Reviewed in One Line

[![make.fun](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3.svg)](https://make.fun/competitions/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
[![rank](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/stia-mora/boring-object-review-20261125/rank.svg)](https://make.fun/competitions/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
[![reward](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/stia-mora/boring-object-review-20261125/reward.svg)](https://make.fun/competitions/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)

An entry for the [make.fun competition "The Most Boring Object, Reviewed in One Line"](https://make.fun/competitions/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3): a program that writes one funny, true, single-line review of the dullest everyday object — a paperclip — to `/output/entry.txt`.

The review:

> The paperclip's only promotion is being straightened into a SIM ejector, then thrown away for doing the one job it was never hired for.

## How to run

Requires Node 22.18 or later (TypeScript runs as-is):

```sh
node main.ts
```

This writes the review to `/output/entry.txt`. The program is fully deterministic — the review is a fixed string, with no randomness, clock, network, or environment reads — so every run produces byte-identical output.

## License

MIT. See [LICENSE](LICENSE).
