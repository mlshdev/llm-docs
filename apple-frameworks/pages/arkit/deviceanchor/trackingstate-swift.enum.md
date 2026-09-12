> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/deviceanchor/trackingstate-swift.enum](https://developer.apple.com/documentation/arkit/deviceanchor/trackingstate-swift.enum)

# DeviceAnchor.TrackingState

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** macOS 26.0+ · visionOS 2.0+

Values that describe the tracking state of a device anchor.

## Declaration

```swift
enum TrackingState
```

## Topics

### Tracking states

- [DeviceAnchor.TrackingState.orientationTracked](trackingstate-swift.enum/orientationtracked.md): The framework is currently only tracking the anchor’s orientation.
- [DeviceAnchor.TrackingState.tracked](trackingstate-swift.enum/tracked.md): The framework is currently tracking both the anchor’s position and its orientation.
- [DeviceAnchor.TrackingState.untracked](trackingstate-swift.enum/untracked.md): The framework isn’t tracking this anchor.

### Instance Properties

- [description](trackingstate-swift.enum/description.md): A textual representation of this tracking state.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a device anchor

- [originFromAnchorTransform](originfromanchortransform.md): The transform from the device to the origin coordinate system.
- [trackingState](trackingstate-swift.property.md): Tracking state of this anchor
- [isTracked](istracked.md): A Boolean value that indicates whether ARKit is tracking the device.
- [description](description.md): A textual representation of this anchor.
- [id](id.md): The unique identifier of this anchor.
