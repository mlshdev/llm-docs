> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivitydefinition/playerrange](https://developer.apple.com/documentation/gamekit/gkgameactivitydefinition/playerrange)

# playerRange

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The range of players supported by this type of game activity.

## Declaration

```swift
final var playerRange: (any RangeExpression)? { get }
```

<a id="discussion"></a>

## Discussion

This can be nil if neither of minPlayers or maxPlayers are set by the developer, a closed range if both are set, or an open range suggesting this game activity supports an unlimited number of players.

## See Also

### Getting the activity capabilities

- [supportsPartyCode](supportspartycode.md): Whether the activity can be joined by others via a party code.
- [supportsUnlimitedPlayers](supportsunlimitedplayers.md): True if the activity supports an unlimited number of players. False if maxPlayers is set to a defined limit or if no player range is provided.
- [playStyle](playstyle.md): The play style of the game activity.
- [GKGameActivityPlayStyle](../gkgameactivityplaystyle.md): Play Style of the game activity. It can be either Asynchronous or Synchronous.
