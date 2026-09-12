> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatch/senddata(toallplayers:with:)](https://developer.apple.com/documentation/gamekit/gkmatch/senddata(toallplayers:with:))

# sendData(toAllPlayers:with:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Transmits data to all players connected to the match.

## Declaration

```swift
func sendData(toAllPlayers data: Data, with mode: GKMatch.SendDataMode) throws
```

## Parameters

- `data`: The bytes to send.
- `mode`: The mechanism used to send the data.

## Mentioned In

- [Exchanging data between players in real-time games](../exchanging-data-between-players-in-real-time-games.md)

<a id="Discussion"></a>

## Discussion

The match queues the data and transmits it when the network becomes available.

## See Also

### Sending data to other players

- [chooseBestHostingPlayer(completionHandler:)](choosebesthostingplayer%28completionhandler_%29.md): Determines the best player in the game to act as the server for a client-server topology.
- [send(\_:to:dataMode:)](send%28__to_datamode_%29.md): Transmits data to one or more players connected to the match.
- [GKMatch.SendDataMode](senddatamode.md): The mechanism used to transmit data to other players.

# sendDataToAllPlayers:withDataMode:error: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Transmits data to all players connected to the match.

## Declaration

```objectivec
- (BOOL) sendDataToAllPlayers:(NSData *) data withDataMode:(GKMatchSendDataMode) mode error:(NSError **) error;
```

## Parameters

- `data`: The bytes to send.
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
- [sendData:toPlayers:dataMode:error:](send%28__to_datamode_%29.md): Transmits data to one or more players connected to the match.
- [GKMatchSendDataMode](senddatamode.md): The mechanism used to transmit data to other players.
