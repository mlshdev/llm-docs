> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchdelegate/match(_:didreceive:forrecipient:fromremoteplayer:)](https://developer.apple.com/documentation/gamekit/gkmatchdelegate/match(_:didreceive:forrecipient:fromremoteplayer:))

# match(\_:didReceive:forRecipient:fromRemotePlayer:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Processes the data sent from one player to another.

## Declaration

```swift
optional func match(_ match: GKMatch, didReceive data: Data, forRecipient recipient: GKPlayer, fromRemotePlayer player: GKPlayer)
```

## Parameters

- `match`: The match associated with the data.
- `data`: The data sent by the player.
- `recipient`: The player who receives the data.
- `player`: The player who sends the data.

<a id="Discussion"></a>

## Discussion

Your game defines its own format for data packets it transmits and receives over the network.

> **Important**

>  You need to treat data you receive from other players as *untrusted* data. Be sure to validate the data you receive from the match and write your code carefully to avoid security vulnerabilities.

## See Also

### Receiving Data from Other Players

- [match(\_:didReceive:fromRemotePlayer:)](match%28__didreceive_fromremoteplayer_%29.md): Processes the data sent from another player to the local player.

# match:didReceiveData:forRecipient:fromRemotePlayer: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Processes the data sent from one player to another.

## Declaration

```objectivec
- (void) match:(GKMatch *) match didReceiveData:(NSData *) data forRecipient:(GKPlayer *) recipient fromRemotePlayer:(GKPlayer *) player;
```

## Parameters

- `match`: The match associated with the data.
- `data`: The data sent by the player.
- `recipient`: The player who receives the data.
- `player`: The player who sends the data.

<a id="Discussion"></a>

## Discussion

Your game defines its own format for data packets it transmits and receives over the network.

> **Important**

>  You need to treat data you receive from other players as *untrusted* data. Be sure to validate the data you receive from the match and write your code carefully to avoid security vulnerabilities.

## See Also

### Receiving Data from Other Players

- [match:didReceiveData:fromRemotePlayer:](match%28__didreceive_fromremoteplayer_%29.md): Processes the data sent from another player to the local player.
