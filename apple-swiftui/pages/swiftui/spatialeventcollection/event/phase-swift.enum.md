> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spatialeventcollection/event/phase-swift.enum](https://developer.apple.com/documentation/swiftui/spatialeventcollection/event/phase-swift.enum)

# SpatialEventCollection.Event.Phase

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 1.0+ · watchOS 11.0+

The states that an event can have.

## Declaration

```swift
enum Phase
```

## Topics

### Getting the phase

- [SpatialEventCollection.Event.Phase.active](phase-swift.enum/active.md): The phase is active and the state associated with it is guaranteed to produce at least one more update.
- [SpatialEventCollection.Event.Phase.cancelled](phase-swift.enum/cancelled.md): The state associated with this phase was canceled and won’t produce any more updates.
- [SpatialEventCollection.Event.Phase.ended](phase-swift.enum/ended.md): The state associated with this phase ended normally and won’t produce any more updates.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Getting the event’s current phase

- [phase](phase-swift.property.md): The phase of the event.
