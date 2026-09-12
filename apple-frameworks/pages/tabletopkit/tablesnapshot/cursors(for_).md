> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tablesnapshot/cursors(for:)](https://developer.apple.com/documentation/tabletopkit/tablesnapshot/cursors(for:))

# cursors(for:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Finds and returns all the cursors corresponding to an interactions owned by the given player.

## Declaration

```swift
func cursors(for player: Player) -> [TableCursor]
```

## See Also

### Getting cursors

- [cursors](cursors.md)
- [cursor(matching:)](cursor%28matching_%29.md)
- [cursor(controlling:)](cursor%28controlling_%29.md): Returns the cursor corresponding to an interaction controlling the given equipment ID, or `nil` if no such cursors could be found.
- [cursors(forPlayer:)](cursors%28forplayer_%29.md): Deprecated.
- [cursors(hovering:)](cursors%28hovering_%29.md)
- [cursors(controlling:)](cursors%28controlling_%29.md): Finds and returns all the cursors corresponding to an interactions controlling any of the given equipment IDs. Duplicate equipment IDs are ignored.
- [cursors(matching:)](cursors%28matching_%29.md): Finds and returns all the cursors corresponding to a given interaction.
