> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchdelegate/match(_:shouldreinvitedisconnectedplayer:)](https://developer.apple.com/documentation/gamekit/gkmatchdelegate/match(_:shouldreinvitedisconnectedplayer:))

# match(\_:shouldReinviteDisconnectedPlayer:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Determines whether the local player should reinvite another player who disconnected from a two-player match.

## Declaration

```swift
optional func match(_ match: GKMatch, shouldReinviteDisconnectedPlayer player: GKPlayer) -> Bool
```

## Parameters

- `match`: The match that the player disconnected from.
- `player`: The player who disconnected from the match.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if GameKit should reinvite the player when they disconnect; [false](https://developer.apple.com/documentation/swift/false) if GameKit should end the match when the player disconnects.

## Mentioned In

- [Exchanging data between players in real-time games](../exchanging-data-between-players-in-real-time-games.md)

<a id="Discussion"></a>

## Discussion

If the player successfully reconnects to the match, GameKit sends [match(\_:player:didChange:)](match%28__player_didchange_%29-8ohgr.md) to the match’s delegate.

# match:shouldReinviteDisconnectedPlayer: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Determines whether the local player should reinvite another player who disconnected from a two-player match.

## Declaration

```objectivec
- (BOOL) match:(GKMatch *) match shouldReinviteDisconnectedPlayer:(GKPlayer *) player;
```

## Parameters

- `match`: The match that the player disconnected from.
- `player`: The player who disconnected from the match.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if GameKit should reinvite the player when they disconnect; [false](https://developer.apple.com/documentation/swift/false) if GameKit should end the match when the player disconnects.

## Mentioned In

- [Exchanging data between players in real-time games](../exchanging-data-between-players-in-real-time-games.md)

<a id="Discussion"></a>

## Discussion

If the player successfully reconnects to the match, GameKit sends [match:player:didChangeConnectionState:](match%28__player_didchange_%29-8ohgr.md) to the match’s delegate.
