> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/angulardamping](https://developer.apple.com/documentation/scenekit/scnphysicsbody/angulardamping)

# angularDamping (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A factor that reduces the body’s angular velocity.

## Declaration

```swift
var angularDamping: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property simulates the effect of rotational friction on a body. A damping factor of `0.0` specifies no loss in angular velocity, and a damping factor of `1.0` prevents the body from rotating. The default damping factor is `0.1`.

## See Also

### Defining a Body’s Physical Properties

- [mass](mass.md): The mass of the body, in kilograms.
- [charge](charge.md): The electric charge of the body, in coulombs.
- [friction](friction.md): The body’s resistance to sliding motion.
- [rollingFriction](rollingfriction.md): The body’s resistance to rolling motion.
- [restitution](restitution.md): A factor that determines how much kinetic energy the body loses or gains in collisions.
- [damping](damping.md): A factor that reduces the body’s linear velocity.
- [momentOfInertia](momentofinertia.md): The body’s moment of inertia, expressed in the local coordinate system of the node that contains the body.
- [usesDefaultMomentOfInertia](usesdefaultmomentofinertia.md): A Boolean value that determines whether SceneKit automatically calculates the body’s moment of inertia or allows setting a custom value.
- [centerOfMassOffset](centerofmassoffset.md): The position of the body’s center of mass relative to its local coordinate origin.

# angularDamping (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A factor that reduces the body’s angular velocity.

## Declaration

```objectivec
@property (nonatomic) CGFloat angularDamping;
```

<a id="Discussion"></a>

## Discussion

This property simulates the effect of rotational friction on a body. A damping factor of `0.0` specifies no loss in angular velocity, and a damping factor of `1.0` prevents the body from rotating. The default damping factor is `0.1`.

## See Also

### Defining a Body’s Physical Properties

- [mass](mass.md): The mass of the body, in kilograms.
- [charge](charge.md): The electric charge of the body, in coulombs.
- [friction](friction.md): The body’s resistance to sliding motion.
- [rollingFriction](rollingfriction.md): The body’s resistance to rolling motion.
- [restitution](restitution.md): A factor that determines how much kinetic energy the body loses or gains in collisions.
- [damping](damping.md): A factor that reduces the body’s linear velocity.
- [momentOfInertia](momentofinertia.md): The body’s moment of inertia, expressed in the local coordinate system of the node that contains the body.
- [usesDefaultMomentOfInertia](usesdefaultmomentofinertia.md): A Boolean value that determines whether SceneKit automatically calculates the body’s moment of inertia or allows setting a custom value.
- [centerOfMassOffset](centerofmassoffset.md): The position of the body’s center of mass relative to its local coordinate origin.
