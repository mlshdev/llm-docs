> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsfixedjoint](https://developer.apple.com/documentation/realitykit/physicsfixedjoint)

# PhysicsFixedJoint

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A joint that rigidly connects two entity pins, with zero degrees of freedom.

## Declaration

```swift
struct PhysicsFixedJoint
```

<a id="overview"></a>

## Overview

A fixed joint connects two [GeometricPin](geometricpin.md) instances, `pin0` and `pin1`, so that their poses coincide.

There are zero degrees of rotational or linear freedom between the two pins.

## Topics

### Initializers

- [init(pin0:pin1:)](physicsfixedjoint/init%28pin0_pin1_%29.md): Creates a new fixed joint.

### Instance Properties

- [checksForInternalCollisions](physicsfixedjoint/checksforinternalcollisions.md): A Boolean that indicates whether the joint checks and reports collisions between the two entity instances.

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
- [PhysicsDistanceJoint](physicsdistancejoint.md): A joint that maintains a minimum and maximum distance between two entity pins.
- [PhysicsJoints](physicsjoints.md): A collection of physics joints.
