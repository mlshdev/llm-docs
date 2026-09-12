> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicssphericaljoint](https://developer.apple.com/documentation/realitykit/physicssphericaljoint)

# PhysicsSphericalJoint

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A spherical joint that allows free rotational movement between two entities’ pins.

## Declaration

```swift
struct PhysicsSphericalJoint
```

<a id="overview"></a>

## Overview

This joint has three rotational degrees of freedom and removes all translational degrees of freedom by making the positions of `pin0` and `pin1` coincide. This is also called a “ball-socket joint”.

To add limits to the rotational freedom of `pin1`, define a tuple value for [angularLimitInYZ](physicssphericaljoint/angularlimitinyz.md). This tuple defines an elliptical cone shape around the x-axis of `pin0`, which limits the rotational freedom of `pin1`. The rotation around the x-axis is never limited with this joint.

> **Tip**

> Pass an orientation when creating the [GeometricPin](geometricpin.md) instances to change the axis of rotation.

## Topics

### Initializers

- [init(pin0:pin1:angularLimitInYZ:checksForInternalCollisions:)](physicssphericaljoint/init%28pin0_pin1_angularlimitinyz_checksforinternalcollisions_%29.md): Creates a new spherical joint.

### Instance Properties

- [angularLimitInYZ](physicssphericaljoint/angularlimitinyz.md): A cone-shaped limit of rotational freedom.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [PhysicsJoint](physicsjoint.md)

## See Also

### Built-in joint types

- [PhysicsRevoluteJoint](physicsrevolutejoint.md): A joint that allows one degree of rotational freedom between two entity pins, similar to a door swinging on its hinges.
- [PhysicsPrismaticJoint](physicsprismaticjoint.md): A joint that allows movement along a straight line, similar to a sliding drawer.
- [PhysicsCustomJoint](physicscustomjoint.md): A joint with six degrees of freedom that can be individually specified.
- [PhysicsDistanceJoint](physicsdistancejoint.md): A joint that maintains a minimum and maximum distance between two entity pins.
- [PhysicsFixedJoint](physicsfixedjoint.md): A joint that rigidly connects two entity pins, with zero degrees of freedom.
- [PhysicsJoints](physicsjoints.md): A collection of physics joints.
