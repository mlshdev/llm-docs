> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/deviceanchor](https://developer.apple.com/documentation/arkit/deviceanchor)

# DeviceAnchor

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 1.0+

The position and orientation of Apple Vision Pro.

## Declaration

```swift
struct DeviceAnchor
```

<a id="overview"></a>

## Overview

You create a device anchor by starting an [ARKitSession](arkitsession.md) with a [WorldTrackingProvider](worldtrackingprovider.md) and calling its [queryDeviceAnchor(atTimestamp:)](worldtrackingprovider/querydeviceanchor%28attimestamp_%29.md) method.

## Topics

### Inspecting a device anchor

- [originFromAnchorTransform](deviceanchor/originfromanchortransform.md): The transform from the device to the origin coordinate system.
- [trackingState](deviceanchor/trackingstate-swift.property.md): Tracking state of this anchor
- [DeviceAnchor.TrackingState](deviceanchor/trackingstate-swift.enum.md): Values that describe the tracking state of a device anchor.
- [isTracked](deviceanchor/istracked.md): A Boolean value that indicates whether ARKit is tracking the device.
- [description](deviceanchor/description.md): A textual representation of this anchor.
- [id](deviceanchor/id.md): The unique identifier of this anchor.

### Default Implementations

- [ARKitCoordinateSpaceProviding Implementations](deviceanchor/arkitcoordinatespaceproviding-implementations.md)

## Relationships

### Conforms To

- [ARKitCoordinateSpaceProviding](arkitcoordinatespaceproviding.md)
- [Anchor](anchor.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TrackableAnchor](trackableanchor.md)

## See Also

### World tracking

- [Tracking specific points in world space](../visionos/tracking-points-in-world-space.md): Retrieve the position and orientation of anchors your app stores in ARKit.
- [Placing entities using head and device transform](../visionos/placing-entities-using-head-and-device-transform.md): Query and react to changes in the position and rotation of Apple Vision Pro.
- [WorldTrackingProvider](worldtrackingprovider.md): A source of live data about the device pose and anchors in a person’s surroundings.
- [WorldAnchor](worldanchor.md): A fixed location in a person’s surroundings.
