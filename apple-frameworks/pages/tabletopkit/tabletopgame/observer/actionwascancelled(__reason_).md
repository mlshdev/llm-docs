> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame/observer/actionwascancelled(_:reason:)](https://developer.apple.com/documentation/tabletopkit/tabletopgame/observer/actionwascancelled(_:reason:))

# actionWasCancelled(\_:reason:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Called once for each action which was later cancelled from the shared network table state after being confirmed due to the action of either a `jumpToBookmark` operation or due to an interaction that added it or an action it depended on being cancelled. `actionWasCancelled` callbacks are also reliably ordered with `actionWasConfirmed` and `actionWasRolledBack` callbacks.

## Declaration

```swift
func actionWasCancelled(_ action: some TabletopAction, reason: TabletopGame.ActionCancellationReason)
```

## Default Implementations

### TabletopGame.Observer Implementations

- [actionWasCancelled(\_:reason:)](actionwascancelled%28__reason_%29-15sdh.md): Called once for each action which was later cancelled from the shared network table state after being confirmed due to the action of either a `jumpToBookmark` operation or due to an interaction that added it or an action it depended on being cancelled. `actionWasCancelled` callbacks are also reliably ordered with `actionWasConfirmed` and `actionWasRolledBack` callbacks.
