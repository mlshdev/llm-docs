> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlemodifierstage/predynamics](https://developer.apple.com/documentation/scenekit/scnparticlemodifierstage/predynamics)

# SCNParticleModifierStage.preDynamics (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The stage before SceneKit simulates the motion of particles.

## Declaration

```swift
case preDynamics
```

<a id="Discussion"></a>

## Discussion

Insert a modifier block at this stage to alter the inputs to the dynamics simulation. For example, if you modify the velocities of particles during this stage, SceneKit computes new positions for each particle based on its modified velocity.

## See Also

### Constants

- [SCNParticleModifierStage.postDynamics](postdynamics.md): The stage after SceneKit simulates the motion of particles.
- [SCNParticleModifierStage.preCollision](precollision.md): The stage before SceneKit simulates the results of collisions between particles and scene geometry.
- [SCNParticleModifierStage.postCollision](postcollision.md): The stage after SceneKit simulates the results of collisions between particles and scene geometry.

# SCNParticleModifierStagePreDynamics (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The stage before SceneKit simulates the motion of particles.

## Declaration

```objectivec
SCNParticleModifierStagePreDynamics
```

<a id="Discussion"></a>

## Discussion

Insert a modifier block at this stage to alter the inputs to the dynamics simulation. For example, if you modify the velocities of particles during this stage, SceneKit computes new positions for each particle based on its modified velocity.

## See Also

### Constants

- [SCNParticleModifierStagePostDynamics](postdynamics.md): The stage after SceneKit simulates the motion of particles.
- [SCNParticleModifierStagePreCollision](precollision.md): The stage before SceneKit simulates the results of collisions between particles and scene geometry.
- [SCNParticleModifierStagePostCollision](postcollision.md): The stage after SceneKit simulates the results of collisions between particles and scene geometry.
