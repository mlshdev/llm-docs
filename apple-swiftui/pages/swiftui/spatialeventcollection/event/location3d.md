> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/spatialeventcollection/event/location3d](https://developer.apple.com/documentation/swiftui/spatialeventcollection/event/location3d)

# location3D

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The 3D location of the touch.

## Declaration

```swift
var location3D: Point3D
```

## See Also

### Locating the event

- [location](location.md): The 2D location of the event.
- [selectionRay](selectionray.md): The 3D ray used to target the touch.
- [inputDevicePose](inputdevicepose-swift.property.md): The 3D position and orientation of the device controlling the touch, if one exists.
- [SpatialEventCollection.Event.InputDevicePose](inputdevicepose-swift.struct.md): A pose describing the input device like a hand controlling the event.
- [targetedEntity](targetedentity.md): The entity target for this touch, if one exists.
