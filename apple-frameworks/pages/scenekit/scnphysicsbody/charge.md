> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/charge](https://developer.apple.com/documentation/scenekit/scnphysicsbody/charge)

# charge (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The electric charge of the body, in coulombs.

## Declaration

```swift
var charge: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

A body’s charge determines its behavior when affected by an electric or magnetic field. Use the [SCNPhysicsField](../scnphysicsfield.md) class to add these fields to your scene. Bodies with positive or negative charges behave differently when affected by electric or magnetic fields. The default electric charge on a physics body is `0.0`, causing it to be unaffected by electric and magnetic fields.

Note that you need not use realistic measurements for the bodies in your app—the effects of the physics simulation depend on the relative masses of different bodies, not the absolute values. You may use whatever values produce the behavior or gameplay you’re looking for as long as you use them consistently.

## See Also

### Defining a Body’s Physical Properties

- [mass](mass.md): The mass of the body, in kilograms.
- [friction](friction.md): The body’s resistance to sliding motion.
- [rollingFriction](rollingfriction.md): The body’s resistance to rolling motion.
- [restitution](restitution.md): A factor that determines how much kinetic energy the body loses or gains in collisions.
- [damping](damping.md): A factor that reduces the body’s linear velocity.
- [angularDamping](angulardamping.md): A factor that reduces the body’s angular velocity.
- [momentOfInertia](momentofinertia.md): The body’s moment of inertia, expressed in the local coordinate system of the node that contains the body.
- [usesDefaultMomentOfInertia](usesdefaultmomentofinertia.md): A Boolean value that determines whether SceneKit automatically calculates the body’s moment of inertia or allows setting a custom value.
- [centerOfMassOffset](centerofmassoffset.md): The position of the body’s center of mass relative to its local coordinate origin.

# charge (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The electric charge of the body, in coulombs.

## Declaration

```objectivec
@property (nonatomic) CGFloat charge;
```

<a id="Discussion"></a>

## Discussion

A body’s charge determines its behavior when affected by an electric or magnetic field. Use the [SCNPhysicsField](../scnphysicsfield.md) class to add these fields to your scene. Bodies with positive or negative charges behave differently when affected by electric or magnetic fields. The default electric charge on a physics body is `0.0`, causing it to be unaffected by electric and magnetic fields.

Note that you need not use realistic measurements for the bodies in your app—the effects of the physics simulation depend on the relative masses of different bodies, not the absolute values. You may use whatever values produce the behavior or gameplay you’re looking for as long as you use them consistently.

## See Also

### Defining a Body’s Physical Properties

- [mass](mass.md): The mass of the body, in kilograms.
- [friction](friction.md): The body’s resistance to sliding motion.
- [rollingFriction](rollingfriction.md): The body’s resistance to rolling motion.
- [restitution](restitution.md): A factor that determines how much kinetic energy the body loses or gains in collisions.
- [damping](damping.md): A factor that reduces the body’s linear velocity.
- [angularDamping](angulardamping.md): A factor that reduces the body’s angular velocity.
- [momentOfInertia](momentofinertia.md): The body’s moment of inertia, expressed in the local coordinate system of the node that contains the body.
- [usesDefaultMomentOfInertia](usesdefaultmomentofinertia.md): A Boolean value that determines whether SceneKit automatically calculates the body’s moment of inertia or allows setting a custom value.
- [centerOfMassOffset](centerofmassoffset.md): The position of the body’s center of mass relative to its local coordinate origin.
