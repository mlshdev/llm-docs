> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/usesdefaultmomentofinertia](https://developer.apple.com/documentation/scenekit/scnphysicsbody/usesdefaultmomentofinertia)

# usesDefaultMomentOfInertia (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether SceneKit automatically calculates the body’s moment of inertia or allows setting a custom value.

## Declaration

```swift
var usesDefaultMomentOfInertia: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

A body’s moment of inertia determines how it responds to torques (that is, forces with a rotational component).

If this property is [true](https://developer.apple.com/documentation/swift/true) (the default), SceneKit automatically determines the body’s moment of inertia based on its shape and mass. Set this property to [false](https://developer.apple.com/documentation/swift/false) and use the [momentOfInertia](momentofinertia.md) property to define a custom moment of inertia (for example, to model an object of non-uniform density).

## See Also

### Defining a Body’s Physical Properties

- [mass](mass.md): The mass of the body, in kilograms.
- [charge](charge.md): The electric charge of the body, in coulombs.
- [friction](friction.md): The body’s resistance to sliding motion.
- [rollingFriction](rollingfriction.md): The body’s resistance to rolling motion.
- [restitution](restitution.md): A factor that determines how much kinetic energy the body loses or gains in collisions.
- [damping](damping.md): A factor that reduces the body’s linear velocity.
- [angularDamping](angulardamping.md): A factor that reduces the body’s angular velocity.
- [momentOfInertia](momentofinertia.md): The body’s moment of inertia, expressed in the local coordinate system of the node that contains the body.
- [centerOfMassOffset](centerofmassoffset.md): The position of the body’s center of mass relative to its local coordinate origin.

# usesDefaultMomentOfInertia (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that determines whether SceneKit automatically calculates the body’s moment of inertia or allows setting a custom value.

## Declaration

```objectivec
@property (nonatomic) BOOL usesDefaultMomentOfInertia;
```

<a id="Discussion"></a>

## Discussion

A body’s moment of inertia determines how it responds to torques (that is, forces with a rotational component).

If this property is [true](https://developer.apple.com/documentation/swift/true) (the default), SceneKit automatically determines the body’s moment of inertia based on its shape and mass. Set this property to [false](https://developer.apple.com/documentation/swift/false) and use the [momentOfInertia](momentofinertia.md) property to define a custom moment of inertia (for example, to model an object of non-uniform density).

## See Also

### Defining a Body’s Physical Properties

- [mass](mass.md): The mass of the body, in kilograms.
- [charge](charge.md): The electric charge of the body, in coulombs.
- [friction](friction.md): The body’s resistance to sliding motion.
- [rollingFriction](rollingfriction.md): The body’s resistance to rolling motion.
- [restitution](restitution.md): A factor that determines how much kinetic energy the body loses or gains in collisions.
- [damping](damping.md): A factor that reduces the body’s linear velocity.
- [angularDamping](angulardamping.md): A factor that reduces the body’s angular velocity.
- [momentOfInertia](momentofinertia.md): The body’s moment of inertia, expressed in the local coordinate system of the node that contains the body.
- [centerOfMassOffset](centerofmassoffset.md): The position of the body’s center of mass relative to its local coordinate origin.
