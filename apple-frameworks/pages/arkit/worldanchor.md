> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/worldanchor](https://developer.apple.com/documentation/arkit/worldanchor)

# WorldAnchor

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A fixed location in a person’s surroundings.

## Declaration

```swift
struct WorldAnchor
```

<a id="overview"></a>

## Overview

ARKit persists world anchor UUIDs and transforms across multiple runs of your app. For more information, see [Tracking specific points in world space](../visionos/tracking-points-in-world-space.md).

## Topics

### Creating a world anchor

- [init(originFromAnchorTransform:)](worldanchor/init%28originfromanchortransform_%29.md): Creates a world anchor from a position and orientation in world space.

### Identifying a world anchor

- [id](worldanchor/id.md): The unique identifier of this anchor.

### Inspecting a world anchor

- [originFromAnchorTransform](worldanchor/originfromanchortransform.md): The position and orientation of a world anchor.
- [isTracked](worldanchor/istracked.md): A Boolean value that indicates whether ARKit is currently tracking a world anchor.
- [description](worldanchor/description.md): A textual representation of this anchor.

### Initializers

- [init(originFromAnchorTransform:sharedWithNearbyParticipants:)](worldanchor/init%28originfromanchortransform_sharedwithnearbyparticipants_%29.md): Initialize a world anchor with a transform and indicate if it should be shared with nearby participants.

### Instance Properties

- [isSharedWithNearbyParticipants](worldanchor/issharedwithnearbyparticipants.md): Check if a world anchor is shared with nearby participants.

### Default Implementations

- [ARKitCoordinateSpaceProviding Implementations](worldanchor/arkitcoordinatespaceproviding-implementations.md)
- [Equatable Implementations](worldanchor/equatable-implementations.md)

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
- [TrackableAnchor](trackableanchor.md)

## See Also

### World tracking

- [Tracking specific points in world space](../visionos/tracking-points-in-world-space.md): Retrieve the position and orientation of anchors your app stores in ARKit.
- [Placing entities using head and device transform](../visionos/placing-entities-using-head-and-device-transform.md): Query and react to changes in the position and rotation of Apple Vision Pro.
- [WorldTrackingProvider](worldtrackingprovider.md): A source of live data about the device pose and anchors in a person’s surroundings.
- [DeviceAnchor](deviceanchor.md): The position and orientation of Apple Vision Pro.
