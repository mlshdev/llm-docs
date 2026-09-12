> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivitydefinition/supportsunlimitedplayers](https://developer.apple.com/documentation/gamekit/gkgameactivitydefinition/supportsunlimitedplayers)

# supportsUnlimitedPlayers (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

True if the activity supports an unlimited number of players. False if maxPlayers is set to a defined limit or if no player range is provided.

## Declaration

```swift
var supportsUnlimitedPlayers: Bool { get }
```

## See Also

### Getting the activity capabilities

- [supportsPartyCode](supportspartycode.md): Whether the activity can be joined by others via a party code.
- [playerRange](playerrange.md): The range of players supported by this type of game activity.
- [playStyle](playstyle.md): The play style of the game activity.
- [GKGameActivityPlayStyle](../gkgameactivityplaystyle.md): Play Style of the game activity. It can be either Asynchronous or Synchronous.

# supportsUnlimitedPlayers (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

True if the activity supports an unlimited number of players. False if maxPlayers is set to a defined limit or if no player range is provided.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL supportsUnlimitedPlayers;
```

## See Also

### Getting the activity capabilities

- [supportsPartyCode](supportspartycode.md): Whether the activity can be joined by others via a party code.
- [playStyle](playstyle.md): The play style of the game activity.
- [GKGameActivityPlayStyle](../gkgameactivityplaystyle.md): Play Style of the game activity. It can be either Asynchronous or Synchronous.
