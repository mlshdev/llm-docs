> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/momentofinertia](https://developer.apple.com/documentation/scenekit/scnphysicsbody/momentofinertia)

# momentOfInertia (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The body’s moment of inertia, expressed in the local coordinate system of the node that contains the body.

## Declaration

```swift
var momentOfInertia: SCNVector3 { get set }
```

<a id="Discussion"></a>

## Discussion

A body’s moment of inertia determines how it responds to torques (that is, forces with a rotational component). Each component of this vector is the moment of inertia for the corresponding principal axis (in the coordinate system containing the physics body). For example, if the x-component value of the moment vector is less than the y-component value, the body rotates more freely about its x-axis than its y-axis.

By default, SceneKit automatically determines the body’s moment of inertia based on its shape and mass. Use this property to define a custom moment of inertia (for example, to model an object of non-uniform density). Using a custom moment of inertia requires setting the [usesDefaultMomentOfInertia](usesdefaultmomentofinertia.md) property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Defining a Body’s Physical Properties

- [mass](mass.md): The mass of the body, in kilograms.
- [charge](charge.md): The electric charge of the body, in coulombs.
- [friction](friction.md): The body’s resistance to sliding motion.
- [rollingFriction](rollingfriction.md): The body’s resistance to rolling motion.
- [restitution](restitution.md): A factor that determines how much kinetic energy the body loses or gains in collisions.
- [damping](damping.md): A factor that reduces the body’s linear velocity.
- [angularDamping](angulardamping.md): A factor that reduces the body’s angular velocity.
- [usesDefaultMomentOfInertia](usesdefaultmomentofinertia.md): A Boolean value that determines whether SceneKit automatically calculates the body’s moment of inertia or allows setting a custom value.
- [centerOfMassOffset](centerofmassoffset.md): The position of the body’s center of mass relative to its local coordinate origin.

# momentOfInertia (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The body’s moment of inertia, expressed in the local coordinate system of the node that contains the body.

## Declaration

```objectivec
@property (nonatomic) SCNVector3 momentOfInertia;
```

<a id="Discussion"></a>

## Discussion

A body’s moment of inertia determines how it responds to torques (that is, forces with a rotational component). Each component of this vector is the moment of inertia for the corresponding principal axis (in the coordinate system containing the physics body). For example, if the x-component value of the moment vector is less than the y-component value, the body rotates more freely about its x-axis than its y-axis.

By default, SceneKit automatically determines the body’s moment of inertia based on its shape and mass. Use this property to define a custom moment of inertia (for example, to model an object of non-uniform density). Using a custom moment of inertia requires setting the [usesDefaultMomentOfInertia](usesdefaultmomentofinertia.md) property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Defining a Body’s Physical Properties

- [mass](mass.md): The mass of the body, in kilograms.
- [charge](charge.md): The electric charge of the body, in coulombs.
- [friction](friction.md): The body’s resistance to sliding motion.
- [rollingFriction](rollingfriction.md): The body’s resistance to rolling motion.
- [restitution](restitution.md): A factor that determines how much kinetic energy the body loses or gains in collisions.
- [damping](damping.md): A factor that reduces the body’s linear velocity.
- [angularDamping](angulardamping.md): A factor that reduces the body’s angular velocity.
- [usesDefaultMomentOfInertia](usesdefaultmomentofinertia.md): A Boolean value that determines whether SceneKit automatically calculates the body’s moment of inertia or allows setting a custom value.
- [centerOfMassOffset](centerofmassoffset.md): The position of the body’s center of mass relative to its local coordinate origin.
