> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame/observer/statedidresettobookmark(_:)](https://developer.apple.com/documentation/tabletopkit/tabletopgame/observer/statedidresettobookmark(_:))

# stateDidResetToBookmark(\_:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Called whenever a `jumpToBookmark` is applied to the shared network table state. `stateDidResetToBookmark` callbacks are also reliably ordered with `actionWasConfirmed` and `actionWasRolledBack` callbacks, and are also network delayed behind any changes to the speculative visible table state.

## Declaration

```swift
func stateDidResetToBookmark(_ bookmarkID: StateBookmarkIdentifier)
```

## Default Implementations

### TabletopGame.Observer Implementations

- [stateDidResetToBookmark(\_:)](statedidresettobookmark%28__%29-2ahod.md): Called whenever a `jumpToBookmark` is applied to the shared network table state. `stateDidResetToBookmark` callbacks are also reliably ordered with `actionWasConfirmed` and `actionWasRolledBack` callbacks, and are also network delayed behind any changes to the speculative visible table state.

## See Also

### Handling seat actions

- [playerChangedSeats(\_:oldSeat:newSeat:snapshot:)](playerchangedseats%28__oldseat_newseat_snapshot_%29.md): Called whenever the Seat for any player has changed in the shared network table state. `playerChandedSeats` callbacks are also reliably ordered with `actionWasConfirmed` and `actionWasRolledBack` callbacks, and are also network delayed behind any changes to the speculative visible table state.
