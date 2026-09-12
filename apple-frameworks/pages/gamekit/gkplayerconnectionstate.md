> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkplayerconnectionstate](https://developer.apple.com/documentation/gamekit/gkplayerconnectionstate)

# GKPlayerConnectionState (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The possible states of a connection to a match.

## Declaration

```swift
enum GKPlayerConnectionState
```

## Topics

### States

- [GKPlayerConnectionState.unknown](gkplayerconnectionstate/unknown.md): An undetermined state in which the player can’t receive data.
- [GKPlayerConnectionState.connected](gkplayerconnectionstate/connected.md): A state in which a player connects to the match and can receive data.
- [GKPlayerConnectionState.disconnected](gkplayerconnectionstate/disconnected.md): A state in which a player disconnects from the match and can’t receive data.

### Initializers

- [init(rawValue:)](gkplayerconnectionstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Receiving State Notifications About Other Players

- [match(\_:player:didChange:)](gkmatchdelegate/match%28__player_didchange_%29-8ohgr.md): Handles when players connect or disconnect from a match.

# GKPlayerConnectionState (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

The possible states of a connection to a match.

## Declaration

```objectivec
enum GKPlayerConnectionState : NSInteger;
```

## Topics

### States

- [GKPlayerStateUnknown](gkplayerconnectionstate/unknown.md): An undetermined state in which the player can’t receive data.
- [GKPlayerStateConnected](gkplayerconnectionstate/connected.md): A state in which a player connects to the match and can receive data.
- [GKPlayerStateDisconnected](gkplayerconnectionstate/disconnected.md): A state in which a player disconnects from the match and can’t receive data.

## See Also

### Receiving State Notifications About Other Players

- [match:player:didChangeConnectionState:](gkmatchdelegate/match%28__player_didchange_%29-8ohgr.md): Handles when players connect or disconnect from a match.
