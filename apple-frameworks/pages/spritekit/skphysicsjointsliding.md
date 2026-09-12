> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsjointsliding](https://developer.apple.com/documentation/spritekit/skphysicsjointsliding)

# SKPhysicsJointSliding (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A joint that allows two physics bodies to slide along an axis.

## Declaration

```swift
class SKPhysicsJointSliding
```

<a id="overview"></a>

## Overview

An [SKPhysicsJointSliding](skphysicsjointsliding.md) object allows the anchor points of the two physics bodies to slide along a chosen axis. The joint can be configured to limit the distance that the two objects are allowed to slide along the axis.

## Topics

### Creating a Sliding Joint

- [joint(withBodyA:bodyB:anchor:axis:)](skphysicsjointsliding/joint%28withbodya_bodyb_anchor_axis_%29.md): Creates a new sliding joint.

### Configuring a Sliding Joint

- [shouldEnableLimits](skphysicsjointsliding/shouldenablelimits.md): A Boolean value that indicates whether the sliding joint is restricted so that the objects may only slide a finite distance from the initial anchor point.
- [lowerDistanceLimit](skphysicsjointsliding/lowerdistancelimit.md): The smallest distance allowed for the sliding joint.
- [upperDistanceLimit](skphysicsjointsliding/upperdistancelimit.md): The largest distance allowed for the sliding joint.

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
- [SKPhysicsJointLimit](skphysicsjointlimit.md): A joint that imposes a maximum distance between two physics bodies, as if they were connected by a rope.
- [SKPhysicsJointPin](skphysicsjointpin.md): A joint that pins together two physics bodies, allowing independent rotation.
- [SKPhysicsJointSpring](skphysicsjointspring.md): A joint that simulates a spring connecting two physics bodies.

# SKPhysicsJointSliding (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A joint that allows two physics bodies to slide along an axis.

## Declaration

```objectivec
@interface SKPhysicsJointSliding : SKPhysicsJoint
```

<a id="overview"></a>

## Overview

An [SKPhysicsJointSliding](skphysicsjointsliding.md) object allows the anchor points of the two physics bodies to slide along a chosen axis. The joint can be configured to limit the distance that the two objects are allowed to slide along the axis.

## Topics

### Creating a Sliding Joint

- [jointWithBodyA:bodyB:anchor:axis:](skphysicsjointsliding/joint%28withbodya_bodyb_anchor_axis_%29.md): Creates a new sliding joint.

### Configuring a Sliding Joint

- [shouldEnableLimits](skphysicsjointsliding/shouldenablelimits.md): A Boolean value that indicates whether the sliding joint is restricted so that the objects may only slide a finite distance from the initial anchor point.
- [lowerDistanceLimit](skphysicsjointsliding/lowerdistancelimit.md): The smallest distance allowed for the sliding joint.
- [upperDistanceLimit](skphysicsjointsliding/upperdistancelimit.md): The largest distance allowed for the sliding joint.

## Relationships

### Inherits From

- [SKPhysicsJoint](skphysicsjoint.md)

## See Also

### Physics Joints

- [Working with Inverse Kinematics](working-with-inverse-kinematics.md): Gain fine-tuned control of objects that are connected by joints.
- [SKPhysicsJoint](skphysicsjoint.md): The abstract superclass for objects that connect physics bodies.
- [SKPhysicsJointFixed](skphysicsjointfixed.md): A joint that fuses two physics bodies together at a reference point.
- [SKPhysicsJointLimit](skphysicsjointlimit.md): A joint that imposes a maximum distance between two physics bodies, as if they were connected by a rope.
- [SKPhysicsJointPin](skphysicsjointpin.md): A joint that pins together two physics bodies, allowing independent rotation.
- [SKPhysicsJointSpring](skphysicsjointspring.md): A joint that simulates a spring connecting two physics bodies.
