> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/birthlocation](https://developer.apple.com/documentation/scenekit/scnparticlesystem/birthlocation)

# birthLocation (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The possible locations for newly spawned particles, relative to the emitter shape.

## Declaration

```swift
var birthLocation: SCNParticleBirthLocation { get set }
```

<a id="Discussion"></a>

## Discussion

This property defines locations for spawning new particles relative to the geometry specified in the [emitterShape](emittershape.md) property. This property has no effect if the [emitterShape](emittershape.md) property value is `nil`.

For example, if the emitter shape is an [SCNBox](../scnbox.md) geometry and the birth location is [SCNParticleBirthLocation.vertex](../scnparticlebirthlocation/vertex.md), new particles may randomly spawn at any of the eight corners of the box.

The default value is [SCNParticleBirthLocation.surface](../scnparticlebirthlocation/surface.md), specifying that new particles spawn at random locations along the surface of the [emitterShape](emittershape.md) geometry. For possible values, see [SCNParticleBirthLocation](../scnparticlebirthlocation.md).

## See Also

### Managing Particle Emission Locations

- [emitterShape](emittershape.md): The shape of the region of space where the system spawns new particles.
- [SCNParticleBirthLocation](../scnparticlebirthlocation.md): Options for the initial location of each emitted particle, used by the [birthLocation](birthlocation.md) property.
- [birthDirection](birthdirection.md): The possible initial directions for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthDirection](../scnparticlebirthdirection.md): Options for the initial direction of each emitted particle, used by the [birthDirection](birthdirection.md) property.
- [emittingDirection](emittingdirection.md): The initial direction for newly spawned particles. Animatable.
- [spreadingAngle](spreadingangle.md): The range, in degrees, of randomized initial particle directions. Animatable.

# birthLocation (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The possible locations for newly spawned particles, relative to the emitter shape.

## Declaration

```objectivec
@property (nonatomic) SCNParticleBirthLocation birthLocation;
```

<a id="Discussion"></a>

## Discussion

This property defines locations for spawning new particles relative to the geometry specified in the [emitterShape](emittershape.md) property. This property has no effect if the [emitterShape](emittershape.md) property value is `nil`.

For example, if the emitter shape is an [SCNBox](../scnbox.md) geometry and the birth location is [SCNParticleBirthLocationVertex](../scnparticlebirthlocation/vertex.md), new particles may randomly spawn at any of the eight corners of the box.

The default value is [SCNParticleBirthLocationSurface](../scnparticlebirthlocation/surface.md), specifying that new particles spawn at random locations along the surface of the [emitterShape](emittershape.md) geometry. For possible values, see [SCNParticleBirthLocation](../scnparticlebirthlocation.md).

## See Also

### Managing Particle Emission Locations

- [emitterShape](emittershape.md): The shape of the region of space where the system spawns new particles.
- [SCNParticleBirthLocation](../scnparticlebirthlocation.md): Options for the initial location of each emitted particle, used by the [birthLocation](birthlocation.md) property.
- [birthDirection](birthdirection.md): The possible initial directions for newly spawned particles, relative to the emitter shape.
- [SCNParticleBirthDirection](../scnparticlebirthdirection.md): Options for the initial direction of each emitted particle, used by the [birthDirection](birthdirection.md) property.
- [emittingDirection](emittingdirection.md): The initial direction for newly spawned particles. Animatable.
- [spreadingAngle](spreadingangle.md): The range, in degrees, of randomized initial particle directions. Animatable.
