> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsjointpin](https://developer.apple.com/documentation/spritekit/skphysicsjointpin)

# SKPhysicsJointPin (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A joint that pins together two physics bodies, allowing independent rotation.

## Declaration

```swift
class SKPhysicsJointPin
```

## Mentioned In

- [Pinning and Rotating Physics Bodies](pinning-and-rotating-physics-bodies.md)
- [Connecting Bodies with Joints](connecting-bodies-with-joints.md)

<a id="overview"></a>

## Overview

An [SKPhysicsJointPin](skphysicsjointpin.md) object allows two physics bodies to independently rotate around the anchor point as if pinned together. You can configure how far the two objects may rotate and the resistance to rotation.

## Topics

### Creating a Pin Joint

- [joint(withBodyA:bodyB:anchor:)](skphysicsjointpin/joint%28withbodya_bodyb_anchor_%29.md): Creates a new pin joint.

### Configuring a Pin Joint

- [rotationSpeed](skphysicsjointpin/rotationspeed.md): The speed, in radians per second, at which the physics bodies are driven around the pin joint.
- [shouldEnableLimits](skphysicsjointpin/shouldenablelimits.md): A Boolean value that indicates whether the pin joint’s rotation is limited to a specific range of values.
- [lowerAngleLimit](skphysicsjointpin/loweranglelimit.md): The smallest angle allowed for the pin joint, in radians.
- [upperAngleLimit](skphysicsjointpin/upperanglelimit.md): The largest angle allowed for the pin joint, in radians.
- [frictionTorque](skphysicsjointpin/frictiontorque.md): The resistance applied by the pin joint to spinning around the anchor point.

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
- [SKPhysicsJointSliding](skphysicsjointsliding.md): A joint that allows two physics bodies to slide along an axis.
- [SKPhysicsJointSpring](skphysicsjointspring.md): A joint that simulates a spring connecting two physics bodies.

# SKPhysicsJointPin (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A joint that pins together two physics bodies, allowing independent rotation.

## Declaration

```objectivec
@interface SKPhysicsJointPin : SKPhysicsJoint
```

## Mentioned In

- [Pinning and Rotating Physics Bodies](pinning-and-rotating-physics-bodies.md)
- [Connecting Bodies with Joints](connecting-bodies-with-joints.md)

<a id="overview"></a>

## Overview

An [SKPhysicsJointPin](skphysicsjointpin.md) object allows two physics bodies to independently rotate around the anchor point as if pinned together. You can configure how far the two objects may rotate and the resistance to rotation.

## Topics

### Creating a Pin Joint

- [jointWithBodyA:bodyB:anchor:](skphysicsjointpin/joint%28withbodya_bodyb_anchor_%29.md): Creates a new pin joint.

### Configuring a Pin Joint

- [rotationSpeed](skphysicsjointpin/rotationspeed.md): The speed, in radians per second, at which the physics bodies are driven around the pin joint.
- [shouldEnableLimits](skphysicsjointpin/shouldenablelimits.md): A Boolean value that indicates whether the pin joint’s rotation is limited to a specific range of values.
- [lowerAngleLimit](skphysicsjointpin/loweranglelimit.md): The smallest angle allowed for the pin joint, in radians.
- [upperAngleLimit](skphysicsjointpin/upperanglelimit.md): The largest angle allowed for the pin joint, in radians.
- [frictionTorque](skphysicsjointpin/frictiontorque.md): The resistance applied by the pin joint to spinning around the anchor point.

## Relationships

### Inherits From

- [SKPhysicsJoint](skphysicsjoint.md)

## See Also

### Physics Joints

- [Working with Inverse Kinematics](working-with-inverse-kinematics.md): Gain fine-tuned control of objects that are connected by joints.
- [SKPhysicsJoint](skphysicsjoint.md): The abstract superclass for objects that connect physics bodies.
- [SKPhysicsJointFixed](skphysicsjointfixed.md): A joint that fuses two physics bodies together at a reference point.
- [SKPhysicsJointLimit](skphysicsjointlimit.md): A joint that imposes a maximum distance between two physics bodies, as if they were connected by a rope.
- [SKPhysicsJointSliding](skphysicsjointsliding.md): A joint that allows two physics bodies to slide along an axis.
- [SKPhysicsJointSpring](skphysicsjointspring.md): A joint that simulates a spring connecting two physics bodies.
