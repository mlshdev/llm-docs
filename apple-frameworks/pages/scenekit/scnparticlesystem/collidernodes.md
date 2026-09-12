> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/collidernodes](https://developer.apple.com/documentation/scenekit/scnparticlesystem/collidernodes)

# colliderNodes (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The nodes whose geometry the system’s particles can collide with.

## Declaration

```swift
var colliderNodes: [SCNNode]? { get set }
```

<a id="Discussion"></a>

## Discussion

A particle system can perform limited collision detection and resolution with geometries in the scene. If a moving particle intersects a geometry attached to one of the [SCNNode](../scnnode.md) objects in this array, SceneKit resolves the collision, either by removing the particle from the scene or allowing it to bounce off or slide along the geometry’s surface.

> **Note**

>  Collision detection is computationally intensive. For the best rendering performance, limit the number of collider nodes for each particle system, and use only simple geometries—represented by the [SCNSphere](../scnsphere.md), [SCNPlane](../scnplane.md), and [SCNFloor](../scnfloor.md) classes—as collision surfaces.

This array is empty by default.

## See Also

### Simulating Physics for Particles

- [isAffectedByGravity](isaffectedbygravity.md): A Boolean value that determines whether gravity, as defined by the scene’s physics simulation, affects the motion of particles.
- [isAffectedByPhysicsFields](isaffectedbyphysicsfields.md): A Boolean value that determines whether physics fields in the scene affect the motion of particles.
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

# colliderNodes (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The nodes whose geometry the system’s particles can collide with.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<SCNNode *> * colliderNodes;
```

<a id="Discussion"></a>

## Discussion

A particle system can perform limited collision detection and resolution with geometries in the scene. If a moving particle intersects a geometry attached to one of the [SCNNode](../scnnode.md) objects in this array, SceneKit resolves the collision, either by removing the particle from the scene or allowing it to bounce off or slide along the geometry’s surface.

> **Note**

>  Collision detection is computationally intensive. For the best rendering performance, limit the number of collider nodes for each particle system, and use only simple geometries—represented by the [SCNSphere](../scnsphere.md), [SCNPlane](../scnplane.md), and [SCNFloor](../scnfloor.md) classes—as collision surfaces.

This array is empty by default.

## See Also

### Simulating Physics for Particles

- [affectedByGravity](isaffectedbygravity.md): A Boolean value that determines whether gravity, as defined by the scene’s physics simulation, affects the motion of particles.
- [affectedByPhysicsFields](isaffectedbyphysicsfields.md): A Boolean value that determines whether physics fields in the scene affect the motion of particles.
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
