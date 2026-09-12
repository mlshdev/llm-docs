> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicscustomjoint](https://developer.apple.com/documentation/realitykit/physicscustomjoint)

# PhysicsCustomJoint

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A joint with six degrees of freedom that can be individually specified.

## Declaration

```swift
struct PhysicsCustomJoint
```

<a id="overview"></a>

## Overview

A custom joint allows you to choose the restraints of all 6 degrees of freedom. You can set a [PhysicsCustomJoint.MotionLimit](physicscustomjoint/motionlimit.md) for each degrees’ motion.

> **Note**

> By default all degrees of freedom are locked, similar to [PhysicsFixedJoint](physicsfixedjoint.md).

For example, you can constrain the motion of `pin1` in the xy-plane of `pin0`, set movement along the x-axis to [PhysicsCustomJoint.MotionLimit.unlimited](physicscustomjoint/motionlimit/unlimited.md), and leave all rotations as the default value of [PhysicsCustomJoint.MotionLimit.fixed](physicscustomjoint/motionlimit/fixed.md).

> **Note**

> The xy-plane is a plane that aligns with the x and y axes.

```swift
let joint = PhysicsCustomJoint(
    pin0: entity0pin,
    pin1: entity1pin,
    linearMotionAlongX: .unlimited,
    linearMotionAlongY: .range(-5...5)
)
```

If `pin0` is in a fixed location for the example above, this joint allows `pin1` to move anywhere along the x-axis of `pin0`, and can move up to 5 local meters above or below the y-axis of `pin0`.

## Topics

### Initializers

- [init(pin0:pin1:linearMotionAlongX:linearMotionAlongY:linearMotionAlongZ:angularMotionAroundX:angularMotionAroundY:angularMotionAroundZ:checksForInternalCollisions:)](physicscustomjoint/init%28pin0_pin1_linearmotionalongx_linearmotionalongy_linearmotionalongz_angularmotionaroundx_angularmotionaroundy_angularmotionaroundz_checksforinternalcollisions_%29.md): Creates a new custom joint.

### Instance Properties

- [angularMotionAroundX](physicscustomjoint/angularmotionaroundx.md): The angular motion limits around the x-axis.
- [angularMotionAroundY](physicscustomjoint/angularmotionaroundy.md): The angular motion limits around the y-axis.
- [angularMotionAroundZ](physicscustomjoint/angularmotionaroundz.md): The angular motion limits around the z-axis.
- [linearMotionAlongX](physicscustomjoint/linearmotionalongx.md): The linear motion limits along the x-axis.
- [linearMotionAlongY](physicscustomjoint/linearmotionalongy.md): The linear motion limits along the y-axis.
- [linearMotionAlongZ](physicscustomjoint/linearmotionalongz.md): The linear motion limits along the z-axis.

### Enumerations

- [PhysicsCustomJoint.MotionLimit](physicscustomjoint/motionlimit.md): Specifies allowed linear or angular motion.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [PhysicsJoint](physicsjoint.md)

## See Also

### Built-in joint types

- [PhysicsRevoluteJoint](physicsrevolutejoint.md): A joint that allows one degree of rotational freedom between two entity pins, similar to a door swinging on its hinges.
- [PhysicsPrismaticJoint](physicsprismaticjoint.md): A joint that allows movement along a straight line, similar to a sliding drawer.
- [PhysicsSphericalJoint](physicssphericaljoint.md): A spherical joint that allows free rotational movement between two entities’ pins.
- [PhysicsDistanceJoint](physicsdistancejoint.md): A joint that maintains a minimum and maximum distance between two entity pins.
- [PhysicsFixedJoint](physicsfixedjoint.md): A joint that rigidly connects two entity pins, with zero degrees of freedom.
- [PhysicsJoints](physicsjoints.md): A collection of physics joints.
