> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlebirthdirection/surfacenormal](https://developer.apple.com/documentation/scenekit/scnparticlebirthdirection/surfacenormal)

# SCNParticleBirthDirection.surfaceNormal (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The emitting direction for each particle is along the surface normal vector at the point where the particle is emitted.

## Declaration

```swift
case surfaceNormal
```

<a id="Discussion"></a>

## Discussion

The particle system creates new particles at points in space defined by the [emitterShape](../scnparticlesystem/emittershape.md) geometry. When a new particle is emitted, the geometry’s surface normal vector at the point nearest the particle determines the particle’s initial direction. (Note that the [birthLocation](../scnparticlesystem/birthlocation.md) property defines where particles may be created relative to the [emitterShape](../scnparticlesystem/emittershape.md) geometry.)

This value has no effect if the [emitterShape](../scnparticlesystem/emittershape.md) property value is `nil`.

## See Also

### Constants

- [SCNParticleBirthDirection.constant](constant.md): The emitting direction is the same for all particles.
- [SCNParticleBirthDirection.random](random.md): SceneKit randomizes the emitting direction for each particle.

# SCNParticleBirthDirectionSurfaceNormal (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The emitting direction for each particle is along the surface normal vector at the point where the particle is emitted.

## Declaration

```objectivec
SCNParticleBirthDirectionSurfaceNormal
```

<a id="Discussion"></a>

## Discussion

The particle system creates new particles at points in space defined by the [emitterShape](../scnparticlesystem/emittershape.md) geometry. When a new particle is emitted, the geometry’s surface normal vector at the point nearest the particle determines the particle’s initial direction. (Note that the [birthLocation](../scnparticlesystem/birthlocation.md) property defines where particles may be created relative to the [emitterShape](../scnparticlesystem/emittershape.md) geometry.)

This value has no effect if the [emitterShape](../scnparticlesystem/emittershape.md) property value is `nil`.

## See Also

### Constants

- [SCNParticleBirthDirectionConstant](constant.md): The emitting direction is the same for all particles.
- [SCNParticleBirthDirectionRandom](random.md): SceneKit randomizes the emitting direction for each particle.
