> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/planeanchor](https://developer.apple.com/documentation/arkit/planeanchor)

# PlaneAnchor

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

An anchor that represents horizontal and vertical planes.

## Declaration

```swift
struct PlaneAnchor
```

## Topics

### Inspecting a plane anchor

- [originFromAnchorTransform](planeanchor/originfromanchortransform.md): The location and orientation of a plane in world space.
- [alignment](planeanchor/alignment-swift.property.md): The general orientation of the detected plane with respect to gravity.
- [PlaneAnchor.Alignment](planeanchor/alignment-swift.enum.md): Values describing possible general orientations of a detected plane with respect to gravity.
- [classification](planeanchor/classification-swift.property.md): Deprecated. Get the classification of this plane.
- [PlaneAnchor.Classification](planeanchor/classification-swift.enum.md): Deprecated. The kinds of object classification a plane anchor can have.
- [description](planeanchor/description.md): A textual representation of this anchor.

### Getting the shape of a plane anchor

- [geometry](planeanchor/geometry-swift.property.md): Get the geometry of the plane in the anchor’s coordinate system.
- [PlaneAnchor.Geometry](planeanchor/geometry-swift.struct.md): The geometry of a plane anchor.

### Identifying a plane anchor

- [id](planeanchor/id.md): The unique identifier of this anchor.

### Instance Properties

- [surfaceClassification](planeanchor/surfaceclassification.md): Get the surface classification of this plane.

### Default Implementations

- [ARKitCoordinateSpaceProviding Implementations](planeanchor/arkitcoordinatespaceproviding-implementations.md)
- [Equatable Implementations](planeanchor/equatable-implementations.md)

## Relationships

### Conforms To

- [ARKitCoordinateSpaceProviding](arkitcoordinatespaceproviding.md)
- [Anchor](anchor.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Plane detection

- [Placing content on detected planes](../visionos/placing-content-on-detected-planes.md): Detect horizontal surfaces like tables and floors, as well as vertical planes like walls and doors.
- [PlaneDetectionProvider](planedetectionprovider.md): A source of live data about planes in a person’s surroundings.
