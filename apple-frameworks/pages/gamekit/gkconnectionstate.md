> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkconnectionstate](https://developer.apple.com/documentation/gamekit/gkconnectionstate)

# GKConnectionState (Swift)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Possible connection states for a player

## Declaration

```swift
enum GKConnectionState
```

## Topics

### Constants

- [GKConnectionState.connected](gkconnectionstate/connected.md): The player is connected to the game session.
- [GKConnectionState.notConnected](gkconnectionstate/notconnected.md): The player is not connected to the game session.

### Initializers

- [init(rawValue:)](gkconnectionstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Changing Player Status

- [session(\_:didAdd:)](gkgamesessioneventlistener/session%28__didadd_%29.md): Deprecated. Tells the listener a new player has been added to a game session.
- [session(\_:didRemove:)](gkgamesessioneventlistener/session%28__didremove_%29.md): Deprecated. Tells the listener a player left a game session.
- [session(\_:player:didChange:)](gkgamesessioneventlistener/session%28__player_didchange_%29.md): Deprecated. Tells the listener a player’s connection state has changed.

# GKConnectionState (Objective-C)

**Framework:** GameKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Possible connection states for a player

## Declaration

```objectivec
enum GKConnectionState : NSInteger;
```

## Topics

### Constants

- [GKConnectionStateConnected](gkconnectionstate/connected.md): The player is connected to the game session.
- [GKConnectionStateNotConnected](gkconnectionstate/notconnected.md): The player is not connected to the game session.

## See Also

### Changing Player Status

- [session:didAddPlayer:](gkgamesessioneventlistener/session%28__didadd_%29.md): Deprecated. Tells the listener a new player has been added to a game session.
- [session:didRemovePlayer:](gkgamesessioneventlistener/session%28__didremove_%29.md): Deprecated. Tells the listener a player left a game session.
- [session:player:didChangeConnectionState:](gkgamesessioneventlistener/session%28__player_didchange_%29.md): Deprecated. Tells the listener a player’s connection state has changed.
