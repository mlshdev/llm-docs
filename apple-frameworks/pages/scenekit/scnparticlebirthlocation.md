> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlebirthlocation](https://developer.apple.com/documentation/scenekit/scnparticlebirthlocation)

# SCNParticleBirthLocation (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options for the initial location of each emitted particle, used by the [birthLocation](scnparticlesystem/birthlocation.md) property.

## Declaration

```swift
enum SCNParticleBirthLocation
```

<a id="overview"></a>

## Overview

The [emitterShape](scnparticlesystem/emittershape.md) property determines the shape of the space in which new particles can be emitted, and the [birthLocation](scnparticlesystem/birthlocation.md) property determines the locations of new particles relative to this shape.

To make a system’s particles emit from a single point, set the [emitterShape](scnparticlesystem/emittershape.md) property to `nil` (the default). In this case, SceneKit ignores the [birthLocation](scnparticlesystem/birthlocation.md) property.

## Topics

### Constants

- [SCNParticleBirthLocation.surface](scnparticlebirthlocation/surface.md): New particles can be created at any location on the surface of the emitter shape.
- [SCNParticleBirthLocation.volume](scnparticlebirthlocation/volume.md): New particles can be created at any location within the volume of the emitter shape.
- [SCNParticleBirthLocation.vertex](scnparticlebirthlocation/vertex.md): New particles can be created at only at the locations of the vertices in the emitter shape.

### Initializers

- [init(rawValue:)](scnparticlebirthlocation/init%28rawvalue_%29.md)

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
- [birthDirection](scnparticlesystem/birthdirection.md): The possible initial directions for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthDirection](scnparticlebirthdirection.md): Options for the initial direction of each emitted particle, used by the [birthDirection](scnparticlesystem/birthdirection.md) property.
- [emittingDirection](scnparticlesystem/emittingdirection.md): The initial direction for newly spawned particles. Animatable.
- [spreadingAngle](scnparticlesystem/spreadingangle.md): The range, in degrees, of randomized initial particle directions. Animatable.

# SCNParticleBirthLocation (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Options for the initial location of each emitted particle, used by the [birthLocation](scnparticlesystem/birthlocation.md) property.

## Declaration

```objectivec
enum SCNParticleBirthLocation : NSInteger;
```

<a id="overview"></a>

## Overview

The [emitterShape](scnparticlesystem/emittershape.md) property determines the shape of the space in which new particles can be emitted, and the [birthLocation](scnparticlesystem/birthlocation.md) property determines the locations of new particles relative to this shape.

To make a system’s particles emit from a single point, set the [emitterShape](scnparticlesystem/emittershape.md) property to `nil` (the default). In this case, SceneKit ignores the [birthLocation](scnparticlesystem/birthlocation.md) property.

## Topics

### Constants

- [SCNParticleBirthLocationSurface](scnparticlebirthlocation/surface.md): New particles can be created at any location on the surface of the emitter shape.
- [SCNParticleBirthLocationVolume](scnparticlebirthlocation/volume.md): New particles can be created at any location within the volume of the emitter shape.
- [SCNParticleBirthLocationVertex](scnparticlebirthlocation/vertex.md): New particles can be created at only at the locations of the vertices in the emitter shape.

## See Also

### Managing Particle Emission Locations

- [emitterShape](scnparticlesystem/emittershape.md): The shape of the region of space where the system spawns new particles.
- [birthLocation](scnparticlesystem/birthlocation.md): The possible locations for newly spawned particles, relative to the emitter shape.
- [birthDirection](scnparticlesystem/birthdirection.md): The possible initial directions for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthDirection](scnparticlebirthdirection.md): Options for the initial direction of each emitted particle, used by the [birthDirection](scnparticlesystem/birthdirection.md) property.
- [emittingDirection](scnparticlesystem/emittingdirection.md): The initial direction for newly spawned particles. Animatable.
- [spreadingAngle](scnparticlesystem/spreadingangle.md): The range, in degrees, of randomized initial particle directions. Animatable.
