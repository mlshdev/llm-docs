> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/handskeleton](https://developer.apple.com/documentation/arkit/handskeleton)

# HandSkeleton

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A collection of joints in a hand.

## Declaration

```swift
struct HandSkeleton
```

## Topics

### Retrieving specific hand joints

- [joint(\_:)](handskeleton/joint%28__%29.md): Retrieves a hand joint based on the joint name you specify.
- [HandSkeleton.Joint](handskeleton/joint.md): The name and position of an individual hand joint.
- [HandSkeleton.JointName](handskeleton/jointname.md): The names of different hand joints.

### Inspecting hand skeletons

- [allJoints](handskeleton/alljoints.md): All of the joints in a hand skeleton.
- [neutralPose](handskeleton/neutralpose.md): A hand pose that you can use as a reference.
- [description](handskeleton/description.md): A textual representation of this Skeleton.

### Default Implementations

- [Equatable Implementations](handskeleton/equatable-implementations.md)

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Hand tracking

- [Happy Beam](../visionos/happybeam.md): Leverage a Full Space to create a fun game using ARKit.
- [Creating a 3D painting space](../visionos/creating-a-painting-space-in-visionos.md): Implement a painting canvas entity, and update its mesh to represent a stroke.
- [Tracking and visualizing hand movement](../visionos/tracking-and-visualizing-hand-movement.md): Use hand-tracking anchors to display a visual representation of hand transforms in visionOS.
- [HandTrackingProvider](handtrackingprovider.md): A source of live data about the position of a person’s hands and hand joints.
- [HandAnchor](handanchor.md): A hand’s position in a person’s surroundings.
