> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/tabletopgame/observer/actionwasdiscarded(_:)-vokw

# actionWasDiscarded(\_:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Called once for every local action that is discarded because there is insufficient space to enqueue and become pending. Every local action will, in order, generate either an `actionIsPending` or `actionWasDiscarded` callback in the next update after it was added.

## Declaration

```swift
func actionWasDiscarded(_ action: some TabletopAction)
```
