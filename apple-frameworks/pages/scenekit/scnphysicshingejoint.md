> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicshingejoint](https://developer.apple.com/documentation/scenekit/scnphysicshingejoint)

# SCNPhysicsHingeJoint (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A physics behavior that connects two bodies and allows them to pivot around each other on a single axis.

## Declaration

```swift
class SCNPhysicsHingeJoint
```

<a id="overview"></a>

## Overview

A hinge has a single degree of freedom (rotation). You can also use a hinge joint to pin a body so that it can only move by rotating around a specific axis in the coordinate space of the node containing it.

## Topics

### Creating a Hinge Joint

- [init(bodyA:axisA:anchorA:bodyB:axisB:anchorB:)](scnphysicshingejoint/init%28bodya_axisa_anchora_bodyb_axisb_anchorb_%29.md): Creates a hinge joint connecting two physics bodies.
- [init(body:axis:anchor:)](scnphysicshingejoint/init%28body_axis_anchor_%29.md): Creates a hinge joint that anchors a single physics body in space and lets it rotate around a specific axis.

### Managing the Characteristics of a Hinge Joint

- [bodyA](scnphysicshingejoint/bodya.md): The first physics body connected by the joint.
- [axisA](scnphysicshingejoint/axisa.md): The axis that the hinge pivots around, relative to the node containing the first body.
- [anchorA](scnphysicshingejoint/anchora.md): The point at which the hinge connects, relative to the node containing the first body.
- [bodyB](scnphysicshingejoint/bodyb.md): The second physics body connected by the joint.
- [axisB](scnphysicshingejoint/axisb.md): The axis that the hinge pivots around, relative to the node containing the second body.
- [anchorB](scnphysicshingejoint/anchorb.md): The point at which the hinge connects, relative to the node containing the second body.

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

- [SCNPhysicsSliderJoint](scnphysicssliderjoint.md): A physics behavior that connects two bodies and allows them to slide against each other and rotate around their connecting points.
- [SCNPhysicsBallSocketJoint](scnphysicsballsocketjoint.md): A physics behavior that connects two physics bodies and allows them to pivot around each other in any direction.
- [SCNPhysicsConeTwistJoint](scnphysicsconetwistjoint.md)

# SCNPhysicsHingeJoint (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A physics behavior that connects two bodies and allows them to pivot around each other on a single axis.

## Declaration

```objectivec
@interface SCNPhysicsHingeJoint : SCNPhysicsBehavior
```

<a id="overview"></a>

## Overview

A hinge has a single degree of freedom (rotation). You can also use a hinge joint to pin a body so that it can only move by rotating around a specific axis in the coordinate space of the node containing it.

## Topics

### Creating a Hinge Joint

- [jointWithBodyA:axisA:anchorA:bodyB:axisB:anchorB:](scnphysicshingejoint/init%28bodya_axisa_anchora_bodyb_axisb_anchorb_%29.md): Creates a hinge joint connecting two physics bodies.
- [jointWithBody:axis:anchor:](scnphysicshingejoint/init%28body_axis_anchor_%29.md): Creates a hinge joint that anchors a single physics body in space and lets it rotate around a specific axis.

### Managing the Characteristics of a Hinge Joint

- [bodyA](scnphysicshingejoint/bodya.md): The first physics body connected by the joint.
- [axisA](scnphysicshingejoint/axisa.md): The axis that the hinge pivots around, relative to the node containing the first body.
- [anchorA](scnphysicshingejoint/anchora.md): The point at which the hinge connects, relative to the node containing the first body.
- [bodyB](scnphysicshingejoint/bodyb.md): The second physics body connected by the joint.
- [axisB](scnphysicshingejoint/axisb.md): The axis that the hinge pivots around, relative to the node containing the second body.
- [anchorB](scnphysicshingejoint/anchorb.md): The point at which the hinge connects, relative to the node containing the second body.

## Relationships

### Inherits From

- [SCNPhysicsBehavior](scnphysicsbehavior.md)

## See Also

### Joints

- [SCNPhysicsSliderJoint](scnphysicssliderjoint.md): A physics behavior that connects two bodies and allows them to slide against each other and rotate around their connecting points.
- [SCNPhysicsBallSocketJoint](scnphysicsballsocketjoint.md): A physics behavior that connects two physics bodies and allows them to pivot around each other in any direction.
- [SCNPhysicsConeTwistJoint](scnphysicsconetwistjoint.md)
