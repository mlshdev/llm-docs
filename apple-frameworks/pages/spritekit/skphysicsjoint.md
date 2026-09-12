> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsjoint](https://developer.apple.com/documentation/spritekit/skphysicsjoint)

# SKPhysicsJoint (Swift)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The abstract superclass for objects that connect physics bodies.

## Declaration

```swift
class SKPhysicsJoint
```

## Mentioned In

- [Getting Started with Physics](getting-started-with-physics.md)

<a id="overview"></a>

## Overview

An [SKPhysicsJoint](skphysicsjoint.md) object connects two physics bodies so that they are simulated together by the physics world. You never instantiate objects of this class directly; instead, you instantiate one of the subclasses that defines the kind of joint you want to make.

## Topics

### Connecting Bodies with Joints

- [Connecting Bodies with Joints](connecting-bodies-with-joints.md): Add joints to nodes in your scene.

### Disconnecting Bodies from Joints

- [Disconnecting Bodies from Joints](disconnecting-bodies-from-joints.md): Disconnect joints from nodes in your scene.

### Accessing or Setting a Joint’s Bodies

- [bodyA](skphysicsjoint/bodya.md): The first body connected by the joint.
- [bodyB](skphysicsjoint/bodyb.md): The second body connected by the joint.

### Reading the Stress and Speed that Are Currently Applied to a Joint

- [reactionForce](skphysicsjoint/reactionforce.md): The instantaneous reaction force, in newtons, currently being directed at the anchor point.
- [reactionTorque](skphysicsjoint/reactiontorque.md): Instantaneous reaction torque, in newton-meters, currently being directed at the anchor point.

### Initializers

- [init(coder:)](skphysicsjoint/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SKPhysicsJointFixed](skphysicsjointfixed.md)
- [SKPhysicsJointLimit](skphysicsjointlimit.md)
- [SKPhysicsJointPin](skphysicsjointpin.md)
- [SKPhysicsJointSliding](skphysicsjointsliding.md)
- [SKPhysicsJointSpring](skphysicsjointspring.md)

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
- [SKPhysicsJointFixed](skphysicsjointfixed.md): A joint that fuses two physics bodies together at a reference point.
- [SKPhysicsJointLimit](skphysicsjointlimit.md): A joint that imposes a maximum distance between two physics bodies, as if they were connected by a rope.
- [SKPhysicsJointPin](skphysicsjointpin.md): A joint that pins together two physics bodies, allowing independent rotation.
- [SKPhysicsJointSliding](skphysicsjointsliding.md): A joint that allows two physics bodies to slide along an axis.
- [SKPhysicsJointSpring](skphysicsjointspring.md): A joint that simulates a spring connecting two physics bodies.

# SKPhysicsJoint (Objective-C)

**Framework:** SpriteKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The abstract superclass for objects that connect physics bodies.

## Declaration

```objectivec
@interface SKPhysicsJoint : NSObject
```

## Mentioned In

- [Getting Started with Physics](getting-started-with-physics.md)

<a id="overview"></a>

## Overview

An [SKPhysicsJoint](skphysicsjoint.md) object connects two physics bodies so that they are simulated together by the physics world. You never instantiate objects of this class directly; instead, you instantiate one of the subclasses that defines the kind of joint you want to make.

## Topics

### Connecting Bodies with Joints

- [Connecting Bodies with Joints](connecting-bodies-with-joints.md): Add joints to nodes in your scene.

### Disconnecting Bodies from Joints

- [Disconnecting Bodies from Joints](disconnecting-bodies-from-joints.md): Disconnect joints from nodes in your scene.

### Accessing or Setting a Joint’s Bodies

- [bodyA](skphysicsjoint/bodya.md): The first body connected by the joint.
- [bodyB](skphysicsjoint/bodyb.md): The second body connected by the joint.

### Reading the Stress and Speed that Are Currently Applied to a Joint

- [reactionForce](skphysicsjoint/reactionforce.md): The instantaneous reaction force, in newtons, currently being directed at the anchor point.
- [reactionTorque](skphysicsjoint/reactiontorque.md): Instantaneous reaction torque, in newton-meters, currently being directed at the anchor point.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [SKPhysicsJointFixed](skphysicsjointfixed.md)
- [SKPhysicsJointLimit](skphysicsjointlimit.md)
- [SKPhysicsJointPin](skphysicsjointpin.md)
- [SKPhysicsJointSliding](skphysicsjointsliding.md)
- [SKPhysicsJointSpring](skphysicsjointspring.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Physics Joints

- [Working with Inverse Kinematics](working-with-inverse-kinematics.md): Gain fine-tuned control of objects that are connected by joints.
- [SKPhysicsJointFixed](skphysicsjointfixed.md): A joint that fuses two physics bodies together at a reference point.
- [SKPhysicsJointLimit](skphysicsjointlimit.md): A joint that imposes a maximum distance between two physics bodies, as if they were connected by a rope.
- [SKPhysicsJointPin](skphysicsjointpin.md): A joint that pins together two physics bodies, allowing independent rotation.
- [SKPhysicsJointSliding](skphysicsjointsliding.md): A joint that allows two physics bodies to slide along an axis.
- [SKPhysicsJointSpring](skphysicsjointspring.md): A joint that simulates a spring connecting two physics bodies.
