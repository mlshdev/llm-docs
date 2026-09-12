> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spatialeventcollection/event/inputdevicepose-swift.struct](https://developer.apple.com/documentation/swiftui/spatialeventcollection/event/inputdevicepose-swift.struct)

# SpatialEventCollection.Event.InputDevicePose

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 1.0+ · watchOS 11.0+

A pose describing the input device like a hand controlling the event.

## Declaration

```swift
struct InputDevicePose
```

## Topics

### Getting the event type

- [altitude](inputdevicepose-swift.struct/altitude.md): The altitude angle.
- [azimuth](inputdevicepose-swift.struct/azimuth.md): The azimuth angle.
- [pose3D](inputdevicepose-swift.struct/pose3d.md): The 3D pose of the input device.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Locating the event

- [location](location.md): The 2D location of the event.
- [location3D](location3d.md): The 3D location of the touch.
- [selectionRay](selectionray.md): The 3D ray used to target the touch.
- [inputDevicePose](inputdevicepose-swift.property.md): The 3D position and orientation of the device controlling the touch, if one exists.
- [targetedEntity](targetedentity.md): The entity target for this touch, if one exists.
