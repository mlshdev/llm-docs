> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgameactivitydefinition/supportspartycode](https://developer.apple.com/documentation/gamekit/gkgameactivitydefinition/supportspartycode)

# supportsPartyCode (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Whether the activity can be joined by others via a party code.

## Declaration

```swift
var supportsPartyCode: Bool { get }
```

<a id="discussion"></a>

## Discussion

> **See Also**

> `-[GKGameActivityListener player:wantsToPlayGameActivity:completionHandler:]` where you can receive and handle game activities that players want to play in a party with friends.

## See Also

### Getting the activity capabilities

- [supportsUnlimitedPlayers](supportsunlimitedplayers.md): True if the activity supports an unlimited number of players. False if maxPlayers is set to a defined limit or if no player range is provided.
- [playerRange](playerrange.md): The range of players supported by this type of game activity.
- [playStyle](playstyle.md): The play style of the game activity.
- [GKGameActivityPlayStyle](../gkgameactivityplaystyle.md): Play Style of the game activity. It can be either Asynchronous or Synchronous.

# supportsPartyCode (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Whether the activity can be joined by others via a party code.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL supportsPartyCode;
```

<a id="discussion"></a>

## Discussion

> **See Also**

> `-[GKGameActivityListener player:wantsToPlayGameActivity:completionHandler:]` where you can receive and handle game activities that players want to play in a party with friends.

## See Also

### Getting the activity capabilities

- [supportsUnlimitedPlayers](supportsunlimitedplayers.md): True if the activity supports an unlimited number of players. False if maxPlayers is set to a defined limit or if no player range is provided.
- [playStyle](playstyle.md): The play style of the game activity.
- [GKGameActivityPlayStyle](../gkgameactivityplaystyle.md): Play Style of the game activity. It can be either Asynchronous or Synchronous.
