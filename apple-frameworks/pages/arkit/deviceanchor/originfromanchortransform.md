> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/deviceanchor/originfromanchortransform](https://developer.apple.com/documentation/arkit/deviceanchor/originfromanchortransform)

# originFromAnchorTransform

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The transform from the device to the origin coordinate system.

## Declaration

```swift
var originFromAnchorTransform: simd_float4x4 { get }
```

## See Also

### Inspecting a device anchor

- [trackingState](trackingstate-swift.property.md): Tracking state of this anchor
- [DeviceAnchor.TrackingState](trackingstate-swift.enum.md): Values that describe the tracking state of a device anchor.
- [isTracked](istracked.md): A Boolean value that indicates whether ARKit is tracking the device.
- [description](description.md): A textual representation of this anchor.
- [id](id.md): The unique identifier of this anchor.
