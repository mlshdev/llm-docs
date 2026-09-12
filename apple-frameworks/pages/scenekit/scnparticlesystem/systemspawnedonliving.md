> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/systemspawnedonliving](https://developer.apple.com/documentation/scenekit/scnparticlesystem/systemspawnedonliving)

# systemSpawnedOnLiving (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Another particle system to be added to the scene for each living particle in the system.

## Declaration

```swift
var systemSpawnedOnLiving: SCNParticleSystem? { get set }
```

<a id="Discussion"></a>

## Discussion

Each time SceneKit renders a frame, it adds an instance of the specified particle system to the scene at the location of each rendered particle.

Use this property to simulate continuous secondary effects on particles. For example, to create a fountain of sparklers, use one particle system as the fountain, and attach another system that simulates each sparkler.

The default value of this property is `nil`, specifying that no additional systems are added to the scene when rendering particles.

> **Important**

>  This property adds one new particle system to the scene *for each rendered particle, on each rendered frame*, drastically increasing the total number of rendered particles. To avoid performance problems, plan your use of this property to limit the total number of particles in the scene. For example, attach a short-lived particle system to a system with few particles and whose [loops](loops.md) property is set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Spawning Additional Particle Systems

- [systemSpawnedOnCollision](systemspawnedoncollision.md): Another particle system to be added to the scene when a particle collides with scene geometry.
- [systemSpawnedOnDying](systemspawnedondying.md): Another particle system to be added to the scene when a particle dies.

# systemSpawnedOnLiving (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Another particle system to be added to the scene for each living particle in the system.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNParticleSystem * systemSpawnedOnLiving;
```

<a id="Discussion"></a>

## Discussion

Each time SceneKit renders a frame, it adds an instance of the specified particle system to the scene at the location of each rendered particle.

Use this property to simulate continuous secondary effects on particles. For example, to create a fountain of sparklers, use one particle system as the fountain, and attach another system that simulates each sparkler.

The default value of this property is `nil`, specifying that no additional systems are added to the scene when rendering particles.

> **Important**

>  This property adds one new particle system to the scene *for each rendered particle, on each rendered frame*, drastically increasing the total number of rendered particles. To avoid performance problems, plan your use of this property to limit the total number of particles in the scene. For example, attach a short-lived particle system to a system with few particles and whose [loops](loops.md) property is set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Spawning Additional Particle Systems

- [systemSpawnedOnCollision](systemspawnedoncollision.md): Another particle system to be added to the scene when a particle collides with scene geometry.
- [systemSpawnedOnDying](systemspawnedondying.md): Another particle system to be added to the scene when a particle dies.
