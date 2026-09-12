> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatch/senddatamode](https://developer.apple.com/documentation/gamekit/gkmatch/senddatamode)

# GKMatch.SendDataMode (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

The mechanism used to transmit data to other players.

## Declaration

```swift
enum SendDataMode
```

## Topics

### Modes

- [GKMatch.SendDataMode.reliable](senddatamode/reliable.md): Sends data continuously until the recipients successfully receive it or the connection times out.
- [GKMatch.SendDataMode.unreliable](senddatamode/unreliable.md): Sends data once even if an error occurs.

### Initializers

- [init(rawValue:)](senddatamode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Sending data to other players

- [chooseBestHostingPlayer(completionHandler:)](choosebesthostingplayer%28completionhandler_%29.md): Determines the best player in the game to act as the server for a client-server topology.
- [send(\_:to:dataMode:)](send%28__to_datamode_%29.md): Transmits data to one or more players connected to the match.
- [sendData(toAllPlayers:with:)](senddata%28toallplayers_with_%29.md): Transmits data to all players connected to the match.

# GKMatchSendDataMode (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

The mechanism used to transmit data to other players.

## Declaration

```objectivec
enum GKMatchSendDataMode : NSInteger;
```

## Topics

### Modes

- [GKMatchSendDataReliable](senddatamode/reliable.md): Sends data continuously until the recipients successfully receive it or the connection times out.
- [GKMatchSendDataUnreliable](senddatamode/unreliable.md): Sends data once even if an error occurs.

## See Also

### Sending data to other players

- [chooseBestHostingPlayerWithCompletionHandler:](choosebesthostingplayer%28completionhandler_%29.md): Determines the best player in the game to act as the server for a client-server topology.
- [sendData:toPlayers:dataMode:error:](send%28__to_datamode_%29.md): Transmits data to one or more players connected to the match.
- [sendDataToAllPlayers:withDataMode:error:](senddata%28toallplayers_with_%29.md): Transmits data to all players connected to the match.
