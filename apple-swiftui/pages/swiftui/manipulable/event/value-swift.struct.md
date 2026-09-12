> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/manipulable/event/value-swift.struct](https://developer.apple.com/documentation/swiftui/manipulable/event/value-swift.struct)

# Manipulable.Event.Value

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** visionOS 26.0+

Describes the value associated with a manipulation gesture event.

## Declaration

```swift
struct Value
```

## Topics

### Instance Properties

- [frame](value-swift.struct/frame.md): The 3D bounding box of the manipulated view.
- [inputDevices](value-swift.struct/inputdevices.md): The input devices that a person is using to manipulate a view.
- [interactionPoint](value-swift.struct/interactionpoint.md): The point at which a person interacted with a view to begin manipulating it.
- [timestamp](value-swift.struct/timestamp.md): The time the event was processed.
- [transform](value-swift.struct/transform.md): The 3D affine transform of the manipulated view, or `nil` if the view doesn’t have a well-defined 3D affine transfrorm.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
