> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arkitcoordinatespace](https://developer.apple.com/documentation/arkit/arkitcoordinatespace)

# ARKitCoordinateSpace

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** macOS 27.0+ · visionOS 26.0+

An object which represents an ARKit coordinate space.

## Declaration

```swift
struct ARKitCoordinateSpace
```

## Topics

### Instance Properties

- [ancestorSpace](arkitcoordinatespace/ancestorspace.md): The parent space of this ARKit coordinate space.

### Instance Methods

- [ancestorFromSpaceTransformFloat()](arkitcoordinatespace/ancestorfromspacetransformfloat%28%29.md): Get the transformation to ancestor space from this ARKit coordinate space.

### Enumerations

- [ARKitCoordinateSpace.Correction](arkitcoordinatespace/correction.md): A correction type to apply on coordinate spaces returned from ARKit APIs.

## Relationships

### Conforms To

- [CoordinateSpace3D](../spatial/coordinatespace3d.md)
- [CoordinateSpace3DFloat](../spatial/coordinatespace3dfloat.md)

## See Also

### Setup

- [Setting up access to ARKit data](../visionos/setting-up-access-to-arkit-data.md): Check whether your app can use ARKit and respect people’s privacy.
- [ARKitSession](arkitsession.md): The main entry point for receiving data from ARKit.
- [DataProvider](dataprovider.md): A source of live data from ARKit.
- [DataProviderState](dataproviderstate.md): The possible states of a data provider.
- [Anchor](anchor.md): The identity, location, and orientation of an object in world space.
- [TrackableAnchor](trackableanchor.md): An anchor that can gain and lose its tracking state over the course of a session.
- [ARKitCoordinateSpaceProviding](arkitcoordinatespaceproviding.md): A type that provides an ARKit coordinate space with an optional correction applied.
