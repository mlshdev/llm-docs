> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicssliderjoint](https://developer.apple.com/documentation/scenekit/scnphysicssliderjoint)

# SCNPhysicsSliderJoint (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A physics behavior that connects two bodies and allows them to slide against each other and rotate around their connecting points.

## Declaration

```swift
class SCNPhysicsSliderJoint
```

<a id="overview"></a>

## Overview

A slider joint can have zero, one, or two degrees of freedom depending on whether you allow it to slide or rotate. You can also use a slider joint to pin a body so that it can move only by sliding a specific axis in the coordinate space of the node containing it. You can also use a slider joint as a motor, applying a force or torque to the bodies it connects.

## Topics

### Creating a Slider Joint

- [init(bodyA:axisA:anchorA:bodyB:axisB:anchorB:)](scnphysicssliderjoint/init%28bodya_axisa_anchora_bodyb_axisb_anchorb_%29.md): Creates a slider joint connecting two physics bodies.
- [init(body:axis:anchor:)](scnphysicssliderjoint/init%28body_axis_anchor_%29.md): Creates a slider joint that anchors a single physics body in space and allows it to slide along a specific axis.

### Managing the Characteristics of a Slider Joint

- [bodyA](scnphysicssliderjoint/bodya.md): The first physics body connected by the joint.
- [axisA](scnphysicssliderjoint/axisa.md): The axis along which the first body can slide, relative to the node containing it.
- [anchorA](scnphysicssliderjoint/anchora.md): The point at which the joint connects, relative to the node containing the first body.
- [bodyB](scnphysicssliderjoint/bodyb.md): The second physics body connected by the joint.
- [axisB](scnphysicssliderjoint/axisb.md): The axis along which the second body can slide, relative to the node containing it.
- [anchorB](scnphysicssliderjoint/anchorb.md): The point at which the joint connects, relative to the node containing the second body.

### Limiting the Motion of a Slider Joint

- [minimumLinearLimit](scnphysicssliderjoint/minimumlinearlimit.md): The minimum distance between the anchor points of the two bodies, relative to their initial positions.
- [maximumLinearLimit](scnphysicssliderjoint/maximumlinearlimit.md): The maximum distance between the anchor points of the two bodies, relative to their initial positions.
- [minimumAngularLimit](scnphysicssliderjoint/minimumangularlimit.md): The minimum rotation angle between the two bodies, measured in radians relative to their initial orientations.
- [maximumAngularLimit](scnphysicssliderjoint/maximumangularlimit.md): The maximum rotation angle between the two bodies, measured in radians relative to their initial orientations.

### Applying Forces and Torques

- [motorTargetLinearVelocity](scnphysicssliderjoint/motortargetlinearvelocity.md): The velocity at which the joint’s connected bodies should slide.
- [motorMaximumForce](scnphysicssliderjoint/motormaximumforce.md): The maximum linear force that the joint can apply to its connected bodies, in newtons.
- [motorTargetAngularVelocity](scnphysicssliderjoint/motortargetangularvelocity.md): The angular velocity at which the joint’s connected bodies should rotate around it.
- [motorMaximumTorque](scnphysicssliderjoint/motormaximumtorque.md): The maximum torque that the joint can apply to its connected bodies, in newton-meters.

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
- [SCNPhysicsBallSocketJoint](scnphysicsballsocketjoint.md): A physics behavior that connects two physics bodies and allows them to pivot around each other in any direction.
- [SCNPhysicsConeTwistJoint](scnphysicsconetwistjoint.md)

# SCNPhysicsSliderJoint (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A physics behavior that connects two bodies and allows them to slide against each other and rotate around their connecting points.

## Declaration

```objectivec
@interface SCNPhysicsSliderJoint : SCNPhysicsBehavior
```

<a id="overview"></a>

## Overview

A slider joint can have zero, one, or two degrees of freedom depending on whether you allow it to slide or rotate. You can also use a slider joint to pin a body so that it can move only by sliding a specific axis in the coordinate space of the node containing it. You can also use a slider joint as a motor, applying a force or torque to the bodies it connects.

## Topics

### Creating a Slider Joint

- [jointWithBodyA:axisA:anchorA:bodyB:axisB:anchorB:](scnphysicssliderjoint/init%28bodya_axisa_anchora_bodyb_axisb_anchorb_%29.md): Creates a slider joint connecting two physics bodies.
- [jointWithBody:axis:anchor:](scnphysicssliderjoint/init%28body_axis_anchor_%29.md): Creates a slider joint that anchors a single physics body in space and allows it to slide along a specific axis.

### Managing the Characteristics of a Slider Joint

- [bodyA](scnphysicssliderjoint/bodya.md): The first physics body connected by the joint.
- [axisA](scnphysicssliderjoint/axisa.md): The axis along which the first body can slide, relative to the node containing it.
- [anchorA](scnphysicssliderjoint/anchora.md): The point at which the joint connects, relative to the node containing the first body.
- [bodyB](scnphysicssliderjoint/bodyb.md): The second physics body connected by the joint.
- [axisB](scnphysicssliderjoint/axisb.md): The axis along which the second body can slide, relative to the node containing it.
- [anchorB](scnphysicssliderjoint/anchorb.md): The point at which the joint connects, relative to the node containing the second body.

### Limiting the Motion of a Slider Joint

- [minimumLinearLimit](scnphysicssliderjoint/minimumlinearlimit.md): The minimum distance between the anchor points of the two bodies, relative to their initial positions.
- [maximumLinearLimit](scnphysicssliderjoint/maximumlinearlimit.md): The maximum distance between the anchor points of the two bodies, relative to their initial positions.
- [minimumAngularLimit](scnphysicssliderjoint/minimumangularlimit.md): The minimum rotation angle between the two bodies, measured in radians relative to their initial orientations.
- [maximumAngularLimit](scnphysicssliderjoint/maximumangularlimit.md): The maximum rotation angle between the two bodies, measured in radians relative to their initial orientations.

### Applying Forces and Torques

- [motorTargetLinearVelocity](scnphysicssliderjoint/motortargetlinearvelocity.md): The velocity at which the joint’s connected bodies should slide.
- [motorMaximumForce](scnphysicssliderjoint/motormaximumforce.md): The maximum linear force that the joint can apply to its connected bodies, in newtons.
- [motorTargetAngularVelocity](scnphysicssliderjoint/motortargetangularvelocity.md): The angular velocity at which the joint’s connected bodies should rotate around it.
- [motorMaximumTorque](scnphysicssliderjoint/motormaximumtorque.md): The maximum torque that the joint can apply to its connected bodies, in newton-meters.

## Relationships

### Inherits From

- [SCNPhysicsBehavior](scnphysicsbehavior.md)

## See Also

### Joints

- [SCNPhysicsHingeJoint](scnphysicshingejoint.md): A physics behavior that connects two bodies and allows them to pivot around each other on a single axis.
- [SCNPhysicsBallSocketJoint](scnphysicsballsocketjoint.md): A physics behavior that connects two physics bodies and allows them to pivot around each other in any direction.
- [SCNPhysicsConeTwistJoint](scnphysicsconetwistjoint.md)
