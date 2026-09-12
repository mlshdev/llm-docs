> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/roomanchor](https://developer.apple.com/documentation/arkit/roomanchor)

# RoomAnchor

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

The representation of a room ARKit is currently tracking.

## Declaration

```swift
struct RoomAnchor
```

<a id="overview"></a>

## Overview

A `RoomAnchor` structure describes an approximate representation of the room’s geometry, and contains arrays with identifiers of mesh and plane anchors that the framework associates with that room.

## Topics

### Getting information about a room anchor

- [geometry](roomanchor/geometry.md): The geometry of the mesh in an anchor’s coordinate system.
- [id](roomanchor/id.md): The unique identifier of this anchor.
- [isCurrentRoom](roomanchor/iscurrentroom.md): A Boolean value that indicates whether a room is a person’s current location.
- [meshAnchorIDs](roomanchor/meshanchorids.md): An array of IDs of the mesh anchors associated with a room.
- [originFromAnchorTransform](roomanchor/originfromanchortransform.md): The transform from the room anchor to the origin coordinate system.
- [planeAnchorIDs](roomanchor/planeanchorids.md): An array of IDs of the plane anchors associated with a room.

### Inspecting a room anchor

- [contains(\_:)](roomanchor/contains%28__%29.md): Returns a Boolean value that indicates whether a room contains the provided point.
- [geometries(of:)](roomanchor/geometries%28of_%29.md): Deprecated. Returns the disjoint mesh geometries of a given classification.
- [description](roomanchor/description.md): A textual representation of this anchor.

### Operators

- [==(\_:\_:)](roomanchor/==%28____%29.md): Returns a Boolean value indicating whether two room anchors are equal.

### Instance Methods

- [geometries(classifiedAs:)](roomanchor/geometries%28classifiedas_%29.md): Get disjoint mesh geometries of a given surface classification.

### Default Implementations

- [ARKitCoordinateSpaceProviding Implementations](roomanchor/arkitcoordinatespaceproviding-implementations.md)

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

### Room tracking

- [RoomTrackingProvider](roomtrackingprovider.md): A source of real-time information about the room that a person is currently in.
- [SurfaceClassification](surfaceclassification.md): A value describing the classification of a surface.
- [Building local experiences with room tracking](../visionos/building-local-experiences-with-room-tracking.md): Use room tracking in visionOS to provide custom interactions with physical spaces.
