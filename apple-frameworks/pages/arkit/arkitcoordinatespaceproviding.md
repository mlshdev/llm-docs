> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arkitcoordinatespaceproviding](https://developer.apple.com/documentation/arkit/arkitcoordinatespaceproviding)

# ARKitCoordinateSpaceProviding

**Framework:** ARKit  
**Kind:** Protocol  
**Availability:** macOS 27.0+ · visionOS 27.0+

A type that provides an ARKit coordinate space with an optional correction applied.

## Declaration

```swift
protocol ARKitCoordinateSpaceProviding
```

## Topics

### Instance Methods

- [coordinateSpace(correction:)](arkitcoordinatespaceproviding/coordinatespace%28correction_%29.md): The coordinate space of this object.

## Relationships

### Conforming Types

- [AccessoryAnchor](accessoryanchor.md)
- [BarcodeAnchor](barcodeanchor.md)
- [CameraRegionAnchor](cameraregionanchor.md)
- [DeviceAnchor](deviceanchor.md)
- [EnvironmentProbeAnchor](environmentprobeanchor.md)
- [FieldOfViewAnchor](fieldofviewanchor.md)
- [HandAnchor](handanchor.md)
- [HandSkeleton.Joint](handskeleton/joint.md)
- [ImageAnchor](imageanchor.md)
- [MeshAnchor](meshanchor.md)
- [ObjectAnchor](objectanchor.md)
- [PlaneAnchor](planeanchor.md)
- [RoomAnchor](roomanchor.md)
- [WorldAnchor](worldanchor.md)

## See Also

### Setup

- [Setting up access to ARKit data](../visionos/setting-up-access-to-arkit-data.md): Check whether your app can use ARKit and respect people’s privacy.
- [ARKitSession](arkitsession.md): The main entry point for receiving data from ARKit.
- [DataProvider](dataprovider.md): A source of live data from ARKit.
- [DataProviderState](dataproviderstate.md): The possible states of a data provider.
- [Anchor](anchor.md): The identity, location, and orientation of an object in world space.
- [TrackableAnchor](trackableanchor.md): An anchor that can gain and lose its tracking state over the course of a session.
- [ARKitCoordinateSpace](arkitcoordinatespace.md): An object which represents an ARKit coordinate space.
