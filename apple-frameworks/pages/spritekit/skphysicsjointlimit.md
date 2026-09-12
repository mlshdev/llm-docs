> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsjointlimit](https://developer.apple.com/documentation/spritekit/skphysicsjointlimit)

# SKPhysicsJointLimit (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A joint that imposes a maximum distance between two physics bodies, as if they were connected by a rope.

## Declaration

```swift
class SKPhysicsJointLimit
```

## Topics

### Creating a Limit Joint

- [joint(withBodyA:bodyB:anchorA:anchorB:)](skphysicsjointlimit/joint%28withbodya_bodyb_anchora_anchorb_%29.md): Creates a new limit joint.

### Configuring a Limit Joint

- [maxLength](skphysicsjointlimit/maxlength.md): The maximum distance allowed between the two physics bodies connected by the limit joint.

## Relationships

### Inherits From

- [SKPhysicsJoint](skphysicsjoint.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Physics Joints

- [Working with Inverse Kinematics](working-with-inverse-kinematics.md): Gain fine-tuned control of objects that are connected by joints.
- [SKPhysicsJoint](skphysicsjoint.md): The abstract superclass for objects that connect physics bodies.
- [SKPhysicsJointFixed](skphysicsjointfixed.md): A joint that fuses two physics bodies together at a reference point.
- [SKPhysicsJointPin](skphysicsjointpin.md): A joint that pins together two physics bodies, allowing independent rotation.
- [SKPhysicsJointSliding](skphysicsjointsliding.md): A joint that allows two physics bodies to slide along an axis.
- [SKPhysicsJointSpring](skphysicsjointspring.md): A joint that simulates a spring connecting two physics bodies.

# SKPhysicsJointLimit (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A joint that imposes a maximum distance between two physics bodies, as if they were connected by a rope.

## Declaration

```objectivec
@interface SKPhysicsJointLimit : SKPhysicsJoint
```

## Topics

### Creating a Limit Joint

- [jointWithBodyA:bodyB:anchorA:anchorB:](skphysicsjointlimit/joint%28withbodya_bodyb_anchora_anchorb_%29.md): Creates a new limit joint.

### Configuring a Limit Joint

- [maxLength](skphysicsjointlimit/maxlength.md): The maximum distance allowed between the two physics bodies connected by the limit joint.

## Relationships

### Inherits From

- [SKPhysicsJoint](skphysicsjoint.md)

## See Also

### Physics Joints

- [Working with Inverse Kinematics](working-with-inverse-kinematics.md): Gain fine-tuned control of objects that are connected by joints.
- [SKPhysicsJoint](skphysicsjoint.md): The abstract superclass for objects that connect physics bodies.
- [SKPhysicsJointFixed](skphysicsjointfixed.md): A joint that fuses two physics bodies together at a reference point.
- [SKPhysicsJointPin](skphysicsjointpin.md): A joint that pins together two physics bodies, allowing independent rotation.
- [SKPhysicsJointSliding](skphysicsjointsliding.md): A joint that allows two physics bodies to slide along an axis.
- [SKPhysicsJointSpring](skphysicsjointspring.md): A joint that simulates a spring connecting two physics bodies.
