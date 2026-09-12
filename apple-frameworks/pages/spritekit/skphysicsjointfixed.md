> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsjointfixed](https://developer.apple.com/documentation/spritekit/skphysicsjointfixed)

# SKPhysicsJointFixed (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A joint that fuses two physics bodies together at a reference point.

## Declaration

```swift
class SKPhysicsJointFixed
```

<a id="overview"></a>

## Overview

An [SKPhysicsJointFixed](skphysicsjointfixed.md) object fuses two physics bodies together at a reference point. Fixed joints are useful for creating complex shapes that can be broken apart later.

## Topics

### Creating a Fixed Joint

- [joint(withBodyA:bodyB:anchor:)](skphysicsjointfixed/joint%28withbodya_bodyb_anchor_%29.md): Creates a new fixed joint.

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
- [SKPhysicsJointLimit](skphysicsjointlimit.md): A joint that imposes a maximum distance between two physics bodies, as if they were connected by a rope.
- [SKPhysicsJointPin](skphysicsjointpin.md): A joint that pins together two physics bodies, allowing independent rotation.
- [SKPhysicsJointSliding](skphysicsjointsliding.md): A joint that allows two physics bodies to slide along an axis.
- [SKPhysicsJointSpring](skphysicsjointspring.md): A joint that simulates a spring connecting two physics bodies.

# SKPhysicsJointFixed (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A joint that fuses two physics bodies together at a reference point.

## Declaration

```objectivec
@interface SKPhysicsJointFixed : SKPhysicsJoint
```

<a id="overview"></a>

## Overview

An [SKPhysicsJointFixed](skphysicsjointfixed.md) object fuses two physics bodies together at a reference point. Fixed joints are useful for creating complex shapes that can be broken apart later.

## Topics

### Creating a Fixed Joint

- [jointWithBodyA:bodyB:anchor:](skphysicsjointfixed/joint%28withbodya_bodyb_anchor_%29.md): Creates a new fixed joint.

## Relationships

### Inherits From

- [SKPhysicsJoint](skphysicsjoint.md)

## See Also

### Physics Joints

- [Working with Inverse Kinematics](working-with-inverse-kinematics.md): Gain fine-tuned control of objects that are connected by joints.
- [SKPhysicsJoint](skphysicsjoint.md): The abstract superclass for objects that connect physics bodies.
- [SKPhysicsJointLimit](skphysicsjointlimit.md): A joint that imposes a maximum distance between two physics bodies, as if they were connected by a rope.
- [SKPhysicsJointPin](skphysicsjointpin.md): A joint that pins together two physics bodies, allowing independent rotation.
- [SKPhysicsJointSliding](skphysicsjointsliding.md): A joint that allows two physics bodies to slide along an axis.
- [SKPhysicsJointSpring](skphysicsjointspring.md): A joint that simulates a spring connecting two physics bodies.
