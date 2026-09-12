> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/handanchor](https://developer.apple.com/documentation/arkit/handanchor)

# HandAnchor

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A hand’s position in a person’s surroundings.

## Declaration

```swift
struct HandAnchor
```

## Topics

### Getting hand information

- [originFromAnchorTransform](handanchor/originfromanchortransform.md): The location and orientation of a hand in world space.
- [handSkeleton](handanchor/handskeleton.md): The current position and orientation of joints on a hand.
- [chirality](handanchor/chirality-swift.property.md): The chirality of this hand.
- [HandAnchor.Chirality](handanchor/chirality-swift.enum.md): A value that indicates a left or right hand.
- [isTracked](handanchor/istracked.md): A Boolean value that indicates whether ARKit is currently tracking this hand.
- [description](handanchor/description.md): A textual representation of this anchor.

### Identifying hand anchors

- [id](handanchor/id.md): The unique identifier of this anchor.

### Instance Properties

- [fidelity](handanchor/fidelity-swift.property.md): The fidelity of this hand.

### Enumerations

- [HandAnchor.Fidelity](handanchor/fidelity-swift.enum.md): Enumeration to distinguish hand fidelity

### Default Implementations

- [ARKitCoordinateSpaceProviding Implementations](handanchor/arkitcoordinatespaceproviding-implementations.md)
- [Equatable Implementations](handanchor/equatable-implementations.md)

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

### Hand tracking

- [Happy Beam](../visionos/happybeam.md): Leverage a Full Space to create a fun game using ARKit.
- [Creating a 3D painting space](../visionos/creating-a-painting-space-in-visionos.md): Implement a painting canvas entity, and update its mesh to represent a stroke.
- [Tracking and visualizing hand movement](../visionos/tracking-and-visualizing-hand-movement.md): Use hand-tracking anchors to display a visual representation of hand transforms in visionOS.
- [HandTrackingProvider](handtrackingprovider.md): A source of live data about the position of a person’s hands and hand joints.
- [HandSkeleton](handskeleton.md): A collection of joints in a hand.
