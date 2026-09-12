> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/systemspawnedondying](https://developer.apple.com/documentation/scenekit/scnparticlesystem/systemspawnedondying)

# systemSpawnedOnDying (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Another particle system to be added to the scene when a particle dies.

## Declaration

```swift
var systemSpawnedOnDying: SCNParticleSystem? { get set }
```

<a id="Discussion"></a>

## Discussion

When a particle reaches the end of its [particleLifeSpan](particlelifespan.md) duration and is removed from the scene, SceneKit adds a copy of the specified particle system to the scene at the particle’s final location.

Use this property to simulate effects such as fireworks—one particle system simulates launching fireworks, and another particle system simulates each firework’s explosion.

The default value of this property is `nil`, specifying that no additional systems are added to the scene on particle death.

> **Important**

>  Adding a new particle system to the scene for each particle death can drastically increase the total number of rendered particles. To maintain adequate rendering performance, set the [loops](loops.md) property to [false](https://developer.apple.com/documentation/swift/false) for any particle system you assign to the [systemSpawnedOnDying](systemspawnedondying.md) property.

## See Also

### Spawning Additional Particle Systems

- [systemSpawnedOnCollision](systemspawnedoncollision.md): Another particle system to be added to the scene when a particle collides with scene geometry.
- [systemSpawnedOnLiving](systemspawnedonliving.md): Another particle system to be added to the scene for each living particle in the system.

# systemSpawnedOnDying (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Another particle system to be added to the scene when a particle dies.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNParticleSystem * systemSpawnedOnDying;
```

<a id="Discussion"></a>

## Discussion

When a particle reaches the end of its [particleLifeSpan](particlelifespan.md) duration and is removed from the scene, SceneKit adds a copy of the specified particle system to the scene at the particle’s final location.

Use this property to simulate effects such as fireworks—one particle system simulates launching fireworks, and another particle system simulates each firework’s explosion.

The default value of this property is `nil`, specifying that no additional systems are added to the scene on particle death.

> **Important**

>  Adding a new particle system to the scene for each particle death can drastically increase the total number of rendered particles. To maintain adequate rendering performance, set the [loops](loops.md) property to [false](https://developer.apple.com/documentation/swift/false) for any particle system you assign to the [systemSpawnedOnDying](systemspawnedondying.md) property.

## See Also

### Spawning Additional Particle Systems

- [systemSpawnedOnCollision](systemspawnedoncollision.md): Another particle system to be added to the scene when a particle collides with scene geometry.
- [systemSpawnedOnLiving](systemspawnedonliving.md): Another particle system to be added to the scene for each living particle in the system.
