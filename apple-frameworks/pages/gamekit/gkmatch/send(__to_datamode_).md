> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatch/send(_:to:datamode:)](https://developer.apple.com/documentation/gamekit/gkmatch/send(_:to:datamode:))

# send(\_:to:dataMode:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Transmits data to one or more players connected to the match.

## Declaration

```swift
func send(_ data: Data, to players: [GKPlayer], dataMode mode: GKMatch.SendDataMode) throws
```

## Parameters

- `data`: The bytes to send.
- `players`: The players who receive the data.
- `mode`: The mechanism used to send the data.

## Mentioned In

- [Exchanging data between players in real-time games](../exchanging-data-between-players-in-real-time-games.md)

<a id="Discussion"></a>

## Discussion

The match queues the data and transmits it when the network becomes available.

## See Also

### Sending data to other players

- [chooseBestHostingPlayer(completionHandler:)](choosebesthostingplayer%28completionhandler_%29.md): Determines the best player in the game to act as the server for a client-server topology.
- [sendData(toAllPlayers:with:)](senddata%28toallplayers_with_%29.md): Transmits data to all players connected to the match.
- [GKMatch.SendDataMode](senddatamode.md): The mechanism used to transmit data to other players.

# sendData:toPlayers:dataMode:error: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Transmits data to one or more players connected to the match.

## Declaration

```objectivec
- (BOOL) sendData:(NSData *) data toPlayers:(NSArray<GKPlayer *> *) players dataMode:(GKMatchSendDataMode) mode error:(NSError **) error;
```

## Parameters

- `data`: The bytes to send.
- `players`: The players who receive the data.
- `mode`: The mechanism used to send the data.
- `error`: Describes an error if it occurs, or `nil` if the operation completes.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if GameKit successfully queues the data for transmission; [false](https://developer.apple.com/documentation/swift/false) if GameKit isn’t able to queue the data.

## Mentioned In

- [Exchanging data between players in real-time games](../exchanging-data-between-players-in-real-time-games.md)

<a id="Discussion"></a>

## Discussion

The match queues the data and transmits it when the network becomes available.

## See Also

### Sending data to other players

- [chooseBestHostingPlayerWithCompletionHandler:](choosebesthostingplayer%28completionhandler_%29.md): Determines the best player in the game to act as the server for a client-server topology.
- [sendDataToAllPlayers:withDataMode:error:](senddata%28toallplayers_with_%29.md): Transmits data to all players connected to the match.
- [GKMatchSendDataMode](senddatamode.md): The mechanism used to transmit data to other players.
