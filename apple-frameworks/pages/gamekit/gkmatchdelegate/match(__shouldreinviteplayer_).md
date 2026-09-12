> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchdelegate/match(_:shouldreinviteplayer:)](https://developer.apple.com/documentation/gamekit/gkmatchdelegate/match(_:shouldreinviteplayer:))

# match(\_:shouldReinvitePlayer:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 8.0) · iPadOS 5.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Handles when a player disconnects from a two-player match.

## Declaration

```swift
optional func match(_ match: GKMatch, shouldReinvitePlayer playerID: String) -> Bool
```

## Parameters

- `match`: The match that lost the player.
- `playerID`: The identifier for the player whose connection failed.

<a id="return-value"></a>

## Return Value

Your game should return [true](https://developer.apple.com/documentation/swift/true) if it wants GameKit to attempt to reconnect the player, [false](https://developer.apple.com/documentation/swift/false) if it wants to terminate the match.

<a id="Discussion"></a>

## Discussion

Occasionally, players may get disconnected from a match. If your game implements this method in the match delegate and the match only contains two players, GameKit calls this method after a player gets disconnected. If your delegate allows GameKit to reconnect to the other player, it reconnects the other player. Your [match(\_:player:didChange:)](match%28__player_didchange_%29-4eo7p.md) method is called when the other player is reconnected.

## See Also

### Deprecated Methods and Properties

- [match(\_:player:didChange:)](match%28__player_didchange_%29-4eo7p.md): Deprecated. Handles when a player connects or disconnects from a match.
- [match(\_:didReceive:fromPlayer:)](match%28__didreceive_fromplayer_%29.md): Deprecated. Handles when a player receives data in a match.

# match:shouldReinvitePlayer: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 8.0) · iPadOS 5.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Handles when a player disconnects from a two-player match.

## Declaration

```objectivec
- (BOOL) match:(GKMatch *) match shouldReinvitePlayer:(NSString *) playerID;
```

## Parameters

- `match`: The match that lost the player.
- `playerID`: The identifier for the player whose connection failed.

<a id="return-value"></a>

## Return Value

Your game should return [true](https://developer.apple.com/documentation/swift/true) if it wants GameKit to attempt to reconnect the player, [false](https://developer.apple.com/documentation/swift/false) if it wants to terminate the match.

<a id="Discussion"></a>

## Discussion

Occasionally, players may get disconnected from a match. If your game implements this method in the match delegate and the match only contains two players, GameKit calls this method after a player gets disconnected. If your delegate allows GameKit to reconnect to the other player, it reconnects the other player. Your [match:player:didChangeState:](match%28__player_didchange_%29-4eo7p.md) method is called when the other player is reconnected.

## See Also

### Deprecated Methods and Properties

- [match:player:didChangeState:](match%28__player_didchange_%29-4eo7p.md): Deprecated. Handles when a player connects or disconnects from a match.
- [match:didReceiveData:fromPlayer:](match%28__didreceive_fromplayer_%29.md): Deprecated. Handles when a player receives data in a match.
