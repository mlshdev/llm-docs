> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gktransporttype](https://developer.apple.com/documentation/gamekit/gktransporttype)

# GKTransportType (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The mechanism used to send messages to other players in a game session.

## Declaration

```swift
enum GKTransportType
```

## Topics

### Constants

- [GKTransportType.reliable](gktransporttype/reliable.md): The data is sent continuously until it is successfully received by the intended recipients or the connection times out.
- [GKTransportType.unreliable](gktransporttype/unreliable.md): The data is sent once and is not sent again if a transmission error occurs.

### Initializers

- [init(rawValue:)](gktransporttype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Connecting Players for Real-Time Communication

- [setConnectionState(\_:completionHandler:)](gkgamesession/setconnectionstate%28__completionhandler_%29.md): Deprecated. Sets the connection state for the player.
- [players(with:)](gkgamesession/players%28with_%29.md): Deprecated. Retrieves a list of players with the specified connection state.
- [send(\_:with:completionHandler:)](gkgamesession/send%28__with_completionhandler_%29.md): Deprecated. Sends the indicated data to all connected players.

# GKTransportType (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The mechanism used to send messages to other players in a game session.

## Declaration

```objectivec
enum GKTransportType : NSInteger;
```

## Topics

### Constants

- [GKTransportTypeReliable](gktransporttype/reliable.md): The data is sent continuously until it is successfully received by the intended recipients or the connection times out.
- [GKTransportTypeUnreliable](gktransporttype/unreliable.md): The data is sent once and is not sent again if a transmission error occurs.

## See Also

### Connecting Players for Real-Time Communication

- [setConnectionState:completionHandler:](gkgamesession/setconnectionstate%28__completionhandler_%29.md): Deprecated. Sets the connection state for the player.
- [playersWithConnectionState:](gkgamesession/players%28with_%29.md): Deprecated. Retrieves a list of players with the specified connection state.
- [sendData:withTransportType:completionHandler:](gkgamesession/send%28__with_completionhandler_%29.md): Deprecated. Sends the indicated data to all connected players.
