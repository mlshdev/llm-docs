> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/handskeleton/joint](https://developer.apple.com/documentation/arkit/handskeleton/joint)

# HandSkeleton.Joint

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

The name and position of an individual hand joint.

## Declaration

```swift
struct Joint
```

## Topics

### Inspecting hand joints

- [name](joint/name.md): A name that uniquely identifies this joint among others on the same skeleton.
- [parentJoint](joint/parentjoint.md): The joint that’s connected to this joint and more closely connected to the base of the skeleton.

### Tracking the position of hand joints

- [anchorFromJointTransform](joint/anchorfromjointtransform.md): The position and orientation of this joint relative to the base joint of the skeleton.
- [parentFromJointTransform](joint/parentfromjointtransform.md): The transform from the joint to its parent joint’s coordinate system.
- [isTracked](joint/istracked.md): A Boolean value that indicates whether ARKit tracks a hand joint.

### Instance Properties

- [description](joint/description.md): A textual representation of this joint.

### Default Implementations

- [ARKitCoordinateSpaceProviding Implementations](joint/arkitcoordinatespaceproviding-implementations.md)
- [Equatable Implementations](joint/equatable-implementations.md)

## Relationships

### Conforms To

- [ARKitCoordinateSpaceProviding](../arkitcoordinatespaceproviding.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving specific hand joints

- [joint(\_:)](joint%28__%29.md): Retrieves a hand joint based on the joint name you specify.
- [HandSkeleton.JointName](jointname.md): The names of different hand joints.
