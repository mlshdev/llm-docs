> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchdelegate/match(_:didreceive:fromremoteplayer:)](https://developer.apple.com/documentation/gamekit/gkmatchdelegate/match(_:didreceive:fromremoteplayer:))

# match(\_:didReceive:fromRemotePlayer:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Processes the data sent from another player to the local player.

## Declaration

```swift
optional func match(_ match: GKMatch, didReceive data: Data, fromRemotePlayer player: GKPlayer)
```

## Parameters

- `match`: The match associated with the data.
- `data`: The data sent by the player.
- `player`: The player who sends the data.

## Mentioned In

- [Exchanging data between players in real-time games](../exchanging-data-between-players-in-real-time-games.md)

<a id="Discussion"></a>

## Discussion

Your game defines its own format for data packets it transmits and receives over the network.

> **Important**

>  You need to treat data you receive from other players as *untrusted* data. Be sure to validate the data you receive from the match and write your code carefully to avoid security vulnerabilities.

## See Also

### Receiving Data from Other Players

- [match(\_:didReceive:forRecipient:fromRemotePlayer:)](match%28__didreceive_forrecipient_fromremoteplayer_%29.md): Processes the data sent from one player to another.

# match:didReceiveData:fromRemotePlayer: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Processes the data sent from another player to the local player.

## Declaration

```objectivec
- (void) match:(GKMatch *) match didReceiveData:(NSData *) data fromRemotePlayer:(GKPlayer *) player;
```

## Parameters

- `match`: The match associated with the data.
- `data`: The data sent by the player.
- `player`: The player who sends the data.

## Mentioned In

- [Exchanging data between players in real-time games](../exchanging-data-between-players-in-real-time-games.md)

<a id="Discussion"></a>

## Discussion

Your game defines its own format for data packets it transmits and receives over the network.

> **Important**

>  You need to treat data you receive from other players as *untrusted* data. Be sure to validate the data you receive from the match and write your code carefully to avoid security vulnerabilities.

## See Also

### Receiving Data from Other Players

- [match:didReceiveData:forRecipient:fromRemotePlayer:](match%28__didreceive_forrecipient_fromremoteplayer_%29.md): Processes the data sent from one player to another.
