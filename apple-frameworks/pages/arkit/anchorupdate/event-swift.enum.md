> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/anchorupdate/event-swift.enum](https://developer.apple.com/documentation/arkit/anchorupdate/event-swift.enum)

# AnchorUpdate.Event

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** visionOS 1.0+

An event that indicates whether an anchor was added, updated, or removed.

## Declaration

```swift
@frozen enum Event
```

## Topics

### Inspecting anchor update events

- [AnchorUpdate.Event.added](event-swift.enum/added.md): An event that occurs when ARKit starts tracking an anchor.
- [AnchorUpdate.Event.updated](event-swift.enum/updated.md): An event that occurs when an existing anchor updates data.
- [AnchorUpdate.Event.removed](event-swift.enum/removed.md): An event that occurs when ARKit stops tracking an anchor.

### Instance Properties

- [description](event-swift.enum/description.md): A textual representation of AnchorUpdate.Event

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting anchor updates

- [anchor](anchor.md): The anchor that this anchor update contains information about.
- [timestamp](timestamp.md): The time when this anchor update occurred.
- [event](event-swift.property.md): The event which caused the anchor to update.
- [description](description.md): A textual representation of this anchor update.
