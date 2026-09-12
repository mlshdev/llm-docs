> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/friction](https://developer.apple.com/documentation/scenekit/scnphysicsbody/friction)

# friction (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The body’s resistance to sliding motion.

## Declaration

```swift
var friction: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property simulates the roughness of the body’s surface. When two bodies are in contact and a force is applied that would cause them to slide against one another, the friction values for both bodies determine their resistance to motion. If both bodies’ friction value is `0.0`, they slide freely against each other. If both bodies’ friction value is `1.0`, they do not slide at all. The default friction is `0.5`.

## See Also

### Defining a Body’s Physical Properties

- [mass](mass.md): The mass of the body, in kilograms.
- [charge](charge.md): The electric charge of the body, in coulombs.
- [rollingFriction](rollingfriction.md): The body’s resistance to rolling motion.
- [restitution](restitution.md): A factor that determines how much kinetic energy the body loses or gains in collisions.
- [damping](damping.md): A factor that reduces the body’s linear velocity.
- [angularDamping](angulardamping.md): A factor that reduces the body’s angular velocity.
- [momentOfInertia](momentofinertia.md): The body’s moment of inertia, expressed in the local coordinate system of the node that contains the body.
- [usesDefaultMomentOfInertia](usesdefaultmomentofinertia.md): A Boolean value that determines whether SceneKit automatically calculates the body’s moment of inertia or allows setting a custom value.
- [centerOfMassOffset](centerofmassoffset.md): The position of the body’s center of mass relative to its local coordinate origin.

# friction (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The body’s resistance to sliding motion.

## Declaration

```objectivec
@property (nonatomic) CGFloat friction;
```

<a id="Discussion"></a>

## Discussion

This property simulates the roughness of the body’s surface. When two bodies are in contact and a force is applied that would cause them to slide against one another, the friction values for both bodies determine their resistance to motion. If both bodies’ friction value is `0.0`, they slide freely against each other. If both bodies’ friction value is `1.0`, they do not slide at all. The default friction is `0.5`.

## See Also

### Defining a Body’s Physical Properties

- [mass](mass.md): The mass of the body, in kilograms.
- [charge](charge.md): The electric charge of the body, in coulombs.
- [rollingFriction](rollingfriction.md): The body’s resistance to rolling motion.
- [restitution](restitution.md): A factor that determines how much kinetic energy the body loses or gains in collisions.
- [damping](damping.md): A factor that reduces the body’s linear velocity.
- [angularDamping](angulardamping.md): A factor that reduces the body’s angular velocity.
- [momentOfInertia](momentofinertia.md): The body’s moment of inertia, expressed in the local coordinate system of the node that contains the body.
- [usesDefaultMomentOfInertia](usesdefaultmomentofinertia.md): A Boolean value that determines whether SceneKit automatically calculates the body’s moment of inertia or allows setting a custom value.
- [centerOfMassOffset](centerofmassoffset.md): The position of the body’s center of mass relative to its local coordinate origin.
