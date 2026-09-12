> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/particlemassvariation](https://developer.apple.com/documentation/scenekit/scnparticlesystem/particlemassvariation)

# particleMassVariation (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The range, in kilograms, of randomized particle masses. Animatable.

## Declaration

```swift
var particleMassVariation: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Setting a nonzero value for this property randomizes the effect of the [particleMass](particlemass.md) property. SceneKit randomly adjusts the mass of each particle by up to half the [particleMassVariation](particlemassvariation.md) value. For example, if the [particleMass](particlemass.md) value is `1.0` kilograms and the [particleMassVariation](particlemassvariation.md) value is `0.5` kilograms, each particle uses a random mass value between `0.75` and `1.25` kilograms for physics simulation.

The default value is `0.0` kilograms, specifying no randomization.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Simulating Physics for Particles

- [isAffectedByGravity](isaffectedbygravity.md): A Boolean value that determines whether gravity, as defined by the scene’s physics simulation, affects the motion of particles.
- [isAffectedByPhysicsFields](isaffectedbyphysicsfields.md): A Boolean value that determines whether physics fields in the scene affect the motion of particles.
- [colliderNodes](collidernodes.md): The nodes whose geometry the system’s particles can collide with.
- [particleDiesOnCollision](particlediesoncollision.md): A Boolean value that determines whether particles are removed from the scene upon colliding with another object.
- [acceleration](acceleration.md): The constant acceleration vector, in units per second per second, applied to all particles in the system. Animatable.
- [dampingFactor](dampingfactor.md): A factor that slows particles relative to their velocity. Animatable.
- [particleMass](particlemass.md): The mass, in kilograms, of each particle in the system. Animatable.
- [particleCharge](particlecharge.md): The electric charge, in coulombs, of each particle in the system. Animatable.
- [particleChargeVariation](particlechargevariation.md): The range, in coulombs, of randomized particle charges. Animatable.
- [particleBounce](particlebounce.md): The restitution coefficient of each particle in the system. Animatable.
- [particleBounceVariation](particlebouncevariation.md): The range of randomized restitution coefficients for particles. Animatable.
- [particleFriction](particlefriction.md): The friction coefficient of each particle in the system. Animatable.
- [particleFrictionVariation](particlefrictionvariation.md): The range of randomized friction coefficients for particles. Animatable.

# particleMassVariation (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The range, in kilograms, of randomized particle masses. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat particleMassVariation;
```

<a id="Discussion"></a>

## Discussion

Setting a nonzero value for this property randomizes the effect of the [particleMass](particlemass.md) property. SceneKit randomly adjusts the mass of each particle by up to half the [particleMassVariation](particlemassvariation.md) value. For example, if the [particleMass](particlemass.md) value is `1.0` kilograms and the [particleMassVariation](particlemassvariation.md) value is `0.5` kilograms, each particle uses a random mass value between `0.75` and `1.25` kilograms for physics simulation.

The default value is `0.0` kilograms, specifying no randomization.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Simulating Physics for Particles

- [affectedByGravity](isaffectedbygravity.md): A Boolean value that determines whether gravity, as defined by the scene’s physics simulation, affects the motion of particles.
- [affectedByPhysicsFields](isaffectedbyphysicsfields.md): A Boolean value that determines whether physics fields in the scene affect the motion of particles.
- [colliderNodes](collidernodes.md): The nodes whose geometry the system’s particles can collide with.
- [particleDiesOnCollision](particlediesoncollision.md): A Boolean value that determines whether particles are removed from the scene upon colliding with another object.
- [acceleration](acceleration.md): The constant acceleration vector, in units per second per second, applied to all particles in the system. Animatable.
- [dampingFactor](dampingfactor.md): A factor that slows particles relative to their velocity. Animatable.
- [particleMass](particlemass.md): The mass, in kilograms, of each particle in the system. Animatable.
- [particleCharge](particlecharge.md): The electric charge, in coulombs, of each particle in the system. Animatable.
- [particleChargeVariation](particlechargevariation.md): The range, in coulombs, of randomized particle charges. Animatable.
- [particleBounce](particlebounce.md): The restitution coefficient of each particle in the system. Animatable.
- [particleBounceVariation](particlebouncevariation.md): The range of randomized restitution coefficients for particles. Animatable.
- [particleFriction](particlefriction.md): The friction coefficient of each particle in the system. Animatable.
- [particleFrictionVariation](particlefrictionvariation.md): The range of randomized friction coefficients for particles. Animatable.
