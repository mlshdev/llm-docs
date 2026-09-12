> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivitydefinition/playstyle](https://developer.apple.com/documentation/gamekit/gkgameactivitydefinition/playstyle)

# playStyle (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The play style of the game activity.

## Declaration

```swift
var playStyle: GKGameActivityPlayStyle { get }
```

## See Also

### Getting the activity capabilities

- [supportsPartyCode](supportspartycode.md): Whether the activity can be joined by others via a party code.
- [supportsUnlimitedPlayers](supportsunlimitedplayers.md): True if the activity supports an unlimited number of players. False if maxPlayers is set to a defined limit or if no player range is provided.
- [playerRange](playerrange.md): The range of players supported by this type of game activity.
- [GKGameActivityPlayStyle](../gkgameactivityplaystyle.md): Play Style of the game activity. It can be either Asynchronous or Synchronous.

# playStyle (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The play style of the game activity.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) GKGameActivityPlayStyle playStyle;
```

## See Also

### Getting the activity capabilities

- [supportsPartyCode](supportspartycode.md): Whether the activity can be joined by others via a party code.
- [supportsUnlimitedPlayers](supportsunlimitedplayers.md): True if the activity supports an unlimited number of players. False if maxPlayers is set to a defined limit or if no player range is provided.
- [GKGameActivityPlayStyle](../gkgameactivityplaystyle.md): Play Style of the game activity. It can be either Asynchronous or Synchronous.
