> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchdelegate/match(_:player:didchange:)-8ohgr](https://developer.apple.com/documentation/gamekit/gkmatchdelegate/match(_:player:didchange:)-8ohgr)

# match(\_:player:didChange:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Handles when players connect or disconnect from a match.

## Declaration

```swift
optional func match(_ match: GKMatch, player: GKPlayer, didChange state: GKPlayerConnectionState)
```

## Parameters

- `match`: The match joined by the player.
- `player`: The player whose state changed.
- `state`: The state of the player in the match.

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)
- [Exchanging data between players in real-time games](../exchanging-data-between-players-in-real-time-games.md)

<a id="Discussion"></a>

## Discussion

If the match’s [expectedPlayerCount](../gkmatch/expectedplayercount.md) property is `0` when GameKit invokes this method, you can start the game. If two or more players join the match, you can begin data and voice communication.

## See Also

### Receiving State Notifications About Other Players

- [GKPlayerConnectionState](../gkplayerconnectionstate.md): The possible states of a connection to a match.

# match:player:didChangeConnectionState: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Handles when players connect or disconnect from a match.

## Declaration

```objectivec
- (void) match:(GKMatch *) match player:(GKPlayer *) player didChangeConnectionState:(GKPlayerConnectionState) state;
```

## Parameters

- `match`: The match joined by the player.
- `player`: The player whose state changed.
- `state`: The state of the player in the match.

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)
- [Exchanging data between players in real-time games](../exchanging-data-between-players-in-real-time-games.md)

<a id="Discussion"></a>

## Discussion

If the match’s [expectedPlayerCount](../gkmatch/expectedplayercount.md) property is `0` when GameKit invokes this method, you can start the game. If two or more players join the match, you can begin data and voice communication.

## See Also

### Receiving State Notifications About Other Players

- [GKPlayerConnectionState](../gkplayerconnectionstate.md): The possible states of a connection to a match.
