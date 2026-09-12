> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatch/choosebesthostingplayer(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkmatch/choosebesthostingplayer(completionhandler:))

# chooseBestHostingPlayer(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Determines the best player in the game to act as the server for a client-server topology.

## Declaration

```swift
func chooseBestHostingPlayer(completionHandler: @escaping @Sendable (GKPlayer?) -> Void)
```

```swift
func chooseBestHostingPlayer() async -> GKPlayer?
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameter:

  - **`player`**: The player with the best estimated network performance, or `nil` if GameKit couldn’t determine the best host.

## Mentioned In

- [Exchanging data between players in real-time games](../exchanging-data-between-players-in-real-time-games.md)

<a id="Discussion"></a>

## Discussion

This method estimates which player has the best network connection using a variety of metrics such as bandwidth, latency, and network reliability. Use this method to choose the player that acts as the server when you implement a client-server topology on top of the match’s peer-to-peer connection.

## See Also

### Sending data to other players

- [send(\_:to:dataMode:)](send%28__to_datamode_%29.md): Transmits data to one or more players connected to the match.
- [sendData(toAllPlayers:with:)](senddata%28toallplayers_with_%29.md): Transmits data to all players connected to the match.
- [GKMatch.SendDataMode](senddatamode.md): The mechanism used to transmit data to other players.

# chooseBestHostingPlayerWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Determines the best player in the game to act as the server for a client-server topology.

## Declaration

```objectivec
- (void) chooseBestHostingPlayerWithCompletionHandler:(void (^)(GKPlayer *player)) completionHandler;
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameter:

  - **`player`**: The player with the best estimated network performance, or `nil` if GameKit couldn’t determine the best host.

## Mentioned In

- [Exchanging data between players in real-time games](../exchanging-data-between-players-in-real-time-games.md)

<a id="Discussion"></a>

## Discussion

This method estimates which player has the best network connection using a variety of metrics such as bandwidth, latency, and network reliability. Use this method to choose the player that acts as the server when you implement a client-server topology on top of the match’s peer-to-peer connection.

## See Also

### Sending data to other players

- [sendData:toPlayers:dataMode:error:](send%28__to_datamode_%29.md): Transmits data to one or more players connected to the match.
- [sendDataToAllPlayers:withDataMode:error:](senddata%28toallplayers_with_%29.md): Transmits data to all players connected to the match.
- [GKMatchSendDataMode](senddatamode.md): The mechanism used to transmit data to other players.
