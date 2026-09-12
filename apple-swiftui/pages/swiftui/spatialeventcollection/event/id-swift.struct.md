> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spatialeventcollection/event/id-swift.struct](https://developer.apple.com/documentation/swiftui/spatialeventcollection/event/id-swift.struct)

# SpatialEventCollection.Event.ID

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 1.0+ · watchOS 11.0+

A value that uniquely identifies an event over the course of its lifetime.

## Declaration

```swift
struct ID
```

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Identifying the event

- [timestamp](timestamp.md): The time the event was processed.
- [id](id-swift.property.md): An identifier that uniquely identifies the event over its lifetime.
- [kind](kind-swift.property.md): The event’s input source.
- [SpatialEventCollection.Event.Kind](kind-swift.enum.md): The possible input sources or modes of an event.
- [modifierKeys](modifierkeys.md): The set of active modifier keys at the time of this event.
