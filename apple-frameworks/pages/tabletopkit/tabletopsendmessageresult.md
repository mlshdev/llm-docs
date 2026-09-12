> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopsendmessageresult](https://developer.apple.com/documentation/tabletopkit/tabletopsendmessageresult)

# TabletopSendMessageResult

**Framework:** TabletopKit  
**Kind:** Enumeration  
**Availability:** visionOS 2.0+

The possible results of sending messages in a network session.

## Declaration

```swift
enum TabletopSendMessageResult
```

## Topics

### Message results

- [TabletopSendMessageResult.success](tabletopsendmessageresult/success.md): Message was sent successfully
- [TabletopSendMessageResult.failure](tabletopsendmessageresult/failure.md): Message sending failed, and network condition is effectively disconnected

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Multiplayer network session

- [TabletopNetworkSession](tabletopnetworksession.md): An object that coordinates network-related tasks in multiplayer games.
- [TabletopNetworkSessionCoordinator](tabletopnetworksessioncoordinator.md): A protocol for objects that manage network sessions between peers.
