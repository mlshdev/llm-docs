> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsballsocketjoint](https://developer.apple.com/documentation/scenekit/scnphysicsballsocketjoint)

# SCNPhysicsBallSocketJoint (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A physics behavior that connects two physics bodies and allows them to pivot around each other in any direction.

## Declaration

```swift
class SCNPhysicsBallSocketJoint
```

<a id="overview"></a>

## Overview

A ball and socket joint has three rotational degrees of freedom and zero translational degrees of freedom. You can also use a ball and socket joint to pin a body to a specific location in the coordinate space of the node containing it while allowing it to rotate freely.

## Topics

### Creating a Ball and Socket Joint

- [init(bodyA:anchorA:bodyB:anchorB:)](scnphysicsballsocketjoint/init%28bodya_anchora_bodyb_anchorb_%29.md): Creates a ball and socket joint connecting two physics bodies.
- [init(body:anchor:)](scnphysicsballsocketjoint/init%28body_anchor_%29.md): Creates a ball and socket joint that anchors a single physics body in space and allows it to rotate freely around an anchor point.

### Managing the Characteristics of a Ball and Socket Joint

- [bodyA](scnphysicsballsocketjoint/bodya.md): The first physics body connected by the joint.
- [anchorA](scnphysicsballsocketjoint/anchora.md): The point at which the joint connects, relative to the node containing the first body.
- [bodyB](scnphysicsballsocketjoint/bodyb.md): The second physics body connected by the joint.
- [anchorB](scnphysicsballsocketjoint/anchorb.md): The point at which the joint connects, relative to the node containing the second body.

## Relationships

### Inherits From

- [SCNPhysicsBehavior](scnphysicsbehavior.md)

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

### Joints

- [SCNPhysicsHingeJoint](scnphysicshingejoint.md): A physics behavior that connects two bodies and allows them to pivot around each other on a single axis.
- [SCNPhysicsSliderJoint](scnphysicssliderjoint.md): A physics behavior that connects two bodies and allows them to slide against each other and rotate around their connecting points.
- [SCNPhysicsConeTwistJoint](scnphysicsconetwistjoint.md)

# SCNPhysicsBallSocketJoint (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A physics behavior that connects two physics bodies and allows them to pivot around each other in any direction.

## Declaration

```objectivec
@interface SCNPhysicsBallSocketJoint : SCNPhysicsBehavior
```

<a id="overview"></a>

## Overview

A ball and socket joint has three rotational degrees of freedom and zero translational degrees of freedom. You can also use a ball and socket joint to pin a body to a specific location in the coordinate space of the node containing it while allowing it to rotate freely.

## Topics

### Creating a Ball and Socket Joint

- [jointWithBodyA:anchorA:bodyB:anchorB:](scnphysicsballsocketjoint/init%28bodya_anchora_bodyb_anchorb_%29.md): Creates a ball and socket joint connecting two physics bodies.
- [jointWithBody:anchor:](scnphysicsballsocketjoint/init%28body_anchor_%29.md): Creates a ball and socket joint that anchors a single physics body in space and allows it to rotate freely around an anchor point.

### Managing the Characteristics of a Ball and Socket Joint

- [bodyA](scnphysicsballsocketjoint/bodya.md): The first physics body connected by the joint.
- [anchorA](scnphysicsballsocketjoint/anchora.md): The point at which the joint connects, relative to the node containing the first body.
- [bodyB](scnphysicsballsocketjoint/bodyb.md): The second physics body connected by the joint.
- [anchorB](scnphysicsballsocketjoint/anchorb.md): The point at which the joint connects, relative to the node containing the second body.

## Relationships

### Inherits From

- [SCNPhysicsBehavior](scnphysicsbehavior.md)

## See Also

### Joints

- [SCNPhysicsHingeJoint](scnphysicshingejoint.md): A physics behavior that connects two bodies and allows them to pivot around each other on a single axis.
- [SCNPhysicsSliderJoint](scnphysicssliderjoint.md): A physics behavior that connects two bodies and allows them to slide against each other and rotate around their connecting points.
- [SCNPhysicsConeTwistJoint](scnphysicsconetwistjoint.md)
