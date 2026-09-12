> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlemodifierstage/precollision](https://developer.apple.com/documentation/scenekit/scnparticlemodifierstage/precollision)

# SCNParticleModifierStage.preCollision (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The stage before SceneKit simulates the results of collisions between particles and scene geometry.

## Declaration

```swift
case preCollision
```

<a id="Discussion"></a>

## Discussion

Insert a modifier block at this stage to alter the inputs to collision resolution. For example, if you modify the bounce factors of particles during this stage, SceneKit uses the modified factors to compute the bounce velocity of each particle.

## See Also

### Constants

- [SCNParticleModifierStage.preDynamics](predynamics.md): The stage before SceneKit simulates the motion of particles.
- [SCNParticleModifierStage.postDynamics](postdynamics.md): The stage after SceneKit simulates the motion of particles.
- [SCNParticleModifierStage.postCollision](postcollision.md): The stage after SceneKit simulates the results of collisions between particles and scene geometry.

# SCNParticleModifierStagePreCollision (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The stage before SceneKit simulates the results of collisions between particles and scene geometry.

## Declaration

```objectivec
SCNParticleModifierStagePreCollision
```

<a id="Discussion"></a>

## Discussion

Insert a modifier block at this stage to alter the inputs to collision resolution. For example, if you modify the bounce factors of particles during this stage, SceneKit uses the modified factors to compute the bounce velocity of each particle.

## See Also

### Constants

- [SCNParticleModifierStagePreDynamics](predynamics.md): The stage before SceneKit simulates the motion of particles.
- [SCNParticleModifierStagePostDynamics](postdynamics.md): The stage after SceneKit simulates the motion of particles.
- [SCNParticleModifierStagePostCollision](postcollision.md): The stage after SceneKit simulates the results of collisions between particles and scene geometry.
