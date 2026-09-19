> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/deviceanchor/id

# id

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The unique identifier of this anchor.

## Declaration

```swift
var id: UUID { get }
```

## See Also

### Inspecting a device anchor

- [originFromAnchorTransform](originfromanchortransform.md): The transform from the device to the origin coordinate system.
- [trackingState](trackingstate-swift.property.md): Tracking state of this anchor
- [DeviceAnchor.TrackingState](trackingstate-swift.enum.md): Values that describe the tracking state of a device anchor.
- [isTracked](istracked.md): A Boolean value that indicates whether ARKit is tracking the device.
- [description](description.md): A textual representation of this anchor.
