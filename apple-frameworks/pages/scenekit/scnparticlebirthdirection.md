> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlebirthdirection](https://developer.apple.com/documentation/scenekit/scnparticlebirthdirection)

# SCNParticleBirthDirection (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options for the initial direction of each emitted particle, used by the [birthDirection](scnparticlesystem/birthdirection.md) property.

## Declaration

```swift
enum SCNParticleBirthDirection
```

## Topics

### Constants

- [SCNParticleBirthDirection.constant](scnparticlebirthdirection/constant.md): The emitting direction is the same for all particles.
- [SCNParticleBirthDirection.surfaceNormal](scnparticlebirthdirection/surfacenormal.md): The emitting direction for each particle is along the surface normal vector at the point where the particle is emitted.
- [SCNParticleBirthDirection.random](scnparticlebirthdirection/random.md): SceneKit randomizes the emitting direction for each particle.

### Initializers

- [init(rawValue:)](scnparticlebirthdirection/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Particle Emission Locations

- [emitterShape](scnparticlesystem/emittershape.md): The shape of the region of space where the system spawns new particles.
- [birthLocation](scnparticlesystem/birthlocation.md): The possible locations for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthLocation](scnparticlebirthlocation.md): Options for the initial location of each emitted particle, used by the [birthLocation](scnparticlesystem/birthlocation.md) property.
- [birthDirection](scnparticlesystem/birthdirection.md): The possible initial directions for newly spawned particles, relative to the emitter shape.
- [emittingDirection](scnparticlesystem/emittingdirection.md): The initial direction for newly spawned particles. Animatable.
- [spreadingAngle](scnparticlesystem/spreadingangle.md): The range, in degrees, of randomized initial particle directions. Animatable.

# SCNParticleBirthDirection (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Options for the initial direction of each emitted particle, used by the [birthDirection](scnparticlesystem/birthdirection.md) property.

## Declaration

```objectivec
enum SCNParticleBirthDirection : NSInteger;
```

## Topics

### Constants

- [SCNParticleBirthDirectionConstant](scnparticlebirthdirection/constant.md): The emitting direction is the same for all particles.
- [SCNParticleBirthDirectionSurfaceNormal](scnparticlebirthdirection/surfacenormal.md): The emitting direction for each particle is along the surface normal vector at the point where the particle is emitted.
- [SCNParticleBirthDirectionRandom](scnparticlebirthdirection/random.md): SceneKit randomizes the emitting direction for each particle.

## See Also

### Managing Particle Emission Locations

- [emitterShape](scnparticlesystem/emittershape.md): The shape of the region of space where the system spawns new particles.
- [birthLocation](scnparticlesystem/birthlocation.md): The possible locations for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthLocation](scnparticlebirthlocation.md): Options for the initial location of each emitted particle, used by the [birthLocation](scnparticlesystem/birthlocation.md) property.
- [birthDirection](scnparticlesystem/birthdirection.md): The possible initial directions for newly spawned particles, relative to the emitter shape.
- [emittingDirection](scnparticlesystem/emittingdirection.md): The initial direction for newly spawned particles. Animatable.
- [spreadingAngle](scnparticlesystem/spreadingangle.md): The range, in degrees, of randomized initial particle directions. Animatable.
