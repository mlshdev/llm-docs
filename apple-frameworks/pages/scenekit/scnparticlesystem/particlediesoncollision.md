> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/particlediesoncollision](https://developer.apple.com/documentation/scenekit/scnparticlesystem/particlediesoncollision)

# particleDiesOnCollision (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether particles are removed from the scene upon colliding with another object.

## Declaration

```swift
var particleDiesOnCollision: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property has no effect if the [colliderNodes](collidernodes.md) array is empty or contains no nodes with attached geometry.

The default value is [false](https://developer.apple.com/documentation/swift/false), specifying that particles remain in the scene after a collision. The [particleBounce](particlebounce.md) and [particleFriction](particlefriction.md) properties determine whether and how particles bounce or slide after colliding with a geometry.

## See Also

### Simulating Physics for Particles

- [isAffectedByGravity](isaffectedbygravity.md): A Boolean value that determines whether gravity, as defined by the scene’s physics simulation, affects the motion of particles.
- [isAffectedByPhysicsFields](isaffectedbyphysicsfields.md): A Boolean value that determines whether physics fields in the scene affect the motion of particles.
- [colliderNodes](collidernodes.md): The nodes whose geometry the system’s particles can collide with.
- [acceleration](acceleration.md): The constant acceleration vector, in units per second per second, applied to all particles in the system. Animatable.
- [dampingFactor](dampingfactor.md): A factor that slows particles relative to their velocity. Animatable.
- [particleMass](particlemass.md): The mass, in kilograms, of each particle in the system. Animatable.
- [particleMassVariation](particlemassvariation.md): The range, in kilograms, of randomized particle masses. Animatable.
- [particleCharge](particlecharge.md): The electric charge, in coulombs, of each particle in the system. Animatable.
- [particleChargeVariation](particlechargevariation.md): The range, in coulombs, of randomized particle charges. Animatable.
- [particleBounce](particlebounce.md): The restitution coefficient of each particle in the system. Animatable.
- [particleBounceVariation](particlebouncevariation.md): The range of randomized restitution coefficients for particles. Animatable.
- [particleFriction](particlefriction.md): The friction coefficient of each particle in the system. Animatable.
- [particleFrictionVariation](particlefrictionvariation.md): The range of randomized friction coefficients for particles. Animatable.

# particleDiesOnCollision (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A Boolean value that determines whether particles are removed from the scene upon colliding with another object.

## Declaration

```objectivec
@property (nonatomic) BOOL particleDiesOnCollision;
```

<a id="Discussion"></a>

## Discussion

This property has no effect if the [colliderNodes](collidernodes.md) array is empty or contains no nodes with attached geometry.

The default value is [false](https://developer.apple.com/documentation/swift/false), specifying that particles remain in the scene after a collision. The [particleBounce](particlebounce.md) and [particleFriction](particlefriction.md) properties determine whether and how particles bounce or slide after colliding with a geometry.

## See Also

### Simulating Physics for Particles

- [affectedByGravity](isaffectedbygravity.md): A Boolean value that determines whether gravity, as defined by the scene’s physics simulation, affects the motion of particles.
- [affectedByPhysicsFields](isaffectedbyphysicsfields.md): A Boolean value that determines whether physics fields in the scene affect the motion of particles.
- [colliderNodes](collidernodes.md): The nodes whose geometry the system’s particles can collide with.
- [acceleration](acceleration.md): The constant acceleration vector, in units per second per second, applied to all particles in the system. Animatable.
- [dampingFactor](dampingfactor.md): A factor that slows particles relative to their velocity. Animatable.
- [particleMass](particlemass.md): The mass, in kilograms, of each particle in the system. Animatable.
- [particleMassVariation](particlemassvariation.md): The range, in kilograms, of randomized particle masses. Animatable.
- [particleCharge](particlecharge.md): The electric charge, in coulombs, of each particle in the system. Animatable.
- [particleChargeVariation](particlechargevariation.md): The range, in coulombs, of randomized particle charges. Animatable.
- [particleBounce](particlebounce.md): The restitution coefficient of each particle in the system. Animatable.
- [particleBounceVariation](particlebouncevariation.md): The range of randomized restitution coefficients for particles. Animatable.
- [particleFriction](particlefriction.md): The friction coefficient of each particle in the system. Animatable.
- [particleFrictionVariation](particlefrictionvariation.md): The range of randomized friction coefficients for particles. Animatable.
