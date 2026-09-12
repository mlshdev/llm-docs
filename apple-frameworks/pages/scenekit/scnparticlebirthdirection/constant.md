> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlebirthdirection/constant](https://developer.apple.com/documentation/scenekit/scnparticlebirthdirection/constant)

# SCNParticleBirthDirection.constant (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The emitting direction is the same for all particles.

## Declaration

```swift
case constant
```

<a id="Discussion"></a>

## Discussion

When using this mode, the [emittingDirection](../scnparticlesystem/emittingdirection.md) property determines the base direction for all particles, and the [spreadingAngle](../scnparticlesystem/spreadingangle.md) property adds random variation to this direction.

## See Also

### Constants

- [SCNParticleBirthDirection.surfaceNormal](surfacenormal.md): The emitting direction for each particle is along the surface normal vector at the point where the particle is emitted.
- [SCNParticleBirthDirection.random](random.md): SceneKit randomizes the emitting direction for each particle.

# SCNParticleBirthDirectionConstant (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The emitting direction is the same for all particles.

## Declaration

```objectivec
SCNParticleBirthDirectionConstant
```

<a id="Discussion"></a>

## Discussion

When using this mode, the [emittingDirection](../scnparticlesystem/emittingdirection.md) property determines the base direction for all particles, and the [spreadingAngle](../scnparticlesystem/spreadingangle.md) property adds random variation to this direction.

## See Also

### Constants

- [SCNParticleBirthDirectionSurfaceNormal](surfacenormal.md): The emitting direction for each particle is along the surface normal vector at the point where the particle is emitted.
- [SCNParticleBirthDirectionRandom](random.md): SceneKit randomizes the emitting direction for each particle.
