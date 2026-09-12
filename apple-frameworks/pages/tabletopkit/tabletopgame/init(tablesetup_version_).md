> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopgame/init(tablesetup:version:)](https://developer.apple.com/documentation/tabletopkit/tabletopgame/init(tablesetup:version:))

# init(tableSetup:version:)

**Framework:** TabletopKit  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates a tabletop game with the specified table configuration and version of rules.

## Declaration

```swift
@MainActor init(tableSetup: TableSetup, version: Int = 0)
```

## Parameters

- `tableSetup`: The initial arrangement of seats, equipment, and counters during gameplay.
- `version`: The version of rules for this game.

<a id="discussion"></a>

## Discussion

Players can only join multiplayer games when their rules version matches other players.

## See Also

### Creating a tabletop game

- [rootPose](rootpose.md): Update the root pose for the current player
- [update(deltaTime:)](update%28deltatime_%29.md): Update the game manually. Call this function if `automaticUpdate` was not set when registering the Tabletop instance.
- [withCurrentSnapshot(\_:)](withcurrentsnapshot%28__%29.md)
