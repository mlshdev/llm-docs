> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame/observer/validateaction(_:snapshot:)-22pj7](https://developer.apple.com/documentation/tabletopkit/tabletopgame/observer/validateaction(_:snapshot:)-22pj7)

# validateAction(\_:snapshot:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Called to determine whether an action should be included as part of the table state based only on the action and the table state snapshot it is being applied to. Must be a pure function. Called for all actions multiple times between becoming pending and being confirmed (or rolled back) as necessary to determine an internally consistent speculative visible table state each update, and, finally, to resolve the internally consistent network shared table state. Potentially also called after confirmed if an interaction that added actions is cancelled to determine a new internally consistent shared network table state.

## Declaration

```swift
func validateAction(_ action: some TabletopAction, snapshot: TableSnapshot) -> Bool
```
