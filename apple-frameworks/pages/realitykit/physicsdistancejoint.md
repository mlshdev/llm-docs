> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsdistancejoint](https://developer.apple.com/documentation/realitykit/physicsdistancejoint)

# PhysicsDistanceJoint

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A joint that maintains a minimum and maximum distance between two entity pins.

## Declaration

```swift
struct PhysicsDistanceJoint
```

<a id="overview"></a>

## Overview

A distance joint restricts the distance between `pin0` and `pin1`. The joint determines this closed range according to [distanceLimit](physicsdistancejoint/distancelimit.md).

This joint allows full rotational freedom between `pin0` and `pin1`.

## Topics

### Initializers

- [init(pin0:pin1:distanceLimit:checksForInternalCollisions:)](physicsdistancejoint/init%28pin0_pin1_distancelimit_checksforinternalcollisions_%29.md): Creates a new distance joint.

### Instance Properties

- [distanceLimit](physicsdistancejoint/distancelimit.md): Specifies the minimum and maximum allowed distance between the pins.
- [tolerance](physicsdistancejoint/tolerance.md): An extension of the distance limit, as a percentage-based error tolerance.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [PhysicsJoint](physicsjoint.md)

## See Also

### Built-in joint types

- [PhysicsRevoluteJoint](physicsrevolutejoint.md): A joint that allows one degree of rotational freedom between two entity pins, similar to a door swinging on its hinges.
- [PhysicsPrismaticJoint](physicsprismaticjoint.md): A joint that allows movement along a straight line, similar to a sliding drawer.
- [PhysicsSphericalJoint](physicssphericaljoint.md): A spherical joint that allows free rotational movement between two entities’ pins.
- [PhysicsCustomJoint](physicscustomjoint.md): A joint with six degrees of freedom that can be individually specified.
- [PhysicsFixedJoint](physicsfixedjoint.md): A joint that rigidly connects two entity pins, with zero degrees of freedom.
- [PhysicsJoints](physicsjoints.md): A collection of physics joints.
