> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/mass](https://developer.apple.com/documentation/scenekit/scnphysicsbody/mass)

# mass (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The mass of the body, in kilograms.

## Declaration

```swift
var mass: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The mass of a body affects its momentum and how it responds to forces. The default mass for dynamic bodies is `1.0`. The default mass for static and kinematic bodies is `0.0`, but these bodies are unaffected by mass.

Note that you need not use realistic measurements for the bodies in your app—the effects of the physics simulation depend on the relative masses of different bodies, not the absolute values. You may use whatever values produce the behavior or gameplay you’re looking for as long as you use them consistently.

## See Also

### Defining a Body’s Physical Properties

- [charge](charge.md): The electric charge of the body, in coulombs.
- [friction](friction.md): The body’s resistance to sliding motion.
- [rollingFriction](rollingfriction.md): The body’s resistance to rolling motion.
- [restitution](restitution.md): A factor that determines how much kinetic energy the body loses or gains in collisions.
- [damping](damping.md): A factor that reduces the body’s linear velocity.
- [angularDamping](angulardamping.md): A factor that reduces the body’s angular velocity.
- [momentOfInertia](momentofinertia.md): The body’s moment of inertia, expressed in the local coordinate system of the node that contains the body.
- [usesDefaultMomentOfInertia](usesdefaultmomentofinertia.md): A Boolean value that determines whether SceneKit automatically calculates the body’s moment of inertia or allows setting a custom value.
- [centerOfMassOffset](centerofmassoffset.md): The position of the body’s center of mass relative to its local coordinate origin.

# mass (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The mass of the body, in kilograms.

## Declaration

```objectivec
@property (nonatomic) CGFloat mass;
```

<a id="Discussion"></a>

## Discussion

The mass of a body affects its momentum and how it responds to forces. The default mass for dynamic bodies is `1.0`. The default mass for static and kinematic bodies is `0.0`, but these bodies are unaffected by mass.

Note that you need not use realistic measurements for the bodies in your app—the effects of the physics simulation depend on the relative masses of different bodies, not the absolute values. You may use whatever values produce the behavior or gameplay you’re looking for as long as you use them consistently.

## See Also

### Defining a Body’s Physical Properties

- [charge](charge.md): The electric charge of the body, in coulombs.
- [friction](friction.md): The body’s resistance to sliding motion.
- [rollingFriction](rollingfriction.md): The body’s resistance to rolling motion.
- [restitution](restitution.md): A factor that determines how much kinetic energy the body loses or gains in collisions.
- [damping](damping.md): A factor that reduces the body’s linear velocity.
- [angularDamping](angulardamping.md): A factor that reduces the body’s angular velocity.
- [momentOfInertia](momentofinertia.md): The body’s moment of inertia, expressed in the local coordinate system of the node that contains the body.
- [usesDefaultMomentOfInertia](usesdefaultmomentofinertia.md): A Boolean value that determines whether SceneKit automatically calculates the body’s moment of inertia or allows setting a custom value.
- [centerOfMassOffset](centerofmassoffset.md): The position of the body’s center of mass relative to its local coordinate origin.
