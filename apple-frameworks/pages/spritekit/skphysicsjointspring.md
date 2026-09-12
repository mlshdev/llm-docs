> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsjointspring](https://developer.apple.com/documentation/spritekit/skphysicsjointspring)

# SKPhysicsJointSpring (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A joint that simulates a spring connecting two physics bodies.

## Declaration

```swift
class SKPhysicsJointSpring
```

## Mentioned In

- [Getting Started with Spring Joints](getting-started-with-spring-joints.md)

<a id="overview"></a>

## Overview

An [SKPhysicsJointSpring](skphysicsjointspring.md) object simulates connecting two physics bodies together with a spring. The farther the two objects move from each other, the more force is applied to bring the two bodies back together.

## Topics

### First Steps

- [Getting Started with Spring Joints](getting-started-with-spring-joints.md): Connect two physics bodies with a spring joint.

### Creating a Spring Joint

- [joint(withBodyA:bodyB:anchorA:anchorB:)](skphysicsjointspring/joint%28withbodya_bodyb_anchora_anchorb_%29.md): Creates a new spring joint.

### Configuring a Spring Joint

- [damping](skphysicsjointspring/damping.md): Defines how the spring’s motion should be damped due to the forces of friction.
- [frequency](skphysicsjointspring/frequency.md): Defines the frequency or stiffness characteristics of the spring.

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
- [SKPhysicsJointSliding](skphysicsjointsliding.md): A joint that allows two physics bodies to slide along an axis.

# SKPhysicsJointSpring (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A joint that simulates a spring connecting two physics bodies.

## Declaration

```objectivec
@interface SKPhysicsJointSpring : SKPhysicsJoint
```

## Mentioned In

- [Getting Started with Spring Joints](getting-started-with-spring-joints.md)

<a id="overview"></a>

## Overview

An [SKPhysicsJointSpring](skphysicsjointspring.md) object simulates connecting two physics bodies together with a spring. The farther the two objects move from each other, the more force is applied to bring the two bodies back together.

## Topics

### First Steps

- [Getting Started with Spring Joints](getting-started-with-spring-joints.md): Connect two physics bodies with a spring joint.

### Creating a Spring Joint

- [jointWithBodyA:bodyB:anchorA:anchorB:](skphysicsjointspring/joint%28withbodya_bodyb_anchora_anchorb_%29.md): Creates a new spring joint.

### Configuring a Spring Joint

- [damping](skphysicsjointspring/damping.md): Defines how the spring’s motion should be damped due to the forces of friction.
- [frequency](skphysicsjointspring/frequency.md): Defines the frequency or stiffness characteristics of the spring.

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
- [SKPhysicsJointSliding](skphysicsjointsliding.md): A joint that allows two physics bodies to slide along an axis.
