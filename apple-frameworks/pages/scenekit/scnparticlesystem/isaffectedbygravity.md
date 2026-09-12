> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/isaffectedbygravity](https://developer.apple.com/documentation/scenekit/scnparticlesystem/isaffectedbygravity)

# isAffectedByGravity (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether gravity, as defined by the scene’s physics simulation, affects the motion of particles.

## Declaration

```swift
var isAffectedByGravity: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Gravity applies a constant acceleration to all particles in the system. SceneKit offers two options for simulating the effect of gravity on particles:

- The [isAffectedByGravity](isaffectedbygravity.md) property, which uses the [gravity](../scnphysicsworld/gravity.md) vector specified by the [physicsWorld](../scnscene/physicsworld.md) object of the scene containing the particle system. Use this option when you want the system’s particles to be affected by the same gravity as the [SCNPhysicsBody](../scnphysicsbody.md) objects in your scene.
- The [acceleration](acceleration.md) property, which is independent of the simulation SceneKit uses for physics bodies in the scene. Use acceleration to simulate gravity if you have no [SCNPhysicsBody](../scnphysicsbody.md) objects in your scene, or if you want particles to be affected both by the physics world’s gravity and another constant acceleration (such as wind).

The default value is [false](https://developer.apple.com/documentation/swift/false), specifying that the physics world’s gravity does not affect particles.

## See Also

### Simulating Physics for Particles

- [isAffectedByPhysicsFields](isaffectedbyphysicsfields.md): A Boolean value that determines whether physics fields in the scene affect the motion of particles.
- [colliderNodes](collidernodes.md): The nodes whose geometry the system’s particles can collide with.
- [particleDiesOnCollision](particlediesoncollision.md): A Boolean value that determines whether particles are removed from the scene upon colliding with another object.
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

# affectedByGravity (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A Boolean value that determines whether gravity, as defined by the scene’s physics simulation, affects the motion of particles.

## Declaration

```objectivec
@property (nonatomic) BOOL affectedByGravity;
```

<a id="Discussion"></a>

## Discussion

Gravity applies a constant acceleration to all particles in the system. SceneKit offers two options for simulating the effect of gravity on particles:

- The [affectedByGravity](isaffectedbygravity.md) property, which uses the [gravity](../scnphysicsworld/gravity.md) vector specified by the [physicsWorld](../scnscene/physicsworld.md) object of the scene containing the particle system. Use this option when you want the system’s particles to be affected by the same gravity as the [SCNPhysicsBody](../scnphysicsbody.md) objects in your scene.
- The [acceleration](acceleration.md) property, which is independent of the simulation SceneKit uses for physics bodies in the scene. Use acceleration to simulate gravity if you have no [SCNPhysicsBody](../scnphysicsbody.md) objects in your scene, or if you want particles to be affected both by the physics world’s gravity and another constant acceleration (such as wind).

The default value is [false](https://developer.apple.com/documentation/swift/false), specifying that the physics world’s gravity does not affect particles.

## See Also

### Simulating Physics for Particles

- [affectedByPhysicsFields](isaffectedbyphysicsfields.md): A Boolean value that determines whether physics fields in the scene affect the motion of particles.
- [colliderNodes](collidernodes.md): The nodes whose geometry the system’s particles can collide with.
- [particleDiesOnCollision](particlediesoncollision.md): A Boolean value that determines whether particles are removed from the scene upon colliding with another object.
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
