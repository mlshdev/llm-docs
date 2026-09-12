> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spatialeventcollection/event/inputdevicepose-swift.property](https://developer.apple.com/documentation/swiftui/spatialeventcollection/event/inputdevicepose-swift.property)

# inputDevicePose

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · visionOS 1.0+

The 3D position and orientation of the device controlling the touch, if one exists.

## Declaration

```swift
var inputDevicePose: SpatialEventCollection.Event.InputDevicePose? { get set }
```

## See Also

### Locating the event

- [location](location.md): The 2D location of the event.
- [location3D](location3d.md): The 3D location of the touch.
- [selectionRay](selectionray.md): The 3D ray used to target the touch.
- [SpatialEventCollection.Event.InputDevicePose](inputdevicepose-swift.struct.md): A pose describing the input device like a hand controlling the event.
- [targetedEntity](targetedentity.md): The entity target for this touch, if one exists.
