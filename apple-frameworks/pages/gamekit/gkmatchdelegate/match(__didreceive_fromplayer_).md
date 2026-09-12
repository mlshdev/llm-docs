> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchdelegate/match(_:didreceive:fromplayer:)](https://developer.apple.com/documentation/gamekit/gkmatchdelegate/match(_:didreceive:fromplayer:))

# match(\_:didReceive:fromPlayer:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Handles when a player receives data in a match.

## Declaration

```swift
optional func match(_ match: GKMatch, didReceive data: Data, fromPlayer playerID: String)
```

## Parameters

- `match`: The match that received the data.
- `data`: The bytes sent by the player.
- `playerID`: The string identifier for the player that sent the data.

<a id="Discussion"></a>

## Discussion

You define your own format for data packets that you transmit and receive over the network.

> **Important**

>  You need to treat data you receive from other players as *untrusted* data. Be sure to validate the data you receive from the match and write your code carefully to avoid security vulnerabilities.

## See Also

### Deprecated Methods and Properties

- [match(\_:player:didChange:)](match%28__player_didchange_%29-4eo7p.md): Deprecated. Handles when a player connects or disconnects from a match.
- [match(\_:shouldReinvitePlayer:)](match%28__shouldreinviteplayer_%29.md): Deprecated. Handles when a player disconnects from a two-player match.

# match:didReceiveData:fromPlayer: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ (deprecated in 8.0) · iPadOS 4.1+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0)

Handles when a player receives data in a match.

## Declaration

```objectivec
- (void) match:(GKMatch *) match didReceiveData:(NSData *) data fromPlayer:(NSString *) playerID;
```

## Parameters

- `match`: The match that received the data.
- `data`: The bytes sent by the player.
- `playerID`: The string identifier for the player that sent the data.

<a id="Discussion"></a>

## Discussion

You define your own format for data packets that you transmit and receive over the network.

> **Important**

>  You need to treat data you receive from other players as *untrusted* data. Be sure to validate the data you receive from the match and write your code carefully to avoid security vulnerabilities.

## See Also

### Deprecated Methods and Properties

- [match:player:didChangeState:](match%28__player_didchange_%29-4eo7p.md): Deprecated. Handles when a player connects or disconnects from a match.
- [match:shouldReinvitePlayer:](match%28__shouldreinviteplayer_%29.md): Deprecated. Handles when a player disconnects from a two-player match.
