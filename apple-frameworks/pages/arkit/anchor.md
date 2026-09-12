> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/anchor](https://developer.apple.com/documentation/arkit/anchor)

# Anchor

**Framework:** ARKit  
**Kind:** Protocol  
**Availability:** macOS 26.0+ · visionOS 1.0+

The identity, location, and orientation of an object in world space.

## Declaration

```swift
protocol Anchor : CustomStringConvertible, Identifiable, Sendable
```

## Topics

### Inspecting an anchor

- [id](anchor/id.md): A unique identifier that distinguishes this anchor from all other anchors.
- [timestamp](anchor/timestamp.md)
- [originFromAnchorTransform](anchor/originfromanchortransform.md): The position and orientation of this anchor in world space.

### Tracking anchors over time

- [AnchorUpdate](anchorupdate.md): Information about the event that updated an anchor.
- [AnchorUpdateSequence](anchorupdatesequence.md): An asynchronous sequence of updates to anchors.

## Relationships

### Inherits From

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [TrackableAnchor](trackableanchor.md)

### Conforming Types

- [AccessoryAnchor](accessoryanchor.md)
- [BarcodeAnchor](barcodeanchor.md)
- [CameraRegionAnchor](cameraregionanchor.md)
- [DeviceAnchor](deviceanchor.md)
- [EnvironmentProbeAnchor](environmentprobeanchor.md)
- [FieldOfViewAnchor](fieldofviewanchor.md)
- [HandAnchor](handanchor.md)
- [ImageAnchor](imageanchor.md)
- [MeshAnchor](meshanchor.md)
- [ObjectAnchor](objectanchor.md)
- [PlaneAnchor](planeanchor.md)
- [RoomAnchor](roomanchor.md)
- [WorldAnchor](worldanchor.md)

## See Also

### visionOS

- [Setting up access to ARKit data](../visionos/setting-up-access-to-arkit-data.md): Check whether your app can use ARKit and respect people’s privacy.
- [ARKitSession](arkitsession.md): The main entry point for receiving data from ARKit.
- [DataProvider](dataprovider.md): A source of live data from ARKit.
- [ARKit in visionOS](arkit-in-visionos.md): Create immersive augmented reality experiences.
