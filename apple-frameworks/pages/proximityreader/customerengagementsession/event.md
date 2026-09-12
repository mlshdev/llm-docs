> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession/event](https://developer.apple.com/documentation/proximityreader/customerengagementsession/event)

# CustomerEngagementSession.Event

**Framework:** ProximityReader  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Events that occur during a customer engagement session.

## Declaration

```swift
enum Event
```

## Topics

### Enumeration Cases

- [CustomerEngagementSession.Event.closed](event/closed.md): An event indicating that the connection to the peer closed.
- [CustomerEngagementSession.Event.connected](event/connected.md): An event indicating that the peer has connected.
- [CustomerEngagementSession.Event.disconnected](event/disconnected.md): An event indicating that the peer has disconnected.
- [CustomerEngagementSession.Event.ready](event/ready.md): An event indicating that the peer is ready to accept requests.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting events during a session

- [events](events.md): An asynchronous sequence of events that occur during the engagement session.
