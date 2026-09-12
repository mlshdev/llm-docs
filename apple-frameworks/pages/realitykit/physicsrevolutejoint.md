> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsrevolutejoint](https://developer.apple.com/documentation/realitykit/physicsrevolutejoint)

# PhysicsRevoluteJoint

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A joint that allows one degree of rotational freedom between two entity pins, similar to a door swinging on its hinges.

## Declaration

```swift
struct PhysicsRevoluteJoint
```

<a id="overview"></a>

## Overview

`PhysicsRevoluteJoint` allows one rotational degree of freedom along the x-axis of two entity pins.

> **Tip**

> Pass an orientation when creating the [GeometricPin](geometricpin.md) instances to change the axis of rotation.

## Topics

### Initializers

- [init(pin0:pin1:angularLimit:checksForInternalCollisions:)](physicsrevolutejoint/init%28pin0_pin1_angularlimit_checksforinternalcollisions_%29.md): Creates a new revolute joint.

### Instance Properties

- [angularLimit](physicsrevolutejoint/angularlimit.md): A limit of the rotational freedom between the pins around the x-axis.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [PhysicsJoint](physicsjoint.md)

## See Also

### Built-in joint types

- [PhysicsPrismaticJoint](physicsprismaticjoint.md): A joint that allows movement along a straight line, similar to a sliding drawer.
- [PhysicsSphericalJoint](physicssphericaljoint.md): A spherical joint that allows free rotational movement between two entities’ pins.
- [PhysicsCustomJoint](physicscustomjoint.md): A joint with six degrees of freedom that can be individually specified.
- [PhysicsDistanceJoint](physicsdistancejoint.md): A joint that maintains a minimum and maximum distance between two entity pins.
- [PhysicsFixedJoint](physicsfixedjoint.md): A joint that rigidly connects two entity pins, with zero degrees of freedom.
- [PhysicsJoints](physicsjoints.md): A collection of physics joints.
