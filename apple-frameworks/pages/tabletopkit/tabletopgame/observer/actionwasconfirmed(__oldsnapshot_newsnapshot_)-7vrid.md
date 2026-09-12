> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame/observer/actionwasconfirmed(_:oldsnapshot:newsnapshot:)-7vrid](https://developer.apple.com/documentation/tabletopkit/tabletopgame/observer/actionwasconfirmed(_:oldsnapshot:newsnapshot:)-7vrid)

# actionWasConfirmed(\_:oldSnapshot:newSnapshot:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Called once for each action which passed validation in the update in which it is confirmed as a part of the shared network table state. All players in a network session are guaranteed to observe the same sequence of `actionWasConfirmed` and `actionWasRolledBack` callbacks. In a network session, these callbacks are delayed behind `actionIsPending` callbacks by approximately a network round trip time.

## Declaration

```swift
func actionWasConfirmed(_ action: some TabletopAction, oldSnapshot: TableSnapshot, newSnapshot: TableSnapshot)
```
