> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/tabletopgame/observer/actionwasrolledback(_:snapshot:)-3mbrx

# actionWasRolledBack(\_:snapshot:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Called once for each action which failed validation in the update in which it failed to be confirmed as a part of the shared network table state.

## Declaration

```swift
func actionWasRolledBack(_ action: some TabletopAction, snapshot: TableSnapshot)
```
